import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const CapabilitiesPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'Capabilities | LVRGWRKS - AI Automation and Operations for Alberta Mid-Market',
    description: 'LVRGWRKS builds AI automation systems, operational integrations, and fractional CTO services for mid-market companies in Alberta. See how we diagnose, design, build, and stay.',
    canonical: 'https://www.lvrgwrks.com/capabilities',
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
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">What We Do</span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-6 tracking-tight">
              We build the systems that let your<br />
              <span className="text-brand-slate italic">operation scale without scaling headcount.</span>
            </h1>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-6">
              LVRGWRKS is a fractional CTO and AI operations partner for mid-market companies in Alberta and Western Canada. We diagnose where your operation is losing capacity to manual work and coordination overhead, design the automation architecture that addresses it, build and deploy the systems, and stay embedded to prove the ROI every 30 days.
            </p>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-10">
              Everything we build belongs to you from day one. No vendor lock-in. No dependency on us to keep the systems running. The engagement can end at any time and the operation continues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/leverage-audit" className="bg-brand-navy text-white px-10 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg group">
                Book a Free Leverage Audit
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/fractional-cto-calgary" className="border-2 border-brand-navy text-brand-navy px-10 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 hover:bg-brand-navy hover:text-white transition-all">
                Fractional CTO
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* What We Build */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">What We Build</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Four capability areas. One operating outcome.</h2>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl">
                Every engagement draws on some combination of these four areas depending on where your operational constraints actually live. The Leverage Audit determines which apply to your business and in what order.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Fractional CTO and AI strategy</h3>
                <p className="text-brand-slate leading-relaxed text-sm mb-4">
                  Senior technology leadership on a fractional basis. We own your technology roadmap, evaluate vendors, lead AI and automation initiatives, and attend leadership meetings as a full participant in operational decisions. For companies that need CTO-level thinking without a full-time hire.
                </p>
                <Link to="/fractional-cto-calgary" className="text-brand-navy font-bold text-sm underline underline-offset-2">Learn more</Link>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">AI automation and workflow automation</h3>
                <p className="text-brand-slate leading-relaxed text-sm mb-4">
                  We identify the specific manual workflows consuming your team's capacity, design the automation architecture, and build systems that execute those workflows without human intervention. AI agents, cross-platform integrations, and automated reporting built on top of your existing tools.
                </p>
                <Link to="/ai-automation-consulting" className="text-brand-navy font-bold text-sm underline underline-offset-2">Learn more</Link>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Business process automation</h3>
                <p className="text-brand-slate leading-relaxed text-sm mb-4">
                  End-to-end redesign and automation of specific operational processes -- reporting, data reconciliation, scheduling, dispatch, compliance documentation, billing, and any other workflow where manual effort is the integration layer between your systems.
                </p>
                <Link to="/business-process-automation" className="text-brand-navy font-bold text-sm underline underline-offset-2">Learn more</Link>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Digital transformation and operating model design</h3>
                <p className="text-brand-slate leading-relaxed text-sm mb-4">
                  Structural redesign of how your business operates -- not just what tools it uses. For companies that have tried technology transformations before and found the value did not materialize, or are planning one and want to avoid the common failure patterns.
                </p>
                <Link to="/digital-transformation-consulting" className="text-brand-navy font-bold text-sm underline underline-offset-2">Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">How It Works</span>
              <h2 className="font-display font-bold text-4xl mb-4">Every engagement follows the same four-move sequence.</h2>
              <p className="text-gray-300 text-lg max-w-2xl">Your first automation is live within 60 days. The system compounds from there.</p>
            </div>
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-xl">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">01</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-white">Diagnose</h3>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-gray-300 leading-relaxed text-lg">The 60-Minute Leverage Audit. We map every manual workflow in your operation, quantify the exact labour cost, and rank automation opportunities by ROI. You leave the call with a written summary of where your operations are bleeding capacity and what it is costing you. No cost. No commitment. This is how every engagement starts.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-xl">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">02</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-white">Design</h3>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-gray-300 leading-relaxed text-lg">We architect the automation layer -- integrations, logic, triggers, data flows, and AI deployment points. Everything is designed around your existing tools and your actual operational constraints. No ripping out systems. No forcing a new platform on your team. You see the blueprint before any building begins.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-xl">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">03</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-white">Build</h3>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-gray-300 leading-relaxed text-lg">Our team builds and deploys the system. You review outputs, not code. Every workflow, automation, and AI agent built belongs to you from day one. The system runs on your infrastructure and keeps running whether or not LVRGWRKS is in the picture. Your first bottleneck is solved within 60 days of engagement start.</p>
                  </div>
                </div>
              </div>
              <div className="bg-brand-gold/10 border border-brand-gold/30 p-8 md:p-12 rounded-xl">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">04</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-white">Stay</h3>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-gray-300 leading-relaxed text-lg">This is not a project with an end date. We monitor, evolve, and expand the system as your business grows. Every month you receive a Value Creation Report showing exactly what was recovered -- labour hours, automation performance, and rolling ROI against your retainer. We do not guess whether the system is working. We document it, every 30 days.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 bg-brand-surface border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row md:items-center justify-center gap-4 md:gap-8">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Industries:</p>
            <div className="flex flex-wrap gap-4 md:gap-6">
              {[
                { label: 'Construction', href: '/industries/construction' },
                { label: 'Energy Services', href: '/industries/energy-services' },
                { label: 'Manufacturing', href: '/industries/manufacturing' },
                { label: 'Property Management', href: '/industries/property-management' },
              ].map((item) => (
                <Link key={item.label} to={item.href} className="text-sm font-bold text-gray-400 hover:text-brand-navy transition-colors">
                  {item.label.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Start with the Leverage Audit.</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
            60 minutes. No cost. No commitment. You leave with a clear picture of where your operations are costing you more than they should -- and what it would take to fix it.
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