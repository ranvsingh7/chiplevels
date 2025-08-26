import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { notFound } from 'next/navigation';

// Mock data for demonstration
const categoryData = {
  hardware: {
    name: "Hardware",
    description: "Computer components, GPUs, CPUs, storage solutions, and more",
    icon: "🔧",
    color: "from-blue-500 to-cyan-500"
  },
  networking: {
    name: "Networking",
    description: "WiFi, 5G, routers, network security, and connectivity solutions",
    icon: "🌐",
    color: "from-green-500 to-emerald-500"
  },
  mobile: {
    name: "Mobile",
    description: "Smartphones, tablets, mobile operating systems, and mobile tech",
    icon: "📱",
    color: "from-purple-500 to-pink-500"
  },
  software: {
    name: "Software",
    description: "Apps, operating systems, development tools, and software solutions",
    icon: "💻",
    color: "from-orange-500 to-red-500"
  }
};

const postsByCategory = {
  hardware: [
    {
      id: 1,
      title: "Latest RTX 4090 vs RTX 4080: Performance Deep Dive",
      excerpt: "We compare the flagship graphics cards in real-world gaming scenarios, synthetic benchmarks, and power efficiency tests.",
      author: "Tech Expert",
      publishedAt: new Date('2024-01-15'),
      readTime: "8 min read",
      tags: ["GPU", "Gaming", "Performance", "RTX"]
    },
    {
      id: 5,
      title: "SSD vs HDD: Storage Solutions for 2024",
      excerpt: "Compare different storage solutions and understand which type of drive is best for your specific use case.",
      author: "Storage Expert",
      publishedAt: new Date('2024-01-05'),
      readTime: "7 min read",
      tags: ["Storage", "SSD", "HDD", "Performance"]
    }
  ],
  networking: [
    {
      id: 2,
      title: "5G Network Security: What You Need to Know",
      excerpt: "Understanding the security implications of 5G networks and how to protect your devices.",
      author: "Network Specialist",
      publishedAt: new Date('2024-01-12'),
      readTime: "6 min read",
      tags: ["5G", "Security", "Networking", "Mobile"]
    },
    {
      id: 6,
      title: "WiFi 7: The Future of Wireless Connectivity",
      excerpt: "Discover the revolutionary features of WiFi 7, including increased bandwidth and lower latency.",
      author: "Wireless Specialist",
      publishedAt: new Date('2024-01-03'),
      readTime: "9 min read",
      tags: ["WiFi 7", "Wireless", "Networking", "Technology"]
    }
  ],
  mobile: [
    {
      id: 3,
      title: "iOS 18 vs Android 15: Feature Comparison",
      excerpt: "A comprehensive look at the latest mobile operating systems and their new features.",
      author: "Mobile Analyst",
      publishedAt: new Date('2024-01-10'),
      readTime: "10 min read",
      tags: ["iOS", "Android", "Mobile", "OS"]
    }
  ],
  software: [
    {
      id: 4,
      title: "Building Scalable Web Applications with Next.js 15",
      excerpt: "Explore the new features in Next.js 15 and learn how to build high-performance applications.",
      author: "Developer Advocate",
      publishedAt: new Date('2024-01-08'),
      readTime: "12 min read",
      tags: ["Next.js", "Web Development", "React", "Performance"]
    }
  ]
};

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category as keyof typeof categoryData;
  
  if (!categoryData[category]) {
    notFound();
  }

  const categoryInfo = categoryData[category];
  const posts = postsByCategory[category] || [];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Category Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${categoryInfo.color} rounded-2xl mb-6 text-4xl`}>
              {categoryInfo.icon}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {categoryInfo.name}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {categoryInfo.description}
            </p>
            <div className="mt-6">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Posts
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {posts.length > 0 ? (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {posts.length} Article{posts.length !== 1 ? 's' : ''} in {categoryInfo.name}
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Explore our latest insights and reviews in {categoryInfo.name.toLowerCase()}
              </p>
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                    <span className="text-slate-500 dark:text-slate-400 text-sm">Image Placeholder</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 bg-gradient-to-r ${categoryInfo.color} bg-opacity-20 text-slate-800 dark:text-white text-xs font-medium rounded-full`}>
                        {categoryInfo.name}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
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
          </>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              No posts found in {categoryInfo.name}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              We&apos;re working on creating amazing content for this category. Check back soon!
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Browse All Posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
