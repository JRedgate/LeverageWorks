import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const FractionalCTOCalgaryPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'Fractional CTO Calgary | LVRGWRKS (LeverageWorks) - Part-Time CTO for Mid-Market Companies',
    description: 'LVRGWRKS provides fractional CTO services in Calgary and across Alberta. We give mid-market companies ($5M–$150M) access to senior technical leadership without the full-time cost.',
    canonical: 'https://www.lvrgwrks.com/fractional-cto-calgary',
  });

  return (
    <>
      {/* Hero */}
      <header className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-surface">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Fractional CTO Services · Calgary, AB</span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-6 tracking-tight">
              Senior Technical Leadership.<br />
              <span className="text-brand-slate italic">Without the Full-Time Cost.</span>
            </h1>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-10">
              <em className="text-brand-navy not-italic font-medium">Your fractional CTO in Calgary and Western Canada.</em> Most mid-market companies in Alberta don&apos;t need a $250,000/year full-time CTO. They need one for 20% of the time, all of the time. LVRGWRKS (LeverageWorks) embeds as your fractional CTO — owning your technology roadmap, vendor decisions, and AI integration strategy on a retainer basis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/leverage-audit"
                className="bg-brand-navy text-white px-10 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg group"
              >
                Request Leverage Audit
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link
                to="/capabilities"
                className="border-2 border-brand-navy text-brand-navy px-10 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 hover:bg-brand-navy hover:text-white transition-all"
              >
                View Capabilities
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* What a Fractional CTO Actually Does */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">The Role</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">What a Fractional CTO Actually Does</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-brand-gold font-display font-bold text-xl">01</span>
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Technology Roadmap Ownership</h3>
                <p className="text-brand-slate leading-relaxed text-sm">
                  We define and own your multi-year technology strategy, ensuring every system decision supports your operational goals.
                </p>
              </div>

              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-brand-gold font-display font-bold text-xl">02</span>
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Vendor & Platform Evaluation</h3>
                <p className="text-brand-slate leading-relaxed text-sm">
                  We evaluate, select, and hold accountable every software vendor you work with — so you stop buying tools that don&apos;t talk to each other.
                </p>
              </div>

              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-brand-gold font-display font-bold text-xl">03</span>
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">AI & Automation Integration</h3>
                <p className="text-brand-slate leading-relaxed text-sm">
                  We identify where AI can reduce friction in your workflows and build the operating model to make it stick.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">Who This Is For</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-8 leading-tight">
              LVRGWRKS fractional CTO engagements are built for founders, owners, and COOs of mid-market companies across Alberta and Western Canada who:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-start gap-4">
                <svg className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Have 20–250 employees and $5M–$150M in revenue</span>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-start gap-4">
                <svg className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Are spending money on software but not seeing ROI</span>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-start gap-4">
                <svg className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Have tried a digital transformation that didn&apos;t deliver</span>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-start gap-4">
                <svg className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Need technical leadership but can&apos;t justify a full-time hire</span>
              </div>

              <div className="bg-white/5 border border-white/10 p-6 rounded-xl flex items-start gap-4 md:col-span-2 lg:col-span-1">
                <svg className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Are in Property Management, Construction, Manufacturing, or Energy Services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Calgary Companies Choose a Fractional CTO */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">Local Expertise</span>
                <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Why Calgary Companies Choose a Fractional CTO</h2>
                <p className="text-brand-slate text-lg leading-relaxed">
                  The Alberta mid-market operates differently from tech-centric markets. You need a technical partner who understands the operational realities of energy, construction, and industrial services — not someone who learned technology in a startup. LVRGWRKS was built in Calgary, at the Haskayne School of Business, for exactly this context.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="bg-brand-surface p-8 rounded-xl border border-gray-100 text-center">
                  <div className="text-brand-gold font-display font-bold text-5xl mb-2">60</div>
                  <p className="text-brand-slate text-sm">days to solve your first operational bottleneck</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-brand-surface p-8 rounded-xl border border-gray-100 text-center">
                    <div className="text-brand-gold font-display font-bold text-5xl mb-2">30</div>
                    <p className="text-brand-slate text-sm">days between each Monthly Value Creation Report</p>
                  </div>
                  <div className="bg-brand-surface p-8 rounded-xl border border-gray-100 text-center">
                    <div className="text-brand-gold font-display font-bold text-5xl mb-2">7.5x</div>
                    <p className="text-brand-slate text-sm">average ROI verified across engagements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the Engagement Works */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">The Process</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">How the Engagement Works</h2>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">01</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-navy mb-2">Leverage Audit</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-brand-slate leading-relaxed">
                      A free 60-minute diagnostic session where we map your workflows, quantify labour costs, and recommend a clear engagement path.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">02</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-navy mb-2">Roadmap Design</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-brand-slate leading-relaxed">
                      We build a 90-day operating plan scoped to your constraints and priorities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">03</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-navy mb-2">Embedded Execution</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-brand-slate leading-relaxed">
                      We execute alongside your team as your fractional CTO, attending leadership meetings and owning technical decisions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-navy p-8 md:p-12 rounded-xl text-white">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="w-16 h-16 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">04</span>
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2">Monthly Value Reports</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-300 leading-relaxed">
                      Every 30 days, you receive a clear accounting of what was built, what it cost, and what it returned.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">Ready to stop guessing on technology?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
            Book your free Leverage Audit. In 60 minutes, we&apos;ll map your friction and tell you exactly what it&apos;s costing you.
          </p>
          <Link
            to="/leverage-audit"
            className="inline-flex items-center gap-3 bg-brand-gold text-brand-navy px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl group"
          >
            Request Leverage Audit
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
};
