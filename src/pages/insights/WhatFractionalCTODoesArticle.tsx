import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';

export const WhatFractionalCTODoesArticle: React.FC = () => {
  useSEO({
    title: 'What Does a Fractional CTO Actually Do? A Guide for Alberta Business Owners | LVRGWRKS',
    description: 'Thinking about hiring a fractional CTO? Here\'s exactly what they do, what they cost, and whether it\'s the right move for your Alberta mid-market company.',
    canonical: 'https://www.lvrgwrks.com/insights/what-does-a-fractional-cto-do',
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Insight · Fractional CTO</span>
            </div>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mb-6 leading-tight">
              What Does a Fractional CTO Actually Do? A Guide for Alberta Business Owners
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <article className="max-w-3xl mx-auto prose prose-lg prose-slate">
            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">The Problem With "CTO"</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              The title Chief Technology Officer means different things in different organizations. In a 10-person startup, the CTO is usually a co-founder who writes code. In a Fortune 500, it is a C-suite executive managing hundreds of engineers. For a mid-market company with 50-200 employees, neither model fits. What you actually need is strategic technical leadership - someone who can own the technology roadmap, evaluate vendors, and lead AI and automation initiatives - without the $200,000+ salary.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">What a Fractional CTO Does (and Doesn&apos;t Do)</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              A fractional CTO is a senior technology executive who works with your company on a part-time or retainer basis. Here is what that looks like in practice:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-brand-surface p-6 rounded-xl">
                <p className="text-brand-navy font-bold mb-2">1. Owns the technology roadmap</p>
                <p className="text-brand-slate text-sm">Defines your multi-year plan for systems, integrations, and AI.</p>
              </div>
              <div className="bg-brand-surface p-6 rounded-xl">
                <p className="text-brand-navy font-bold mb-2">2. Evaluates and holds vendors accountable</p>
                <p className="text-brand-slate text-sm">So you stop buying software that doesn&apos;t deliver.</p>
              </div>
              <div className="bg-brand-surface p-6 rounded-xl">
                <p className="text-brand-navy font-bold mb-2">3. Leads AI and automation initiatives</p>
                <p className="text-brand-slate text-sm">From opportunity identification through to deployment and measurement.</p>
              </div>
              <div className="bg-brand-surface p-6 rounded-xl">
                <p className="text-brand-navy font-bold mb-2">4. Attends leadership meetings</p>
                <p className="text-brand-slate text-sm">As a full participant in operational decisions with a technology dimension.</p>
              </div>
              <div className="bg-brand-surface p-6 rounded-xl">
                <p className="text-brand-navy font-bold mb-2">5. Produces monthly value reports</p>
                <p className="text-brand-slate text-sm">Proving what was built and what it returned.</p>
              </div>
            </div>

            <p className="text-brand-slate leading-relaxed mb-6 italic">
              <strong>Clarification:</strong> What a fractional CTO typically does NOT do: write code, manage IT helpdesk, or replace an operations manager.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">Is a Fractional CTO Right for Your Company?</h2>
            <p className="text-brand-slate leading-relaxed mb-4">
              <strong>A fractional CTO is likely the right fit if:</strong>
            </p>
            <ul className="list-disc pl-6 text-brand-slate mb-6 space-y-2">
              <li>You are spending money on software and not seeing ROI</li>
              <li>You have tried a digital transformation that didn&apos;t deliver</li>
              <li>You need technical leadership for major decisions but can&apos;t justify a full-time hire</li>
              <li>You are actively exploring AI and don&apos;t know where to start</li>
            </ul>
            <p className="text-brand-slate leading-relaxed mb-4">
              <strong>It is probably not the right fit if:</strong>
            </p>
            <ul className="list-disc pl-6 text-brand-slate mb-6 space-y-2">
              <li>You need a full-time head of engineering</li>
              <li>Your primary challenge is software development capacity (not strategy)</li>
              <li>Your organization has fewer than 15 employees</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">What Does a Fractional CTO Cost in Alberta?</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              Full-time CTOs in Alberta typically command $180,000-$280,000 per year in total compensation. Fractional arrangements typically range from $3,000-$10,000 per month depending on engagement depth - giving you access to the same level of strategic leadership for 10-30% of the cost. For most mid-market engagements, the ROI justification comes from a single avoided bad software decision or one successfully automated workflow.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">How LVRGWRKS Approaches Fractional CTO Engagements</h2>
            <p className="text-brand-slate leading-relaxed mb-8">
              LVRGWRKS was built specifically for the Alberta mid-market. Our fractional CTO model starts with the Leverage Audit - a free 60-minute diagnostic - and moves into a defined engagement with monthly accountability reporting. We don&apos;t disappear after the strategy deck. We stay embedded until the value is proven.
            </p>
          </article>

          {/* CTA Box */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-brand-navy p-8 md:p-12 rounded-xl text-white text-center">
              <h3 className="font-display font-bold text-2xl mb-4">Not sure if a fractional CTO is right for your business?</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                The Leverage Audit answers that question in 60 minutes - at no cost to you.
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
