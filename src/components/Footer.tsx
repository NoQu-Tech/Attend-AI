import React from 'react';
import {
  Sparkles,
  Facebook,
  Instagram,
  Youtube,
  Clock,
  Users
} from 'lucide-react';

interface FooterProps {
  onNavigateToPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateToPage }) => {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { name: 'Privacy Policy', action: () => onNavigateToPage('privacy') },
    { name: 'Terms of Service', action: () => onNavigateToPage('terms') },
  ];

  const stats = [
    { icon: Users, value: '1000+', label: 'Active Users' },
    { icon: Clock, value: '99.9%', label: 'Uptime' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src="/logo.jpeg"
                  alt="Attend AI Logo"
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-blue-600 animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Attend AI
                </h3>
                <p className="text-blue-600 text-sm font-medium">
                  Smart Attendance Management
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              The most intelligent AI-powered attendance solution for modern workforces.
              Transform your attendance management with cutting-edge artificial intelligence,
              real-time analytics, and seamless integrations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Youtube className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Legal</h4>

            <div className="space-y-2">
              <a
                href="/PrivacyPolicy"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-blue-600 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/TermsConditions"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-blue-600 transition-colors text-sm"
              >
                Terms and Conditions
              </a>




            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} Attend AI. All rights reserved.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Powered by</span>
              <div className="flex items-center gap-1">
                <img
                  src="/WhatsApp Image 2025-07-02 at 3.00.15 PM (1).jpeg"
                  alt="AI Logo"
                  className="w-4 h-4 object-contain"
                />
                <span className="text-blue-600 font-medium">Advanced AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;