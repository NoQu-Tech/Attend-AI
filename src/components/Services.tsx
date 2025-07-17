import React, { useState } from 'react';
import { 
  Server, 
  Code, 
  Users, 
  Calculator, 
  GraduationCap, 
  ArrowRight,
  CheckCircle,
  Cpu,
  Cloud,
  Shield,
  Smartphone,
  Database,
  Zap
} from 'lucide-react';

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Server,
      title: 'AI-Powered Infrastructure',
      subtitle: 'Intelligent IT Infrastructure with Predictive Analytics',
      features: [
        'AI-driven infrastructure monitoring & auto-scaling',
        'Predictive maintenance with machine learning',
        'Multi-cloud orchestration & hybrid solutions',
        'Zero-trust security with behavioral analytics'
      ],
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-500/10 to-blue-600/10',
      accentIcon: Cpu
    },
    {
      icon: Code,
      title: 'Next-Gen Development',
      subtitle: 'AI-Enhanced Software Development & Automation',
      features: [
        'AI-assisted code generation & optimization',
        'Microservices architecture with containerization',
        'Progressive web apps with real-time capabilities',
        'DevOps automation with CI/CD pipelines'
      ],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-500/10 to-pink-600/10',
      accentIcon: Code
    },
    {
      icon: Users,
      title: 'Smart Workforce Analytics',
      subtitle: 'AI-Driven Workforce Intelligence & Automation',
      features: [
        'Biometric systems with facial recognition',
        'Predictive workforce analytics & insights',
        'Automated scheduling with AI optimization',
        'Real-time performance monitoring dashboards'
      ],
      color: 'from-green-500 to-teal-600',
      bgColor: 'from-green-500/10 to-teal-600/10',
      accentIcon: Database
    },
    {
      icon: Calculator,
      title: 'Intelligent Payroll',
      subtitle: 'Automated Payroll with Compliance Intelligence',
      features: [
        'AI-powered payroll processing & validation',
        'Automated tax calculations & compliance',
        'Blockchain-secured transaction records',
        'Predictive budgeting & cost optimization'
      ],
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-500/10 to-red-600/10',
      accentIcon: Shield
    },
    {
      icon: GraduationCap,
      title: 'Adaptive Learning',
      subtitle: 'AI-Personalized Training & Skill Development',
      features: [
        'Personalized learning paths with AI',
        'VR/AR immersive training experiences',
        'Real-time skill assessment & feedback',
        'Adaptive content delivery & optimization'
      ],
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-500/10 to-purple-600/10',
      accentIcon: Smartphone
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.05)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-2 mb-8">
            <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-cyan-300 text-sm font-medium">Revolutionary Services</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Next-Generation{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x">
              Tech Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Harness the power of AI, machine learning, and cutting-edge technology to transform your business operations
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 transform hover:-translate-y-4"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Glowing Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
              
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                    
                    {/* Orbiting Icon */}
                    <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center animate-spin-slow">
                        <service.accentIcon className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Particle Effect */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {service.subtitle}
                </p>
                
                {/* Features List */}
                <div className={`space-y-3 mb-8 transition-all duration-500 ${
                  hoveredService === index ? 'opacity-100 max-h-96' : 'opacity-70 max-h-32 overflow-hidden'
                }`}>
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-start gap-3 group/item"
                      style={{ 
                        animationDelay: `${featureIndex * 0.1}s`,
                        opacity: hoveredService === index ? 1 : 0.7
                      }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span className="text-slate-300 text-sm group-hover/item:text-white transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white px-6 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-2xl transform group-hover:scale-105`}>
                  <span>Explore Technology</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Animated Corner Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-slate-400 mb-6">Let's discuss how our AI-powered solutions can revolutionize your operations</p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-2 mx-auto">
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;