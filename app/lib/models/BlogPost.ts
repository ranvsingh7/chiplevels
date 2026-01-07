import mongoose from 'mongoose';

export interface IBlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  publishedAt: Date;
  status: 'draft' | 'published';
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

const blogPostSchema = new mongoose.Schema<IBlogPost>({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200,
  },
  slug: {
    type: String,
    required: false, // Pre-save hook will always generate it from _id
    unique: true,
    index: true,
  },
  excerpt: {
    type: String,
    required: true,
    trim: true,
    maxlength: 300,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['hardware', 'networking', 'mobile', 'software'],
  },
  tags: [{
    type: String,
    trim: true,
  }],
  featuredImage: {
    type: String,
    trim: true,
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft',
  },
  views: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

// Additional indexes
blogPostSchema.index({ category: 1 });
blogPostSchema.index({ status: 1 });
blogPostSchema.index({ publishedAt: -1 });

// Set slug to unique ID
blogPostSchema.pre('save', function(next) {
  try {
    // Always set slug to the document's unique ID if it's missing
    if (!this.slug) {
      // Mongoose generates _id before pre-save hooks run
      // Use it directly to set the slug
      this.slug = this._id.toString();
    }
    next();
  } catch (error) {
    next(error as Error);
  }
});

export const BlogPost = mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', blogPostSchema);
