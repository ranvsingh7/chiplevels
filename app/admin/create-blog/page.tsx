'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'next/navigation';
import Select, { StylesConfig } from 'react-select';

export default function CreateBlogPage() {
  const { user, token, isLoading } = useAuth();
  const router = useRouter();
  
  // Detect dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check if user prefers dark mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  

  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'hardware',
    tags: [] as string[],
    featuredImage: '',
    status: 'draft'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [contentLength, setContentLength] = useState(0);

  // Select options
  const categoryOptions = [
    { value: 'hardware', label: 'Hardware' },
    { value: 'networking', label: 'Networking' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'software', label: 'Software' }
  ];

  const statusOptions = [
    { value: 'draft', label: 'Draft' },
    { value: 'published', label: 'Published' }
  ];

  // Custom select styles
  const selectStyles: StylesConfig<{ value: string; label: string }, false> = {
    control: (base, state) => ({
      ...base,
      minHeight: '64px',
      borderRadius: '12px',
      border: state.isFocused 
        ? '2px solid #3b82f6' 
        : '1px solid #cbd5e1',
      boxShadow: state.isFocused 
        ? '0 0 0 3px rgba(59, 130, 246, 0.1)' 
        : 'none',
      backgroundColor: '#ffffff',
      '&:hover': {
        borderColor: '#3b82f6',
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.15)',
      },
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected 
        ? '#3b82f6' 
        : state.isFocused 
        ? '#eff6ff' 
        : 'transparent',
      color: state.isSelected 
        ? '#ffffff' 
        : '#1f2937',
      padding: '16px 20px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: state.isSelected ? '600' : '500',
      transition: 'all 0.2s ease',
      '&:active': {
        backgroundColor: '#3b82f6',
        transform: 'scale(0.98)',
      },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: '16px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      border: '1px solid #e5e7eb',
      overflow: 'hidden',
      animation: 'slideDown 0.2s ease-out',
    }),
    singleValue: (base) => ({
      ...base,
      color: '#1f2937',
      fontSize: '18px',
      fontWeight: '600',
    }),
    placeholder: (base) => ({
      ...base,
      color: '#9ca3af',
      fontSize: '18px',
      fontWeight: '500',
    }),
    input: (base) => ({
      ...base,
      fontSize: '18px',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: '#6b7280',
      '&:hover': {
        color: '#3b82f6',
      },
      transition: 'color 0.2s ease',
    }),
  };

  // Dark mode select styles
  const darkSelectStyles: StylesConfig<{ value: string; label: string }, false> = {
    control: (base, state) => ({
      ...base,
      minHeight: '64px',
      borderRadius: '12px',
      border: state.isFocused 
        ? '2px solid #60a5fa' 
        : '1px solid #475569',
      boxShadow: state.isFocused 
        ? '0 0 0 3px rgba(96, 165, 250, 0.1)' 
        : 'none',
      backgroundColor: '#334155',
      '&:hover': {
        borderColor: '#60a5fa',
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 12px rgba(96, 165, 250, 0.2)',
      },
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected 
        ? '#60a5fa' 
        : state.isFocused 
        ? '#1e3a8a' 
        : 'transparent',
      color: state.isSelected 
        ? '#ffffff' 
        : '#e2e8f0',
      padding: '16px 20px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: state.isSelected ? '600' : '500',
      transition: 'all 0.2s ease',
      '&:active': {
        backgroundColor: '#60a5fa',
        transform: 'scale(0.98)',
      },
    }),
    menu: (base) => ({
      ...base,
      borderRadius: '16px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
      border: '1px solid #475569',
      overflow: 'hidden',
      backgroundColor: '#334155',
      animation: 'slideDown 0.2s ease-out',
    }),
    singleValue: (base) => ({
      ...base,
      color: '#e2e8f0',
      fontSize: '18px',
      fontWeight: '600',
    }),
    placeholder: (base) => ({
      ...base,
      color: '#94a3b8',
      fontSize: '18px',
      fontWeight: '500',
    }),
    input: (base) => ({
      ...base,
      fontSize: '18px',
      color: '#e2e8f0',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: '#94a3b8',
      '&:hover': {
        color: '#60a5fa',
      },
      transition: 'color 0.2s ease',
    }),
  };

  // Redirect if not authenticated
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user || !token) {
    router.push('/admin');
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Update content length for content field
    if (name === 'content') {
      setContentLength(value.length);
    }
  };

  const handleTagInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value.trim()) {
      e.preventDefault();
      const newTag = e.currentTarget.value.trim();
      if (!formData.tags.includes(newTag)) {
        setFormData(prev => ({
          ...prev,
          tags: [...prev.tags, newTag]
        }));
        e.currentTarget.value = '';
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleCategoryChange = (selectedOption: { value: string; label: string } | null) => {
    if (selectedOption) {
      setFormData(prev => ({
        ...prev,
        category: selectedOption.value
      }));
    }
  };

  const handleStatusChange = (selectedOption: { value: string; label: string } | null) => {
    if (selectedOption) {
      setFormData(prev => ({
        ...prev,
        status: selectedOption.value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/blog/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Blog post created successfully!');
        // Reset form
        setFormData({
          title: '',
          excerpt: '',
          content: '',
          category: 'hardware',
          tags: [],
          featuredImage: '',
          status: 'draft'
        });
        setContentLength(0);
      } else {
        const errorMessage = data.error || data.details || 'Failed to create blog post';
        setMessage(`Error: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Blog creation error:', error);
      setMessage('Network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

    return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20" style={{ isolation: 'isolate' }}>

      {/* Header */}
              <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-20 z-[200]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                Create New Blog Post
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/admin')}
                className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-[50]">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 relative z-[50]">
          <form onSubmit={handleSubmit} className="space-y-8 relative z-[50]">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Blog Post Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-4 text-lg border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-200"
                placeholder="Enter your blog post title..."
                maxLength={200}
              />
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {formData.title.length}/200 characters
              </p>
            </div>

            {/* Category and Status Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="block text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Category *
                </label>
                <Select
                  id="category"
                  options={categoryOptions}
                  value={categoryOptions.find(option => option.value === formData.category)}
                  onChange={handleCategoryChange}
                  styles={isDarkMode ? darkSelectStyles : selectStyles}
                  placeholder="Select a category..."
                  isSearchable={false}
                  className="text-lg"
                  classNamePrefix="react-select"
                />
              </div>

              <div>
                <label htmlFor="status" className="block text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Status
                </label>
                <Select
                  id="status"
                  options={statusOptions}
                  value={statusOptions.find(option => option.value === formData.status)}
                  onChange={handleStatusChange}
                  styles={isDarkMode ? darkSelectStyles : selectStyles}
                  placeholder="Select status..."
                  isSearchable={false}
                  className="text-lg"
                  classNamePrefix="react-select"
                />
              </div>
            </div>

            {/* Excerpt */}
            <div>
              <label htmlFor="excerpt" className="block text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Excerpt *
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                required
                rows={3}
                value={formData.excerpt}
                onChange={handleInputChange}
                className="w-full px-4 py-4 text-lg border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-200 resize-none"
                placeholder="Write a brief summary of your blog post..."
                maxLength={300}
              />
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {formData.excerpt.length}/300 characters
              </p>
            </div>

            {/* Tags and Read Time Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="tags" className="block text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  Tags
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    onKeyDown={handleTagInput}
                    className="w-full px-4 py-4 text-lg border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-200 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10"
                    placeholder="Type a tag and press Enter"
                  />
                  {/* Tags Display */}
                  {formData.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {formData.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  Type a tag and press Enter to add it
                </p>
              </div>
            </div>

            {/* Featured Image */}
            <div>
              <label htmlFor="featuredImage" className="block text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Featured Image URL
              </label>
              <input
                type="url"
                id="featuredImage"
                name="featuredImage"
                value={formData.featuredImage}
                onChange={handleInputChange}
                className="w-full px-4 py-4 text-lg border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-200"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Content */}
            <div>
              <label htmlFor="content" className="block text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Blog Content *
              </label>
              <textarea
                id="content"
                name="content"
                required
                rows={15}
                value={formData.content}
                onChange={handleInputChange}
                className="w-full px-4 py-4 text-lg border border-slate-300 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white transition-all duration-200 resize-none font-mono"
                placeholder="Write your blog post content here... You can use Markdown formatting."
              />
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {contentLength} characters | Supports Markdown formatting
              </p>
            </div>

            {/* Message Display */}
            {message && (
              <div className={`text-center p-4 rounded-xl ${
                message.includes('successfully') 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800' 
                  : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
              }`}>
                {message}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 text-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Creating Blog Post...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Create Blog Post
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
