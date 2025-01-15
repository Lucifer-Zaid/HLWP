export default async function LatestPost() {
    const endpoint = process.env.NEXT_PUBLIC_Wordpress_Url ;
    // ?? "http://localhost:3000/graphql"

    if (!endpoint) {
        throw new Error("WordPress URL is not defined in the environment variables.");
    }

    const query = `
        query LatestPost {
            posts(first: 1, where: { orderby: { field: DATE, order: DESC } }) {
                nodes {
                    id
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
        }
    `;

    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
        next: { revalidate: 60 }, // Optional ISR
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const result = await response.json();
    const post = result.data?.posts?.nodes[0];

    if (!post) {
        return (
            <div className="mb-8 text-lg text-amber-700">
                <p>No latest post found.</p>
            </div>
        );
    }

    return (
        <div className="border rounded-lg p-4 shadow-md">
            <h1 className="text-center text-3xl text-amber-700">Latest Post</h1>
            <h2 className="text-2xl text-amber-700">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-4">{new Date(post.date).toLocaleDateString()}</p>
            {post.featuredImage && (
                <img
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.title}
                    className="rounded-md my-4"
                />
            )}
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
    );
}
