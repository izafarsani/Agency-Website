
import React from 'react';
import { CASE_STUDIES } from '../constants';
import { ArrowUpRight, TrendingUp, Target, Zap } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="pt-20">
      <header className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">Our Work That <br /><span className="text-indigo-600">Drives Results.</span></h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed font-medium">
            We focus on metrics that matter. More leads, more sales, and more time saved. Explore exactly how we've moved the needle for our partners.
          </p>
        </div>
      </header>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-32">
            {CASE_STUDIES.map((project, i) => (
              <div key={project.id} className={`grid lg:grid-cols-2 gap-16 items-start ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="order-2 lg:order-none">
                  <div className="flex items-center gap-3 mb-8">
                    <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 text-xs font-black uppercase tracking-widest rounded-full">{project.category}</span>
                    <span className="text-slate-300 font-mono text-xs">CS-00{project.id}</span>
                  </div>
                  <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-12 tracking-tight">{project.title}</h2>
                  
                  <div className="space-y-12">
                    <div className="group">
                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-red-50 transition-colors">
                          <Target className="w-5 h-5 text-slate-400 group-hover:text-red-500" />
                        </div>
                        <div>
                          <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">The Challenge</h4>
                          <p className="text-xl text-slate-700 leading-relaxed font-medium">{project.problem}</p>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-indigo-50 transition-colors">
                          <Zap className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-2">Our Solution</h4>
                          <p className="text-xl text-slate-700 leading-relaxed font-medium">{project.solution}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-indigo-600 p-10 rounded-[3rem] text-white shadow-2xl shadow-indigo-200 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                        <TrendingUp className="w-24 h-24" />
                      </div>
                      <div className="relative z-10">
                        <h4 className="text-xs font-black text-indigo-200 uppercase tracking-widest mb-3">Key Result</h4>
                        <p className="text-3xl lg:text-4xl font-black leading-tight">{project.result}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-16">
                    <button className="flex items-center gap-3 text-slate-900 text-lg font-black hover:text-indigo-600 hover:gap-5 transition-all">
                      Explore Live Project <ArrowUpRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="order-1 lg:order-none sticky top-32">
                  <div className="relative">
                    <div className="absolute -inset-6 gradient-bg opacity-10 rounded-[4rem] rotate-2"></div>
                    <div className="overflow-hidden rounded-[3.5rem] shadow-2xl border-8 border-white">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-1000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight">Ready to be our next <br />success story?</h2>
          <p className="text-xl text-slate-500 mb-12">We only partner with businesses we know we can help. Let's find out if we're a match.</p>
          <a href="#/contact" className="inline-block bg-red-500 hover:bg-red-600 text-white px-12 py-6 rounded-full font-black text-2xl hover:bg-red-600 transition-all shadow-2xl shadow-red-500/20">
            Book Your Free Strategy Call
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
