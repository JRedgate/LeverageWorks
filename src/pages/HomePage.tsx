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
    description: 'Your business is growing but operations are not keeping up. LVRGWRKS is the fractional CTO and AI operations partner for mid-market companies in Alberta and Western Canada. Rebuild how the work flows and prove ROI every 30 days.',
    canonical: 'https://www.lvrgwrks.com/',
  });

  return (
    <>
      <Hero
        onCtaClick={() => openBriefing()}
        onSecondCtaClick={() => {
          window.location.href = '/capabilities';
        }}
      />

      {/* The Problem - named villain, four manifestations */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">The Problem</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-8 leading-tight">
              Revenue grows 15%. Headcount grows 25%.<br />
              <span className="text-gray-400">The math never catches up.</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              Most mid-market operators hit the same wall. As the business scales, the cost of holding it together compounds faster than the systems can keep up. We call it the coordination tax: the hidden labour your team burns every day moving data between platforms that do not talk to each other, chasing approvals that should take hours, and manually gluing together the workflows your software was supposed to automate. It is the single largest driver of margin erosion in growing mid-market businesses, and it almost never shows up on a report.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <div className="text-brand-gold font-display font-bold text-2xl mb-3">Decision Latency</div>
                <p className="text-gray-400 leading-relaxed">Decisions that should take hours take weeks. Approvals stack. Context gets lost between handoffs.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <div className="text-brand-gold font-display font-bold text-2xl mb-3">The Coordination Tax</div>
                <p className="text-gray-400 leading-relaxed">Meetings multiply. Reporting layers expand. Your best people burn capacity on manual work instead of driving growth.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <div className="text-brand-gold font-display font-bold text-2xl mb-3">Disproportionate Scaling</div>
                <p className="text-gray-400 leading-relaxed">You hire people to manage the overhead instead of drive the growth. Fixed costs rise faster than revenue.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <div className="text-brand-gold font-display font-bold text-2xl mb-3">Margin Erosion</div>
                <p className="text-gray-400 leading-relaxed">EBITDA stagnates or compresses despite topline growth. The problem is structural, not operational.</p>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
              You do not need another software subscription. You need an operating partner embedded inside your business who can see where the system is breaking and build the infrastructure to fix it.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution - fractional CTO positioning */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">The Solution</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mb-8 leading-tight">
              You are not hiring a vendor.<br />
              <span className="text-brand-slate italic">You are adding a fractional CTO to your team.</span>
            </h2>
            <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mb-10">
              LVRGWRKS embeds inside your business as a fractional CTO and AI operations partner. We identify where your business is spending effort without getting faster, fix how the work flows, build the automation and AI infrastructure to hold the result, and stay embedded to manage it as you grow. A full-time CTO costs $200,000 or more per year before benefits, ramp time, and attrition risk. Every LVRGWRKS retainer gives you that strategic capability at a fraction of the cost, operational from day one.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-4 border-brand-gold pl-6">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">We do not optimize broken structures</h3>
                <p className="text-brand-slate leading-relaxed">Most consultants make your existing system faster. We evaluate whether the structure itself is economically misaligned under growth. If it is, we redesign it. AI is deployed only where it materially improves throughput.</p>
              </div>
              <div className="border-l-4 border-brand-gold pl-6">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">We build what competitors cannot replicate</h3>
                <p className="text-brand-slate leading-relaxed">Single-platform automation gets absorbed by SaaS vendors. We build cross-platform orchestration that sits above your existing tools and connects them into one seamless operation.</p>
              </div>
              <div className="border-l-4 border-brand-gold pl-6">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">You own everything from day one</h3>
                <p className="text-brand-slate leading-relaxed">No vendor lock-in. No dependency on us to keep the systems running. The engagement can end at any time and the operation keeps running.</p>
              </div>
              <div className="border-l-4 border-brand-gold pl-6">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">We prove it every 30 days</h3>
                <p className="text-brand-slate leading-relaxed">Every month you receive a Value Creation Report documenting labour hours recovered, automation performance, and rolling ROI against your retainer. No guessing. We document it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Plan - four-move sequence */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">How It Works</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mb-6 leading-tight">
              Four moves. One operating cadence.
            </h2>
            <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mb-16">
              Your first bottleneck is solved within 60 days of engagement start. The system compounds from there.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-xl border border-gray-100">
                <div className="text-brand-gold font-display font-bold text-5xl mb-4">01</div>
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-4">Diagnose</h3>
                <p className="text-brand-slate leading-relaxed">The 60-Minute Leverage Audit. We map every manual workflow in your operation, quantify the exact labour cost, and rank automation opportunities by ROI. You leave the call with a written summary of where your operations are bleeding capacity and what it is costing you. No cost. No commitment.</p>
              </div>
              <div className="bg-white p-10 rounded-xl border border-gray-100">
                <div className="text-brand-gold font-display font-bold text-5xl mb-4">02</div>
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-4">Design</h3>
                <p className="text-brand-slate leading-relaxed">We architect the cross-platform automation layer that sits above your existing tools. No ripping out systems. No forcing a new platform on your team. Everything is designed around your existing tools and your actual operational constraints. You see the blueprint before any building begins.</p>
              </div>
              <div className="bg-white p-10 rounded-xl border border-gray-100">
                <div className="text-brand-gold font-display font-bold text-5xl mb-4">03</div>
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-4">Build</h3>
                <p className="text-brand-slate leading-relaxed">Our team builds and deploys the system. You review outputs, not code. Every workflow, automation, and AI agent built belongs to you from day one. The system runs on your infrastructure and keeps running whether or not LVRGWRKS is in the picture. Your first bottleneck is solved within 60 days.</p>
              </div>
              <div className="bg-white p-10 rounded-xl border border-gray-100">
                <div className="text-brand-gold font-display font-bold text-5xl mb-4">04</div>
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-4">Stay</h3>
                <p className="text-brand-slate leading-relaxed">This is not a project with an end date. We monitor, evolve, and expand the system as your business grows. Every month you receive a Value Creation Report showing exactly what was recovered: labour hours, automation performance, and rolling ROI against your retainer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof - manufacturing case */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">Proven Execution</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-10 leading-tight">
              Unlocking capacity without adding headcount.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              A multi-site North American industrial manufacturer faced margin compression driven by input volatility and inconsistent production scheduling. We deployed a predictive scheduling engine that integrated real-time machine telemetry with sales forecasts and autonomically rebalanced production lines to optimize for throughput. The result was a hidden factory unlocked within their existing footprint.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <div className="text-brand-gold font-display font-bold text-4xl mb-2">7.5x</div>
                <p className="text-gray-400 text-sm leading-relaxed">Verified ROI</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <div className="text-brand-gold font-display font-bold text-4xl mb-2">14%</div>
                <p className="text-gray-400 text-sm leading-relaxed">Capacity increase, zero headcount added</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <div className="text-brand-gold font-display font-bold text-4xl mb-2">22%</div>
                <p className="text-gray-400 text-sm leading-relaxed">Reduction in planning effort</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <div className="text-brand-gold font-display font-bold text-4xl mb-2">9%</div>
                <p className="text-gray-400 text-sm leading-relaxed">Inventory reduction</p>
              </div>
            </div>

            <Link
              to="/impact"
              className="inline-flex items-center gap-2 text-brand-gold font-bold text-sm uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-white transition-all group"
            >
              View All Case Studies
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Engagement Tiers */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">The Investment</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mb-6 leading-tight">
              Less than your next admin hire.<br />
              <span className="text-brand-slate italic">Without the attrition risk.</span>
            </h2>
            <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mb-16">
              A full-time CTO costs $200,000 or more per year before benefits, ramp time, and attrition risk. LVRGWRKS delivers that capability at a fraction of the cost, operational from day one. Three engagement tiers, matched to where your operational constraints actually live.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-brand-surface p-10 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-2">Ignite</h3>
                <p className="text-brand-gold font-bold text-sm uppercase tracking-wider mb-6">Your operational proof point</p>
                <p className="text-brand-slate leading-relaxed mb-6">Get more out of the team you already have, starting with your biggest bottleneck. Your LVRGWRKS Fractional CTO, your first automation live within 60 days, and your Monthly Value Creation Report showing ROI every 30 days.</p>
              </div>
              <div className="bg-brand-navy p-10 rounded-xl border-2 border-brand-gold relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-navy text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full">Most Chosen</div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">Build</h3>
                <p className="text-brand-gold font-bold text-sm uppercase tracking-wider mb-6">An embedded operator</p>
                <p className="text-gray-300 leading-relaxed mb-6">Build the operational foundation that lets your business grow without your costs growing with it. Your LVRGWRKS Fractional CTO embedded across departments, multiple automations built and managed as a unified system, and cross-department ROI tracking monthly.</p>
              </div>
              <div className="bg-brand-surface p-10 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-2">Scale</h3>
                <p className="text-brand-gold font-bold text-sm uppercase tracking-wider mb-6">A named operating partner</p>
                <p className="text-brand-slate leading-relaxed mb-6">A permanent operating partner inside your business, managing your systems as you grow. Your LVRGWRKS Fractional CTO alongside your leadership, unlimited automation scope, and executive-level Monthly Value Creation Report every 30 days.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/fractional-cto-calgary"
                className="inline-flex items-center gap-2 text-brand-navy font-bold text-sm uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-all group"
              >
                Explore Fractional CTO Services
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta-section" className="py-20 md:py-32 bg-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-5xl md:text-7xl text-brand-navy mb-8 tracking-tight">
            Stop paying the<br />
            <span className="text-brand-slate italic">coordination tax.</span>
          </h2>
          <p className="text-brand-slate max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            60 minutes. No cost. No commitment. We map your highest-friction workflows, quantify the exact labour cost of that pain, and outline a conceptual automation architecture before the call ends. You leave with a clear picture of where your operations are costing you more than they should, regardless of whether we work together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <button
              onClick={() => openBriefing()}
              className="bg-brand-navy text-white px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-brand-gold transition-all shadow-xl hover:shadow-brand-gold/20"
            >
              Request Free Leverage Audit
            </button>
            <Link
              to="/firm"
              className="text-brand-navy text-sm font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-all"
            >
              Read The Firm Thesis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
