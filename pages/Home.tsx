
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, MessageSquare, Star, Plus, 
  XCircle, Zap, Globe, Cpu, Palette, Search, Layout, Code, Rocket,
  TrendingUp, ArrowUpRight, ShieldCheck, Clock, Users, BarChart3, 
  MousePointer2, Sparkles, ZapIcon
} from 'lucide-react';
import { CLIENT_LOGOS } from '../constants';
import { useContent } from '../App';

const iconMap: any = { Globe, Cpu, Palette, Search, Layout, Code, Rocket, Users, BarChart3, Zap };

const Home: React.FC = () => {
  const { content } = useContent();
  const [spotsLeft, setSpotsLeft] = useState(3);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setSpotsLeft(2), 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden gradient-mesh">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-40">
        <div className="absolute top-0 -left-10 w-[600px] h-[600px] bg-brand-blue opacity-[0.04] rounded-full filter blur-[120px] animate-blob"></div>
        <div className="absolute bottom-0 -right-10 w-[600px] h-[600px] bg-brand-purple opacity-[0.04] rounded-full filter blur-[120px] animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-brand-blue/5 border border-brand-blue/10 text-brand-blue font-bold text-[10px] uppercase tracking-[0.2em] mb-10 shadow-sm">
              <Sparkles className="w-3 h-3 text-brand-purple" />
              Strategic Growth Partner for 2024
            </div>

            <h1 className="text-6xl lg:text-[100px] font-black text-brand-blue mb-10 tracking-tighter leading-[0.9] max-w-6xl mx-auto text-balance font-heading">
              We Help Startups Build, <br />
              <span className="text-brand-red italic">Scale, & Automate.</span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-500 max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
              From high-converting websites and strong branding to digital marketing and AI automation — we help you grow faster with smart systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 w-full">
              <a href="#/contact" className="w-full sm:w-auto bg-brand-red hover:bg-rose-600 text-white px-16 py-7 rounded-[2.5rem] text-2xl font-black transition-all shadow-premium hover:scale-[1.02] flex items-center justify-center gap-4 group active:scale-95">
                Book Free Strategy Call
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="#/services" className="w-full sm:w-auto glass hover:bg-white px-14 py-6 rounded-[2rem] text-xl font-bold text-brand-blue transition-all flex items-center justify-center gap-2 border-slate-200/50">
                View Our Services
              </a>
            </div>

            <div className="flex items-center gap-8 py-4 px-8 rounded-2xl bg-slate-50 border border-slate-100 mb-10">
               <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[11px] font-black text-slate-600 uppercase tracking-widest italic">Only {spotsLeft} Slots Left for March</span>
               </div>
               <div className="h-4 w-px bg-slate-200"></div>
               <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Strategy-driven, results-focused approach</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST SIGNALS */}
      <section className="py-20 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.4em]">Trusted by high-growth startups globally</p>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-scroll whitespace-nowrap gap-20 md:gap-40 items-center grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700 py-4">
            {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((logo, i) => (
              <img key={i} src={logo} alt="Client" className="h-8 md:h-12 w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className="py-32 bg-soft relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-7xl font-black text-brand-blue tracking-tight font-heading">Do any of these sound familiar?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {content.problemPoints.map((point, i) => (
               <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-red-50 text-brand-red flex items-center justify-center mb-8">
                     <XCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue mb-4 leading-tight">{point.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{point.description}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. SOLUTION / PROCESS SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-24">
              <span className="text-brand-purple font-black text-[11px] uppercase tracking-[0.4em] block mb-8">Our System</span>
              <h2 className="text-4xl lg:text-7xl font-black text-brand-blue tracking-tight font-heading">Engineered for ROI.</h2>
           </div>
           <div className="grid lg:grid-cols-4 gap-8">
              {content.processSteps.map((step) => {
                const Icon = iconMap[step.icon] || Zap;
                return (
                  <div key={step.id} className="relative p-12 rounded-[3.5rem] bg-soft border border-slate-100 card-hover flex flex-col items-center text-center group">
                     <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-10 group-hover:bg-brand-purple group-hover:text-white transition-all">
                        <Icon className="w-8 h-8" />
                     </div>
                     <span className="absolute top-10 right-10 text-5xl font-black text-slate-200/50">0{step.id}</span>
                     <h3 className="text-2xl font-black text-brand-blue mb-4 font-heading tracking-tight">{step.title}</h3>
                     <p className="text-slate-500 font-medium leading-relaxed">{step.description}</p>
                  </div>
                )
              })}
           </div>
           <div className="mt-20 text-center">
              <a href="#/contact" className="inline-flex items-center gap-4 bg-brand-blue text-white px-12 py-6 rounded-2xl font-black hover:scale-105 transition-all">
                 Book Free Strategy Call <ArrowRight className="w-6 h-6" />
              </a>
           </div>
        </div>
      </section>

      {/* 5. SERVICES OVERVIEW */}
      <section className="py-32 bg-brand-charcoal text-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
             <h2 className="text-4xl lg:text-7xl font-black tracking-tighter leading-none italic mb-8">All-In-One Growth Tools.</h2>
             <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">We don't just build sites; we build the digital infrastructure that generates business outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.services.map((s) => {
              const Icon = iconMap[s.icon] || Globe;
              return (
                <div key={s.id} className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-500 group flex flex-col h-full">
                  <div className="w-16 h-16 bg-brand-accent/15 text-brand-accent flex items-center justify-center rounded-2xl mb-10 group-hover:bg-brand-accent group-hover:text-brand-charcoal transition-all">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black mb-6 leading-tight font-heading tracking-tight">{s.title}</h3>
                  <div className="space-y-4 mb-10 flex-grow">
                    <div className="flex gap-3 items-start opacity-70 italic text-sm">
                       <XCircle className="w-4 h-4 text-brand-red shrink-0 mt-1" />
                       <p>{s.problem}</p>
                    </div>
                    <div className="flex gap-3 items-start text-brand-accent font-bold">
                       <CheckCircle2 className="w-4 h-4 shrink-0 mt-1" />
                       <p>{s.result}</p>
                    </div>
                  </div>
                  <a href="#/services" className="text-brand-accent font-black uppercase text-[11px] tracking-[0.3em] flex items-center gap-3 mt-auto">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
          <div className="mt-20 text-center">
             <a href="#/contact" className="inline-flex items-center gap-4 bg-brand-red text-white px-12 py-6 rounded-2xl font-black hover:scale-105 transition-all">
                Book a Free Website Consultation
             </a>
          </div>
        </div>
      </section>

      {/* 6. PORTFOLIO PREVIEW */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
              <div className="max-w-2xl">
                 <span className="text-brand-purple font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Proof of Performance</span>
                 <h2 className="text-5xl lg:text-7xl font-black text-brand-blue tracking-tighter">Results Over Fluff.</h2>
              </div>
              <a href="#/portfolio" className="text-brand-blue font-bold text-lg flex items-center gap-3 group">
                 View Full Portfolio <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
           </div>
           <div className="grid md:grid-cols-2 gap-12">
              {content.caseStudies.map(project => (
                 <div key={project.id} className="group">
                    <div className="relative overflow-hidden rounded-[3rem] aspect-video mb-8 border border-slate-100 shadow-premium">
                       <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]" />
                       <div className="absolute inset-0 bg-gradient-to-t from-brand-blue to-transparent opacity-60"></div>
                       <div className="absolute bottom-10 left-10">
                          <p className="text-brand-accent font-black uppercase tracking-widest text-xs mb-2">{project.category}</p>
                          <h3 className="text-3xl font-black text-white">{project.title}</h3>
                       </div>
                    </div>
                    <div className="flex items-center gap-4 p-8 bg-soft rounded-[2rem] border border-slate-100 group-hover:border-brand-purple/20 transition-all">
                       <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                          <TrendingUp className="w-6 h-6" />
                       </div>
                       <p className="font-bold text-lg text-brand-blue">{project.result}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-32 bg-soft">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
               <h2 className="text-4xl lg:text-7xl font-black text-brand-blue tracking-tight font-heading">Client Realities.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
               {content.testimonials.map(t => (
                  <div key={t.id} className="p-14 rounded-[4rem] bg-white border border-slate-100 shadow-premium relative group card-hover">
                     <div className="flex gap-1.5 text-yellow-400 mb-10">
                        {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                     </div>
                     <p className="text-2xl font-bold text-brand-blue leading-relaxed mb-12 italic">"{t.content}"</p>
                     <div className="flex items-center gap-5">
                        <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-2xl object-cover shadow-lg" />
                        <div>
                           <h4 className="font-black text-lg text-brand-blue">{t.name}</h4>
                           <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">{t.role} @ {t.company}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
           <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-black text-brand-blue tracking-tight font-heading">Objection Handling</h2>
           </div>
           <div className="space-y-4">
              {content.faqs.map((faq, i) => (
                 <div key={i} className="bg-soft rounded-3xl border border-slate-100 overflow-hidden">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full p-10 flex justify-between items-center text-left group"
                    >
                       <span className="text-xl font-black text-brand-blue font-heading tracking-tight">{faq.question}</span>
                       <Plus className={`w-6 h-6 text-brand-purple transition-transform duration-500 ${openFaq === i ? 'rotate-45' : ''}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-96 pb-10' : 'max-h-0'}`}>
                       <p className="px-10 text-lg text-slate-500 font-medium leading-relaxed">{faq.answer}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-48 bg-brand-blue text-center px-6 relative overflow-hidden">
         <div className="max-w-5xl mx-auto relative z-10 text-white">
            <h2 className="text-5xl lg:text-[100px] font-black mb-12 tracking-tighter leading-[0.9] font-heading">Ready for a Website <br /><span className="text-brand-accent uppercase not-italic">That Grows?</span></h2>
            <p className="text-2xl text-slate-300 mb-16 font-medium max-w-2xl mx-auto leading-relaxed">Book your free 30-minute growth audit and discover exactly where your conversion leaks are.</p>
            <a href="#/contact" className="inline-flex items-center gap-5 bg-brand-red hover:bg-rose-600 text-white px-16 py-8 rounded-[2.5rem] text-2xl font-black shadow-2xl transition-all hover:scale-105 active:scale-95 group">
               Book Your Free Strategy Call
               <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
            </a>
         </div>
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-charcoal opacity-50"></div>
      </section>

      {/* WHATSAPP FAB */}
      <a 
        href={`https://wa.me/${content.theme.whatsappNumber}`} 
        className="fixed bottom-10 right-10 z-50 bg-[#25D366] text-white p-5 rounded-[1.8rem] shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-3 group border border-white/20"
      >
        <MessageSquare className="w-8 h-8 fill-white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 whitespace-nowrap font-black text-[11px] uppercase tracking-[0.3em] ml-1">Live Chat</span>
      </a>
    </div>
  );
};

export default Home;
