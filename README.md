# ChipLevels - Tech Blog & Hardware Reviews

A modern, responsive tech blog built with Next.js 15, featuring computer hardware, networking, mobile, and software content with an admin panel for content management.

## 🚀 Features

### User Experience
- **Modern Design**: Ultra-high quality UI with gradient backgrounds and smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Dark Mode Support**: Automatic theme switching based on system preferences
- **Fast Performance**: Built with Next.js 15 and optimized for speed

### Content Management
- **Admin Panel**: Secure login system for content creators
- **Blog Management**: Create, edit, and delete blog posts
- **Category Organization**: Organized content by tech categories
- **Rich Content**: Support for markdown content and tags

### Tech Categories
- **Hardware**: Computer components, GPUs, CPUs, storage solutions
- **Networking**: WiFi, 5G, routers, network security
- **Mobile**: Smartphones, tablets, mobile operating systems
- **Software**: Apps, operating systems, development tools

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Authentication**: NextAuth.js (ready for implementation)
- **Database**: MongoDB with Mongoose (ready for implementation)
- **Forms**: React Hook Form
- **Markdown**: React Markdown with remark-gfm
- **Icons**: Custom SVG icons and emojis
- **Date Handling**: date-fns

## 📁 Project Structure

```
chiplevels/
├── app/
│   ├── admin/           # Admin panel pages
│   ├── blog/            # Blog listing and detail pages
│   ├── categories/      # Category-specific pages
│   ├── components/      # Reusable UI components
│   ├── lib/            # Utility functions
│   ├── models/         # Database models (ready for implementation)
│   ├── api/            # API routes (ready for implementation)
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── public/              # Static assets
├── package.json         # Dependencies
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd chiplevels
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Authentication Setup

The application now includes a complete authentication system with JWT tokens and MongoDB integration.

#### 1. Environment Setup
Create a `.env.local` file in the root directory:
```bash
# Copy the example file
cp env.example .env.local

# Edit .env.local with your values
MONGODB_URI=mongodb://localhost:27017/chiplevels
JWT_SECRET=your-super-secret-jwt-key-change-in-production
```

#### 2. Database Setup
Make sure MongoDB is running on your system, then seed the initial admin user:
```bash
npm run seed
```

#### 3. Admin Access
- Navigate to `/admin`
- Use the seeded credentials:
  - Email: `admin@chiplevels.com`
  - Password: `admin123`

#### 4. API Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Token verification

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue to Purple gradients (#3B82F6 to #8B5CF6)
- **Secondary**: Slate grays for text and backgrounds
- **Accents**: Green, Orange, and Red for category differentiation

### Typography
- **Fonts**: Geist Sans (primary) and Geist Mono (code)
- **Hierarchy**: Clear heading levels with proper spacing
- **Readability**: Optimized line heights and contrast ratios

### Components
- **Navigation**: Sticky header with mobile-responsive menu
- **Cards**: Hover effects and smooth transitions
- **Buttons**: Gradient backgrounds with hover states
- **Forms**: Clean inputs with focus states

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach
- Touch-friendly interface
- Optimized navigation for small screens
- Responsive grid layouts
- Proper spacing for mobile devices

## 🔧 Customization

### Styling
- Modify `app/globals.css` for global styles
- Update Tailwind configuration in `tailwind.config.js`
- Customize component styles in individual component files

### Content
- Update mock data in component files
- Modify category information in `app/categories/[category]/page.tsx`
- Customize blog post content in `app/blog/[id]/page.tsx`

### Branding
- Update logo and colors in Navigation and Footer components
- Modify metadata in `app/layout.tsx`
- Customize hero section content on homepage

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Compatible with Next.js static export
- **AWS**: Deploy to S3 + CloudFront
- **Docker**: Containerize the application

## 🔮 Future Enhancements

### Planned Features
- **Real Database**: MongoDB integration for dynamic content
- **Authentication**: NextAuth.js implementation
- **CMS Integration**: Rich text editor for blog posts
- **Image Upload**: Cloud storage for blog images
- **Search**: Full-text search functionality
- **Comments**: User interaction system
- **Analytics**: Page views and user tracking
- **SEO**: Advanced meta tags and sitemap

### Technical Improvements
- **API Routes**: RESTful API for content management
- **Caching**: Redis for improved performance
- **Testing**: Jest and React Testing Library
- **CI/CD**: Automated testing and deployment
- **Monitoring**: Error tracking and performance monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Vercel**: For hosting and deployment solutions
- **Tech Community**: For inspiration and feedback

## 📞 Support

If you have any questions or need help:
- Create an issue in the GitHub repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ by the ChipLevels Team**
