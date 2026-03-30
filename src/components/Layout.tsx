import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BriefingModal } from './BriefingModal';
import { LwSymbol } from './Logo';

export const Layout: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [briefingOpen, setBriefingOpen] = useState(false);
  const [briefingMessage, setBriefingMessage] = useState('');
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const openBriefing = (message?: string) => {
    if (message) setBriefingMessage(message);
    setBriefingOpen(true);
  };

  const closeBriefing = () => {
    setBriefingOpen(false);
    setBriefingMessage('');
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] bg-brand-navy flex flex-col items-center justify-center p-6">
        <LwSymbol color="#FFFFFF" className="w-16 h-16 mb-8 animate-pulse" />
        <h2 className="text-white text-[11px] font-medium tracking-[0.5em] uppercase mb-12 opacity-90 text-center">
          Architecting Intelligence
        </h2>
        <div className="w-40 h-[1px] bg-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-gold animate-progress h-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-surface flex flex-col font-sans">
      <Navbar onContactClick={() => openBriefing()} />
      <main className="flex-1">
        <Outlet context={{ openBriefing }} />
      </main>
      <Footer />
      <BriefingModal isOpen={briefingOpen} onClose={closeBriefing} initialMessage={briefingMessage} />
    </div>
  );
};

// Hook for pages to access briefing modal
export function useLayoutContext() {
  const context = React.useContext(React.createContext<{ openBriefing: (message?: string) => void } | null>(null));
  return context;
}
