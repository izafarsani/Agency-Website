
import React, { useState } from 'react';
import { Mail, Phone, CheckCircle2, Loader2, Send, MessageSquare, ArrowRight, ArrowUpRight, ShieldCheck, Clock, CheckCircle, Plus, Sparkles, Target, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    businessStage: 'Startup'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again or contact us via WhatsApp.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 gradient-mesh min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          
          {/* LEFT: STRATEGY & AUTHORITY */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-brand-purple/10 text-brand-purple font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-6 md:mb-10">
              <Sparkles className="w-3 h-3" />
              Expert Consultation
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-brand-blue mb-8 md:mb-10 tracking-tighter leading-[1] md:leading-[0.85] font-heading">Start Your <br /><span className="text-brand-purple italic">Takeover.</span></h1>
            
            <p className="text-lg md:text-xl text-slate-500 mb-10 md:mb-14 max-w-lg leading-relaxed font-medium">
              We only partner with <span className="text-brand-blue font-bold">4 clients per month</span> to ensure radical attention to detail. Secure your audit before the next slot opens.
            </p>

            <div className="space-y-4 md:space-y-6 mb-12 md:mb-16">
               {[
                 { icon: <Target className="text-brand-red w-5 h-5 md:w-6 md:h-6" />, title: "30-Min Strategy Call", desc: "No pitch. Just a roadmap for your growth." },
                 { icon: <Zap className="text-brand-accent w-5 h-5 md:w-6 md:h-6" />, title: "Full Performance Audit", desc: "We'll find the conversion leaks in your current funnel." },
                 { icon: <ShieldCheck className="text-green-500 w-5 h-5 md:w-6 md:h-6" />, title: "Transparent Pricing", desc: "No hidden fees, no retainer traps. Honest value." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 md:gap-6 p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white border border-slate-100 shadow-sm group">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                       {item.icon}
                    </div>
                    <div>
                       <h4 className="font-bold text-base md:text-lg text-brand-blue mb-1">{item.title}</h4>
                       <p className="text-xs md:text-sm text-slate-500 font-medium leading-tight">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-brand-blue text-white shadow-xl relative overflow-hidden">
               <div className="relative z-10">
                  <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-indigo-300 mb-3 md:mb-4">Urgent Inquiries?</p>
                  <a href="#" className="text-xl md:text-2xl font-black flex items-center gap-3 hover:text-brand-accent transition-colors">
                     WhatsApp Support <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                  </a>
               </div>
               <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* RIGHT: CONVERSION FORM */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-16 rounded-[2.5rem] md:rounded-[4.5rem] shadow-premium border border-slate-100 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 md:h-3 bg-gradient-to-r from-brand-red via-brand-purple to-brand-accent"></div>
              
              {submitted ? (
                <div className="text-center py-12 md:py-24 animate-fade-in">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-green-100 text-green-600 flex items-center justify-center rounded-[1.5rem] md:rounded-[2.5rem] mx-auto mb-8 md:mb-10 shadow-lg">
                    <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 text-brand-blue tracking-tighter font-heading leading-none">Your Audit is <br />in the works.</h2>
                  <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-xs md:max-w-sm mx-auto">Our lead strategist will reach out via email in the next 2-4 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 md:mt-12 bg-brand-blue text-white px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-black transition-all hover:scale-105">
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <div className="space-y-2 md:space-y-3">
                      <label className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
                      <input 
                        required 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Founder Name" 
                        className="w-full px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl bg-soft border-2 border-transparent focus:border-brand-purple focus:bg-white outline-none transition-all text-base md:text-lg font-bold placeholder:text-slate-300" 
                      />
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <label className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                      <input 
                        required 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@company.com" 
                        className="w-full px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl bg-soft border-2 border-transparent focus:border-brand-purple focus:bg-white outline-none transition-all text-base md:text-lg font-bold placeholder:text-slate-300" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Current Business Stage</label>
                    <div className="relative">
                       <select 
                         name="businessStage"
                         value={formData.businessStage}
                         onChange={handleChange}
                         className="w-full px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl bg-soft border-2 border-transparent focus:border-brand-purple focus:bg-white outline-none transition-all text-base md:text-lg font-bold appearance-none cursor-pointer"
                       >
                         <option value="Idea Phase">Idea Phase / Pre-seed</option>
                         <option value="Startup">Early Stage Startup (Seed-Series A)</option>
                         <option value="Growing Business">Scaling Business (Growth Mode)</option>
                         <option value="Enterprise">Enterprise Brand</option>
                       </select>
                       <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                          <Plus className="w-5 h-5" />
                       </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">What's your primary goal?</label>
                    <textarea 
                      required 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4} 
                      placeholder="e.g. We need to double our lead flow and fix our branding visuals..." 
                      className="w-full px-6 py-4 md:px-8 md:py-5 rounded-xl md:rounded-2xl bg-soft border-2 border-transparent focus:border-brand-purple focus:bg-white outline-none transition-all text-base md:text-lg font-bold placeholder:text-slate-300 resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="space-y-6 pt-4 md:pt-6">
                    <button 
                      disabled={loading} 
                      type="submit" 
                      className="w-full bg-brand-red hover:bg-rose-600 text-white py-6 md:py-8 rounded-xl md:rounded-[2rem] text-xl md:text-2xl font-black shadow-2xl shadow-brand-red/30 transition-all flex items-center justify-center gap-4 md:gap-5 active:scale-95 disabled:opacity-50"
                    >
                      {loading ? <Loader2 className="w-6 h-6 md:w-8 md:h-8 animate-spin" /> : <>Claim Your Audit Now <ArrowRight className="w-6 h-6 md:w-8 md:h-8" /></>}
                    </button>
                    <div className="flex flex-col items-center gap-2 md:gap-3">
                       <div className="flex items-center gap-2 text-slate-400 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em]">
                          <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-green-500" /> Secure Data Encryption Active
                       </div>
                       <p className="text-[9px] md:text-[10px] text-slate-400 text-center max-w-xs leading-relaxed">By clicking, you agree to our privacy policy. We'll never spam you or share your email.</p>
                    </div>
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
