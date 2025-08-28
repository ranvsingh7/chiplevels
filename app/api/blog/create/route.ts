import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import { BlogPost } from '@/app/lib/models/BlogPost';
import { verifyToken, getTokenFromHeader } from '@/app/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // Verify authentication
    const authHeader = request.headers.get('authorization');
    const token = getTokenFromHeader(authHeader);

    if (!token) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    // Check if user is admin
    if (decoded.role !== 'admin') {
      return NextResponse.json(
        { error: 'Admin access required' },
        { status: 403 }
      );
    }

    await connectDB();

    const {
      title,
      excerpt,
      content,
      category,
      tags,
      featuredImage,
      status = 'draft'
    } = await request.json();

    // Validation
    if (!title || !excerpt || !content || !category) {
      return NextResponse.json(
        { error: 'Title, excerpt, content, and category are required' },
        { status: 400 }
      );
    }

    // Validate category
    const validCategories = ['hardware', 'networking', 'mobile', 'software'];
    if (!validCategories.includes(category)) {
      return NextResponse.json(
        { error: 'Invalid category' },
        { status: 400 }
      );
    }

    // Generate slug from title
    const generateSlug = (title: string) => {
      return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
    };

    // Create blog post
    const blogPost = new BlogPost({
      title,
      slug: generateSlug(title),
      excerpt,
      content,
      author: decoded.name || 'Admin User',
      category,
      tags: tags || [],
      featuredImage,
      status,
      publishedAt: status === 'published' ? new Date() : undefined,
    });

    await blogPost.save();

    return NextResponse.json({
      message: 'Blog post created successfully',
      post: blogPost,
    }, { status: 201 });

  } catch (error) {
    console.error('Blog creation error:', error);
    
    // Handle validation errors specifically
    if (error instanceof Error && error.message.includes('validation failed')) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.message },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
