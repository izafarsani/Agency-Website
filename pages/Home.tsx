
import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Star, Plus, XCircle, Zap, ShieldCheck, Target, Rocket, PlayCircle } from 'lucide-react';
import { SERVICES, CASE_STUDIES, TESTIMONIALS, FAQS, CLIENT_LOGOS } from '../constants';

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="overflow-hidden gradient-mesh">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-purple opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-brand-accent opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-brand-red opacity-10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-brand-blue font-extrabold text-xs uppercase tracking-widest mb-10 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-red animate-pulse"></span>
            Helping startups scale in 2024
          </div>
          <h1 className="text-5xl lg:text-[5.5rem] font-black text-brand-blue mb-8 tracking-tighter leading-[0.95] max-w-5xl mx-auto">
            Build, Scale, and <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-accent">Automate Your Success</span>
          </h1>
          <p className="text-xl text-brand-charcoal/80 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            From high-converting websites to smart AI automation — we help startups and growing businesses build systems that work while you sleep.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#/contact" className="w-full sm:w-auto bg-brand-red hover:bg-red-600 text-white px-10 py-5 rounded-2xl text-lg font-black transition-all shadow-2xl shadow-brand-red/30 flex items-center justify-center gap-3 group hover:scale-105 active:scale-95">
              Get Your Free Strategy Call
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#/services" className="w-full sm:w-auto glass hover:bg-white px-10 py-5 rounded-2xl text-lg font-bold text-brand-blue transition-all flex items-center justify-center gap-2 hover:shadow-lg">
              <PlayCircle className="w-6 h-6" /> Our Approach
            </a>
          </div>
          
          <div className="mt-24 relative max-w-5xl mx-auto p-4 glass rounded-[2.5rem] shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-brand-blue/5 group-hover:bg-transparent transition-colors duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=600" 
              alt="Digital Growth Dashboard" 
              className="rounded-3xl w-full shadow-inner transform transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 2. Logo Marquee */}
      <section className="py-20 bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <p className="text-center text-slate-400 font-black text-xs uppercase tracking-[0.3em]">Trusted by high-growth startups globally</p>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-scroll whitespace-nowrap gap-16 md:gap-32 items-center grayscale opacity-40 py-4">
            {CLIENT_LOGOS.concat(CLIENT_LOGOS).map((logo, i) => (
              <img key={i} src={logo} alt="Client" className="h-8 md:h-12 w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Problem & Solution Section */}
      <section className="py-32 bg-brand-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <div>
              <span className="text-brand-purple font-black text-xs uppercase tracking-widest block mb-4">The Challenge</span>
              <h2 className="text-4xl lg:text-6xl font-black text-brand-blue mb-8 tracking-tighter leading-none">Why most startups <br />fail to scale.</h2>
              <div className="space-y-6">
                {[
                  { title: "Non-Converting Digital Hub", desc: "A website that looks okay but fails to capture leads or drive sales." },
                  { title: "Manual Operation Fatigue", desc: "Founders spending 80% of time on tasks that should be automated." },
                  { title: "Fragmented Identity", desc: "Branding that feels amateur and scares away serious investors." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group p-4 rounded-2xl hover:bg-white transition-colors">
                    <div className="w-10 h-10 bg-red-100 text-brand-red flex items-center justify-center rounded-xl shrink-0">
                      <XCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-charcoal text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="glass p-10 rounded-[3rem] shadow-2xl relative z-10">
                 <div className="bg-brand-blue/5 p-8 rounded-2xl border-2 border-dashed border-brand-blue/20 mb-8">
                    <h4 className="text-brand-blue font-black mb-4 flex items-center gap-2">
                       <Zap className="w-5 h-5 fill-brand-blue" /> The Pixion Solution
                    </h4>
                    <p className="text-slate-600 font-medium italic">"We don't just build sites; we build automated growth machines that turn visitors into revenue."</p>
                 </div>
                 <div className="flex gap-4">
                    <div className="p-4 bg-brand-green/10 rounded-2xl flex-1 text-center">
                       <p className="text-2xl font-black text-brand-purple">40%+</p>
                       <p className="text-[10px] uppercase font-bold text-slate-400">Avg. Conversion</p>
                    </div>
                    <div className="p-4 bg-brand-purple/10 rounded-2xl flex-1 text-center">
                       <p className="text-2xl font-black text-brand-purple">20hrs+</p>
                       <p className="text-[10px] uppercase font-bold text-slate-400">Saved Weekly</p>
                    </div>
                 </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => (
              <div key={s.id} className="group p-10 rounded-[2.5rem] glass hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 bg-brand-gray text-brand-purple flex items-center justify-center rounded-2xl mb-8 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-blue group-hover:text-brand-purple transition-colors">{s.title}</h3>
                <p className="text-slate-500 mb-8 text-sm leading-relaxed font-medium">{s.description}</p>
                <div className="pt-6 border-t border-slate-100">
                   <a href="#/contact" className="text-brand-purple font-black uppercase text-xs tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                    Start Scaling <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Portfolio Showcase */}
      <section className="py-32 bg-brand-charcoal text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-xl">
              <span className="text-brand-accent font-black text-xs uppercase tracking-widest block mb-4">Case Studies</span>
              <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter">Results that <br />speak for themselves.</h2>
            </div>
            <a href="#/portfolio" className="mb-2 px-10 py-4 glass text-white rounded-2xl font-black hover:bg-white hover:text-brand-charcoal transition-all">
              See All Results
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {CASE_STUDIES.slice(0, 2).map((project) => (
              <div key={project.id} className="group cursor-pointer" onClick={() => window.location.hash = '/portfolio'}>
                <div className="overflow-hidden rounded-[2.5rem] mb-8 relative aspect-[16/10]">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                     <span className="px-4 py-1.5 bg-brand-accent/20 backdrop-blur-md text-brand-accent text-[10px] font-black uppercase tracking-widest rounded-full border border-brand-accent/20">{project.category}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-4 group-hover:text-brand-accent transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-lg font-medium mb-6 line-clamp-2">{project.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials & FAQ Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-5 gap-16">
              <div className="lg:col-span-2">
                 <h2 className="text-4xl lg:text-5xl font-black text-brand-blue mb-8 tracking-tighter">Loved by <br />Founder teams.</h2>
                 <div className="space-y-8">
                    {TESTIMONIALS.slice(0, 2).map(t => (
                      <div key={t.id} className="glass p-8 rounded-3xl border border-brand-gray">
                        <div className="flex gap-1 text-brand-red mb-6">
                           {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-brand-charcoal font-semibold text-lg mb-8 italic">"{t.content}"</p>
                        <div className="flex items-center gap-4">
                           <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full ring-4 ring-white shadow-lg" />
                           <div>
                              <h4 className="font-bold text-brand-blue">{t.name}</h4>
                              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{t.company}</p>
                           </div>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="lg:col-span-3">
                 <h3 className="text-3xl font-black text-brand-blue mb-8">FAQ</h3>
                 <div className="space-y-4">
                    {FAQS.map((faq, i) => (
                      <div key={i} className="rounded-3xl border border-slate-100 overflow-hidden transition-all bg-brand-gray/20">
                        <button 
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full px-8 py-6 text-left flex justify-between items-center"
                        >
                          <span className="font-bold text-lg text-brand-blue">{faq.question}</span>
                          <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform ${openFaq === i ? 'rotate-180 text-brand-red shadow-lg' : 'text-slate-400'}`}>
                            <Plus className="w-5 h-5" />
                          </div>
                        </button>
                        <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="px-8 pb-8 text-slate-600 font-medium leading-relaxed pt-2">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="py-32 relative overflow-hidden text-center px-4">
        <div className="absolute inset-0 bg-brand-blue -z-10">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000" alt="Growth" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-5xl lg:text-8xl font-black mb-10 leading-[0.9] tracking-tighter">Ready to Build a Website That <br /><span className="text-brand-accent italic">Actually Grows?</span></h2>
          <p className="text-xl text-slate-300 mb-16 max-w-2xl mx-auto font-medium">Stop losing leads to a poor digital presence. Let's build your growth engine today.</p>
          <a href="#/contact" className="inline-flex items-center gap-4 bg-brand-red hover:bg-red-600 text-white px-12 py-6 rounded-2xl text-2xl font-black shadow-2xl shadow-brand-red/40 transition-all hover:scale-105 active:scale-95">
            Book Your Free Strategy Call
            <ArrowRight className="w-8 h-8" />
          </a>
        </div>
      </section>

      {/* WhatsApp FAB */}
      <a href="https://wa.me/123456789" className="fixed bottom-10 right-10 z-50 bg-green-500 text-white p-5 rounded-2xl shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center gap-3 group">
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-black text-xs uppercase tracking-widest">Chat with us</span>
      </a>
    </div>
  );
};

export default Home;
