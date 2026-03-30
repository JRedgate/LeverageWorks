import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const EnergyServicesPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'AI & Digital Transformation for Energy Services Companies Alberta | LVRGWRKS (LeverageWorks)',
    description: 'LVRGWRKS helps Alberta energy services companies automate field operations, connect data systems, and build AI operating models that reduce cost and improve margins.',
    canonical: 'https://www.lvrgwrks.com/industries/energy-services',
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Industry · Energy Services</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-brand-navy mb-6 leading-tight">
              Turn Field Data Into Operational Advantage.
            </h1>
            <p className="text-brand-slate text-xl md:text-2xl mb-6 italic">
              AI and operating model consulting for Alberta&apos;s energy services sector.
            </p>
            <p className="text-brand-slate text-lg leading-relaxed mb-10 max-w-3xl">
              Alberta&apos;s energy services companies operate in one of the most data-rich environments in the world - and most of that data never gets used. LVRGWRKS (LeverageWorks) builds the integration and intelligence layer that connects field operations, fleet, procurement, and project management into a single operating system.
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-12">The Energy Services Problem We Solve</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Disconnected Field & Back Office</h3>
                <p className="text-gray-400 leading-relaxed">
                  Field data lives in paper, tablets, and spreadsheets that never make it to your ERP in real time. Decisions are made on data that&apos;s already a day old.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Manual Dispatch & Scheduling</h3>
                <p className="text-gray-400 leading-relaxed">
                  Crew scheduling is handled over phone and text. Re-dispatches due to equipment issues cost hours and margin on every job.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">Project Cost Leakage</h3>
                <p className="text-gray-400 leading-relaxed">
                  Without real-time cost tracking, overruns are discovered at month-end, not when they can still be managed.
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
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-12 text-center">What We Build for Energy Services Companies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-brand-surface p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Field-to-Office Integration</h3>
                <p className="text-brand-slate leading-relaxed">
                  Real-time data pipelines connecting field operations, equipment telemetry, and back-office systems.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Dispatch & Resource Optimization</h3>
                <p className="text-brand-slate leading-relaxed">
                  Automated scheduling and dispatch logic that reduces manual coordination and re-dispatch costs.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Project Cost Intelligence</h3>
                <p className="text-brand-slate leading-relaxed">
                  Live cost tracking and exception alerting so overruns are caught early, not at month-end.
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
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-8">Built for Alberta&apos;s Operating Reality</h2>
            <p className="text-brand-slate text-lg leading-relaxed">
              We understand that energy services in Alberta operates differently from every other market. Commodity price cycles, regulatory complexity, and remote operations demand a technical partner who has thought carefully about this context - not one importing playbooks from Silicon Valley.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">What is your field data costing you in missed margin?</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            The Leverage Audit maps your current workflows and quantifies the gap. 60 minutes. Complimentary.
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
