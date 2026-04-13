import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const EnergyServicesPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'AI and Automation for Alberta Energy Services Companies | LVRGWRKS',
    description: 'LVRGWRKS builds AI automation and operations systems for Alberta energy services companies. Connect field operations, dispatch, compliance, and back-office into one operating layer.',
    canonical: 'https://www.lvrgwrks.com/industries/energy-services',
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
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Industry - Energy Services</span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-6 tracking-tight">
              Your field operations generate data.<br />
              <span className="text-brand-slate italic">Almost none of it reaches your back office in time to use.</span>
            </h1>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-6">
              Alberta energy services companies operate in one of the most data-rich environments in the world. Field crews, equipment, dispatch, compliance, procurement, and project cost data are all being captured somewhere. The problem is that somewhere is five different systems, three spreadsheets, and a set of paper tickets sitting in a truck.
            </p>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-10">
              By the time that data reaches the people who need to make decisions with it, the day is already over. LVRGWRKS builds the integration and automation layer that connects your field and back-office operations so decisions get made on current information, not yesterday's.
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
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Where energy services companies lose margin they cannot afford to lose</h2>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mb-6">
                Commodity price cycles compress margins. Labour availability limits capacity. Regulatory requirements add compliance overhead. In this environment, every avoidable cost matters -- and most avoidable costs in energy services companies trace back to the same root cause: operational data that does not flow where it needs to go.
              </p>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl">
                When dispatch happens over phone and text, when field tickets get reconciled manually against the job cost system, when equipment utilization lives in a spreadsheet no one has time to maintain, the coordination overhead compounds. Your best people spend their time managing information instead of managing operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Field and back-office operating on different data</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Field data lives in paper tickets, tablets, and field management apps that do not connect to your ERP or accounting system. The back office makes billing, payroll, and cost decisions on information that arrived hours or days late, if it arrived at all. The gap between what happened in the field and what your systems know about it is where margin disappears.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Manual dispatch and scheduling</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Crew scheduling and dispatch managed over phone and text does not scale and does not leave a record. When a re-dispatch is needed due to equipment issues, weather, or client changes, the coordination happens in real time across multiple conversations with no system capturing what changed, why, or what it cost.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Compliance documentation overhead</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Safety documentation, equipment certifications, regulatory submissions, and client compliance requirements generate significant administrative overhead. When that documentation is managed manually, it creates risk of gaps and consumes administrative capacity that should be doing something else.
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
              One operating layer that connects field, dispatch, compliance, and back office.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              LVRGWRKS builds custom automation and integration systems for energy services companies across Alberta and Western Canada. We do not replace your existing tools. We connect them -- building the automation layer that sits above your current systems and makes them work together. Every workflow we build belongs to you from day one.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Field-to-office data integration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Field tickets, daily reports, equipment hours, and labour data flow automatically from field to back office. No manual re-entry. No paper ticket reconciliation. Your cost accounting and payroll systems see current data, not yesterday's. Billing cycles compress because the information is already there.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Dispatch and scheduling automation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Crew and equipment scheduling with automated dispatch notifications, re-dispatch workflows, and a clear record of every assignment, change, and reason. Your dispatchers stop managing information and start managing exceptions. The system handles routine scheduling. Humans handle the decisions that require judgment.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Compliance documentation systems</h3>
                <p className="text-gray-300 leading-relaxed">
                  Safety documentation, equipment certifications, and regulatory submissions managed through automated workflows. Expiry tracking, renewal reminders, and audit-ready records generated automatically. Your safety and compliance team focuses on substance, not paperwork.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Operational reporting and cost intelligence</h3>
                <p className="text-gray-300 leading-relaxed">
                  Real-time job cost tracking, equipment utilization reporting, crew productivity metrics, and project margin visibility -- all updated automatically from data already flowing through your systems. Leadership gets current information without anyone building a report.
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
                <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Energy services in Alberta is not like any other market</h2>
                <p className="text-brand-slate text-lg leading-relaxed mb-6">
                  Commodity price cycles, remote operations, complex regulatory environments, and demanding client requirements make Alberta energy services one of the most operationally challenging industries in the country. A technical partner who has not worked in this context cannot build systems that reflect its realities.
                </p>
                <p className="text-brand-slate text-lg leading-relaxed mb-6">
                  LVRGWRKS was founded in Calgary and works with energy services companies across Alberta and Western Canada. We understand the operational pressures of this market -- the margin compression, the compliance requirements, the workforce management challenges in remote locations -- because it is the context our clients navigate every day.
                </p>
                <p className="text-brand-slate text-lg leading-relaxed">
                  We work with oilfield services companies, industrial maintenance contractors, pipeline services providers, and environmental services firms ranging from 20 to 250 employees. If your team is busy but the business is not running as efficiently as it needs to, that gap is where we work.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-display font-bold text-brand-navy mb-2">Oilfield Services</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">Field ticket automation, crew dispatch, equipment utilization tracking, and job cost integration for service company operations.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-display font-bold text-brand-navy mb-2">Industrial Maintenance</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">Work order management, maintenance scheduling, compliance documentation, and turnaround coordination for industrial maintenance contractors.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-display font-bold text-brand-navy mb-2">Environmental and Pipeline Services</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">Regulatory reporting automation, inspection documentation, remediation tracking, and client reporting for environmental services providers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">What is your field data lag costing you in missed margin?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4 text-lg leading-relaxed">
            The Leverage Audit maps your current workflows, identifies where data is moving manually, and quantifies the cost. You leave with a clear picture of where automation investment makes sense for your business specifically.
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