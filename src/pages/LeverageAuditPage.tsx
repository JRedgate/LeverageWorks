import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { LwSymbol } from '../components/Logo';
import { useSEO } from '../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const LeverageAuditPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'Free Leverage Audit | LVRGWRKS (LeverageWorks) - 60-Minute AI Strategy Session',
    description: 'Request a free 60-minute Leverage Audit with LVRGWRKS. We map friction, quantify labour costs, and recommend a clear path forward for your AI and operating model transformation.',
    canonical: 'https://www.lvrgwrks.com/leverage-audit',
  });

  return (
    <>
      {/* Hero */}
      <header className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-navy">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <LwSymbol className="w-96 h-96" color="#FFFFFF" />
        </div>
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">Free 60-Minute Call</span>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-white mb-8 tracking-tight">
              The Leverage <span className="text-gray-400 italic">Audit.</span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-10">
              A complimentary 60-minute diagnostic session where we map your organizational friction, quantify the labour cost, and recommend a clear engagement tier before the call ends.
            </p>
            <button
              onClick={() => openBriefing()}
              className="bg-brand-gold text-brand-navy px-10 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 hover:bg-white transition-all shadow-lg group"
            >
              Request Your Audit
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>
      </header>

      {/* What You Get */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">What You Get</span>
            <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Five Deliverables in 60 Minutes</h2>
            <p className="text-brand-slate text-lg leading-relaxed">
              The Leverage Audit is not a sales call. It is a working session designed to give you immediate clarity on where AI and operating model improvements can create measurable value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Output 1 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-brand-gold font-display font-bold text-xl">01</span>
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Friction Map</h3>
              <p className="text-brand-slate leading-relaxed text-sm">
                We identify the specific operational friction points where manual processes, disconnected systems, or decision bottlenecks are costing you time and money.
              </p>
            </div>

            {/* Output 2 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-brand-gold font-display font-bold text-xl">02</span>
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Labour Cost Quantification</h3>
              <p className="text-brand-slate leading-relaxed text-sm">
                We translate friction into dollars. You will leave the call with a rough estimate of what your current inefficiencies cost in FTE hours and missed opportunity.
              </p>
            </div>

            {/* Output 3 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-brand-gold font-display font-bold text-xl">03</span>
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Quick Win Identification</h3>
              <p className="text-brand-slate leading-relaxed text-sm">
                We pinpoint one or two high-impact, low-effort improvements that can deliver results within 30 days, regardless of whether you engage us further.
              </p>
            </div>

            {/* Output 4 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-brand-gold font-display font-bold text-xl">04</span>
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Tier Recommendation</h3>
              <p className="text-brand-slate leading-relaxed text-sm">
                Based on your complexity, urgency, and internal capacity, we recommend a specific engagement tier so you know exactly what working together would look like.
              </p>
            </div>

            {/* Output 5 */}
            <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-brand-gold font-display font-bold text-xl">05</span>
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Next Steps Clarity</h3>
              <p className="text-brand-slate leading-relaxed text-sm">
                You will leave with a clear decision: proceed, pause, or pass. No pressure, no ambiguity. Just a straightforward path forward based on your specific situation.
              </p>
            </div>

            {/* Bonus */}
            <div className="bg-brand-navy p-8 rounded-xl text-white hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl mb-4">No Strings Attached</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                This is a genuine diagnostic, not a disguised pitch. Many clients take our quick wins and run. That is a successful outcome for us too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It Is For */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
            <div>
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">Who This Is For</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Leaders Facing Real Friction</h2>
              <p className="text-brand-slate text-lg leading-relaxed mb-8">
                The Leverage Audit is designed for executives and senior operators who know something is not working but have not had the space to diagnose it properly.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-brand-slate">You have AI tools but adoption has stalled or ROI is unclear</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-brand-slate">Your team spends too much time on manual, repetitive work</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-brand-slate">You need strategic clarity before committing to a larger initiative</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-brand-slate">You want a second opinion from someone who has seen this before</span>
                </li>
              </ul>
            </div>
            <div className="bg-brand-surface p-10 rounded-2xl">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-6 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
                  <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Fractional CTO + AI Ops</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-4">
                  Think of us as your fractional CTO and AI operations partner.
                </h3>
                <p className="text-brand-slate leading-relaxed mb-8">
                  For a fraction of the cost of a full-time hire, you get senior strategic guidance and hands-on implementation support.
                </p>
                <div className="text-left bg-white p-6 rounded-xl border border-gray-100">
                  <p className="text-sm text-brand-slate mb-2">Typical engagement:</p>
                  <p className="text-brand-navy font-bold">$4,500 to $8,500/mo</p>
                  <p className="text-xs text-gray-400 mt-1">vs. $200K+ for a full-time CTO hire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">Ready to see where the leverage is?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
            Book your free 60-minute Leverage Audit. No commitment, no pitch. Just a working session to find your quick wins.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <button
              onClick={() => openBriefing()}
              className="bg-brand-gold text-brand-navy px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl"
            >
              Request Leverage Audit
            </button>
            <Link
              to="/capabilities"
              className="text-white text-sm font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-all"
            >
              View Our Capabilities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
