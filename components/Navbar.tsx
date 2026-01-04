
import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`glass rounded-[2rem] px-6 lg:px-10 py-4 flex justify-between items-center transition-all duration-500 ${scrolled ? 'shadow-premium bg-white/95 border-slate-100' : 'bg-white/40 border-transparent'}`}>
          <div className="flex items-center gap-3 group cursor-pointer shrink-0" onClick={() => window.location.hash = '/'}>
            <div className="bg-brand-blue p-2.5 rounded-2xl group-hover:rotate-6 transition-transform duration-500 shadow-xl shadow-brand-blue/10">
              <Rocket className="text-white w-5 h-5" />
            </div>
            <span className="text-2xl font-black text-brand-blue tracking-tight font-heading">Pixion<span className="text-brand-purple">Studio</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2.5 text-[13px] font-bold text-slate-600 hover:text-brand-blue rounded-full hover:bg-slate-100/50 transition-all tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <div className="pl-6 ml-4 border-l border-slate-200">
              <a
                href="#/contact"
                className="bg-brand-red hover:bg-rose-600 text-white px-8 py-3.5 rounded-full font-black text-sm transition-all shadow-xl shadow-brand-red/10 hover:shadow-brand-red/20 active:scale-95 whitespace-nowrap"
              >
                Book Strategy Call
              </a>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-blue p-2.5 rounded-2xl hover:bg-slate-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full px-6 pt-4 transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="glass rounded-[2.5rem] p-8 shadow-premium border border-white/60 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-4 text-xl font-bold text-slate-800 hover:text-brand-blue rounded-2xl transition-all border-b border-slate-50 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="#/contact"
              className="block w-full text-center bg-brand-red text-white px-8 py-5 rounded-[1.5rem] font-black text-lg shadow-xl shadow-brand-red/20 active:scale-95"
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
