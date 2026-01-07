'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'next/navigation';

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt?: string;
  createdAt: string;
  tags: string[];
  views: number;
  status: 'published' | 'draft';
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

export default function AdminDashboard() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'published' | 'draft'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState<BlogResponse['pagination'] | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    postId: string | null;
    postTitle: string;
  }>({
    isOpen: false,
    postId: null,
    postTitle: ''
  });

  // Redirect if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/signin');
    }
  }, [user, isLoading, router]);

  const fetchPosts = async (page = 1, status = selectedStatus, category = selectedCategory, search = searchTerm) => {
    try {
      setLoadingPosts(true);
      
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '12',
        status: status === 'all' ? 'all' : status,
        category: category === 'all' ? 'all' : category
      });

      if (search) {
        params.append('search', search);
      }

      const response = await fetch(`/api/admin/posts?${params}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });
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
      setLoadingPosts(false);
    }
  };

  const handleStatusChange = (status: 'all' | 'published' | 'draft') => {
    setSelectedStatus(status);
    setCurrentPage(1);
    fetchPosts(1, status, selectedCategory, searchTerm);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    fetchPosts(1, selectedStatus, category, searchTerm);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchPosts(1, selectedStatus, selectedCategory, searchTerm);
  };

  const handlePageChange = (page: number) => {
    fetchPosts(page, selectedStatus, selectedCategory, searchTerm);
  };

  const getStatusBadge = (status: string) => {
    if (status === 'published') {
      return (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-1.5"></span>
          Published
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-1.5"></span>
        Draft
      </span>
    );
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      hardware: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      networking: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      mobile: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
      software: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400';
  };

  const handleDeletePost = (postId: string, postTitle: string) => {
    setDeleteModal({
      isOpen: true,
      postId,
      postTitle
    });
  };

  const confirmDelete = async () => {
    if (!deleteModal.postId) return;

    try {
      const response = await fetch(`/api/admin/posts/${deleteModal.postId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });

      if (response.ok) {
        // Remove the deleted post from the list
        setPosts(posts.filter(post => post._id !== deleteModal.postId));
        // Refresh the posts to update pagination
        fetchPosts(currentPage, selectedStatus, selectedCategory, searchTerm);
        setDeleteModal({ isOpen: false, postId: null, postTitle: '' });
      } else {
        const data = await response.json();
        alert(`Failed to delete post: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post. Please try again.');
    }
  };

  const cancelDelete = () => {
    setDeleteModal({ isOpen: false, postId: null, postTitle: '' });
  };

  const handleToggleStatus = async (postId: string, newStatus: 'published' | 'draft') => {
    try {
      const response = await fetch(`/api/admin/posts/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({ 
          status: newStatus,
          publishedAt: newStatus === 'published' ? new Date() : undefined
        })
      });

      if (response.ok) {
        // Update the post status in the local state
        setPosts(posts.map(post => 
          post._id === postId 
            ? { ...post, status: newStatus, publishedAt: newStatus === 'published' ? new Date().toISOString() : undefined }
            : post
        ));
      } else {
        const data = await response.json();
        alert(`Failed to update status: ${data.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status. Please try again.');
    }
  };

  useEffect(() => {
    if (user) {
      fetchPosts();
    }
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                Admin Dashboard
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Manage your blog posts and content
              </p>
            </div>
            <Link
              href="/admin/create-blog"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>New Post</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Posts</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  {posts.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Published</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  {posts.filter(post => post.status === 'published').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-lg">
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Drafts</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  {posts.filter(post => post.status === 'draft').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
            <div className="flex items-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Views</p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  {posts.reduce((total, post) => total + post.views, 0)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex-1 max-w-md">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

            {/* Status Filter */}
            <div className="flex flex-wrap gap-2">
              {[
                { value: 'all', label: 'All Posts' },
                { value: 'published', label: 'Published' },
                { value: 'draft', label: 'Drafts' }
              ].map((status) => (
                <button
                  key={status.value}
                  onClick={() => handleStatusChange(status.value as 'all' | 'published' | 'draft')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedStatus === status.value
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  {status.label}
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {[
                { value: 'all', label: 'All Categories' },
                { value: 'hardware', label: 'Hardware' },
                { value: 'networking', label: 'Networking' },
                { value: 'mobile', label: 'Mobile' },
                { value: 'software', label: 'Software' }
              ].map((category) => (
                <button
                  key={category.value}
                  onClick={() => handleCategoryChange(category.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.value
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loadingPosts && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-slate-600 dark:text-slate-400">Loading posts...</p>
          </div>
        )}

        {/* Posts Grid */}
        {!loadingPosts && posts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              No posts found
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              {searchTerm || selectedCategory !== 'all' || selectedStatus !== 'all'
                ? 'Try adjusting your filters'
                : 'Create your first blog post to get started!'
              }
            </p>
          </div>
        )}

        {!loadingPosts && posts.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Featured Image */}
                  {post.featuredImage ? (
                    <div className="h-48 relative overflow-hidden">
                      {/* <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      /> */}
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                      <div className="text-4xl opacity-50">
                        {post.category === 'hardware' && '🖥️'}
                        {post.category === 'networking' && '🌐'}
                        {post.category === 'mobile' && '📱'}
                        {post.category === 'software' && '💻'}
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    {/* Status and Category */}
                    <div className="flex items-center justify-between mb-3">
                      {getStatusBadge(post.status)}
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>
                          {post.status === 'published' && post.publishedAt
                            ? new Date(post.publishedAt).toLocaleDateString()
                            : new Date(post.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>{post.views || 0}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
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

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                      <Link
                        href={`/blog/${post._id}`}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                      >
                        View Post
                      </Link>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleToggleStatus(post._id, post.status === 'published' ? 'draft' : 'published')}
                          className={`p-2 rounded-lg transition-colors duration-200 ${
                            post.status === 'published'
                              ? 'text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                              : 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 hover:bg-green-50 dark:hover:bg-green-900/20'
                          }`}
                          title={post.status === 'published' ? 'Unpublish' : 'Publish'}
                        >
                          {post.status === 'published' ? (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </button>
                        <Link
                          href={`/admin/edit-post/${post._id}`}
                          className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </Link>
                        <button 
                          onClick={() => handleDeletePost(post._id, post.title)}
                          className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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

      {/* Delete Confirmation Modal */}
      {deleteModal.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Delete Post
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Are you sure you want to delete &quot;<span className="font-semibold">{deleteModal.postTitle}</span>&quot;? This action cannot be undone.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={cancelDelete}
                className="flex-1 px-4 py-2 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
