
import React from 'react';
import { Rocket, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal text-slate-400 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-blue p-2 rounded-xl">
                <Rocket className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">PixionStudio</span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed font-medium max-w-sm">
              Helping startups build automated growth machines through high-converting design and smart systems.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-black mb-6 text-xs uppercase tracking-[0.2em]">Services</h3>
            <ul className="space-y-4 font-bold text-sm">
              <li><a href="#/services" className="hover:text-brand-accent transition-colors">Web Development</a></li>
              <li><a href="#/services" className="hover:text-brand-accent transition-colors">Branding & Design</a></li>
              <li><a href="#/services" className="hover:text-brand-accent transition-colors">AI Automation</a></li>
              <li><a href="#/services" className="hover:text-brand-accent transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-black mb-6 text-xs uppercase tracking-[0.2em]">Company</h3>
            <ul className="space-y-4 font-bold text-sm">
              <li><a href="#/about" className="hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#/portfolio" className="hover:text-brand-accent transition-colors">Our Portfolio</a></li>
              <li><a href="#/contact" className="hover:text-brand-accent transition-colors">Contact Strategy</a></li>
              <li><a href="#/legal" className="hover:text-brand-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Ready? CTA Card Column */}
          <div className="lg:col-span-4">
            <div 
              className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 group cursor-pointer hover:bg-white/10 transition-all duration-300 relative overflow-hidden h-full flex flex-col justify-center" 
              onClick={() => window.location.hash = '/contact'}
            >
              <div className="relative z-10">
                <h3 className="text-white font-black text-2xl lg:text-3xl mb-4 leading-tight">Scale your <br />idea today.</h3>
                <span className="text-brand-accent text-xs font-black flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest mt-2">
                  Free Growth Audit 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              {/* Background accent decoration */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-blue/20 rounded-full blur-2xl group-hover:bg-brand-blue/30 transition-colors"></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-500 gap-6">
          <p>© 2024 Pixion Studio. Driven by Strategy.</p>
          <div className="flex gap-8">
            <a href="#/legal" className="hover:text-white transition-colors">Terms</a>
            <a href="#/legal" className="hover:text-white transition-colors">Privacy</a>
            <a href="#/legal" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
