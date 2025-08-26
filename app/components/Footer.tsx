import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
    categories: [
      { name: 'Hardware', href: '/categories/hardware' },
      { name: 'Networking', href: '/categories/networking' },
      { name: 'Mobile', href: '/categories/mobile' },
      { name: 'Software', href: '/categories/software' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Reviews', href: '/reviews' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'News', href: '/news' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Community', href: '/community' },
      { name: 'Feedback', href: '/feedback' },
    ],
  };

  return (
    <footer className="relative bg-slate-900 dark:bg-slate-950 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8 group">
              <div className="relative">
                {/* Main Logo Container */}
                <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 overflow-hidden">
                  {/* Inner Glow */}
                  <div className="absolute inset-1.5 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                  
                  {/* Logo Text */}
                  <div className="relative z-10 text-center">
                    <div className="text-2xl font-black text-white tracking-tight">CL</div>
                    <div className="text-[10px] font-bold text-white/80 tracking-widest">TECH</div>
                  </div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0.5 rounded-2xl bg-black"></div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-1.5 left-1.5 w-2 h-2 bg-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-1.5 left-1.5 w-2 h-2 bg-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-1.5 right-1.5 w-2 h-2 bg-cyan-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Outer Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              </div>
              
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-cyan-500 transition-all duration-300">
                ChipLevels
              </span>
            </div>
            <p className="text-slate-300 mb-8 max-w-md leading-relaxed text-lg">
              Your ultimate destination for computer hardware, networking, mobile, and software insights. 
              Expert reviews, tutorials, and cutting-edge tech news.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: 'Twitter', href: '#', label: 'Twitter' },
                { icon: 'LinkedIn', href: '#', label: 'LinkedIn' },
                { icon: 'YouTube', href: '#', label: 'YouTube' },
                { icon: 'GitHub', href: '#', label: 'GitHub' },
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group relative w-12 h-12 bg-slate-800/50 hover:bg-slate-700/70 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm"
                  aria-label={social.label}
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 text-slate-300 group-hover:text-white transition-colors duration-300">
                    {social.icon === 'Twitter' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    )}
                    {social.icon === 'LinkedIn' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                    {social.icon === 'YouTube' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    )}
                    {social.icon === 'GitHub' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    )}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="animate-fade-in-up" style={{animationDelay: '200ms'}}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></span>
              Company
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={link.name} style={{animationDelay: `${300 + index * 50}ms`}}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="relative">
                      {link.name}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300 rounded-full"></div>
                    </span>
                    <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="animate-fade-in-up" style={{animationDelay: '400ms'}}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-3"></span>
              Categories
            </h3>
            <ul className="space-y-4">
              {footerLinks.categories.map((link, index) => (
                <li key={link.name} style={{animationDelay: `${500 + index * 50}ms`}}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="relative">
                      {link.name}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 group-hover:w-full transition-all duration-300 rounded-full"></div>
                    </span>
                    <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-fade-in-up" style={{animationDelay: '600ms'}}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3"></span>
              Resources
            </h3>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, index) => (
                <li key={link.name} style={{animationDelay: `${700 + index * 50}ms`}}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="relative">
                      {link.name}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300 rounded-full"></div>
                    </span>
                    <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 pt-12 border-t border-slate-800/50 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800/20 to-transparent"></div>
          <div className="relative max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-6 animate-fade-in-up">
              Stay Updated with ChipLevels
            </h3>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '200ms'}}>
              Get the latest tech news, reviews, and insights delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '400ms'}}>
              <div className="flex-1 relative group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-2xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 bg-white/90 backdrop-blur-sm group-hover:bg-white group-focus:bg-white shadow-xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl"></div>
              </div>
              <button className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform overflow-hidden relative">
                <span className="relative z-10">Subscribe</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} ChipLevels. All rights reserved.
            </p>
            <div className="flex space-x-8">
              {[
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Cookie Policy', href: '/cookies' },
              ].map((link, index) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-slate-400 hover:text-white text-sm transition-colors duration-300 hover:scale-105 transform"
                  style={{animationDelay: `${800 + index * 100}ms`}}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
