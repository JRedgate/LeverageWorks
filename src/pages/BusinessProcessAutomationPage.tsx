import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const BusinessProcessAutomationPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'Business Process Automation Alberta | LVRGWRKS - Eliminate Manual Workflows',
    description: 'LVRGWRKS automates manual business processes for mid-market companies in Alberta. We map your workflows, quantify the labour cost, and build automation systems that eliminate the manual work permanently.',
    canonical: 'https://www.lvrgwrks.com/business-process-automation',
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
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Business Process Automation - Alberta</span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-6 tracking-tight">
              Your team should not be<br />
              <span className="text-brand-slate italic">the integration layer between your own systems.</span>
            </h1>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-6">
              Every time a member of your team copies data from one system to another, builds a report by hand, or chases a status update through email and phone calls, that is money leaving your business through the least visible exit on your P&L. The work looks productive. It is not.
            </p>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-10">
              LVRGWRKS maps, redesigns, and automates these processes so your people can focus on the work that actually requires human judgment -- and the systems handle everything else.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/leverage-audit" className="bg-brand-navy text-white px-10 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 hover:bg-brand-gold hover:text-brand-navy transition-all shadow-lg group">
                Book a Free Leverage Audit
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <Link to="/ai-automation-consulting" className="border-2 border-brand-navy text-brand-navy px-10 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 hover:bg-brand-navy hover:text-white transition-all">
                AI Automation
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* The Problem */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">The Problem</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Manual processes hide in plain sight</h2>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mb-6">
                Business process automation is not about replacing people. It is about identifying the specific work your people are doing that should not require a person -- and building systems that handle that work automatically so your team can do the higher-value work only they can do.
              </p>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl">
                The challenge is that manual processes are almost invisible until you look for them. They are embedded in job descriptions, normalized as "just how things work," and distributed across multiple people so no single person carries an obviously excessive burden. The labour cost is real. It just does not appear anywhere on your financial statements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Where it typically hides</h3>
                <div className="space-y-3">
                  {[
                    'Report compilation from multiple disconnected systems',
                    'Data entry that duplicates information already captured elsewhere',
                    'Status updates and follow-ups that should be automated notifications',
                    'Scheduling and dispatch managed over phone and email',
                    'Invoice and billing reconciliation between platforms',
                    'Compliance documentation assembled manually each period',
                    'Inventory and supply chain tracking in spreadsheets',
                    'Project status tracking that requires manual aggregation',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-2 flex-shrink-0"></div>
                      <span className="text-brand-slate text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">What the cost actually looks like</h3>
                <p className="text-brand-slate text-sm leading-relaxed mb-4">
                  The direct labour cost is the starting point -- hours spent on manual tasks multiplied by the fully loaded cost of the people doing them. For most mid-market companies, this number is larger than expected when you add it up across all processes and all people.
                </p>
                <p className="text-brand-slate text-sm leading-relaxed mb-4">
                  The error cost sits on top of that. Every manual data entry process has an error rate. Incorrect invoices, missed orders, planning decisions based on wrong numbers -- each incident has a direct cost to correct and sometimes a downstream cost that multiplies it.
                </p>
                <p className="text-brand-slate text-sm leading-relaxed">
                  The opportunity cost is often the largest category and the hardest to see. Every hour your best operators spend on manual coordination is an hour they are not managing, deciding, or executing on the work the business actually needs from them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">What We Automate</span>
            <h2 className="font-display font-bold text-4xl mb-6 leading-tight">
              We build around your existing systems, not on top of them.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              LVRGWRKS does not require you to adopt a new platform, retire your existing tools, or retrain your team on unfamiliar software. We build the automation layer that connects your existing systems and handles the work that currently happens between them. Every system we build is owned by you from day one and runs on your infrastructure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Data integration and synchronization</h3>
                <p className="text-gray-300 leading-relaxed">Connecting platforms that do not talk to each other -- ERP, CRM, project management, accounting, field management, scheduling -- so data flows automatically between them without manual export, import, or re-entry. One source of truth. Updated in real time.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Reporting and dashboard automation</h3>
                <p className="text-gray-300 leading-relaxed">Converting manual report-building into automated delivery. Operational dashboards, financial summaries, project status reports, and performance metrics generated automatically from data already in your systems -- without anyone spending hours compiling them.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Workflow and approval automation</h3>
                <p className="text-gray-300 leading-relaxed">Routing, escalation, notification, and approval workflows built around how your business actually operates. Maintenance requests, purchase approvals, compliance signoffs, and status updates that currently happen over email and phone handled automatically with a clear record of every action.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">AI agents for high-volume repetitive tasks</h3>
                <p className="text-gray-300 leading-relaxed">For processes that are too variable for simple automation but still do not require human judgment, we deploy AI agents that monitor, interpret, and act on information. Document processing, exception detection, scheduling optimization, and similar tasks that combine pattern recognition with action.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Measure */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">How We Measure Success</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">ROI documented, not estimated</h2>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mb-6">
                Before we build anything, we baseline your current labour cost for every manual process we are automating. That number becomes the benchmark against which every automation investment is measured. When the system is deployed, you can see exactly what changed and what it returned.
              </p>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl">
                Every 30 days you receive a Value Creation Report that documents the labour hours recovered, the automation performance, and the rolling ROI against your retainer. We do not tell you the system is working. We show you the numbers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border border-gray-100 text-center">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                </div>
                <h3 className="font-display font-bold text-lg text-brand-navy mb-3">Baseline before we build</h3>
                <p className="text-brand-slate text-sm leading-relaxed">We quantify the current labour cost of every process before automation begins. That baseline becomes the ROI benchmark for the engagement.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100 text-center">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-display font-bold text-lg text-brand-navy mb-3">First result in 60 days</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Your highest-value automation is designed, built, and deployed within 60 days of engagement start. You see a working system before the first Value Creation Report is due.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100 text-center">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="font-display font-bold text-lg text-brand-navy mb-3">Monthly Value Creation Reports</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Every 30 days -- labour hours recovered, automation performance, and rolling ROI against your retainer. Documented, not estimated.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Find out what your manual work is actually costing you.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4 text-lg leading-relaxed">
            The Leverage Audit maps your current manual workflows and quantifies the exact labour cost in 60 minutes. You leave with the baseline number -- and a clear picture of where automation investment makes sense.
          </p>
          <p className="text-gray-500 max-w-xl mx-auto mb-12 text-base leading-relaxed">
            No cost. No commitment. No generic presentation.
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