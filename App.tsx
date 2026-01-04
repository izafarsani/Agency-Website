
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
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
        
        {/* Sticky CTA for Mobile/Global */}
        <div className="md:hidden fixed bottom-0 left-0 w-full p-4 z-40">
          <a 
            href="#/contact" 
            className="block w-full bg-red-500 text-white text-center py-4 rounded-xl font-bold shadow-2xl shadow-red-500/30"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </Router>
  );
};

export default App;
