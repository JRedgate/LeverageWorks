import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { useSEO } from '../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const HomePage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'LVRGWRKS (LeverageWorks) | Fractional CTO & AI Operations Partner | Calgary, AB',
    description: 'LVRGWRKS (LeverageWorks) helps mid-market companies (20-250 employees) in Alberta and Western Canada move AI from experimentation into disciplined operating systems. Fractional CTO services in Calgary.',
    canonical: 'https://www.lvrgwrks.com/',
  });

  return (
    <>
      <Hero
        onCtaClick={() => {
          // Navigate to contact section
          const el = document.getElementById('cta-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onSecondCtaClick={() => {
          window.location.href = '/capabilities';
        }}
      />

      {/* The Problem */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">The Problem</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-10 leading-tight">
              Your platforms do not talk to each other.<br />
              <span className="text-gray-400">Your team is manually moving data between them.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <div className="text-brand-gold font-display font-bold text-4xl mb-4">70%</div>
                <p className="text-gray-400 leading-relaxed">of digital transformation value is lost in the gap between AI capability and organizational execution</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <div className="text-brand-gold font-display font-bold text-4xl mb-4">60</div>
                <p className="text-gray-400 leading-relaxed">days to solve your first bottleneck when you work with LVRGWRKS</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <div className="text-brand-gold font-display font-bold text-4xl mb-4">30</div>
                <p className="text-gray-400 leading-relaxed">days between each Monthly Value Creation Report proving ROI</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-8">
              No single tool can see the whole picture. You have bought software that promised to fix this, but your team is still the glue holding everything together. The result: missed deadlines, costly errors, and leaders making decisions on incomplete information.
            </p>
            <Link
              to="/leverage-audit"
              className="inline-flex items-center gap-2 text-brand-gold font-bold text-sm uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-white transition-all group"
            >
              Get a Free Leverage Audit
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Brief intro pointing to other pages */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">The Firm</span>
            <p className="text-brand-navy text-2xl md:text-4xl leading-relaxed mb-8 font-display font-medium">
              The divide between AI potential and realized value is found in the <span className="text-brand-gold italic">operating model.</span>
            </p>
            <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mx-auto mb-10">
              LVRGWRKS (LeverageWorks) was architected during the Haskayne EMBA to solve a specific problem: the friction between leadership intent and technological execution.
            </p>
            <Link
              to="/firm"
              className="inline-flex items-center gap-2 text-brand-navy font-bold text-sm uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-all group"
            >
              Read Our Thesis
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick links to pages */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/capabilities" className="group bg-white p-10 rounded-xl border border-gray-100 hover:border-brand-gold/30 hover:shadow-xl transition-all">
              <span className="text-brand-gold font-bold tracking-widest text-[10px] uppercase mb-4 block">Capabilities</span>
              <h3 className="font-display font-bold text-2xl text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">Architectural Excellence</h3>
              <p className="text-brand-slate leading-relaxed mb-6">Strategic readiness, execution models, and systems design for the AI-augmented enterprise.</p>
              <span className="text-brand-navy font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:text-brand-gold transition-colors">
                Explore
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link to="/impact" className="group bg-white p-10 rounded-xl border border-gray-100 hover:border-brand-gold/30 hover:shadow-xl transition-all">
              <span className="text-brand-gold font-bold tracking-widest text-[10px] uppercase mb-4 block">Impact</span>
              <h3 className="font-display font-bold text-2xl text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">Proven Execution</h3>
              <p className="text-brand-slate leading-relaxed mb-6">Representative scenarios where we closed the gap between AI potential and measurable performance.</p>
              <span className="text-brand-navy font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:text-brand-gold transition-colors">
                View Cases
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            <Link to="/contact" className="group bg-brand-navy p-10 rounded-xl hover:bg-brand-slate transition-all">
              <span className="text-brand-gold font-bold tracking-widest text-[10px] uppercase mb-4 block">Connect</span>
              <h3 className="font-display font-bold text-2xl text-white mb-4">Start the Conversation</h3>
              <p className="text-gray-400 leading-relaxed mb-6">Tell us what you are working through. Open a direct line to a LVRGWRKS strategist.</p>
              <span className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:text-brand-gold transition-colors">
                Request Leverage Audit
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta-section" className="py-20 md:py-32 bg-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-5xl md:text-7xl text-brand-navy mb-8 tracking-tight">Scale Your Execution.</h2>
          <p className="text-brand-slate max-w-xl mx-auto mb-12 text-lg leading-relaxed">
            Ensure technology serves leadership intent at scale. Ready to move beyond experimentation?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <button
              onClick={() => openBriefing()}
              className="bg-brand-navy text-white px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-brand-gold transition-all shadow-xl hover:shadow-brand-gold/20"
            >
              Request Leverage Audit
            </button>
            <Link
              to="/firm"
              className="text-brand-navy text-sm font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-all"
            >
              The Firm Thesis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
