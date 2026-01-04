
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass rounded-2xl px-5 lg:px-8 py-3 flex justify-between items-center transition-all duration-300 ${scrolled ? 'shadow-xl shadow-brand-blue/10 bg-white/80' : 'bg-white/60'}`}>
          <div className="flex items-center gap-2 group cursor-pointer shrink-0" onClick={() => window.location.hash = '/'}>
            <div className="bg-brand-blue p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-brand-blue/20">
              <Rocket className="text-white w-5 h-5" />
            </div>
            <span className="text-xl lg:text-2xl font-black text-brand-blue tracking-tighter">Pixion<span className="text-brand-purple">Studio</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-brand-blue rounded-xl hover:bg-slate-50/80 transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pl-4">
              <a
                href="#/contact"
                className="bg-brand-red hover:bg-red-600 text-white px-7 py-3 rounded-xl font-black text-sm transition-all shadow-xl shadow-brand-red/25 active:scale-95 whitespace-nowrap"
              >
                Book a Call
              </a>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-blue p-2 rounded-xl hover:bg-slate-50 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full px-4 pt-3">
          <div className="glass rounded-3xl p-6 shadow-2xl space-y-2 animate-fade-in border border-white/40">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-lg font-bold text-slate-700 hover:text-brand-blue hover:bg-slate-50 rounded-2xl transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#/contact"
                className="block w-full text-center bg-brand-red text-white px-6 py-4 rounded-2xl font-black text-lg shadow-xl shadow-brand-red/20 active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                Book Free Call
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
