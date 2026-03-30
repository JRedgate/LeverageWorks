import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const AIAutomationConsultingPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'AI Automation Consulting Alberta | LVRGWRKS (LeverageWorks) - Workflow Automation for Mid-Market',
    description: 'LVRGWRKS designs and builds AI automation systems for mid-market companies in Alberta and Western Canada. We eliminate manual workflows and connect your platforms into a single operating system.',
    canonical: 'https://www.lvrgwrks.com/ai-automation-consulting',
  });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 bg-brand-surface overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-navy/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>

        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">AI Automation Consulting · Alberta & Western Canada</span>
            </div>

            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-6 tracking-tight">
              Stop Being the Glue Between Your Own Systems.
            </h1>

            <p className="text-brand-slate text-2xl mb-6 font-display italic">
              AI automation consulting for Alberta&apos;s mid-market.
            </p>

            <p className="text-brand-slate text-lg leading-relaxed mb-10 max-w-2xl">
              Your team is manually moving data between platforms that should be talking to each other. Spreadsheets are being used as databases. Decisions are being made on incomplete information because no single tool sees the whole picture. LVRGWRKS (LeverageWorks) builds the automation layer that eliminates this friction permanently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/leverage-audit"
                className="bg-brand-navy text-white px-10 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 hover:bg-brand-slate transition-all shadow-lg hover:shadow-brand-navy/20 group"
              >
                Request Leverage Audit
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/capabilities"
                className="bg-white border border-gray-200 text-brand-navy px-10 py-4 rounded-lg font-bold text-sm hover:border-brand-navy/30 hover:bg-gray-50 transition-all text-center"
              >
                View Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Automate */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">Our Focus</span>
            <h2 className="font-display font-bold text-4xl mb-12">What We Automate</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl mb-4 text-brand-gold">Data Integration</h3>
                <p className="text-gray-400 leading-relaxed">
                  We connect your ERP, CRM, scheduling, and reporting platforms so data flows automatically rather than manually.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl mb-4 text-brand-gold">Workflow Automation</h3>
                <p className="text-gray-400 leading-relaxed">
                  We redesign and automate the standard operating procedures your team performs by hand every day.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl mb-4 text-brand-gold">Reporting & Dashboards</h3>
                <p className="text-gray-400 leading-relaxed">
                  We build leadership dashboards that surface the right information automatically, eliminating manual reporting cycles.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl mb-4 text-brand-gold">Predictive Systems</h3>
                <p className="text-gray-400 leading-relaxed">
                  We deploy AI models that forecast demand, flag exceptions, and surface opportunities before they become problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Cost of Doing Nothing */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">The Reality</span>
            <h2 className="font-display font-bold text-4xl text-brand-navy mb-8">The Cost of Doing Nothing</h2>

            <p className="text-brand-slate text-lg leading-relaxed mb-10">
              70% of digital transformation value is lost in the gap between AI capability and organizational execution. For a company with 50 employees, manual data movement typically costs $200,000-$400,000 per year in labour and missed opportunity - most of it invisible in your P&L.
            </p>

            <div className="bg-brand-navy p-8 md:p-12 rounded-xl text-white">
              <p className="text-2xl md:text-3xl font-display font-bold leading-relaxed">
                "We quantify your exact cost in the first 60 minutes. <span className="text-brand-gold">No estimates. No guesswork.</span>"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Automation Process */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">Our Process</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Our Automation Process</h2>
            </div>

            <div className="space-y-8">
              <div className="bg-brand-surface p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">01</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-navy mb-2">Diagnose</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-brand-slate leading-relaxed">
                      We map every manual workflow, quantify the labour cost, and rank by automation ROI.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-surface p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">02</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-navy mb-2">Design</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-brand-slate leading-relaxed">
                      We architect the automation system - integrations, logic, triggers, and data flows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-surface p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">03</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-navy mb-2">Build</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-brand-slate leading-relaxed">
                      We build and deploy the system alongside your team, ensuring adoption before we move on.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-brand-navy p-8 md:p-12 rounded-xl text-white">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="w-16 h-16 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">04</span>
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2">Stay</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-300 leading-relaxed">
                      We monitor, iterate, and expand the system as your business grows. This is not a project with an end date.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-12 bg-brand-surface border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row md:items-center justify-center gap-4 md:gap-8">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Serving:</p>
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm font-bold text-gray-400">
              <span>PROPERTY MANAGEMENT</span>
              <span>CONSTRUCTION</span>
              <span>MANUFACTURING</span>
              <span>ENERGY SERVICES</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              What is your manual work actually costing you?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              The Leverage Audit quantifies it in 60 minutes. Book your complimentary session.
            </p>
            <Link
              to="/leverage-audit"
              className="inline-flex items-center gap-3 bg-brand-gold text-brand-navy px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl group"
            >
              Request Leverage Audit
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
