
import React from 'react';
import { useContent } from '../App';
import { ArrowRight, Globe, Cpu, Palette, Zap, Target, Users, BarChart3, TrendingUp } from 'lucide-react';

const iconMap: any = { Globe, Cpu, Palette, Zap, Target, Users, BarChart3 };

const Services: React.FC = () => {
  const { content } = useContent();
  const SERVICES = content.services;

  return (
    <div className="pt-20">
      <header className="py-20 md:py-32 bg-slate-50 relative overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-brand-purple font-black uppercase tracking-widest text-[9px] md:text-[11px] mb-6 md:mb-8 inline-block bg-brand-purple/10 px-4 py-2 md:px-5 md:py-2.5 rounded-full">Strategic Growth</span>
          <h1 className="text-4xl md:text-7xl lg:text-[110px] font-black text-brand-blue mb-8 md:mb-10 tracking-tighter leading-none">
            Growth-Focused <br /><span className="text-brand-purple">Startup Services.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10 md:mb-14 font-medium">
            We don't build projects. We build digital business systems that generate ROI while you sleep. Fast, secure, and infinitely scalable.
          </p>
          <a href="#/contact" className="bg-brand-red text-white px-8 md:px-14 py-4 md:py-7 rounded-2xl md:rounded-[2.5rem] text-lg md:text-2xl font-black shadow-xl hover:scale-105 transition-all inline-block">
            Book Free Consultation
          </a>
        </div>
      </header>

      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24 md:space-y-40">
            {SERVICES.map((s, i) => {
              const Icon = iconMap[s.icon] || Globe;
              return (
                <div key={s.id} className={`flex flex-col gap-12 lg:gap-24 ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start lg:items-center`}>
                  <div className="w-full lg:w-1/2">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-blue/10 text-brand-blue flex items-center justify-center rounded-2xl md:rounded-3xl mb-8 md:mb-10 shadow-sm">
                      <Icon className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-brand-blue mb-6 md:mb-10 leading-tight tracking-tighter">{s.title}</h2>
                    <p className="text-base md:text-xl text-slate-500 mb-8 md:mb-12 font-medium leading-relaxed">{s.description}</p>
                    
                    <div className="space-y-4 md:space-y-6 mb-12 md:mb-16">
                      <div className="p-6 md:p-10 bg-red-50 rounded-[1.5rem] md:rounded-[2.5rem] border border-red-100 flex gap-4 md:gap-6 items-start">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-brand-red shrink-0 shadow-sm">
                           <Target className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                           <h4 className="font-black text-brand-red mb-1 md:mb-2 uppercase text-[9px] md:text-[11px] tracking-widest">The Problem</h4>
                           <p className="text-brand-blue font-bold text-base md:text-lg">{s.problem}</p>
                        </div>
                      </div>
                      <div className="p-6 md:p-10 bg-brand-blue/5 rounded-[1.5rem] md:rounded-[2.5rem] border border-brand-blue/10 flex gap-4 md:gap-6 items-start">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-brand-blue shrink-0 shadow-sm">
                           <Zap className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                           <h4 className="font-black text-brand-blue mb-1 md:mb-2 uppercase text-[9px] md:text-[11px] tracking-widest">The Solution</h4>
                           <p className="text-slate-700 font-bold text-base md:text-lg">{s.solution}</p>
                        </div>
                      </div>
                      <div className="p-6 md:p-10 bg-green-50 rounded-[1.5rem] md:rounded-[2.5rem] border border-green-100 flex gap-4 md:gap-6 items-start">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-green-600 shrink-0 shadow-sm">
                           <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                           <h4 className="font-black text-green-700 mb-1 md:mb-2 uppercase text-[9px] md:text-[11px] tracking-widest">The Result</h4>
                           <p className="text-brand-blue font-black text-xl md:text-2xl tracking-tight">{s.result}</p>
                        </div>
                      </div>
                    </div>
                    
                    <a href="#/contact" className="inline-flex w-full sm:w-auto items-center justify-center gap-4 bg-brand-blue text-white px-8 md:px-12 py-5 md:py-6 rounded-xl md:rounded-2xl font-black hover:bg-brand-purple transition-all group">
                      Get Consultation <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                    </a>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <div className="relative">
                       <div className="absolute -inset-2 md:-inset-4 bg-slate-100 rounded-[2rem] md:rounded-[5rem] -z-10 rotate-2 md:rotate-3"></div>
                       <img 
                        src={`https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200&h=1200&seed=${s.id}`} 
                        alt={s.title} 
                        className="rounded-[2rem] md:rounded-[4rem] shadow-premium w-full object-cover aspect-square border-4 md:border-8 border-white" 
                       />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-48 bg-brand-charcoal text-center text-white px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-6xl lg:text-8xl font-black mb-8 md:mb-10 leading-tight tracking-tighter">Ready to Build a Website <br className="hidden md:block" /><span className="text-brand-accent italic">That Grows?</span></h2>
          <p className="text-lg md:text-2xl text-slate-400 mb-10 md:mb-14 max-w-2xl mx-auto font-medium">Stop wasting time on digital assets that don't perform. Let's engineer your growth machine today.</p>
          <a href="#/contact" className="bg-brand-red text-white px-8 md:px-14 py-4 md:py-7 rounded-2xl md:rounded-[2.5rem] text-xl md:text-3xl font-black transition-all hover:scale-105 shadow-2xl shadow-brand-red/30 inline-block">
            Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
