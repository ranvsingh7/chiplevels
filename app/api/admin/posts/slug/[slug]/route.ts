import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/app/lib/db';
import { BlogPost } from '@/app/lib/models/BlogPost';
import { getTokenFromHeader, verifyToken } from '@/app/lib/auth';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    // Verify authentication
    const token = getTokenFromHeader(request.headers.get('authorization'));
    if (!token) {
      return NextResponse.json(
        { error: 'Access token required' },
        { status: 401 }
      );
    }

    // Verify token and check if user is admin
    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json(
        { error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    await connectDB();

    const { slug } = await params;

    // Try to find by ID first (frontend uses IDs in URLs)
    let post = null;
    if (mongoose.Types.ObjectId.isValid(slug)) {
      post = await BlogPost.findById(slug);
    }
    
    // If not found by ID, try finding by slug (for backwards compatibility)
    if (!post) {
      post = await BlogPost.findOne({ slug });
    }

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ post });

  } catch (error) {
    console.error('Get post by slug error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
