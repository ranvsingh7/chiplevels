import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';

// Mock data for demonstration - in real app this would come from your database
// const featuredPosts = [
//   {
//     id: 1,
//     title: "Latest RTX 4090 vs RTX 4080: Performance Deep Dive",
//     excerpt: "We compare the flagship graphics cards in real-world gaming scenarios, synthetic benchmarks, and power efficiency tests.",
//     category: "Hardware",
//     author: "Tech Expert",
//     publishedAt: new Date('2024-01-15'),
//     readTime: "8 min read",
//     image: "/api/placeholder/400/250"
//   },
//   {
//     id: 2,
//     title: "5G Network Security: What You Need to Know",
//     excerpt: "Understanding the security implications of 5G networks and how to protect your devices in the new era of connectivity.",
//     category: "Networking",
//     author: "Network Specialist",
//     publishedAt: new Date('2024-01-12'),
//     readTime: "6 min read",
//     image: "/api/placeholder/400/250"
//   },
//   {
//     id: 3,
//     title: "iOS 18 vs Android 15: Feature Comparison",
//     excerpt: "A comprehensive look at the latest mobile operating systems and their new features, performance improvements, and user experience.",
//     category: "Mobile",
//     author: "Mobile Analyst",
//     publishedAt: new Date('2024-01-10'),
//     readTime: "10 min read",
//     image: "/api/placeholder/400/250"
//   }
// ];

