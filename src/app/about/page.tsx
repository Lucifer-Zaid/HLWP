export default async function Page() {
    return (
      <div>
        <h2 className="text-xl mb-4">About Us</h2>
        <p className="mb-6">This is H_l_WP — a streamlined Next.js WordPress Headless website designed for speed and flexibility. By leveraging the power of the WordPress API, H_l_WP seamlessly fetches and displays content, providing a modern front-end experience with the robust back-end capabilities of WordPress.</p>
        <p className="mb-6">With H_l_WP, you get the best of both worlds: the ease of content management in WordPress and the performance optimization and developer-friendly features of Next.js. Whether you're building a blog, a portfolio, or a dynamic content site, H_l_WP ensures fast load times, excellent SEO, and a smooth user experience.</p>
        <p className="mb-6">This setup allows you to focus on creating engaging content while delivering it through a cutting-edge, headless architecture.</p>
  
        <div>
          <h2 className="text-lg mb-4">Project Specs</h2>
          <ul className="list-disc list-inside">
            <li>Next.js v15</li>
            <li>TailwindCSS</li>
            <li>WordPress API</li>
          </ul>
        </div>
      </div>
    );
  }