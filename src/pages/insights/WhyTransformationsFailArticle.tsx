import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';

export const WhyTransformationsFailArticle: React.FC = () => {
  useSEO({
    title: 'Why Most Digital Transformations Fail - And What Mid-Market Companies Do Instead | LVRGWRKS',
    description: '70% of digital transformations fail to deliver projected value. Here\'s the real reason why - and how Alberta\'s mid-market companies are solving it differently.',
    canonical: 'https://www.lvrgwrks.com/insights/why-digital-transformations-fail',
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Insight · Digital Transformation</span>
            </div>
            <p className="text-brand-slate text-sm mb-4">March 2026</p>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mb-6 leading-tight">
              Why Most Digital Transformations Fail (And What Mid-Market Companies Do Instead)
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <article className="max-w-3xl mx-auto prose prose-lg prose-slate">
            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">The Number Everyone Knows, and the Reason No One Talks About</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              The 70% failure statistic for digital transformation has been quoted so often it has lost its power. But the number is real. McKinsey, BCG, and Harvard Business Review have all documented it across industries and geographies. The question worth asking isn&apos;t whether transformations fail - it&apos;s why. And the answer is almost never the technology.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">The Real Reason: Operating Model Misalignment</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              Most digital transformations fail because they deploy new tools on top of old workflows. The ERP gets implemented, but the planning process doesn&apos;t change. The CRM goes live, but the sales team still tracks deals in a spreadsheet. The AI tool gets purchased, but nobody changes how decisions get made. Technology can&apos;t fix a process problem. It can only accelerate it - in either direction.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">The Three Gaps That Kill Transformations</h2>
            
            <div className="bg-brand-surface p-8 rounded-xl mb-6">
              <h3 className="font-display font-bold text-xl text-brand-navy mb-4">1. The Integration Gap</h3>
              <p className="text-brand-slate leading-relaxed">
                When new systems don&apos;t connect to existing ones, your team becomes the integration layer. Manual data movement grows, not shrinks.
              </p>
            </div>

            <div className="bg-brand-surface p-8 rounded-xl mb-6">
              <h3 className="font-display font-bold text-xl text-brand-navy mb-4">2. The Adoption Gap</h3>
              <p className="text-brand-slate leading-relaxed">
                Tools bought for features no one uses, with training that happens once and is never reinforced.
              </p>
            </div>

            <div className="bg-brand-surface p-8 rounded-xl mb-6">
              <h3 className="font-display font-bold text-xl text-brand-navy mb-4">3. The Accountability Gap</h3>
              <p className="text-brand-slate leading-relaxed">
                When the consultant leaves, ownership of the transformation evaporates. Within six months, the organization drifts back to what it knew.
              </p>
            </div>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">What Mid-Market Companies Are Doing Differently</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              The companies getting ROI from digital transformation share a common pattern: they treat it as an operating model problem, not a technology problem. They start by mapping their workflows and quantifying the cost of friction - before buying anything. They build the integration layer between systems rather than adding more systems. And they keep someone accountable to outcomes long after go-live.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">The Synthesis Layer</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              LVRGWRKS calls this the synthesis layer - the connective tissue between leadership intent and technical execution. It is not a product. It is not a software platform. It is a methodology for ensuring that every technology decision serves the operational goals of the business, and that someone stays accountable to proving it did.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">Where to Start</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              If your organization has been through a transformation that didn&apos;t deliver, or is about to start one, the most valuable first step is a clear-eyed assessment of your current operating model. Map your manual workflows. Quantify the labour cost. Identify the integration gaps. Only then does the technology conversation make sense.
            </p>
            <p className="text-brand-slate leading-relaxed mb-8">
              That&apos;s what the LVRGWRKS Leverage Audit does in 60 minutes - at no cost.
            </p>
          </article>

          {/* CTA Box */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-brand-navy p-8 md:p-12 rounded-xl text-white text-center">
              <h3 className="font-display font-bold text-2xl mb-4">The Leverage Audit</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                60 minutes. Map your workflows. Quantify your friction. Get a clear path forward. Complimentary.
              </p>
              <Link
                to="/leverage-audit"
                className="inline-block bg-brand-gold text-brand-navy px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all"
              >
                Request Leverage Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
