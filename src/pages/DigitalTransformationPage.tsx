import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const DigitalTransformationPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'Digital Transformation Consulting Calgary Alberta | LVRGWRKS',
    description: 'Digital transformation consulting for mid-market companies in Calgary and Alberta. LVRGWRKS identifies why transformations fail and builds operating model changes that actually stick.',
    canonical: 'https://www.lvrgwrks.com/digital-transformation-consulting',
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
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Digital Transformation Consulting - Calgary, AB</span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-6 tracking-tight">
              Your last transformation<br />
              <span className="text-brand-slate italic">probably did not fail because of the technology.</span>
            </h1>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-6">
              Most digital transformation failures in mid-market companies trace back to the same structural problem: new tools deployed on top of old workflows. The platform gets implemented. The process does not change. The team fills the gap with the same manual work they were doing before, just with more expensive software in the middle.
            </p>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-10">
              LVRGWRKS approaches digital transformation as an operating model problem, not a technology problem. We start with the workflows and the structural friction, then determine what technology serves the solution -- not the other way around.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/leverage-audit" className="bg-brand-navy text-white px-10 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg group">
                Book a Free Leverage Audit
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/capabilities" className="border-2 border-brand-navy text-brand-navy px-10 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 hover:bg-brand-navy hover:text-white transition-all">
                View Capabilities
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Why Transformations Fail */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">The Root Cause</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Three structural gaps that kill most transformations</h2>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mb-6">
                The pattern is consistent across industries and company sizes. A technology investment gets made. The implementation happens. And six to twelve months later the business has a new system, a significant invoice, and the same operational problems it started with.
              </p>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl">
                The failure gets attributed to the technology -- wrong platform, poor implementation, overpromising vendor. But the technology is almost never the actual cause. The cause is structural, and it persists regardless of which platform gets selected next time.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-brand-surface p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <h3 className="font-display font-bold text-2xl text-brand-navy mb-2">The integration gap</h3>
                    <p className="text-brand-gold font-bold text-sm uppercase tracking-widest">Most common</p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-brand-slate leading-relaxed text-lg">
                      New systems get deployed without connecting to existing ones. Your team becomes the integration layer -- copying data between platforms, maintaining spreadsheet bridges, manually reconciling records that should agree automatically. The manual work does not disappear after the transformation. It just takes a different form, and often grows because there are now more systems to keep in sync.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-brand-surface p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <h3 className="font-display font-bold text-2xl text-brand-navy mb-2">The adoption gap</h3>
                    <p className="text-brand-gold font-bold text-sm uppercase tracking-widest">Most expensive</p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-brand-slate leading-relaxed text-lg">
                      Tools get purchased for features the team does not use consistently. Training happens once during implementation and is never reinforced. The system gets used for the basics while the real work continues in the spreadsheets and email chains where the team actually feels in control. Within a year, the organization runs two parallel operating layers: the official one in the new system, and the real one where decisions actually get made.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-brand-surface p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3">
                    <h3 className="font-display font-bold text-2xl text-brand-navy mb-2">The accountability gap</h3>
                    <p className="text-brand-gold font-bold text-sm uppercase tracking-widest">Most avoidable</p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-brand-slate leading-relaxed text-lg">
                      The consultant who sold the transformation is gone. The implementation partner has moved to their next project. Nobody inside the organization owns the outcome. When the system does not perform as expected, there is no one accountable for closing the gap between what was promised and what was delivered. The organization absorbs the cost and moves on, usually more skeptical of the next technology investment than before.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How LVRGWRKS Is Different */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">A Different Approach</span>
            <h2 className="font-display font-bold text-4xl mb-6 leading-tight">
              Operating model first. Technology second. Outcomes accountable throughout.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              LVRGWRKS approaches digital transformation by diagnosing the operational structure before selecting or recommending any technology. The question is never "what should we implement?" The question is "what is the specific operational problem we are solving, and how will we know when it is solved?" That framing changes everything about how a transformation gets designed and executed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Operating model diagnosis before platform selection</h3>
                <p className="text-gray-300 leading-relaxed">
                  We map your current workflows, identify where the structural friction lives, and quantify what it is costing before any technology conversation happens. That diagnostic becomes the specification that determines what gets built and in what order. Platform selection follows the problem definition -- not the other way around.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Integration architecture built before go-live</h3>
                <p className="text-gray-300 leading-relaxed">
                  We design and build the integration layer between systems as part of the transformation, not as an afterthought. Every new system that gets deployed connects to the existing ones automatically. Your team stops being the bridge between platforms before they are asked to change how they work.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Embedded accountability post go-live</h3>
                <p className="text-gray-300 leading-relaxed">
                  LVRGWRKS stays embedded as your fractional CTO and AI operations partner after the initial implementation. We attend leadership meetings, monitor system performance, iterate on what is not working, and produce a monthly Value Creation Report that documents what changed in the operation -- not just what was implemented in the system.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Outcomes measured, not assumed</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every transformation engagement starts with a baseline -- the specific operational costs and constraints that the transformation is designed to address. Every month, progress against that baseline is documented and reported. You are not asked to assume the transformation is working. You see the evidence every 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Transform */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">Scope of Work</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-4">What a transformation engagement covers</h2>
              <p className="text-brand-slate text-lg max-w-2xl mx-auto">The specific scope depends on where your operational constraints actually live. The Leverage Audit determines what applies to your business.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Operating model redesign</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Restructuring workflows and decision processes for how your business actually operates -- not an idealized version of it. Built around your team, your tools, and your operational constraints.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Systems integration architecture</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Building the technical layer that connects your platforms into a unified operating system. No rip-and-replace. We connect what you already have and add what is genuinely needed.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">AI and automation deployment</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Deploying AI and automation at the specific points in your operation where it changes the economics -- not where it is available or where it looks impressive on a slide.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Adoption and change management</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Ensuring the transformation actually changes how the team works, not just what systems are available to them. Built into the implementation from day one, not appended at the end.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Start with the operational assessment.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4 text-lg leading-relaxed">
            The Leverage Audit maps your current state, identifies the structural friction, and gives you a clear picture of what a transformation needs to address before any platform gets selected or any budget gets committed.
          </p>
          <p className="text-gray-500 max-w-xl mx-auto mb-12 text-base leading-relaxed">
            60 minutes. No cost. No commitment.
          </p>
          <Link to="/leverage-audit" className="inline-flex items-center gap-3 bg-brand-gold text-brand-navy px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl group">
            Book Your Leverage Audit
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
          <p className="text-gray-500 text-sm mt-6">Or email directly: jredgate@lvrgwrks.com</p>
        </div>
      </section>
    </>
  );
};