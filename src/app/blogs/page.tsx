import Link from "next/link";

interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    featuredImage?: {
        node: {
            sourceUrl: string;
        };
    };
}

export default async function Blogs() {
    const endpoint = process.env.NEXT_PUBLIC_Wordpress_Url ;
    // ?? "http://localhost:3000/graphql";

    if (!endpoint) {
        throw new Error("WordPress URL is not defined in the environment variables.");
    }

    const query = `
        query AllPosts {
            posts(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
                nodes {
                    id
                    title
                    slug
                    excerpt
                    date
                    featuredImage {
                        node {
                            sourceUrl
                        }
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
        body: JSON.stringify({ query }),
        next: { revalidate: 60 }, // ISR: Revalidate every 60 seconds
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    const result = await response.json();
    const posts: Post[] = result.data?.posts?.nodes || [];

    if (posts.length === 0) {
        return (
            <p className="text-center text-lg text-amber-700">
                No blogs available at the moment.
            </p>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-center font-bold text-4xl text-amber-700 mb-8">Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: Post) => (
                    <div key={post.id} className="border rounded-lg p-4 shadow-md">
                        {post.featuredImage && (
                            <Link href={`/blogs/${post.slug}`}>
                                <img
                                    src={post.featuredImage.node.sourceUrl}
                                    alt={post.title}
                                    className="rounded-md mb-4 mx-auto"
                                />
                            </Link>
                        )}
                        <Link href={`/blogs/${post.slug}`}>
                        
                            <h3 className="text-xl font-bold text-amber-700 hover:underline ">
                                {post.title}
                            </h3>
                        </Link>
                        <p className="text-sm text-gray-500 mb-4">
                            {new Date(post.date).toLocaleDateString()}
                        </p>
                        <div
                            className="text-gray-700"
                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        ></div>
                       <Link
                            href={`/blogs/${post.slug}`}
                            className="text-center text-white font-semibold mt-4 block bg-amber-700 py-3 px-4 flex items-center justify-center"
                        >
                            Read More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
