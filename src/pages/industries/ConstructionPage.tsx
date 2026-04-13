import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const ConstructionPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'AI and Automation for Alberta Construction Companies | LVRGWRKS',
    description: 'LVRGWRKS helps Alberta construction and general contracting companies eliminate manual reporting, automate subcontractor coordination, and get real-time project cost visibility.',
    canonical: 'https://www.lvrgwrks.com/industries/construction',
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
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Industry - Construction and General Contracting</span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-6 tracking-tight">
              Your project managers are running jobs<br />
              <span className="text-brand-slate italic">and assembling reports at the same time.</span>
            </h1>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-6">
              Construction is a margin-thin, schedule-critical business. The difference between a profitable project and an overrun is often the quality of information reaching your team -- and how quickly it gets there. When your PMs are spending hours each week pulling data from disconnected systems, they are not managing the job. They are managing the reporting.
            </p>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl mb-10">
              LVRGWRKS builds the automation and integration layer that connects your field, finance, and operations data so the right information reaches the right people without anyone having to compile it manually.
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
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Where construction companies lose margin they do not have to lose</h2>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mb-6">
                Most construction companies in Alberta are running their projects on a combination of project management software, accounting software, spreadsheets, and email chains that do not talk to each other. The field team captures data in one place. Finance lives somewhere else. Subcontractor communications happen in a third system. And your PM is manually bridging all of it.
              </p>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl">
                The cost of that manual bridging is not just labour hours. It is decision latency. By the time a cost overrun surfaces through the manual reporting cycle, the window to correct it has often closed. The damage is already done.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Cost overruns discovered too late</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  When job cost data lives in disconnected systems, overruns appear at month-end reporting rather than when they can still be managed. The job is over before the numbers tell the story. Real-time cost tracking against estimate changes this completely -- your PMs know where they stand on every active project, every day.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Subcontractor coordination overhead</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Scheduling, dispatch, compliance documentation, and communication with subcontractors happens across phone calls, texts, and email. At small project volumes this is manageable. As you scale, it becomes a full-time coordination job that produces no value -- just status updates that should be automatic.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Reporting that consumes PM time</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Project managers are the most expensive operational resource in a construction company. When they spend a significant portion of their week assembling progress reports, compiling cost summaries, and chasing status updates, the cost is not just the hours. It is the job-site attention that is not happening while they are at their desk.
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
              Systems that give your team the information they need without asking them to compile it.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
              LVRGWRKS builds custom automation and integration systems for construction and general contracting companies across Alberta and Western Canada. We connect your existing tools -- your project management platform, your accounting system, your field reporting tools -- into a unified operating layer. No rip-and-replace. No new platform your team has to learn. We build the connections between what you already have.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Real-time job cost tracking</h3>
                <p className="text-gray-300 leading-relaxed">
                  Live cost-to-date against estimate for every active project, updated automatically as field data, labour entries, and purchase orders flow through your systems. Overruns surface when they are happening, not at month-end. Your PMs stop compiling cost reports and start managing costs.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Subcontractor coordination automation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Scheduling, dispatch notifications, document collection, compliance tracking, and communication logs -- automated and centralized. Your office team stops chasing subs for certificates and updates. The system handles the coordination and surfaces exceptions that need human attention.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Field-to-office data integration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Daily field reports, labour hours, equipment usage, and progress updates flow automatically from the field into your project management and accounting systems. No manual entry. No re-keying. One source of truth for the entire project, updated in real time.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Project leadership dashboards</h3>
                <p className="text-gray-300 leading-relaxed">
                  One view of every active project -- schedule performance, cost performance, resource utilization, and critical issues -- updated automatically and available without anyone having to build a report. Leadership sees the full picture. PMs get to manage instead of report.
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
                <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Alberta construction is not a generic market</h2>
                <p className="text-brand-slate text-lg leading-relaxed mb-6">
                  Alberta construction operates across extreme weather conditions, complex labour agreements, demanding procurement environments, and regulatory requirements that differ from every other Canadian market. Your operating system needs to reflect that reality, not a generic playbook built for a different context.
                </p>
                <p className="text-brand-slate text-lg leading-relaxed mb-6">
                  LVRGWRKS was founded in Calgary and works with construction companies across Alberta and Western Canada. We understand the operational pressures of this market -- the margin compression, the labour availability challenges, the documentation requirements from owners and regulators -- because it is the environment our clients operate in every day.
                </p>
                <p className="text-brand-slate text-lg leading-relaxed">
                  We work with general contractors, specialty contractors, and civil construction companies ranging from 20 to 250 employees. If your team is busy but the business is not moving as fast as you need it to, that gap is where we work.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-display font-bold text-brand-navy mb-2">General Contracting</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">Multi-trade coordination, subcontractor management, owner reporting, and project cost control across concurrent projects.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-display font-bold text-brand-navy mb-2">Specialty Contracting</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">Crew dispatch, materials tracking, compliance documentation, and labour productivity reporting built around your specific trade.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-display font-bold text-brand-navy mb-2">Civil and Infrastructure</h3>
                  <p className="text-brand-slate text-sm leading-relaxed">Equipment utilization tracking, daily quantity reporting, contract compliance, and progress billing automation for large-scale civil programs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">What would real-time project cost visibility change for your business?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4 text-lg leading-relaxed">
            The Leverage Audit maps your current workflows, quantifies the cost of your manual reporting and coordination overhead, and gives you a clear picture of where automation investment makes sense.
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