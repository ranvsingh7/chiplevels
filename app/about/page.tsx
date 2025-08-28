'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      {/* Hero Section */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              About Pratap Enterprises
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Your trusted technology partner in Jodhpur, Rajasthan. We specialize in computer hardware, 
              security systems, and comprehensive IT solutions for businesses and individuals.
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Pratap Enterprises is a registered technology company based in the historic city of Jodhpur, 
              Rajasthan. Since our establishment, we have been at the forefront of providing cutting-edge 
              technology solutions to our valued customers.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Our mission is to bridge the gap between complex technology and everyday users, making 
              advanced IT solutions accessible, reliable, and affordable for everyone.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">Registered Company</h3>
                <p className="text-slate-600 dark:text-slate-400">Legally registered business entity</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🏢</div>
                <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300">Pratap Enterprises</h3>
                <p className="text-slate-600 dark:text-slate-400">Jodhpur, Rajasthan</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white dark:bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Comprehensive technology solutions covering hardware, security, and IT services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Computer Hardware */}
            <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg w-fit mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Computer Hardware
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Complete computer hardware solutions including desktops, laptops, components, and peripherals.
              </p>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>• Desktop & Laptop Sales</li>
                <li>• Hardware Upgrades</li>
                <li>• Component Installation</li>
                <li>• Custom PC Building</li>
              </ul>
            </div>

            {/* Security Systems */}
            <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg w-fit mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Security Systems
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Advanced security solutions for homes, offices, and commercial establishments.
              </p>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>• CCTV Camera Systems</li>
                <li>• Biometric Access Control</li>
                <li>• Alarm Systems</li>
                <li>• Security Integration</li>
              </ul>
            </div>

            {/* IT Services */}
            <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg w-fit mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                IT Services
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Professional IT support and maintenance services for businesses and individuals.
              </p>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>• System Maintenance</li>
                <li>• Network Setup</li>
                <li>• Software Installation</li>
                <li>• Technical Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Service Centers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Authorized Service Centers
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We are proud to be an authorized service partner for leading technology brands
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* ASUS */}
          <div className="text-center">
            <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-4">
              <div className="h-16 flex items-center justify-center mb-2">
                <Image
                  src="https://logos-world.net/wp-content/uploads/2020/07/Asus-Emblem.png"
                  alt="ASUS Logo"
                  width={80}
                  height={40}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">ASUS</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Laptops & Components</p>
          </div>

          {/* DELL */}
          <div className="text-center">
            <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-4">
              <div className="h-16 flex items-center justify-center mb-2">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png"
                  alt="Dell Logo"
                  width={80}
                  height={40}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">DELL</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Desktops & Servers</p>
          </div>

          {/* TVS */}
          <div className="text-center">
            <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-4">
              <div className="h-16 flex items-center justify-center mb-2">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/TVS_Electronics.svg/1200px-TVS_Electronics.svg.png"
                  alt="TVS Electronics Logo"
                  width={80}
                  height={40}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">TVS</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Keyboards & Peripherals</p>
          </div>

          {/* Crucial */}
          <div className="text-center">
            <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-6 mb-4">
              <div className="h-16 flex items-center justify-center mb-2">
                <Image
                  src="https://1000logos.net/wp-content/uploads/2020/05/Crucial-Logo-2007-1.png"
                  alt="Crucial Logo"
                  width={80}
                  height={40}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Crucial</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Memory & Storage</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg text-slate-600 dark:text-slate-400">
            <strong>10+ Service Centers</strong> across Jodhpur and surrounding areas
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white dark:bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose Pratap Enterprises?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We combine expertise, reliability, and customer satisfaction in everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-fit mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Expert Team</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Certified technicians with years of experience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full w-fit mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Quick Service</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Fast turnaround times for all services
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full w-fit mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Wide Network</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                10+ service centers across Jodhpur
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900/30 p-4 rounded-full w-fit mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Customer First</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Dedicated to customer satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Contact us today for all your technology needs in Jodhpur
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="/blog"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
