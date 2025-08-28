import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/app/lib/db';
import { BlogPost } from '@/app/lib/models/BlogPost';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();

    const { slug } = await params;

    // Find the blog post by slug
    const post = await BlogPost.findOne({ 
      slug, 
      status: 'published' 
    });

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Check if this is a unique visit using cookies
    const cookieName = `viewed_${post._id}`;
    const hasViewed = request.cookies.get(cookieName);
    
    if (!hasViewed) {
      // Only increment view count for unique visits
      await BlogPost.findByIdAndUpdate(post._id, {
        $inc: { views: 1 }
      });
      
      // Set a cookie to mark this post as viewed (expires in 24 hours)
      const response = NextResponse.json({ post: post.toObject() });
      response.cookies.set(cookieName, 'true', {
        maxAge: 60 * 60 * 24, // 24 hours
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
      });
      
      return response;
    }

    // Convert to plain object for response
    const postData = post.toObject();

    return NextResponse.json({ post: postData });

  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}
