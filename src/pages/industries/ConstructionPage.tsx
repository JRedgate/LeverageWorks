import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const ConstructionPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'AI & Automation for Construction Companies Alberta | LVRGWRKS (LeverageWorks)',
    description: 'LVRGWRKS helps Alberta construction companies automate project reporting, subcontractor management, and cost tracking using AI and integrated operating systems.',
    canonical: 'https://www.lvrgwrks.com/industries/construction',
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Industry · Construction</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-brand-navy mb-6 leading-tight">
              Build More. Report Less. Finish On Budget.
            </h1>
            <p className="text-brand-slate text-xl md:text-2xl mb-6 italic">
              AI and operating systems for Alberta&apos;s construction sector.
            </p>
            <p className="text-brand-slate text-lg leading-relaxed mb-10 max-w-3xl">
              Construction is a margin-thin, schedule-critical business where the difference between profit and loss is often the quality of information reaching your project managers. LVRGWRKS (LeverageWorks) connects your field, finance, and operations data into a system that surfaces the right information at the right time - so your team spends less time chasing status and more time building.
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-12">The Construction Problem We Solve</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Cost Overrun Visibility</h3>
                <p className="text-gray-400 leading-relaxed">
                  By the time you know a project is over budget, the damage is done. Real-time cost tracking changes this.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Subcontractor Coordination</h3>
                <p className="text-gray-400 leading-relaxed">
                  Scheduling, dispatch, and compliance tracking for subs is managed over phone and email. It doesn&apos;t scale.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Reporting Overhead</h3>
                <p className="text-gray-400 leading-relaxed">
                  Project managers spend hours every week assembling reports from multiple systems instead of running the job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-12 text-center">What We Build for Construction Companies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-brand-surface p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Real-Time Project Cost Intelligence</h3>
                <p className="text-brand-slate leading-relaxed">
                  Live cost tracking that flags overruns when they&apos;re happening, not at month-end.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Subcontractor Management Automation</h3>
                <p className="text-brand-slate leading-relaxed">
                  Scheduling, communication, document collection, and compliance tracking - automated and centralized.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Integrated Project Dashboards</h3>
                <p className="text-brand-slate leading-relaxed">
                  One view of every active project: schedule, cost, resource utilization, and critical path - updated automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alberta Context */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-8">Built for Alberta&apos;s Construction Reality</h2>
            <p className="text-brand-slate text-lg leading-relaxed">
              Alberta construction operates across extreme weather, complex procurement environments, and tight labour markets. Your operating system needs to reflect that reality. LVRGWRKS builds for the context you&apos;re actually in - not a generic playbook.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">What would a real-time view of every project cost you?</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Less than the next overrun. Start with the Leverage Audit - free, 60 minutes.
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
