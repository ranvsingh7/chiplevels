'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { notFound } from 'next/navigation';

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

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

// Category metadata
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

export default function CategoryPage({ params }: CategoryPageProps) {
  const [category, setCategory] = useState<string>('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      const categoryParam = resolvedParams.category.toLowerCase();
      
      // Validate category
      if (!categoryData[categoryParam as keyof typeof categoryData]) {
        notFound();
      }
      
      setCategory(categoryParam);
      fetchPosts(categoryParam);
    };
    
    resolveParams();
  }, [params]);

  const fetchPosts = async (categoryParam: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/api/blog/posts?category=${categoryParam}&limit=50`);
      const data = await response.json();
      
      if (response.ok && data.posts) {
        setPosts(data.posts);
      } else {
        setError('Failed to load posts');
      }
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  if (!category || loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading posts...</p>
        </div>
      </div>
    );
  }

  const categoryInfo = categoryData[category as keyof typeof categoryData];
  
  if (!categoryInfo) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
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
        {error ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Error Loading Posts
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {error}
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Browse All Posts
            </Link>
          </div>
        ) : posts.length > 0 ? (
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
                  key={post._id}
                  className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
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
                    <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center">
                      <div className="text-4xl opacity-50">
                        {category === 'hardware' && '🖥️'}
                        {category === 'networking' && '🌐'}
                        {category === 'mobile' && '📱'}
                        {category === 'software' && '💻'}
                      </div>
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 bg-gradient-to-r ${categoryInfo.color} bg-opacity-20 text-slate-800 dark:text-white text-xs font-medium rounded-full`}>
                        {categoryInfo.name}
                      </span>
                      <div className="flex items-center space-x-1 text-slate-500 dark:text-slate-400 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>{post.views || 0}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-md">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        By {post.author}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {formatDistanceToNow(new Date(post.publishedAt), { addSuffix: true })}
                      </span>
                    </div>

                    <div className="mt-auto">
                      <Link
                        href={`/blog/${post._id}`}
                        className="inline-block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                      >
                        Read More
                      </Link>
                    </div>
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
