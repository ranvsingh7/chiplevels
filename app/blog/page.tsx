import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';

// Mock data for demonstration
const blogPosts = [
  {
    id: 1,
    title: "Latest RTX 4090 vs RTX 4080: Performance Deep Dive",
    excerpt: "We compare the flagship graphics cards in real-world gaming scenarios, synthetic benchmarks, and power efficiency tests. Discover which GPU offers the best value for your gaming setup.",
    category: "Hardware",
    author: "Tech Expert",
    publishedAt: new Date('2024-01-15'),
    readTime: "8 min read",
    tags: ["GPU", "Gaming", "Performance", "RTX"]
  },
  {
    id: 2,
    title: "5G Network Security: What You Need to Know",
    excerpt: "Understanding the security implications of 5G networks and how to protect your devices in the new era of connectivity. Learn about potential vulnerabilities and best practices.",
    category: "Networking",
    author: "Network Specialist",
    publishedAt: new Date('2024-01-12'),
    readTime: "6 min read",
    tags: ["5G", "Security", "Networking", "Mobile"]
  },
  {
    id: 3,
    title: "iOS 18 vs Android 15: Feature Comparison",
    excerpt: "A comprehensive look at the latest mobile operating systems and their new features, performance improvements, and user experience enhancements.",
    category: "Mobile",
    author: "Mobile Analyst",
    publishedAt: new Date('2024-01-10'),
    readTime: "10 min read",
    tags: ["iOS", "Android", "Mobile", "OS"]
  },
  {
    id: 4,
    title: "Building Scalable Web Applications with Next.js 15",
    excerpt: "Explore the new features in Next.js 15 and learn how to build high-performance, scalable web applications with the latest framework improvements.",
    category: "Software",
    author: "Developer Advocate",
    publishedAt: new Date('2024-01-08'),
    readTime: "12 min read",
    tags: ["Next.js", "Web Development", "React", "Performance"]
  },
  {
    id: 5,
    title: "SSD vs HDD: Storage Solutions for 2024",
    excerpt: "Compare different storage solutions and understand which type of drive is best for your specific use case, from gaming to professional workloads.",
    category: "Hardware",
    author: "Storage Expert",
    publishedAt: new Date('2024-01-05'),
    readTime: "7 min read",
    tags: ["Storage", "SSD", "HDD", "Performance"]
  },
  {
    id: 6,
    title: "WiFi 7: The Future of Wireless Connectivity",
    excerpt: "Discover the revolutionary features of WiFi 7, including increased bandwidth, lower latency, and improved reliability for next-generation devices.",
    category: "Networking",
    author: "Wireless Specialist",
    publishedAt: new Date('2024-01-03'),
    readTime: "9 min read",
    tags: ["WiFi 7", "Wireless", "Networking", "Technology"]
  }
];

const categories = ["All", "Hardware", "Networking", "Mobile", "Software"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              ChipLevels Blog
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Dive deep into the world of technology with our expert insights, reviews, and tutorials
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-3 pl-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    category === "All"
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                <span className="text-slate-500 dark:text-slate-400 text-sm">Image Placeholder</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    By {post.author}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {formatDistanceToNow(post.publishedAt, { addSuffix: true })}
                  </span>
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="mt-4 inline-block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Read More
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 disabled:opacity-50 disabled:cursor-not-allowed">
              Previous
            </button>
            <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
            <button className="px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">2</button>
            <button className="px-3 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">3</button>
            <button className="px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
