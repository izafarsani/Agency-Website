
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
    <div className="pt-32 pb-24 gradient-mesh min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-20 items-start">
          
          {/* LEFT: STRATEGY & AUTHORITY */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-brand-purple/10 text-brand-purple font-bold text-[10px] uppercase tracking-[0.2em] mb-10">
              <Sparkles className="w-3 h-3" />
              Expert Consultation
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-brand-blue mb-10 tracking-tighter leading-[0.85] font-heading">Start Your <br /><span className="text-brand-purple italic">Takeover.</span></h1>
            
            <p className="text-xl text-slate-500 mb-14 max-w-lg leading-relaxed font-medium">
              We only partner with <span className="text-brand-blue font-bold">4 clients per month</span> to ensure radical attention to detail. Secure your audit before the next slot opens.
            </p>

            <div className="space-y-6 mb-16">
               {[
                 { icon: <Target className="text-brand-red" />, title: "30-Min Strategy Call", desc: "No pitch. Just a roadmap for your growth." },
                 { icon: <Zap className="text-brand-accent" />, title: "Full Performance Audit", desc: "We'll find the conversion leaks in your current funnel." },
                 { icon: <ShieldCheck className="text-green-500" />, title: "Transparent Pricing", desc: "No hidden fees, no retainer traps. Honest value." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm group">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                       {item.icon}
                    </div>
                    <div>
                       <h4 className="font-bold text-lg text-brand-blue mb-1">{item.title}</h4>
                       <p className="text-sm text-slate-500 font-medium leading-tight">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="p-8 rounded-[2.5rem] bg-brand-blue text-white shadow-xl relative overflow-hidden">
               <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-300 mb-4">Urgent Inquiries?</p>
                  {/* Fixed using correct icon ArrowUpRight which is now imported */}
                  <a href={`tel:${formData.email}`} className="text-2xl font-black flex items-center gap-3 hover:text-brand-accent transition-colors">
                     WhatsApp Support <ArrowUpRight className="w-6 h-6" />
                  </a>
               </div>
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* RIGHT: CONVERSION FORM */}
          <div className="lg:col-span-3">
            <div className="bg-white p-10 md:p-16 rounded-[4.5rem] shadow-premium border border-slate-100 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-brand-red via-brand-purple to-brand-accent"></div>
              
              {submitted ? (
                <div className="text-center py-24 animate-fade-in">
                  <div className="w-24 h-24 bg-green-100 text-green-600 flex items-center justify-center rounded-[2.5rem] mx-auto mb-10 shadow-lg">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h2 className="text-5xl font-black mb-6 text-brand-blue tracking-tighter font-heading leading-none">Your Audit is <br />in the works.</h2>
                  <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-sm mx-auto">Our lead strategist will reach out via email in the next 2-4 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-12 bg-brand-blue text-white px-10 py-5 rounded-2xl font-black transition-all hover:scale-105">
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
                      <input 
                        required 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Founder Name" 
                        className="w-full px-8 py-5 rounded-2xl bg-soft border-2 border-transparent focus:border-brand-purple focus:bg-white outline-none transition-all text-lg font-bold placeholder:text-slate-300" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                      <input 
                        required 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@company.com" 
                        className="w-full px-8 py-5 rounded-2xl bg-soft border-2 border-transparent focus:border-brand-purple focus:bg-white outline-none transition-all text-lg font-bold placeholder:text-slate-300" 
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Current Business Stage</label>
                    <div className="relative">
                       <select 
                         name="businessStage"
                         value={formData.businessStage}
                         onChange={handleChange}
                         className="w-full px-8 py-5 rounded-2xl bg-soft border-2 border-transparent focus:border-brand-purple focus:bg-white outline-none transition-all text-lg font-bold appearance-none cursor-pointer"
                       >
                         <option value="Idea Phase">Idea Phase / Pre-seed</option>
                         <option value="Startup">Early Stage Startup (Seed-Series A)</option>
                         <option value="Growing Business">Scaling Business (Growth Mode)</option>
                         <option value="Enterprise">Enterprise Brand</option>
                       </select>
                       <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                          <Plus className="w-5 h-5" />
                       </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">What's your primary goal for this call?</label>
                    <textarea 
                      required 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4} 
                      placeholder="e.g. We need to double our lead flow and fix our branding visuals..." 
                      className="w-full px-8 py-5 rounded-2xl bg-soft border-2 border-transparent focus:border-brand-purple focus:bg-white outline-none transition-all text-lg font-bold placeholder:text-slate-300 resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="space-y-6 pt-6">
                    <button 
                      disabled={loading} 
                      type="submit" 
                      className="w-full bg-brand-red hover:bg-rose-600 text-white py-8 rounded-[2rem] text-2xl font-black shadow-2xl shadow-brand-red/30 transition-all flex items-center justify-center gap-5 active:scale-95 disabled:opacity-50"
                    >
                      {loading ? <Loader2 className="w-8 h-8 animate-spin" /> : <>Claim Your Audit Now <ArrowRight className="w-8 h-8" /></>}
                    </button>
                    <div className="flex flex-col items-center gap-3">
                       <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em]">
                          <ShieldCheck className="w-4 h-4 text-green-500" /> Secure Data Encryption Active
                       </div>
                       <p className="text-[10px] text-slate-400 text-center max-w-xs leading-relaxed">By clicking, you agree to our privacy policy. We'll never spam you or share your email.</p>
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
