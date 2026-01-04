
import React from 'react';
import { Target, Users, Zap, ShieldCheck, Rocket, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 font-bold rounded-lg mb-6 text-[11px] md:text-sm uppercase tracking-widest">About Pixion Studio</span>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-slate-900 mb-6 md:mb-8 tracking-tighter leading-none">
                Born to help <br className="hidden md:block" />
                <span className="text-indigo-600">Startups</span> soar.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 font-medium">
                Most agencies are too big, too slow, and too expensive for the agile world of startups. We bridge that gap by acting as your dedicated growth partner.
              </p>
              <div className="space-y-4">
                {["Strategy-first mindset", "High-performance execution", "Startup-friendly agility", "Results-driven outcomes"].map(item => (
                  <div key={item} className="flex items-center gap-3 font-bold text-slate-800 text-base md:text-lg">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                      <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -inset-6 md:-inset-10 gradient-bg opacity-[0.05] rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Our Creative Studio" 
                className="rounded-[2rem] md:rounded-[3rem] shadow-2xl relative z-10 w-full object-cover h-[400px] md:h-[600px]" 
              />
              <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 bg-indigo-600 text-white p-6 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl z-20">
                <p className="text-3xl md:text-5xl font-black mb-1">50+</p>
                <p className="font-bold text-indigo-100 uppercase tracking-widest text-[9px] md:text-xs">Businesses Scaled</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">Our Core Mission</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">Helping startups and growing businesses build, scale, and automate their digital presence through strategy-first execution.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { icon: <Target className="w-6 h-6 md:w-8 md:h-8" />, title: "Strategy First", desc: "We never design without a clear business objective and a roadmap for ROI." },
              { icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />, title: "Hyper Growth", desc: "Every line of code and every pixel is optimized for high-performance scaling." },
              { icon: <Users className="w-6 h-6 md:w-8 md:h-8" />, title: "Collaboration", desc: "We don't work 'for' you; we work 'with' you as an extension of your own team." },
              { icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />, title: "Radical Trust", desc: "100% transparent pricing, honest deadlines, and clear reporting on results." }
            ].map((value, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white text-indigo-600 flex items-center justify-center rounded-2xl md:rounded-3xl mx-auto mb-6 md:mb-8 shadow-xl shadow-slate-200/50 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-slate-900">{value.title}</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 md:mb-10 leading-tight">Our Philosophy: <br /><span className="text-indigo-400">Systems Over Sliders</span></h2>
              <div className="space-y-6 md:space-y-8 text-slate-300 text-lg md:text-xl font-medium leading-relaxed">
                <p>We don't believe in "one-off" projects. We believe in building long-term digital ecosystems that work for your business while you sleep.</p>
                <p>Whether it's a high-converting WordPress site or custom AI automations, we bring a results-first mindset to every pixel we push.</p>
              </div>
              <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
                <div className="bg-indigo-600 p-3 rounded-xl shrink-0">
                  <Rocket className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <p className="font-black text-xl md:text-2xl leading-none">Strategy &rarr; Launch &rarr; Scale</p>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-[9px] md:text-xs mt-1 md:mt-2">Our Repeatable Success Framework</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-indigo-500 rounded-full blur-[80px] md:blur-[120px]"></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-24 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Ready to build your growth partner?</h2>
        <a href="#/contact" className="inline-block bg-brand-red hover:bg-rose-600 text-white px-10 md:px-12 py-5 md:py-6 rounded-xl md:rounded-full font-black text-xl md:text-2xl hover:scale-105 transition-all shadow-xl shadow-brand-red/20">
          Book Free Call
        </a>
      </section>
    </div>
  );
};

export default About;
