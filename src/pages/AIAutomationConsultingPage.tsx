Output

import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const AIAutomationConsultingPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'AI Automation Consulting Alberta | LVRGWRKS - Operational AI for Mid-Market Companies',
    description: 'LVRGWRKS builds AI automation systems for mid-market companies in Alberta and Western Canada. We connect your platforms, eliminate manual workflows, and prove ROI every 30 days.',
    canonical: 'https://www.lvrgwrks.com/ai-automation-consulting',
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
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">AI Automation Consulting - Alberta and Western Canada</span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-6 tracking-tight">
              Your team is the glue<br />
              <span className="text-brand-slate italic">between systems that should talk to each other.</span>
            </h1>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-6">
              Spreadsheets are being used as databases. Data is being moved by hand between platforms every day. Decisions are being made on incomplete information because no single tool sees the whole picture. Every one of those workarounds costs real labour hours that do not show up on any report.
            </p>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-10">
              LVRGWRKS builds the AI and automation layer that eliminates this friction permanently. Not a software subscription. Not a dashboard. A system built around how your business actually operates, owned by you from day one.
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
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Most companies buy AI tools. Almost none of them get AI to work for them.</h2>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mb-6">
                There is a difference between using AI and having AI work for you. Using AI means opening a tool, typing a prompt, getting an output. Having AI work for you means waking up to automated reports, connected systems, and workflows that execute without anyone touching them.
              </p>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl">
                Most mid-market companies in Alberta are stuck in the first category. They have bought software. They have subscribed to tools. But the platforms do not talk to each other, coordination still happens in email and spreadsheets, and the people running the business are still manually moving data between systems every single day. The cost of that friction is real. It just does not appear as a line item on any report.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-display font-bold text-lg text-brand-navy mb-3">Labour hours disappearing into manual work</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Your best operators are spending hours each week on data entry, report compilation, and status updates that a well-built system would handle automatically.</p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="font-display font-bold text-lg text-brand-navy mb-3">Decisions made on stale or incomplete data</h3>
                <p className="text-brand-slate text-sm leading-relaxed">When information lives in disconnected systems, leadership is always working from yesterday's picture. Slow decisions cost margin. Wrong decisions cost more.</p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h3 className="font-display font-bold text-lg text-brand-navy mb-3">Growth that scales headcount instead of capacity</h3>
                <p className="text-brand-slate text-sm leading-relaxed">When processes are manual, growth means hiring. Every new contract, new project, or new location triggers a new hire. That is the wrong slope to be on.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What LVRGWRKS Builds */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">What We Build</span>
            <h2 className="font-display font-bold text-4xl mb-6 leading-tight">
              We build the back-end systems that let your people focus on the work that actually makes you money.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              LVRGWRKS does not sell software. We build custom AI and automation infrastructure on top of the tools you already use. No rip-and-replace. No new platform your team has to learn. We architect the layer that connects everything and automates the work between systems. You own it from day one. It runs whether we are there or not.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Cross-platform data integration</h3>
                <p className="text-gray-300 leading-relaxed">We connect your ERP, CRM, scheduling, project management, and reporting platforms so data flows automatically between them. No manual exports. No copy-paste. No spreadsheet handoffs. Information moves when it needs to, to where it needs to go.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Workflow automation and AI agents</h3>
                <p className="text-gray-300 leading-relaxed">We identify the specific workflows eating your team's time and build automated systems to handle them. AI agents that monitor, trigger, route, and act on information without human intervention. The work still gets done. Your people just stop doing it manually.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Operational reporting and dashboards</h3>
                <p className="text-gray-300 leading-relaxed">We build leadership dashboards that surface the right information automatically. No more waiting for someone to compile a report. No more making decisions on last week's numbers. Real-time operational visibility built around the decisions your leadership team actually makes.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">AI deployed at constraint points</h3>
                <p className="text-gray-300 leading-relaxed">We do not deploy AI because it is on-trend. We identify the specific bottlenecks in your operation where AI materially improves throughput, then build and embed it precisely there. Forecasting, exception detection, document processing, scheduling optimization -- wherever the constraint actually lives.</p>
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
              <p className="text-brand-slate text-lg max-w-2xl mx-auto">Your first automation is live within 60 days. The system compounds from there.</p>
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
                    <p className="text-brand-slate leading-relaxed text-lg">The 60-Minute Leverage Audit. We map every manual workflow in your operation, quantify the exact labour cost, and rank automation opportunities by ROI. You leave the call with a written summary of where your operations are bleeding capacity and what it is costing you in real dollars. No cost. No commitment. No generic presentation.</p>
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
                    <p className="text-brand-slate leading-relaxed text-lg">We architect the automation layer -- integrations, logic, triggers, data flows, and AI deployment points. Everything is designed around your existing tools and your actual operational constraints. No ripping out systems. No forcing a new platform on your team. We build around what you already have and connect what should already be talking.</p>
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
                    <p className="text-brand-slate leading-relaxed text-lg">Our team builds and deploys the system. You review outputs, not code. Every workflow, automation, and AI agent built belongs to you from day one. No vendor lock-in. The system runs on your infrastructure and keeps running whether or not LVRGWRKS is in the picture. Your first bottleneck is solved within 60 days of engagement start.</p>
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
                    <p className="text-gray-300 leading-relaxed text-lg">This is not a project with an end date. We monitor, evolve, and expand the system as your business grows. Every month you receive a Value Creation Report: exact labour hours recovered, automation performance, rolling ROI against your retainer. We do not guess whether the system is working. We document it, every 30 days.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why LVRGWRKS Is Different */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">Why LVRGWRKS</span>
                <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">We compete on capability and outcome accountability. Not on price.</h2>
                <p className="text-brand-slate text-lg leading-relaxed mb-6">
                  Most automation vendors build what you ask for and leave. LVRGWRKS embeds as your fractional CTO and AI operations partner. We are accountable to outcomes, not deliverables. The difference matters when your business is growing and the automation needs to grow with it.
                </p>
                <p className="text-brand-slate text-lg leading-relaxed mb-6">
                  We do not deploy AI tools and call it transformation. We evaluate the structural design of your operation first, identify where the real constraints live, and build automation that changes the economics of running your business. The goal is not efficiency. It is durable operating leverage as you scale.
                </p>
                <p className="text-brand-slate text-lg leading-relaxed">
                  LVRGWRKS was founded in Calgary and serves mid-market operators across Alberta and Western Canada. We understand the operational realities of energy services, construction, property management, and manufacturing in this market because it is where we have spent our careers.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                  <h3 className="font-display font-bold text-lg text-brand-navy mb-3">You own everything we build</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">Every workflow, automation, agent, and integration is client-owned from day one. No lock-in. No dependency on LVRGWRKS to keep the systems running.</p>
                </div>
                <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                  <h3 className="font-display font-bold text-lg text-brand-navy mb-3">We build where SaaS vendors cannot follow</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">Single-platform automation gets absorbed by SaaS vendors within 18 months. We build cross-platform orchestration that sits above your tools and connects them in ways that cannot be replicated by any single vendor.</p>
                </div>
                <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                  <h3 className="font-display font-bold text-lg text-brand-navy mb-3">ROI is documented, not estimated</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">Every month you receive a Value Creation Report showing exactly what was recovered: labour hours, automation performance, and rolling ROI against your retainer. We do not guess whether we are saving you money.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">Who We Work With</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-4">Built for Alberta operators</h2>
              <p className="text-brand-slate text-lg max-w-2xl mx-auto">Founders, owners, and COOs of mid-market companies across Calgary, Alberta, and Western Canada. Typically 20 to 250 employees, $5M to $150M in revenue.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">Construction and General Contracting</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Project coordination across subcontractors, cost tracking against estimate, RFI and submittal workflows, and field-to-office data sync -- all automated so your PMs spend time on the job, not on the admin.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">Property Management</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Billing, maintenance requests, tenant communications, inspection workflows, and owner reporting connected into a single operating layer. We have helped property management firms eliminate multiple planned administrative hires by automating the coordination overhead.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">Manufacturing</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Production scheduling, quality reporting, supplier coordination, and operational dashboards rebuilt around your actual constraint throughput. AI deployed at the specific bottlenecks where it changes the economics of your line.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">Energy Services</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Field dispatch, compliance tracking, equipment maintenance scheduling, and reporting across distributed workforces. Systems that keep your crews moving and your documentation clean without adding administrative overhead.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">What is your manual work actually costing you?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4 text-lg leading-relaxed">
            The Leverage Audit quantifies it in 60 minutes. We map your highest-friction workflows, put a real dollar figure on the labour cost, and outline a conceptual automation architecture before the call ends.
          </p>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
            No cost. No commitment. You leave with a clear picture of where your operations are costing you more than they should.
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