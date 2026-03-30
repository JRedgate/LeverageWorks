import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const DigitalTransformationPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'Digital Transformation Consulting Calgary | LVRGWRKS (LeverageWorks) - Mid-Market Alberta',
    description: 'Digital transformation consulting for mid-market companies in Calgary and Alberta. LVRGWRKS fixes failed transformations and builds AI operating models that actually stick.',
    canonical: 'https://www.lvrgwrks.com/digital-transformation-consulting',
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Digital Transformation Consulting · Calgary, AB</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl text-brand-navy mb-6 leading-tight">
              Most Digital Transformations Fail. Here&apos;s Why Yours Doesn&apos;t Have To.
            </h1>
            <p className="text-brand-slate text-xl md:text-2xl mb-6 italic">
              Operating model consulting for Alberta&apos;s mid-market.
            </p>
            <p className="text-brand-slate text-lg leading-relaxed mb-10 max-w-3xl">
              70% of digital transformation initiatives fail to deliver their projected value. Not because of the technology - the tools exist. They fail because of operating model misalignment. LVRGWRKS (LeverageWorks) solves the layer between strategy and execution - the synthesis layer that connects leadership intent to technical reality.
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
                View Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Transformations Fail */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-12">Why Transformations Fail</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">The Integration Gap</h3>
                <p className="text-gray-400 leading-relaxed">
                  New software is deployed on top of old workflows. Nothing talks to each other. Your team becomes the integration layer.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">The Adoption Gap</h3>
                <p className="text-gray-400 leading-relaxed">
                  Tools are bought for features no one uses. Training happens once. Behaviour never changes.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl">
                <h3 className="font-display font-bold text-xl text-brand-gold mb-4">The Accountability Gap</h3>
                <p className="text-gray-400 leading-relaxed">
                  No one owns the transformation after the consultant leaves. It drifts back to spreadsheets within 6 months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-8">How LVRGWRKS Is Different</h2>
            <p className="text-brand-slate text-lg leading-relaxed mb-12 max-w-3xl">
              We are not a project consultancy. We don&apos;t hand you a report and leave. LVRGWRKS embeds as your long-term operating partner - designing the system, building the system, and staying accountable to the outcomes. Every 30 days you receive a Value Creation Report that proves what changed and what it returned.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-brand-surface rounded-xl">
                <div className="text-brand-gold font-display font-bold text-4xl mb-2">70%</div>
                <p className="text-brand-slate text-sm">of transformation value lost in the execution gap</p>
              </div>
              <div className="text-center p-8 bg-brand-surface rounded-xl">
                <div className="text-brand-gold font-display font-bold text-4xl mb-2">60</div>
                <p className="text-brand-slate text-sm">days to your first measurable result</p>
              </div>
              <div className="text-center p-8 bg-brand-surface rounded-xl">
                <div className="text-brand-gold font-display font-bold text-4xl mb-2">7.5x</div>
                <p className="text-brand-slate text-sm">ROI average across engagements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Transform */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-12 text-center">What We Transform</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Operating Model Design</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Redesigning your workflows for an AI-augmented workforce where human judgment remains the primary lever.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Systems Architecture</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Building the technical integration layer that connects your platforms into a single source of truth.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Change Management</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Ensuring adoption across your team through embedded execution, not top-down mandates.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-lg text-brand-navy mb-4">Measurement Frameworks</h3>
                <p className="text-brand-slate text-sm leading-relaxed">
                  Defining the KPIs that prove transformation value - and reporting against them monthly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Your transformation shouldn&apos;t be a sunk cost.</h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Start with the Leverage Audit - a free 60-minute session that maps your current state and defines a clear path forward.
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
