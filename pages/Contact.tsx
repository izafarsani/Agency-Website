
import React, { useState } from 'react';
import { Mail, Phone, CheckCircle2, Loader2, Send, MessageSquare, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <div className="pt-32 pb-24 gradient-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-20 items-start">
          <div className="lg:col-span-2">
            <span className="text-brand-purple font-black uppercase tracking-widest text-xs mb-6 inline-block bg-brand-purple/10 px-4 py-2 rounded-lg">Let's Connect</span>
            <h1 className="text-5xl lg:text-8xl font-black text-brand-blue mb-8 tracking-tighter leading-[0.9]">Start your <br /><span className="text-brand-purple">Growth.</span></h1>
            <p className="text-xl text-brand-charcoal/70 mb-12 max-w-lg leading-relaxed font-semibold">
              Ready to stop struggling with your digital presence? We usually respond within 2-4 hours.
            </p>

            <div className="space-y-8 mb-16">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 glass text-brand-purple flex items-center justify-center rounded-2xl group-hover:bg-brand-purple group-hover:text-white transition-all shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-slate-400 uppercase tracking-widest text-[10px] mb-1">Email Our Team</h4>
                  <p className="text-xl font-bold text-brand-blue">hello@pixionstudio.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 glass text-brand-purple flex items-center justify-center rounded-2xl group-hover:bg-brand-purple group-hover:text-white transition-all shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-slate-400 uppercase tracking-widest text-[10px] mb-1">Direct Line</h4>
                  <p className="text-xl font-bold text-brand-blue">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-brand-blue rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
               <div className="relative z-10">
                  <h3 className="text-xl font-black mb-6 text-brand-accent">Why book a call?</h3>
                  <ul className="space-y-4">
                     {[
                        "Receive a custom SEO & UX audit",
                        "Get a predictable growth roadmap",
                        "Clear pricing & scaling strategies"
                     ].map((point, i) => (
                        <li key={i} className="flex gap-3 items-center font-bold text-sm text-indigo-100">
                           <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0" /> {point}
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
                  <CheckCircle2 className="w-24 h-24" />
               </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white p-10 md:p-16 rounded-[3.5rem] shadow-2xl shadow-brand-blue/5 border border-slate-100 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-accent"></div>
              {submitted ? (
                <div className="text-center py-20 animate-fade-in">
                  <div className="w-24 h-24 bg-green-100 text-green-600 flex items-center justify-center rounded-3xl mx-auto mb-10 shadow-lg">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h2 className="text-4xl font-black mb-6 text-brand-blue tracking-tighter">Request Received!</h2>
                  <p className="text-slate-500 text-xl font-semibold leading-relaxed">Our strategists are reviewing your profile. You'll hear from us today.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-12 text-brand-purple font-black uppercase tracking-widest text-xs border-b-2 border-brand-purple">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-xs font-black text-brand-charcoal uppercase tracking-widest ml-1">Full Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-brand-purple focus:bg-white outline-none transition-all text-lg font-bold" />
                    </div>
                    <div className="space-y-4">
                      <label className="text-xs font-black text-brand-charcoal uppercase tracking-widest ml-1">Email Address</label>
                      <input required type="email" placeholder="john@startup.com" className="w-full px-6 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-brand-purple focus:bg-white outline-none transition-all text-lg font-bold" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-xs font-black text-brand-charcoal uppercase tracking-widest ml-1">Your Growth Goals</label>
                    <textarea required rows={5} placeholder="What are your current biggest digital roadblocks?" className="w-full px-6 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-brand-purple focus:bg-white outline-none transition-all text-lg font-bold"></textarea>
                  </div>
                  
                  <button 
                    disabled={loading} 
                    type="submit" 
                    className="w-full bg-brand-red hover:bg-red-600 text-white py-6 rounded-2xl text-2xl font-black shadow-2xl shadow-brand-red/30 transition-all flex items-center justify-center gap-4 active:scale-95 disabled:opacity-50"
                  >
                    {loading ? <Loader2 className="w-8 h-8 animate-spin" /> : <>Book Free Strategy Call <ArrowRight className="w-6 h-6" /></>}
                  </button>

                  <div className="flex justify-center pt-4">
                    <a href="https://wa.me/123456789" className="flex items-center gap-3 text-green-600 font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all">
                      <MessageSquare className="w-4 h-4" /> Instant WhatsApp Chat
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
