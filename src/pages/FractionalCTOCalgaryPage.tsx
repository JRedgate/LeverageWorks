import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const FractionalCTOCalgaryPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'Fractional CTO Calgary | LVRGWRKS - AI Operations Partner for Mid-Market Alberta Companies',
    description: 'LVRGWRKS embeds as your fractional CTO and AI operations partner in Calgary and across Alberta. We identify coordination drag, build the systems to fix it, and prove ROI every 30 days.',
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
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Fractional CTO Services - Calgary, AB</span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-6 tracking-tight">
              Your business is growing.<br />
              <span className="text-brand-slate italic">Your operations are not keeping up.</span>
            </h1>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-6">
              The coordination overhead is real. Approvals stack. Your best people are manually moving data between platforms that do not talk to each other. Every workaround costs real labour hours that do not show up on any report.
            </p>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-10">
              You do not need another software subscription. You need an operating partner embedded inside your business who can see where the system is breaking and build the infrastructure to fix it. That is what LVRGWRKS does.
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

      {/* The Real Problem */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">The Problem</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Why growing companies stop growing efficiently</h2>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mb-6">
                Most mid-market companies in Alberta hit the same wall. Revenue grows 15%. Headcount grows 25%. The math never catches up. The issue is not effort. It is structural design.
              </p>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl">
                As organizations scale, complexity compounds faster than operating discipline. Decision rights blur. Handoffs multiply. Reporting layers expand. What begins as necessary coordination becomes structural overhead. LVRGWRKS calls this coordination inflation, and it is the root cause of margin erosion in growing mid-market businesses across Alberta and Western Canada.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100 text-center">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-brand-gold font-display font-bold text-lg">01</span>
                </div>
                <h3 className="font-display font-bold text-base text-brand-navy mb-2">Decision Latency</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Decisions that should take hours take weeks. Approvals stack. Context gets lost between handoffs.</p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100 text-center">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-brand-gold font-display font-bold text-lg">02</span>
                </div>
                <h3 className="font-display font-bold text-base text-brand-navy mb-2">Coordination Inflation</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Meetings multiply. Reporting layers expand. Coordination overhead consumes the capacity your growth requires.</p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100 text-center">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-brand-gold font-display font-bold text-lg">03</span>
                </div>
                <h3 className="font-display font-bold text-base text-brand-navy mb-2">Disproportionate Scaling</h3>
                <p className="text-brand-slate text-sm leading-relaxed">You hire people to manage the overhead instead of drive the growth. Fixed costs rise faster than revenue.</p>
              </div>
              <div className="bg-brand-navy p-8 rounded-xl text-center">
                <div className="w-12 h-12 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-brand-gold font-display font-bold text-lg">04</span>
                </div>
                <h3 className="font-display font-bold text-base text-white mb-2">Margin Erosion</h3>
                <p className="text-gray-300 text-sm leading-relaxed">EBITDA stagnates or compresses despite topline growth. The problem is structural, not operational.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What LVRGWRKS Does */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">The Solution</span>
            <h2 className="font-display font-bold text-4xl mb-6 leading-tight">
              You are not hiring a vendor. You are adding a fractional CTO to your team.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              LVRGWRKS embeds inside your business as a fractional CTO and AI operations partner. We identify where your business is spending effort without getting faster, fix how the work flows, build the automation and AI infrastructure to hold that result, and stay to manage it as you grow. A full-time CTO costs $200,000 or more per year before benefits, ramp time, and attrition risk. Every LVRGWRKS retainer gives you that strategic capability at a fraction of the cost, operational from day one.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">We do not optimize within broken structures</h3>
                <p className="text-gray-300 leading-relaxed">Most consultants make your existing system faster. We evaluate whether the structure itself is economically misaligned under growth. If it is, we redesign it. AI is deployed only where it materially improves constraint throughput, not because it is on-trend.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">We build what your competitors cannot replicate</h3>
                <p className="text-gray-300 leading-relaxed">Single-platform automation gets absorbed by SaaS vendors. We build cross-platform orchestration that sits above your existing tools and connects them into one seamless operation. You own every workflow and automation from day one. No lock-in.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">We prove it every 30 days</h3>
                <p className="text-gray-300 leading-relaxed">Every month you receive a Value Creation Report documenting the exact labour hours recovered, automation performance, and your rolling return on investment. We do not guess whether we are saving you money. We document it.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">We stay</h3>
                <p className="text-gray-300 leading-relaxed">This is not a project with an end date. As leverage improves, bottlenecks shift. Ongoing oversight prevents coordination inflation from re-emerging in new forms as your organization continues to scale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">The Process</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-4">Four moves. One operating cadence.</h2>
              <p className="text-brand-slate text-lg max-w-2xl mx-auto">Your first bottleneck is solved within 60 days. The work continues from there.</p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">01</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-navy">Diagnose</h3>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-brand-slate leading-relaxed text-lg">The 60-Minute Leverage Audit. We map your highest-friction workflows and quantify the exact labour cost of that pain. You leave the call with a written summary of where your operations are bleeding capacity and what it is costing you in real dollars. No cost. No commitment.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">02</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-navy">Design</h3>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-brand-slate leading-relaxed text-lg">We architect the cross-platform automation layer that sits above your existing tools. No ripping out systems. No forcing a new platform on your team. We build around how your business actually works and connect what you already have.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">03</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-navy">Build</h3>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-brand-slate leading-relaxed text-lg">Our team executes the builds. You review outputs, not code. Every workflow, automation, and AI agent built belongs to you from day one. No vendor lock-in. No dependency on LVRGWRKS to keep the lights on.</p>
                  </div>
                </div>
              </div>
              <div className="bg-brand-navy p-8 md:p-12 rounded-xl text-white">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">04</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-white">Stay</h3>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-gray-300 leading-relaxed text-lg">We manage, monitor, and evolve your systems as your business grows. Every month you receive a Value Creation Report: labour hours recovered, automation performance, rolling ROI against your retainer. If the numbers do not justify the partnership, you will know before we do.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">Who We Partner With</span>
                <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Built for Alberta operators, not startup ecosystems</h2>
                <p className="text-brand-slate text-lg leading-relaxed mb-6">
                  LVRGWRKS partners with founders, owners, and COOs of mid-market companies across Calgary, Alberta, and Western Canada. Typically 20 to 250 employees, $5M to $150M in revenue, operating in industries where the work is complex, the processes are real, and the margin pressure is constant.
                </p>
                <p className="text-brand-slate text-lg leading-relaxed mb-6">
                  The Alberta mid-market operates differently from tech-centric markets. You need a partner who understands the operational realities of energy, construction, and industrial services, not someone who learned business in a software startup. LVRGWRKS was founded in Calgary, shaped by 20 years of operational experience across manufacturing, industrial services, and capital programs, and grounded in the executive and financial frameworks of the Haskayne School of Business at the University of Calgary.
                </p>
                <p className="text-brand-slate text-lg leading-relaxed">
                  If your team is busy but the business is not moving faster, that gap is exactly where we work.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-brand-surface p-6 rounded-xl border border-gray-100 flex items-center gap-6">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-brand-navy">Construction and General Contracting</h3>
                    <p className="text-brand-slate text-sm mt-1">Project coordination, subcontractor management, cost tracking across multi-site operations</p>
                  </div>
                </div>
                <div className="bg-brand-surface p-6 rounded-xl border border-gray-100 flex items-center gap-6">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-brand-navy">Property Management</h3>
                    <p className="text-brand-slate text-sm mt-1">Disconnected billing, maintenance, and tenant systems recovered into a single operating layer</p>
                  </div>
                </div>
                <div className="bg-brand-surface p-6 rounded-xl border border-gray-100 flex items-center gap-6">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-brand-navy">Manufacturing</h3>
                    <p className="text-brand-slate text-sm mt-1">Production coordination, quality systems, and operational reporting rebuilt around constraint throughput</p>
                  </div>
                </div>
                <div className="bg-brand-surface p-6 rounded-xl border border-gray-100 flex items-center gap-6">
                  <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-brand-navy">Energy Services</h3>
                    <p className="text-brand-slate text-sm mt-1">Field operations, dispatch, compliance tracking, and reporting across distributed workforces</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Tiers */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">The Investment</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-4">Less than your next admin hire. Without the attrition risk.</h2>
              <p className="text-brand-slate text-lg max-w-2xl mx-auto">Every tier includes fractional CTO hours. All engagements are 12-month commitments designed to build a durable operational foundation, not a quick fix. All intellectual property is client-owned from day one.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-2">Ignite</h3>
                <div className="text-brand-gold font-display font-bold text-4xl mb-6">$4,500<span className="text-brand-slate text-lg font-normal">/mo</span></div>
                <p className="text-brand-slate text-sm leading-relaxed mb-6">Get more out of the team you already have, starting with your biggest bottleneck.</p>
                <ul className="space-y-3 text-sm text-brand-slate">
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>20 developer hours per month</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>2 fractional CTO hours per month</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>1 automation build in first 3 months</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>48-hour support response</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>Monthly Value Creation Report</li>
                </ul>
              </div>
              <div className="bg-brand-navy p-8 rounded-xl relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-navy text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">Most Chosen</div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">Build</h3>
                <div className="text-brand-gold font-display font-bold text-4xl mb-6">$6,500<span className="text-gray-400 text-lg font-normal">/mo</span></div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">Build the operational foundation that lets your business grow without your costs growing with it.</p>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>32 developer hours per month</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>4 fractional CTO hours per month</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>Up to 3 automation builds</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>24-hour priority support</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>Monthly Value Creation Report</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="font-display font-bold text-2xl text-brand-navy mb-2">Scale</h3>
                <div className="text-brand-gold font-display font-bold text-4xl mb-6">$8,500<span className="text-brand-slate text-lg font-normal">/mo</span></div>
                <p className="text-brand-slate text-sm leading-relaxed mb-6">A permanent operating partner inside your business, managing your systems as you grow.</p>
                <ul className="space-y-3 text-sm text-brand-slate">
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>40 developer hours per month</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>8 fractional CTO hours per month</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>Unlimited automation builds</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>Same-day support response</li>
                  <li className="flex items-start gap-2"><svg className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>Monthly Value Creation Report</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-brand-slate text-sm mt-8">Unused hours accumulate from month 4 onward, capped at 2x monthly allocation. Overage rates: $225/hr developer, $300/hr fractional CTO.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Start with a free Leverage Audit.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4 text-lg leading-relaxed">
            60 minutes. No cost. No commitment. We map your highest-friction workflows, quantify the exact labour cost of that pain, and outline a conceptual automation architecture before the call ends.
          </p>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
            You leave with a clear picture of where your operations are costing you more than they should, regardless of whether we work together.
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
