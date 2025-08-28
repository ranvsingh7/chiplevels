import mongoose from 'mongoose';

export interface IUser {
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
}, {
  timestamps: true,
});

// Additional indexes can be added here if needed

// Prevent password from being returned in queries
userSchema.set('toJSON', {
  transform: (doc, ret) => {
    if (ret && typeof ret === 'object' && 'password' in ret) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (ret as any).password;
    }
    return ret;
  },
});

export const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);
