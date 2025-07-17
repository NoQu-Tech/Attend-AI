import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Award, TrendingUp, Users, Play, CheckCircle, ArrowRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Chief Technology Officer',
      company: 'TechCorp Solutions',
      content: 'CHN Technologies revolutionized our entire IT infrastructure with their AI-powered solutions. The predictive analytics and automated scaling have reduced our downtime by 99% while cutting operational costs by 40%.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      industry: 'Technology',
      metrics: { improvement: '99%', cost_reduction: '40%', time_saved: '60%' },
      videoUrl: '#'
    },
    {
      name: 'Priya Sharma',
      position: 'HR Director',
      company: 'Global Enterprises',
      content: 'The AI-driven workforce management system has transformed our HR operations completely. Real-time analytics and predictive insights have improved employee satisfaction by 85% and reduced turnover by 50%.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      industry: 'Manufacturing',
      metrics: { satisfaction: '85%', turnover_reduction: '50%', efficiency: '70%' },
      videoUrl: '#'
    },
    {
      name: 'Amit Patel',
      position: 'CEO & Founder',
      company: 'StartupXYZ',
      content: 'From AI-powered software development to intelligent payroll automation, CHN Technologies has been our trusted digital transformation partner. Their solutions scaled with us from 10 to 500+ employees seamlessly.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      industry: 'Fintech',
      metrics: { scalability: '5000%', automation: '90%', accuracy: '99.9%' },
      videoUrl: '#'
    },
    {
      name: 'Sarah Chen',
      position: 'Operations Manager',
      company: 'InnovateCorp',
      content: 'The custom software solutions and 24/7 support have been game-changing for our operations. We\'ve seen a 300% increase in productivity and our team efficiency has never been better.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      industry: 'Healthcare',
      metrics: { productivity: '300%', efficiency: '95%', satisfaction: '98%' },
      videoUrl: '#'
    }
  ];

  const stats = [
    { icon: Award, value: '98%', label: 'Client Satisfaction', color: 'from-cyan-400 to-blue-500' },
    { icon: TrendingUp, value: '150+', label: 'Projects Delivered', color: 'from-purple-400 to-pink-500' },
    { icon: Users, value: '24/7', label: 'AI Support', color: 'from-green-400 to-teal-500' },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-2 mb-8">
            <Quote className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-cyan-300 text-sm font-medium">Client Success Stories</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transforming{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x">
              Business Success
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover how our AI-powered solutions have revolutionized businesses across industries
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Modern Card-Based Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Featured Testimonial */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden group">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5"></div>
              
              {/* Content */}
              <div className="relative p-8 md:p-12">
                {/* Header with Avatar and Info */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="relative">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      className="w-20 h-20 rounded-2xl object-cover border-2 border-cyan-400/30"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</h4>
                      <span className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">
                        {testimonials[currentTestimonial].industry}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm mb-1">{testimonials[currentTestimonial].position}</p>
                    <p className="text-cyan-400 text-sm font-medium">{testimonials[currentTestimonial].company}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-3">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Video Play Button */}
                  <button className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform group">
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  </button>
                </div>
                
                {/* Quote */}
                <div className="relative mb-8">
                  <Quote className="absolute -top-4 -left-2 w-8 h-8 text-cyan-400/30" />
                  <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed pl-6">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(testimonials[currentTestimonial].metrics).map(([key, value], index) => (
                    <div key={key} className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{value}</div>
                      <div className="text-slate-400 text-xs capitalize">{key.replace('_', ' ')}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2">
                <button
                  onClick={toggleAutoPlay}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  {isAutoPlaying ? (
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  ) : (
                    <Play className="w-4 h-4 text-white" />
                  )}
                </button>
                
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
            
            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-3 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'w-8 bg-gradient-to-r from-cyan-400 to-purple-400' 
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
          
          {/* Side Stats */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-slate-400 text-sm group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.color} opacity-10 animate-pulse`}></div>
                </div>
              </div>
            ))}
            
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-6">
              <h4 className="text-lg font-bold text-white mb-3">Join Our Success Stories</h4>
              <p className="text-slate-400 text-sm mb-4">Ready to transform your business with AI-powered solutions?</p>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-4 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group cursor-pointer bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 ${
                index === currentTestimonial ? 'ring-2 ring-cyan-400/50 bg-white/10' : ''
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-xl object-cover border border-white/20"
                />
                <div>
                  <h5 className="text-white font-semibold text-sm">{testimonial.name}</h5>
                  <p className="text-slate-400 text-xs">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-300 text-sm line-clamp-3 leading-relaxed">
                {testimonial.content.substring(0, 100)}...
              </p>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex justify-between text-xs">
                  <span className="text-cyan-400 font-medium">{Object.values(testimonial.metrics)[0]}</span>
                  <span className="text-slate-400">{testimonial.industry}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;