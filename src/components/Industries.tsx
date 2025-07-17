import React, { useState } from 'react';
import { 
  Plane, 
  Car, 
  Building, 
  Zap, 
  Settings, 
  Smartphone, 
  Truck, 
  Hammer, 
  Heart, 
  Fuel,
  ShoppingCart,
  Banknote,
  Cpu,
  Brain
} from 'lucide-react';

const Industries: React.FC = () => {
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

  const industries = [
    { name: 'Aerospace & Defense', icon: Plane, color: 'from-blue-500 to-cyan-500', description: 'Advanced systems for mission-critical operations' },
    { name: 'Automotive', icon: Car, color: 'from-red-500 to-orange-500', description: 'Smart manufacturing & connected vehicles' },
    { name: 'Real Estate', icon: Building, color: 'from-green-500 to-teal-500', description: 'PropTech solutions & smart buildings' },
    { name: 'Energy & Power', icon: Zap, color: 'from-yellow-500 to-orange-500', description: 'Renewable energy & grid optimization' },
    { name: 'Manufacturing', icon: Settings, color: 'from-purple-500 to-pink-500', description: 'Industry 4.0 & automation solutions' },
    { name: 'IT & Technology', icon: Smartphone, color: 'from-indigo-500 to-purple-500', description: 'Digital transformation & cloud solutions' },
    { name: 'Logistics', icon: Truck, color: 'from-cyan-500 to-blue-500', description: 'Supply chain optimization & tracking' },
    { name: 'Construction', icon: Hammer, color: 'from-orange-500 to-red-500', description: 'Smart construction & project management' },
    { name: 'Healthcare', icon: Heart, color: 'from-pink-500 to-red-500', description: 'Digital health & telemedicine platforms' },
    { name: 'Oil & Gas', icon: Fuel, color: 'from-gray-500 to-slate-600', description: 'Exploration tech & pipeline monitoring' },
    { name: 'Retail & FMCG', icon: ShoppingCart, color: 'from-green-500 to-emerald-500', description: 'E-commerce & customer analytics' },
    { name: 'Banking & Finance', icon: Banknote, color: 'from-emerald-500 to-teal-500', description: 'FinTech & digital banking solutions' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Floating Tech Elements */}
      <div className="absolute top-10 left-10 animate-float">
        <Cpu className="w-8 h-8 text-cyan-400/30" />
      </div>
      <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Brain className="w-6 h-6 text-purple-400/30" />
      </div>
      <div className="absolute bottom-20 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Settings className="w-10 h-10 text-pink-400/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-2 mb-8">
            <Building className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-cyan-300 text-sm font-medium">Industry Expertise</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transforming{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x">
              Every Industry
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Delivering cutting-edge technology solutions across diverse sectors with deep industry expertise and innovation
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-4 text-center overflow-hidden"
              onMouseEnter={() => setHoveredIndustry(index)}
              onMouseLeave={() => setHoveredIndustry(null)}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color.replace('from-', 'from-').replace('to-', 'to-')}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Glowing Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
              
              <div className="relative">
                {/* Icon Container */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl mb-4 group-hover:scale-110 transition-all duration-300 relative`}>
                  <industry.icon className="w-8 h-8 text-white" />
                  
                  {/* Orbiting Dots */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300 leading-tight mb-2">
                  {industry.name}
                </h3>
                
                {/* Description - appears on hover */}
                <div className={`transition-all duration-300 ${
                  hoveredIndustry === index 
                    ? 'opacity-100 max-h-20 translate-y-0' 
                    : 'opacity-0 max-h-0 translate-y-2 overflow-hidden'
                }`}>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Tech Pattern Overlay */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                  <div className="w-8 h-8 border border-cyan-400/30 rounded rotate-45"></div>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${industry.color} opacity-20 animate-pulse`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">12+</div>
                <div className="text-slate-400">Industries Served</div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Industry-Specific Solutions</h3>
                <p className="text-slate-400 mb-6">
                  Don't see your industry? We adapt our cutting-edge solutions to meet unique business requirements across all sectors.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-slate-400">Custom Adaptation</div>
              </div>
            </div>
            
            <div className="mt-8">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-2 mx-auto">
                <span>Explore Custom Solutions</span>
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;