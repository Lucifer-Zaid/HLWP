
import { notFound } from "next/navigation";
import GoBackButton from "@/app/components/GoBackButton";
interface Post {
    title: string;
    content: string;
    date: string;
    featuredImage?: {
        node: {
            sourceUrl: string;
        };
    };
}

export default async function BlogDetail({ params }: { params: { slug: string } }) {

    const { slug } = await params
    const endpoint = process.env.NEXT_PUBLIC_Wordpress_Url 
    // ?? "http://localhost:3000/graphql";

    if (!endpoint) {
        throw new Error("WordPress URL is not defined in the environment variables.");
    }

    const query = `
        query BlogPost($slug: String!) {
            postBy(slug: $slug) {
                title
                content
                date
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
            }
        }
    `;

    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query, variables: { slug } }),
        next: { revalidate: 60 }, // Optional ISR (revalidate every 60 seconds)
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch post: ${response.statusText}`);
    }

    const result = await response.json();
    const post: Post | null = result.data?.postBy;

    if (!post) {
        notFound(); // Render a 404 page if the post is not found
    }

    return (
        <div className="container mx-auto p-4">
            <GoBackButton/>

            {/* Blog Details */}
            <h1 className="text-4xl text-amber-700 mb-4">{post.title}</h1>
            <p className="text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
            {post.featuredImage && (
                <img
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.title}
                    className="my-4"
                />
            )}
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
    );
}
