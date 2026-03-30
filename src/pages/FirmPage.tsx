import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const FirmPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'The Firm | LVRGWRKS (LeverageWorks) - Enterprise AI Strategy Calgary',
    description: 'Founded in Calgary, LVRGWRKS (LeverageWorks) bridges executive strategy and engineering reality. We build the synthesis layer between AI capability and organizational execution.',
    canonical: 'https://www.lvrgwrks.com/firm',
  });

  return (
    <>
      {/* Hero */}
      <header className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-surface">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">The Firm</span>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-8 tracking-tight">
              Bridging the divide between <span className="text-brand-slate italic">intent and execution.</span>
            </h1>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl">
              LVRGWRKS (LeverageWorks) was architected during the Haskayne School of Business EMBA to solve a specific problem: the friction between leadership intent and technological execution.
            </p>
          </div>
        </div>
      </header>

      {/* Origin Story */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="font-display font-bold text-3xl text-brand-navy mb-6">Leadership & Origin</h2>
              <p className="text-brand-slate leading-relaxed mb-6">
                Founded in Calgary, LVRGWRKS (LeverageWorks) bridges the gap between executive strategy and engineering reality. Our methodology is rooted in systems thinking and architectural precision.
              </p>
              <p className="text-brand-slate leading-relaxed mb-6">
                We emerged from a recognition that most "Digital Transformation" initiatives fail not because of technology limitations, but because of operating model misalignment. The tools exist. The talent exists. What is missing is the synthesis layer that connects leadership intent to technical execution.
              </p>
              <p className="text-brand-slate leading-relaxed">
                Our team brings together strategic consulting rigor with hands-on implementation experience, ensuring that every recommendation we make is grounded in operational reality.
              </p>
            </div>
            <div>
              <h2 className="font-display font-bold text-3xl text-brand-navy mb-6">The Mandate</h2>
              <p className="text-brand-slate leading-relaxed mb-6">
                Think of us as your fractional CTO and AI operations partner. For a fraction of the cost of a full-time hire, you get senior strategic guidance and hands-on implementation support.
              </p>
              <p className="text-brand-slate leading-relaxed mb-6">
                We operate with a singular mandate: to equip enterprise leaders with the "synthesis layer" required to govern AI agents. We turn theoretical capability into deployed, governed, and revenue-generating infrastructure.
              </p>
              <p className="text-brand-slate leading-relaxed">
                The result is measurable EBITDA uplift, not just new software. Capital efficiency, not just capability demonstrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">Our Philosophy</span>
            <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Architecture Over Automation</h2>
            <p className="text-brand-slate text-lg leading-relaxed">
              The divide between AI potential and realized value is not a technology problem. It is an operating model problem. We build the connective tissue between what AI can do and what your organization is structured to execute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-gray-100">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-brand-gold font-display font-bold text-xl">01</span>
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Systems Thinking</h3>
              <p className="text-brand-slate leading-relaxed text-sm">
                Every intervention is designed with the full system in view. Point solutions create technical debt. Architectural solutions create compounding value.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-brand-gold font-display font-bold text-xl">02</span>
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Human Judgment First</h3>
              <p className="text-brand-slate leading-relaxed text-sm">
                AI augments human decision-making. It does not replace it. Our implementations keep leadership accountable while reducing cognitive friction at scale.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-brand-gold font-display font-bold text-xl">03</span>
              </div>
              <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Measurable Outcomes</h3>
              <p className="text-brand-slate leading-relaxed text-sm">
                We do not measure success in demos or pilots. We measure EBITDA uplift, capital efficiency, and governance clarity. If it does not move the P&L, it does not ship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">Ready to close the gap?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
            Whether you are exploring AI readiness or scaling existing capabilities, we are here to help architect the path forward.
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
              View Capabilities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
