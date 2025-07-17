import React from 'react';
import { useState } from 'react';
import ContactModal from './ContactModal';
import { 
  Users, 
  Headphones, 
  MessageCircle, 
  Phone, 
  Mail,
  Rocket,
  Settings,
  GraduationCap,
  Clock,
  Sparkles
} from 'lucide-react';

const Support: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const supportFeatures = [
    {
      icon: Rocket,
      title: 'Dedicated onboarding assistance',
      description: 'to get you live in no time',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Settings,
      title: 'Personalized setup',
      description: 'for your shifts, users, and policies',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: GraduationCap,
      title: 'Live training sessions',
      description: 'for HR & team leads',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Clock,
      title: 'Ongoing support via WhatsApp, call & email',
      description: 'anytime you need it',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Support',
      description: 'Instant messaging support',
      availability: '24/7 Available',
      color: 'from-green-500 to-emerald-600',
      textColor: 'text-green-700'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Direct call assistance',
      availability: 'Business Hours',
      color: 'from-blue-500 to-cyan-600',
      textColor: 'text-blue-700'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed email responses',
      availability: 'Within 2 Hours',
      color: 'from-purple-500 to-indigo-600',
      textColor: 'text-purple-700'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 rounded-full px-6 py-2 mb-8">
            <Headphones className="w-4 h-4 text-blue-600 animate-pulse" />
            <span className="text-blue-700 text-sm font-medium">Premium Support</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 animate-gradient-x">
              Attend AI
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
              Smooth Onboarding. Continuous Support.
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              We don't just give you software — we help you succeed with it.
            </p>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Support Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {supportFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-3xl p-8 hover:border-gray-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Glowing Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative flex items-start gap-6">
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-5 animate-pulse`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {supportChannels.map((channel, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-3xl p-8 text-center hover:border-gray-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-4"
            >
              {/* Glowing Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${channel.color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${channel.color} rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <channel.icon className="w-10 h-10 text-white" />
                </div>
                
                <h4 className={`text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300 ${channel.textColor}`}>
                  {channel.title}
                </h4>
                
                <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {channel.description}
                </p>
                
                <div className={`inline-block bg-gradient-to-r ${channel.color} bg-opacity-10 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 ${channel.textColor}`}>
                  {channel.availability}
                </div>
              </div>

              {/* Particle Effect */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-blue-600 animate-pulse" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Need help? We're with you from Day 1 — and every day after.
              </h3>
              <Sparkles className="w-8 h-8 text-blue-600 animate-pulse" />
            </div>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our dedicated support team ensures your success with personalized assistance, 
              comprehensive training, and round-the-clock availability.
            </p>
            
            <div className="flex justify-center">
              <button 
                onClick={() => setShowContactModal(true)}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                <span>Talk to Support</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </section>
  );
};

export default Support;