import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const BusinessProcessAutomationPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'Business Process Automation Alberta | LVRGWRKS (LeverageWorks) - Eliminate Manual Work',
    description: 'LVRGWRKS automates business processes for mid-market companies in Alberta. We eliminate manual data entry, disconnected systems, and costly workarounds — and prove the ROI in 60 days.',
    canonical: 'https://www.lvrgwrks.com/business-process-automation',
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Business Process Automation · Alberta</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-brand-navy mb-6 leading-tight">
              Your Team Shouldn&apos;t Be Moving Data by Hand.
            </h1>
            <p className="text-brand-slate text-xl md:text-2xl mb-6 italic">
              Business process automation for Alberta&apos;s mid-market.
            </p>
            <p className="text-brand-slate text-lg leading-relaxed mb-10 max-w-3xl">
              Every time a member of your team copies data from one system to another, exports a report to a spreadsheet, or chases down a status update manually — that is money leaving your business. LVRGWRKS (LeverageWorks) maps, redesigns, and automates these processes so your people can focus on the work that actually requires human judgment.
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
                See Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Processes We Automate */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-12">Common Processes We Automate</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                'Reporting & Data Aggregation',
                'Scheduling & Dispatch',
                'Invoice & PO Processing',
                'CRM & Pipeline Updates',
                'Inventory & Supply Chain Tracking',
                'Project Status & Milestone Reporting',
              ].map((process, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-xl text-center">
                  <p className="text-white font-bold text-sm">{process}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Measure Success */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-8">How We Measure Success</h2>
            <p className="text-brand-slate text-lg leading-relaxed mb-12 max-w-3xl">
              Every automation engagement is measured against a single question: what did this return? We baseline your current labour cost before we build anything, so when we deliver, you can see the exact dollar value created. Most clients see full ROI within the first 60 days.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-brand-surface rounded-xl">
                <div className="text-brand-gold font-display font-bold text-4xl mb-2">60</div>
                <p className="text-brand-slate text-sm">days to first ROI</p>
              </div>
              <div className="text-center p-8 bg-brand-surface rounded-xl">
                <div className="text-brand-gold font-display font-bold text-4xl mb-2">30</div>
                <p className="text-brand-slate text-sm">day Value Reports</p>
              </div>
              <div className="text-center p-8 bg-brand-surface rounded-xl">
                <div className="text-brand-gold font-display font-bold text-4xl mb-2">$200K+</div>
                <p className="text-brand-slate text-sm">average annual labour cost recovered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-12 text-center">The Process</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">01</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-navy">Diagnose</h3>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-brand-slate leading-relaxed">
                      We map your current workflows, quantify the labour cost of manual workarounds, and identify where the friction lives between your systems and your team.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">02</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-navy">Design</h3>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-brand-slate leading-relaxed">
                      We outline the automation architecture that will connect your platforms and eliminate the manual data movement. You see the blueprint before any building begins.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">03</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-navy">Build</h3>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-brand-slate leading-relaxed">
                      We implement the systems. This is not a handoff of a slide deck. We work alongside your teams to build the integrations, train your people, and ensure adoption.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-brand-navy p-8 md:p-12 rounded-xl text-white">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4">
                    <div className="w-16 h-16 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">04</span>
                    </div>
                    <h3 className="font-display font-bold text-xl">Stay</h3>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-gray-300 leading-relaxed">
                      This is not a project with an end date. We stay with you as your fractional CTO and AI operations partner. Every 30 days, you receive a Monthly Value Creation Report proving ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Find out what your manual work is costing you.</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            In 60 minutes, the Leverage Audit maps your workflows and quantifies the labour cost. Complimentary. No obligation.
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
