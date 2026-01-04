
import React from 'react';
import { SERVICES } from '../constants';
// Fix: Added MessageSquare to the lucide-react imports
import { CheckCircle2, ArrowRight, Monitor, Smartphone, Globe, Code, ShoppingCart, Headset, MessageSquare } from 'lucide-react';

const Services: React.FC = () => {
  // Filter only Web Dev related or highlight it first
  const webDevService = SERVICES.find(s => s.id === 'web-design');
  const otherServices = SERVICES.filter(s => s.id !== 'web-design');

  const subServices = [
    { icon: <Monitor className="w-6 h-6"/>, title: "Custom Web Design", desc: "Tailored UI/UX that aligns perfectly with your brand's unique identity." },
    { icon: <Smartphone className="w-6 h-6"/>, title: "Responsive Layouts", desc: "Websites that look and perform perfectly on every device, from mobile to 4K." },
    { icon: <ShoppingCart className="w-6 h-6"/>, title: "E-commerce Solutions", desc: "High-performance online stores built to maximize checkout conversions." },
    { icon: <Code className="w-6 h-6"/>, title: "Custom Development", desc: "Specialized React, Next.js, or WordPress builds for complex requirements." },
    { icon: <Globe className="w-6 h-6"/>, title: "SEO Optimization", desc: "Foundational SEO that ensures your site gets indexed and ranked properly." },
    { icon: <Headset className="w-6 h-6"/>, title: "Ongoing Support", desc: "We don't just launch and leave. We provide active maintenance and growth support." }
  ];

  return (
    <div className="pt-20">
      {/* 1. Hero / Page Header */}
      <header className="py-24 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => <div key={i} className="border-r border-slate-900 h-full"></div>)}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4 inline-block">Web Agency for Startups</span>
          <h1 className="text-4xl lg:text-7xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
            Website Design & Development <br />
            <span className="text-indigo-600">for Growing Businesses</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
            We create websites that generate leads, look professional, and scale with your business. No templates, just high-performance digital systems.
          </p>
          <a href="#/contact" className="bg-red-500 hover:bg-red-600 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-xl shadow-red-500/20">
            Book Free Consultation
          </a>
        </div>
      </header>

      {/* 2. Focused Service Blocks (P -> S -> R) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {subServices.map((sub, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-indigo-600 hover:shadow-2xl transition-all group">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {sub.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{sub.title}</h3>
                <p className="text-slate-500 leading-relaxed">{sub.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-32">
            {SERVICES.map((s, i) => (
              <div key={s.id} className={`flex flex-col lg:items-center gap-16 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-indigo-50 text-indigo-600 flex items-center justify-center rounded-2xl mb-8">
                    {s.icon}
                  </div>
                  <h2 className="text-4xl font-extrabold text-slate-900 mb-6">{s.title}</h2>
                  <div className="space-y-6 mb-10">
                    <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
                      <div className="flex gap-4">
                        <div className="text-red-500 font-black text-lg">P</div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-1 uppercase text-xs tracking-widest">The Problem</h4>
                          <p className="text-slate-600">{s.problem}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 bg-indigo-50 rounded-[2rem] border border-indigo-100 hover:bg-white hover:shadow-xl transition-all">
                      <div className="flex gap-4">
                        <div className="text-indigo-600 font-black text-lg">S</div>
                        <div>
                          <h4 className="font-bold text-indigo-700 mb-1 uppercase text-xs tracking-widest">Our Solution</h4>
                          <p className="text-slate-700">{s.solution}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-8 bg-green-50 rounded-[2rem] border border-green-100 hover:bg-white hover:shadow-xl transition-all">
                      <div className="flex gap-4">
                        <div className="text-green-600 font-black text-lg">R</div>
                        <div>
                          <h4 className="font-bold text-green-700 mb-1 uppercase text-xs tracking-widest">The Result</h4>
                          <p className="text-slate-800 font-bold">{s.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#/contact" className="inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-600 transition-all">
                    Request Free Consultation <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute inset-0 gradient-bg rounded-[3rem] rotate-3 opacity-10 group-hover:rotate-6 transition-transform"></div>
                    <img 
                      src={`https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800&h=800&seed=${s.id}`} 
                      alt={s.title} 
                      className="rounded-[3rem] shadow-2xl relative z-10 w-full object-cover aspect-square" 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-6xl font-black mb-8 leading-tight">Ready to build your <br /><span className="text-indigo-400">digital growth system?</span></h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium">Start with our free website audit. We'll show you exactly where you're losing money and how to fix it.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#/contact" className="bg-red-500 hover:bg-red-600 text-white px-12 py-6 rounded-full text-2xl font-black transition-all shadow-xl shadow-red-500/20">
              Get a Free Consultation
            </a>
            <a href="https://wa.me/123456789" className="bg-green-600 hover:bg-green-700 text-white px-12 py-6 rounded-full text-2xl font-black transition-all flex items-center justify-center gap-3">
              <MessageSquare className="w-6 h-6" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
