import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const PropertyManagementPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'AI & Automation for Property Management Companies Alberta | LVRGWRKS (LeverageWorks)',
    description: 'LVRGWRKS automates property management workflows for Alberta companies - maintenance dispatch, tenant communications, reporting, and more. Based in Calgary.',
    canonical: 'https://www.lvrgwrks.com/industries/property-management',
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Industry · Property Management</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-brand-navy mb-6 leading-tight">
              Manage More Properties Without Managing More People.
            </h1>
            <p className="text-brand-slate text-xl md:text-2xl mb-6 italic">
              AI and automation for Alberta property management companies.
            </p>
            <p className="text-brand-slate text-lg leading-relaxed mb-10 max-w-3xl">
              Property management is a high-volume, process-intensive business where margin lives in efficiency. LVRGWRKS (LeverageWorks) automates the repetitive workflows - maintenance dispatch, lease renewals, tenant communications, and financial reporting - so your team can manage a larger portfolio without adding headcount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openBriefing()}
                className="bg-brand-navy text-white px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-brand-gold transition-all shadow-lg"
              >
                Request Leverage Audit →
              </button>
              <Link
                to="/capabilities"
                className="border-2 border-brand-navy text-brand-navy px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-all text-center"
              >
                View Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-12">Where Property Management Companies Lose Margin</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Manual Maintenance Dispatch</h3>
                <p className="text-gray-400 leading-relaxed">
                  Work orders are received, triaged, and dispatched manually. Every step is a labour cost. Every delay is a tenant experience issue.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Disconnected Reporting</h3>
                <p className="text-gray-400 leading-relaxed">
                  Financial, occupancy, and maintenance data live in separate systems. Monthly reporting is a manual assembly job that takes days.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Reactive Lease Management</h3>
                <p className="text-gray-400 leading-relaxed">
                  Lease renewals, rate reviews, and vacancy responses happen reactively because no system surfaces them proactively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-12 text-center">What We Automate for Property Managers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-brand-surface p-8 rounded-xl">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Maintenance Workflow Automation</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  From work order creation to contractor dispatch to completion sign-off - automated end-to-end.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Unified Reporting Dashboards</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Financial, occupancy, and maintenance data in a single live dashboard, updated automatically.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Tenant Communication Systems</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Automated communications triggered by lease events, maintenance updates, and payment cycles.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Proactive Lease Intelligence</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Alerts and workflows that surface upcoming renewals, rate opportunities, and vacancy risk in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">How much of your team&apos;s time is spent on work a system could do?</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            The Leverage Audit maps it and prices it in 60 minutes. Book your complimentary session.
          </p>
          <button
            onClick={() => openBriefing()}
            className="bg-brand-gold text-brand-navy px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl"
          >
            Request Leverage Audit →
          </button>
        </div>
      </section>
    </>
  );
};
