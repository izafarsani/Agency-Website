
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Settings, Save, X, RefreshCw } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import { DEFAULT_WP_CONTENT } from './constants';
import { WPContent } from './types';

// WordPress Simulation Context
const ContentContext = createContext<{
  content: WPContent;
  setContent: (content: WPContent) => void;
  isAdmin: boolean;
  setAdmin: (isAdmin: boolean) => void;
} | null>(null);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within Provider');
  return context;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [content, setContent] = useState<WPContent>(() => {
    const saved = localStorage.getItem('pixion_cms_data');
    return saved ? JSON.parse(saved) : DEFAULT_WP_CONTENT;
  });

  const saveContent = () => {
    localStorage.setItem('pixion_cms_data', JSON.stringify(content));
    alert('Theme settings saved to mock database!');
  };

  const resetContent = () => {
    setContent(DEFAULT_WP_CONTENT);
    localStorage.removeItem('pixion_cms_data');
  };

  return (
    <ContentContext.Provider value={{ content, setContent, isAdmin, setAdmin: setIsAdmin }}>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen selection:bg-brand-purple selection:text-white">
          
          {/* Simulated WP Admin Bar */}
          {isAdmin && (
            <div className="fixed top-0 left-0 w-full h-10 bg-slate-900 z-[100] flex items-center justify-between px-4 text-xs font-bold text-slate-300 border-b border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 text-white">
                  <Settings className="w-3 h-3" /> WP-Theme Admin Mode
                </span>
                <button onClick={saveContent} className="flex items-center gap-1.5 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500 transition-colors">
                  <Save className="w-3 h-3" /> Update Theme
                </button>
                <button onClick={resetContent} className="flex items-center gap-1.5 bg-slate-700 px-3 py-1 rounded hover:bg-slate-600 transition-colors">
                  <RefreshCw className="w-3 h-3" /> Reset Defaults
                </button>
              </div>
              <button onClick={() => setIsAdmin(false)} className="text-slate-500 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          <Navbar />
          
          <main className={`flex-grow ${isAdmin ? 'mt-10' : ''}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/legal" element={<Legal />} />
            </Routes>
          </main>
          
          <Footer />
          
          {/* Sticky Mobile CTA - REFINED FOR CONVERSION */}
          <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-40">
            <a 
              href="#/contact" 
              className="block w-full bg-brand-red text-white text-center py-5 rounded-[1.5rem] font-black text-lg shadow-premium shadow-brand-red/30 active:scale-95"
            >
              Get Free Strategy Session
            </a>
          </div>
        </div>
      </Router>
    </ContentContext.Provider>
  );
};

export default App;
