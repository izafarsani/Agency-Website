
import React from 'react';
import { useContent } from '../App';
import { ArrowUpRight, TrendingUp, Target, Zap } from 'lucide-react';

const Portfolio: React.FC = () => {
  const { content } = useContent();
  const CASE_STUDIES = content.caseStudies;

  return (
    <div className="pt-20">
      <header className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-brand-red font-black uppercase tracking-widest text-[10px] md:text-xs mb-4 md:mb-6 inline-block">Case Studies</span>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-brand-blue mb-6 md:mb-8 tracking-tighter leading-none">Our Results Speak <br className="hidden md:block" /><span className="text-brand-red italic">Louder.</span></h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed font-medium">
            We focus on metrics that move the needle. Funding secured, revenue increased, and time saved. Explore how we scale our partners.
          </p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-20 md:gap-32">
            {CASE_STUDIES.map((project, i) => (
              <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <span className="px-3 py-1.5 md:px-4 md:py-2 bg-brand-blue/5 text-brand-blue text-[9px] md:text-[10px] font-black uppercase tracking-widest rounded-lg">{project.category}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-brand-blue mb-8 md:mb-12 tracking-tight leading-none">{project.title}</h2>
                  
                  <div className="space-y-6 md:space-y-10">
                    <div className="group">
                      <div className="flex gap-4 md:gap-6 items-start">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-red-50 group-hover:text-brand-red transition-all">
                          <Target className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                          <h4 className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 md:mb-2">The Bottleneck</h4>
                          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-bold">{project.problem}</p>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <div className="flex gap-4 md:gap-6 items-start">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-purple group-hover:text-white transition-all">
                          <Zap className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                          <h4 className="text-[9px] md:text-[10px] font-black text-brand-purple uppercase tracking-widest mb-1 md:mb-2">The Fix</h4>
                          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-bold">{project.solution}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-blue p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-6 md:p-10 opacity-10 group-hover:scale-110 transition-transform">
                        <TrendingUp className="w-20 h-20 md:w-32 md:h-32" />
                      </div>
                      <div className="relative z-10">
                        <h4 className="text-[9px] md:text-[10px] font-black text-indigo-300 uppercase tracking-widest mb-3 md:mb-4">Final Result</h4>
                        <p className="text-2xl md:text-3xl lg:text-5xl font-black leading-tight md:leading-none">{project.result}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 md:mt-16">
                    <button className="flex items-center gap-3 md:gap-4 text-brand-blue text-lg md:text-xl font-black hover:text-brand-red hover:gap-6 transition-all group">
                      Explore Project <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-45 transition-transform" />
                    </button>
                  </div>
                </div>

                <div className={`sticky top-32 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative overflow-hidden rounded-[2rem] md:rounded-[4rem] shadow-2xl border-4 md:border-8 border-white aspect-[4/5]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-slate-50 text-center px-6">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-brand-blue mb-8 md:mb-10 tracking-tight">Ready for your <br /><span className="text-brand-purple">ROI Boost?</span></h2>
        <a href="#/contact" className="inline-block bg-brand-red text-white px-10 md:px-12 py-5 md:py-6 rounded-xl md:rounded-2xl font-black text-xl md:text-2xl shadow-xl hover:scale-105 transition-all">
          Start Your Case Study
        </a>
      </section>
    </div>
  );
};

export default Portfolio;
