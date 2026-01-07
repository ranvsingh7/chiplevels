import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/chiplevels';

async function seedAdminUser() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI);
    // console.log('Connected to MongoDB');

    // Import User model after connection
    const { User } = await import('../app/lib/models/User');

    // Check if admin user already exists
    const existingAdmin = await User.findOne({ role: 'admin' });
    
    if (existingAdmin) {
      // console.log('Admin user already exists');
      return;
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash('admin123', saltRounds);

    // Create admin user
    const adminUser = new User({
      email: 'admin@chiplevels.com',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin',
    });

    await adminUser.save();
    // console.log('Admin user created successfully');
    // console.log('Email: admin@chiplevels.com');
    // console.log('Password: admin123');

  } catch (error) {
    console.error('Error seeding admin user:', error);
  } finally {
    await mongoose.disconnect();
    // console.log('Disconnected from MongoDB');
  }
}

// Run seeding
seedAdminUser();
