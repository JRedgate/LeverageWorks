import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const PropertyManagementPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'AI and Automation for Alberta Property Management Companies | LVRGWRKS',
    description: 'LVRGWRKS helps Alberta property management companies connect billing, maintenance, tenant, and owner reporting systems into one automated operating layer.',
    canonical: 'https://www.lvrgwrks.com/industries/property-management',
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
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Industry - Property Management</span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-6 tracking-tight">
              Your portfolio is growing.<br />
              <span className="text-brand-slate italic">Your administrative overhead is growing faster.</span>
            </h1>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-6">
              Property management is fundamentally a coordination business. Tenants, owners, maintenance vendors, inspectors, leasing agents, and accountants all generating requests, documentation, and data that needs to flow between disconnected systems. At small portfolio sizes this is manageable. As you add doors, the coordination overhead compounds faster than the revenue does.
            </p>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-10">
              LVRGWRKS builds the automation layer that connects your property management platform, accounting system, maintenance workflows, and communication tools so the coordination happens automatically and your team focuses on the work that actually requires human judgment.
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

      {/* The Problem */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">The Problem</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Why property management companies hire when they should be automating</h2>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mb-6">
                The most common growth trap in property management is hiring administrative staff to manage coordination overhead that should not exist. Maintenance request routing that happens manually over email. Owner reports assembled by hand from three different data sources. Lease renewals tracked in a spreadsheet. Billing reconciled between the property management platform and the accounting system by someone at a keyboard.
              </p>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl">
                Each of those workflows feels manageable at 200 units. At 500 units it requires dedicated staff. At 1,000 units it requires a team. The work is not generating value. It is managing coordination that well-built systems would handle automatically. LVRGWRKS has helped property management companies recover significant weekly labour hours and eliminate the need for planned administrative hires by connecting the systems that should already be talking to each other.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Maintenance workflows managed over email and phone</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Maintenance requests arrive through multiple channels, get triaged manually, assigned to vendors over phone or email, and tracked through follow-up calls. When the job is done, the information has to be manually entered into the property management platform. Each request that should require minimal human involvement requires multiple touchpoints, every time.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Owner reports assembled manually every month</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Owner reporting requires pulling data from your property management platform, your accounting system, and your maintenance records, then formatting it into a report that looks professional and tells a coherent story. Multiply that by the number of owners you report to and you have a significant monthly administrative burden that produces no incremental value -- just information transfer that should be automatic.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Billing reconciliation between disconnected systems</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  When your property management platform and your accounting system do not sync automatically, someone reconciles them manually. Rent rolls, maintenance charges, late fees, and owner distributions all have to be verified against two sources of truth. The error risk is real, and the time cost compounds with every unit added to the portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">What We Build</span>
            <h2 className="font-display font-bold text-4xl mb-6 leading-tight">
              One operating layer that connects your property management systems and eliminates the manual coordination between them.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              LVRGWRKS builds custom automation and integration systems for property management companies across Alberta and Western Canada. We connect your existing platforms -- your property management software, your accounting system, your maintenance management tools, your communication channels -- into a unified operating layer. Every workflow we build belongs to you from day one.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Maintenance workflow automation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Maintenance requests routed automatically from submission through vendor assignment, scheduling, completion, and billing. Tenant communications triggered at each stage without anyone sending them manually. Vendor performance tracked automatically. Work orders created and closed in your property management platform without manual data entry. Your maintenance coordinator stops managing the workflow and starts managing the exceptions.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Automated owner reporting</h3>
                <p className="text-gray-300 leading-relaxed">
                  Owner reports generated automatically from data already in your systems -- rent collected, maintenance completed, expenses incurred, vacancies, and portfolio performance -- formatted consistently and delivered on schedule. No manual assembly. No pulling data from three places. Owners receive professional, accurate reports without anyone spending hours building them.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Billing and accounting integration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Rent rolls, maintenance charges, late fees, and owner distributions synced automatically between your property management platform and accounting system. No manual reconciliation. No dual data entry. One source of truth for billing that both systems reflect in real time, reducing errors and eliminating the reconciliation cycle entirely.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Tenant communication automation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Lease renewal reminders, maintenance status updates, rent receipt confirmations, inspection notices, and arrears communications triggered automatically based on events in your property management system. Your team stops drafting routine communications and starts handling the tenant relationships that actually require personal attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alberta Context */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">Built for Alberta</span>
                <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Alberta property management has its own operational realities</h2>
                <p className="text-brand-slate text-lg leading-relaxed mb-6">
                  The Alberta rental market moves with the energy cycle. Vacancy management, pricing strategy, and tenant turnover all respond to economic conditions that are specific to this province. Managing a growing portfolio in this environment requires operational systems that can scale without adding administrative headcount proportionally.
                </p>
                <p className="text-brand-slate text-lg leading-relaxed mb-6">
                  LVRGWRKS was founded in Calgary and works with property management companies across Alberta and Western Canada. We have built automation systems for residential, commercial, and mixed-use portfolios, and we understand the operational patterns of this market from direct experience.
                </p>
                <p className="text-brand-slate text-lg leading-relaxed">
                  We work with property management companies managing between 100 and 2,000 units across residential and commercial portfolios. If your administrative overhead is growing faster than your portfolio, that gap is where we work.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-display font-bold text-brand-navy mb-2">Residential Property Management</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">Multi-family and single-family residential portfolios with tenant communication automation, maintenance workflows, and owner reporting.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-display font-bold text-brand-navy mb-2">Commercial Property Management</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">Office, retail, and industrial portfolio management with lease administration automation, CAM reconciliation, and tenant reporting.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-display font-bold text-brand-navy mb-2">Mixed Portfolio Operations</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">Property management companies with mixed residential and commercial portfolios requiring unified reporting and consistent operational workflows across asset types.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">How many hours per week is your team spending on coordination that should be automatic?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4 text-lg leading-relaxed">
            The Leverage Audit maps your current workflows, identifies the highest-cost manual processes, and gives you a clear picture of where automation investment delivers the fastest return.
          </p>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
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