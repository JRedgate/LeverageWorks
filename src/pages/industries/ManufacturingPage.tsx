import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const ManufacturingPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'AI & Automation for Manufacturing Companies Alberta | LVRGWRKS (LeverageWorks)',
    description: 'LVRGWRKS helps Alberta manufacturers increase capacity, reduce planning time, and optimize inventory using AI and automation. Proven 7.5x ROI. Based in Calgary.',
    canonical: 'https://www.lvrgwrks.com/industries/manufacturing',
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Industry · Manufacturing</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-brand-navy mb-6 leading-tight">
              Increase Capacity Without Adding Headcount.
            </h1>
            <p className="text-brand-slate text-xl md:text-2xl mb-6 italic">
              AI and automation for Alberta&apos;s manufacturing sector.
            </p>
            <p className="text-brand-slate text-lg leading-relaxed mb-10 max-w-3xl">
              Alberta manufacturers are facing margin compression, input volatility, and growing demand — all with fixed headcount. LVRGWRKS (LeverageWorks) deploys predictive scheduling, production optimization, and integrated data systems that let your existing team do more without burning out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openBriefing()}
                className="bg-brand-navy text-white px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-brand-gold transition-all shadow-lg"
              >
                Request Leverage Audit →
              </button>
              <Link
                to="/capabilities"
                className="border-2 border-brand-navy text-brand-navy px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-all text-center"
              >
                View Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-8">The Manufacturing Problem We Solve</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-3xl">
              Your production scheduling is reactive. Your machine data lives in one system, your sales forecast in another, and your planning team reconciles them manually every week. The result is suboptimal throughput, excess inventory, and missed delivery windows.
            </p>
            
            {/* Case Study Card */}
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-xl">
              <div className="inline-flex items-center gap-2 bg-brand-gold/20 px-4 py-1.5 rounded-full mb-6">
                <span className="text-brand-gold font-bold text-xs uppercase tracking-widest">Verified Case Study · Manufacturing</span>
              </div>
              <h3 className="font-display font-bold text-2xl mb-4">Unlocking Capacity Without Adding Headcount</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                A multi-site North American industrial manufacturer facing margin compression from input volatility and inconsistent production scheduling.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-brand-gold font-display font-bold text-2xl mb-1">14%</div>
                  <p className="text-gray-400 text-xs">Capacity Increase</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-brand-gold font-display font-bold text-2xl mb-1">22%</div>
                  <p className="text-gray-400 text-xs">Reduction in Planning Time</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-brand-gold font-display font-bold text-2xl mb-1">9%</div>
                  <p className="text-gray-400 text-xs">Inventory Reduction</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-brand-gold font-display font-bold text-2xl mb-1">7.5x</div>
                  <p className="text-gray-400 text-xs">ROI Verified</p>
                </div>
              </div>
              <Link
                to="/impact"
                className="inline-flex items-center gap-2 text-brand-gold font-bold text-sm uppercase tracking-widest hover:text-white transition-colors group"
              >
                See Full Case Study
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-12 text-center">What We Build for Manufacturers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-brand-surface p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Predictive Scheduling</h3>
                <p className="text-brand-slate leading-relaxed">
                  AI-driven production scheduling that integrates machine telemetry, sales forecasts, and material availability in real time.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Integrated Data Systems</h3>
                <p className="text-brand-slate leading-relaxed">
                  A single source of truth connecting your ERP, scheduling, inventory, and reporting platforms.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Operating Model Design</h3>
                <p className="text-brand-slate leading-relaxed">
                  Redesigning your planning and operations workflows so your team acts on intelligence, not intuition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Ready to find your capacity?</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            The Leverage Audit maps your production workflows and quantifies where AI can recover margin. Free. 60 minutes.
          </p>
          <button
            onClick={() => openBriefing()}
            className="bg-brand-gold text-brand-navy px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl"
          >
            Request Leverage Audit →
          </button>
        </div>
      </section>
    </>
  );
};
