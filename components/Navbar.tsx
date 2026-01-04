
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LOGO_PURPLE } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#/' },
    { name: 'Services', href: '#/services' },
    { name: 'Portfolio', href: '#/portfolio' },
    { name: 'About', href: '#/about' },
    { name: 'Contact', href: '#/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-3 md:py-4' : 'py-6 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass rounded-[1.5rem] md:rounded-[2rem] px-4 md:px-10 py-3 md:py-4 flex justify-between items-center transition-all duration-500 ${scrolled ? 'shadow-premium bg-white/95 border-slate-100' : 'bg-white/40 border-transparent'}`}>
          <div className="flex items-center group cursor-pointer shrink-0" onClick={() => window.location.hash = '/'}>
            <img 
              src={LOGO_PURPLE} 
              alt="Pixion Studio" 
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 lg:px-5 py-2.5 text-[12px] lg:text-[13px] font-bold text-slate-600 hover:text-brand-blue rounded-full hover:bg-slate-100/50 transition-all tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <div className="pl-4 lg:pl-6 ml-2 lg:ml-4 border-l border-slate-200">
              <a
                href="#/contact"
                className="bg-brand-red hover:bg-rose-600 text-white px-5 lg:px-8 py-3 rounded-full font-black text-xs lg:text-sm transition-all shadow-xl shadow-brand-red/10 hover:shadow-brand-red/20 active:scale-95 whitespace-nowrap"
              >
                Book Strategy Call
              </a>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-blue p-2 rounded-xl hover:bg-slate-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full px-4 pt-2 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="glass rounded-[2rem] p-6 shadow-premium border border-white/60 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 text-lg font-bold text-slate-800 hover:text-brand-blue rounded-xl transition-all border-b border-slate-50 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#/contact"
              className="block w-full text-center bg-brand-red text-white px-8 py-4 rounded-[1.2rem] font-black text-base shadow-xl shadow-brand-red/20 active:scale-95"
              onClick={() => setIsOpen(false)}
            >
              Claim Free Audit
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