const categories = [
  {
    name: "Hardware",
    description: "Computer components, GPUs, CPUs, and more",
    icon: "🔧",
    href: "/categories/hardware",
    color: "from-blue-500 to-cyan-500",
    delay: "0ms"
  },
  {
    name: "Networking",
    description: "WiFi, 5G, routers, and network security",
    icon: "🌐",
    href: "/categories/networking",
    color: "from-green-500 to-emerald-500",
    delay: "100ms"
  },
  {
    name: "Mobile",
    description: "Smartphones, tablets, and mobile tech",
    icon: "📱",
    href: "/categories/mobile",
    color: "from-purple-500 to-pink-500",
    delay: "200ms"
  },
  {
    name: "Software",
    description: "Apps, operating systems, and development",
    icon: "💻",
    href: "/categories/software",
    color: "from-orange-500 to-red-500",
    delay: "300ms"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-slate-900 to-black text-white overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Floating Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 animate-float" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating Tech Icons - Clean without borders/boxes */}
        {/* Computer & Hardware Icons */}
        <div className="absolute top-1/4 left-10 animate-float" style={{animationDelay: '0s', animationDuration: '6s'}}>
          <span className="text-7xl opacity-60 text-blue-400 drop-shadow-2xl">💻</span>
        </div>
        
        <div className="absolute top-1/3 right-20 animate-float" style={{animationDelay: '1s', animationDuration: '8s'}}>
          <span className="text-6xl opacity-60 text-green-400 drop-shadow-2xl">🔧</span>
        </div>
        
        <div className="absolute bottom-1/3 left-20 animate-float" style={{animationDelay: '2s', animationDuration: '7s'}}>
          <span className="text-6xl opacity-60 text-cyan-400 drop-shadow-2xl">🌐</span>
        </div>
        
        <div className="absolute bottom-1/4 right-10 animate-float" style={{animationDelay: '3s', animationDuration: '9s'}}>
          <span className="text-7xl opacity-60 text-purple-400 drop-shadow-2xl">📱</span>
        </div>
        
        {/* RAM & Memory Icons */}
        <div className="absolute top-1/6 left-1/4 animate-float" style={{animationDelay: '0.5s', animationDuration: '5s'}}>
          <span className="text-5xl opacity-50 text-yellow-400 drop-shadow-2xl">🧠</span>
        </div>
        
        <div className="absolute top-1/2 right-1/3 animate-float" style={{animationDelay: '1.5s', animationDuration: '6.5s'}}>
          <span className="text-5xl opacity-50 text-indigo-400 drop-shadow-2xl">💾</span>
        </div>
        
        {/* Graphics Card & GPU Icons */}
        <div className="absolute top-2/3 left-1/3 animate-float" style={{animationDelay: '2.5s', animationDuration: '7.5s'}}>
          <span className="text-6xl opacity-50 text-red-400 drop-shadow-2xl">🎮</span>
        </div>
        
        <div className="absolute bottom-1/6 right-1/4 animate-float" style={{animationDelay: '3.5s', animationDuration: '5.5s'}}>
          <span className="text-5xl opacity-50 text-amber-400 drop-shadow-2xl">⚡</span>
        </div>
        
        {/* Laptop & Mobile Icons */}
        <div className="absolute top-1/5 right-1/6 animate-float" style={{animationDelay: '0.8s', animationDuration: '8.5s'}}>
          <span className="text-5xl opacity-50 text-teal-400 drop-shadow-2xl">💻</span>
        </div>
        
        <div className="absolute bottom-1/5 left-1/6 animate-float" style={{animationDelay: '1.8s', animationDuration: '6.8s'}}>
          <span className="text-5xl opacity-50 text-violet-400 drop-shadow-2xl">📱</span>
        </div>
        
        {/* Software & Code Icons */}
        <div className="absolute top-1/3 left-1/2 animate-float" style={{animationDelay: '2.8s', animationDuration: '7.2s'}}>
          <span className="text-5xl opacity-50 text-emerald-400 drop-shadow-2xl">🔧</span>
        </div>
        
        <div className="absolute bottom-1/3 right-1/2 animate-float" style={{animationDelay: '3.8s', animationDuration: '8.2s'}}>
          <span className="text-5xl opacity-50 text-rose-400 drop-shadow-2xl">💻</span>
        </div>
        
        {/* Network & Connectivity Icons */}
        <div className="absolute top-1/2 left-1/6 animate-float" style={{animationDelay: '4.2s', animationDuration: '6.2s'}}>
          <span className="text-5xl opacity-50 text-sky-400 drop-shadow-2xl">🌐</span>
        </div>
        
        <div className="absolute bottom-1/2 right-1/6 animate-float" style={{animationDelay: '4.8s', animationDuration: '7.8s'}}>
          <span className="text-5xl opacity-50 text-lime-400 drop-shadow-2xl">📡</span>
        </div>
        
        {/* Storage & HDD Icons */}
        <div className="absolute top-3/4 left-2/3 animate-float" style={{animationDelay: '5.2s', animationDuration: '6.8s'}}>
          <span className="text-5xl opacity-50 text-orange-400 drop-shadow-2xl">💿</span>
        </div>
        
        <div className="absolute bottom-3/4 right-2/3 animate-float" style={{animationDelay: '5.8s', animationDuration: '8.8s'}}>
          <span className="text-5xl opacity-50 text-fuchsia-400 drop-shadow-2xl">🖥️</span>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
          <div className="text-center">
            {/* Modern Animated Logo */}
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                {/* Main Logo Container */}
                <div className="relative w-28 h-28 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500 animate-pulse overflow-hidden">
                  {/* Inner Glow */}
                  <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                  
                  {/* Logo Text */}
                  <div className="relative z-10 text-center">
                    <div className="text-3xl font-black text-white tracking-tight">CL</div>
                    <div className="text-xs font-bold text-white/80 tracking-widest">TECH</div>
                  </div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0.5 rounded-3xl bg-black"></div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-2 left-2 w-3 h-3 bg-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 bg-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 bg-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 bg-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Outer Glow Effect */}
                <div className="absolute -inset-3 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                
                {/* Floating Particles */}
                <div className="absolute -top-2 -left-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75" style={{animationDelay: '1s'}}></div>
                <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-75" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up">
              Welcome to ChipLevels
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '200ms'}}>
              Your ultimate destination for computer hardware, networking, mobile, and software insights. 
              Expert reviews, tutorials, and cutting-edge tech news.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '400ms'}}>
              <Link
                href="/blog"
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
              >
                <span className="relative z-20">Explore Blog</span>
                
                {/* Simple hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 z-10"></div>
              </Link>
              <Link
                href="/categories/hardware"
                className="group px-10 py-5 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md"
              >
                <span className="flex items-center gap-2">
                  Latest Reviews
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-slate-900 dark:bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, #3b82f6 25%, transparent 25%), linear-gradient(-45deg, #3b82f6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #3b82f6 75%), linear-gradient(-45deg, transparent 75%, #3b82f6 75%)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Explore Tech Categories
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '200ms'}}>
              Dive deep into specific areas of technology with our comprehensive category coverage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group block animate-fade-in-up"
                style={{animationDelay: category.delay}}
              >
                <div className="relative p-8 bg-slate-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-slate-700 overflow-hidden">
                  {/* Hover Effect Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Icon Container */}
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {category.description}
                  </p>
                  
                  {/* Arrow Indicator */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
