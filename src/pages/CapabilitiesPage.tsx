import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { ServiceCard } from '../components/ServiceCard';
import { useSEO } from '../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

const ChartIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
);
const FlowIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
);
const SystemIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
);

export const CapabilitiesPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'Capabilities | LVRGWRKS (LeverageWorks) - AI Strategy, Systems Design & Operating Models',
    description: 'Strategic readiness audits, execution models, and systems design for the AI-augmented enterprise. LVRGWRKS builds the synthesis layer between AI capability and organizational execution.',
    canonical: 'https://www.lvrgwrks.com/capabilities',
  });

  return (
    <>
      {/* Hero */}
      <header className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-surface">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">Capabilities</span>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-8 tracking-tight">
              Architectural <span className="text-brand-slate italic">Excellence.</span>
            </h1>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl">
              We build the synthesis layer between AI capability and organizational execution. Not more software. Not more tools. The connective tissue that makes intelligence actionable.
            </p>
          </div>
        </div>
      </header>

      {/* Core Services */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="mb-16">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">Core Services</span>
            <h2 className="font-display font-bold text-4xl text-brand-navy">What We Build</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Strategic Readiness"
              description="Auditing organizational workflows across North America to identify where intelligence can be natively embedded to reduce cognitive friction."
              icon={<ChartIcon />}
            />
            <ServiceCard
              title="Execution Models"
              description="Redesigning standard operating procedures for an AI-augmented workforce where human judgment remains the primary lever."
              icon={<FlowIcon />}
            />
            <ServiceCard
              title="Systems Design"
              description="Building custom intelligence pipelines that transform fragmented data into clear, executable leadership directives."
              icon={<SystemIcon />}
            />
          </div>
        </div>
      </section>

      {/* Detailed Breakdown */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">Our Approach</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">How We Work</h2>
              <p className="text-brand-slate text-lg leading-relaxed max-w-2xl mx-auto">
                Every engagement follows our proven methodology: diagnose, architect, implement, govern.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">01</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-navy mb-2">Diagnose</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-brand-slate leading-relaxed mb-4">
                      We audit your current operating model, technology stack, and decision pathways. The goal is to identify where the friction lives between leadership intent and operational execution.
                    </p>
                    <ul className="text-brand-slate text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-1">&#8226;</span>
                        Operating model assessment
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-1">&#8226;</span>
                        Technology stack evaluation
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-1">&#8226;</span>
                        Decision pathway mapping
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">02</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-navy mb-2">Architect</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-brand-slate leading-relaxed mb-4">
                      We design the synthesis layer: the architecture that connects your AI capabilities to your organizational structure. This includes governance frameworks, data pipelines, and human-in-the-loop checkpoints.
                    </p>
                    <ul className="text-brand-slate text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-1">&#8226;</span>
                        Synthesis layer design
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-1">&#8226;</span>
                        Governance framework development
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-1">&#8226;</span>
                        Integration architecture
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">03</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-navy mb-2">Implement</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-brand-slate leading-relaxed mb-4">
                      We build and deploy the systems. This is not a handoff of a slide deck. We work alongside your teams to implement the architecture, train your people, and ensure adoption.
                    </p>
                    <ul className="text-brand-slate text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-1">&#8226;</span>
                        Hands-on implementation
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-1">&#8226;</span>
                        Team enablement and training
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-1">&#8226;</span>
                        Change management support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-12 rounded-xl border border-gray-100">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="w-16 h-16 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-brand-gold font-display font-bold text-2xl">04</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-navy mb-2">Govern</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-brand-slate leading-relaxed mb-4">
                      AI systems require ongoing governance. We establish the monitoring, measurement, and iteration frameworks that ensure your implementation continues to deliver value as your organization evolves.
                    </p>
                    <ul className="text-brand-slate text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-1">&#8226;</span>
                        Performance monitoring frameworks
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-1">&#8226;</span>
                        Continuous improvement cycles
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-gold mt-1">&#8226;</span>
                        Governance and compliance oversight
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">See what we have built.</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
            Our capabilities come to life in real engagements. Explore representative scenarios where we closed the gap between potential and performance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <Link
              to="/impact"
              className="bg-brand-gold text-brand-navy px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl"
            >
              View Impact
            </Link>
            <button
              onClick={() => openBriefing()}
              className="text-white text-sm font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-all"
            >
              Request Leverage Audit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
