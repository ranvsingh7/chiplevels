import connectDB from './db';
import { User } from './models/User';
import { hashPassword } from './auth';

export async function seedAdminUser() {
  try {
    await connectDB();

    // Check if admin user already exists
    const existingAdmin = await User.findOne({ role: 'admin' });
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    // Create admin user
    const adminPassword = await hashPassword('admin123');
    const adminUser = new User({
      email: 'admin@chiplevels.com',
      password: adminPassword,
      name: 'Admin User',
      role: 'admin',
    });

    await adminUser.save();
    console.log('Admin user created successfully');
  } catch (error) {
    console.error('Error seeding admin user:', error);
  }
}

// Run seeding if this file is executed directly
if (require.main === module) {
  seedAdminUser().then(() => process.exit(0));
}
