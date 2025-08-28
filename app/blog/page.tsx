'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  tags: string[];
  views: number;
  featuredImage?: string;
}

interface BlogResponse {
  posts?: BlogPost[];
  pagination?: {
    currentPage: number;
    totalPages: number;
    totalPosts: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
  };
  error?: string;
}

const categories = ["All", "Hardware", "Networking", "Mobile", "Software"];

export default function BlogPage() {
  // Demo blog posts data
  const demoPosts: BlogPost[] = [
    {
      _id: '1',
      title: 'Latest RTX 4090 vs RTX 4080: Performance Deep Dive',
      slug: 'rtx-4090-vs-rtx-4080-performance-deep-dive',
      excerpt: 'We compare the flagship graphics cards in real-world gaming scenarios, synthetic benchmarks, and power efficiency tests. Discover which GPU delivers the best value for your gaming setup.',
      category: 'Hardware',
      author: 'Alex Chen',
      publishedAt: new Date('2024-12-15').toISOString(),
      tags: ['GPU', 'Gaming', 'Performance', 'RTX', 'Graphics'],
      views: 1247,
      featuredImage: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f7?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80'
    },
    {
      _id: '2',
      title: '5G Network Security: What You Need to Know in 2024',
      slug: '5g-network-security-2024-guide',
      excerpt: 'Understanding the security implications of 5G networks and how to protect your devices in the new era of connectivity. Learn about the latest threats and protection methods.',
      category: 'Networking',
      author: 'Sarah Johnson',
      publishedAt: new Date('2024-12-12').toISOString(),
      tags: ['5G', 'Security', 'Networking', 'Mobile', 'Cybersecurity'],
      views: 892,
      featuredImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80'
    },
    {
      _id: '3',
      title: 'iOS 18 vs Android 15: Feature Comparison & Analysis',
      slug: 'ios-18-vs-android-15-comparison',
      excerpt: 'A comprehensive look at the latest mobile operating systems and their new features, performance improvements, and user experience enhancements.',
      category: 'Mobile',
      author: 'Mike Rodriguez',
      publishedAt: new Date('2024-12-10').toISOString(),
      tags: ['iOS', 'Android', 'Mobile', 'Operating System', 'Smartphones'],
      views: 1563,
      featuredImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80'
    },
    {
      _id: '4',
      title: 'Building Scalable Web Applications with Next.js 15',
      slug: 'nextjs-15-scalable-web-applications',
      excerpt: 'Explore the new features in Next.js 15 and learn how to build high-performance, scalable web applications with modern React patterns.',
      category: 'Software',
      author: 'David Kim',
      publishedAt: new Date('2024-12-08').toISOString(),
      tags: ['Next.js', 'Web Development', 'React', 'Performance', 'JavaScript'],
      views: 743,
      featuredImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80'
    },
    {
      _id: '5',
      title: 'SSD vs HDD: Storage Solutions for 2024',
      slug: 'ssd-vs-hdd-storage-solutions-2024',
      excerpt: 'Compare different storage solutions and understand which type of drive is best for your specific use case. Performance, reliability, and cost analysis.',
      category: 'Hardware',
      author: 'Lisa Wang',
      publishedAt: new Date('2024-12-05').toISOString(),
      tags: ['Storage', 'SSD', 'HDD', 'Performance', 'Hardware'],
      views: 1128,
      featuredImage: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd912?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80'
    },
    {
      _id: '6',
      title: 'WiFi 7: The Future of Wireless Connectivity',
      slug: 'wifi-7-future-wireless-connectivity',
      excerpt: 'Discover the revolutionary features of WiFi 7, including increased bandwidth, lower latency, and improved network efficiency for modern homes and offices.',
      category: 'Networking',
      author: 'Robert Chen',
      publishedAt: new Date('2024-12-03').toISOString(),
      tags: ['WiFi 7', 'Wireless', 'Networking', 'Technology', 'Internet'],
      views: 967,
      featuredImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80'
    },
    {
      _id: '7',
      title: 'Machine Learning in Mobile Apps: A Developer\'s Guide',
      slug: 'machine-learning-mobile-apps-developer-guide',
      excerpt: 'Learn how to integrate machine learning capabilities into your mobile applications. From basic implementations to advanced AI features.',
      category: 'Software',
      author: 'Emma Thompson',
      publishedAt: new Date('2024-11-30').toISOString(),
      tags: ['Machine Learning', 'Mobile', 'AI', 'Development', 'Apps'],
      views: 654,
      featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80'
    },
    {
      _id: '8',
      title: 'Gaming Monitor Buying Guide: 2024 Edition',
      slug: 'gaming-monitor-buying-guide-2024',
      excerpt: 'Everything you need to know about choosing the perfect gaming monitor. Resolution, refresh rate, response time, and panel technology explained.',
      category: 'Hardware',
      author: 'James Wilson',
      publishedAt: new Date('2024-11-28').toISOString(),
      tags: ['Monitor', 'Gaming', 'Hardware', 'Display', 'Technology'],
      views: 1432,
      featuredImage: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const [posts, setPosts] = useState<BlogPost[]>(demoPosts);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [pagination, setPagination] = useState<BlogResponse['pagination'] | null>({
    currentPage: 1,
    totalPages: 1,
    totalPosts: demoPosts.length,
    hasNextPage: false,
    hasPrevPage: false,
    limit: 10
  });
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch blog posts
  const fetchPosts = async (page = 1, category = selectedCategory, search = searchTerm) => {
    try {
      setLoading(true);
      
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '10'
      });

      if (category && category !== 'All') {
        params.append('category', category.toLowerCase());
      }

      if (search) {
        params.append('search', search);
      }

      const response = await fetch(`/api/blog/posts?${params}`);
      const data: BlogResponse = await response.json();

      if (response.ok && data.posts && data.pagination) {
        setPosts(data.posts);
        setPagination(data.pagination);
        setCurrentPage(page);
      } else {
        console.error('Failed to fetch posts:', data.error);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchPosts(1, selectedCategory, searchTerm);
  };

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    fetchPosts(1, category, searchTerm);
  };

  // Handle pagination
  const handlePageChange = (page: number) => {
    fetchPosts(page, selectedCategory, searchTerm);
  };

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
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
            <form onSubmit={handleSearch} className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
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
            </form>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-slate-600 dark:text-slate-400">Loading posts...</p>
          </div>
        )}

        {/* Blog Posts Grid */}
        {!loading && posts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              No posts found
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              {searchTerm || selectedCategory !== 'All' 
                ? 'Try adjusting your search or category filter'
                : 'Check back soon for new content!'
              }
            </p>
          </div>
        )}

        {!loading && posts.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {posts.map((post) => (
                <Link key={post._id} href={`/blog/${post.slug}`}>
                  <article
                    className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer h-full flex flex-col"
                  >
                  {/* Featured Image */}
                  {post.featuredImage ? (
                    <div className="h-48 relative overflow-hidden">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
                      <div className="text-4xl opacity-50">
                        {post.category === 'Hardware' && '🖥️'}
                        {post.category === 'Networking' && '🌐'}
                        {post.category === 'Mobile' && '📱'}
                        {post.category === 'Software' && '💻'}
                      </div>
                    </div>
                  )}

                  <div className="p-6 flex-1 flex flex-col">
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3 w-max">
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </span>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mt-auto">
                      <div className="flex items-center space-x-4">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>{post.views}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </article>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {pagination && pagination.totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={!pagination.hasPrevPage}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600"
                >
                  Previous
                </button>

                {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      page === currentPage
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={!pagination.hasNextPage}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
