import React, { useState } from 'react';
import ContactModal from './ContactModal';
import { 
  Clock, 
  Activity, 
  Calendar, 
  FileText, 
  BarChart3, 
  Shield, 
  RefreshCw,
  CheckCircle,
  ArrowRight,
  Zap,
  Brain,
  Smartphone
} from 'lucide-react';

const Features: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const features = [
    {
      icon: Clock,
      title: 'Smart Attendance',
      description: 'AI-powered attendance tracking with facial recognition, geolocation, and biometric integration for accurate time management.',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50',
      accentIcon: Brain
    },
    {
      icon: Activity,
      title: 'Live Tracking',
      description: 'Real-time monitoring of employee activities, location tracking, and instant notifications for better workforce visibility.',
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-50 to-teal-50',
      accentIcon: Zap
    },
    {
      icon: Calendar,
      title: 'Smart Shifts',
      description: 'Intelligent shift scheduling with AI optimization, automatic assignments, and conflict resolution for seamless operations.',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50',
      accentIcon: Calendar
    },
    {
      icon: FileText,
      title: 'Leave Management',
      description: 'Automated leave processing with policy compliance, approval workflows, and balance tracking for streamlined HR operations.',
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50',
      accentIcon: CheckCircle
    },
    {
      icon: BarChart3,
      title: 'Report Schedulers',
      description: 'Automated report generation with customizable schedules, data insights, and analytics for informed decision making.',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-50 to-purple-50',
      accentIcon: BarChart3
    },
    {
      icon: Shield,
      title: 'User Rights & Control',
      description: 'Advanced role-based access control with granular permissions, security protocols, and audit trails for data protection.',
      color: 'from-emerald-500 to-cyan-600',
      bgColor: 'from-emerald-50 to-cyan-50',
      accentIcon: Shield
    },
    {
      icon: RefreshCw,
      title: 'Regularization',
      description: 'Smart attendance regularization with AI-assisted approvals, policy compliance, and automated correction workflows.',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'from-rose-50 to-pink-50',
      accentIcon: Smartphone
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 rounded-full px-6 py-2 mb-8">
            <Zap className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-blue-700 text-sm font-medium">Intelligent Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Powerful{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 animate-gradient-x">
              AI Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience next-generation attendance management with intelligent automation and real-time insights
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-3xl overflow-hidden hover:border-gray-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-4"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Glowing Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>
              
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                    
                    {/* Orbiting Icon */}
                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center animate-spin-slow">
                        <feature.accentIcon className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Particle Effect */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 mb-6">
                  {feature.description}
                </p>
              </div>

              {/* Animated Corner Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience AI-Powered Attendance?</h3>
            <p className="text-gray-600 mb-6">Join thousands of companies already using Attend AI to transform their workforce management</p>
            <button 
              onClick={() => setShowContactModal(true)}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-2 mx-auto"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </section>
  );
};

export default Features;