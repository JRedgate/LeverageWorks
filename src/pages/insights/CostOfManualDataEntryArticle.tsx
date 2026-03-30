import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';

export const CostOfManualDataEntryArticle: React.FC = () => {
  useSEO({
    title: 'How to Calculate the Real Cost of Manual Data Entry in Your Business | LVRGWRKS',
    description: 'Most Alberta business owners underestimate what manual data entry is actually costing them. Here\'s a simple framework to calculate it - and what to do about it.',
    canonical: 'https://www.lvrgwrks.com/insights/cost-of-manual-data-entry',
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Insight · Business Process Automation</span>
            </div>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mb-6 leading-tight">
              How to Calculate the Real Cost of Manual Data Entry in Your Business
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <article className="max-w-3xl mx-auto prose prose-lg prose-slate">
            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">The Invisible Line Item</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              Manual data entry doesn&apos;t appear as a line item on your P&L. It hides inside salaries, in overtime, in the cost of errors, and in the decisions that didn&apos;t get made because the information wasn&apos;t ready in time. For most mid-market companies, it represents one of the largest controllable costs in the business - and most owners have never tried to calculate it.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">The Three Categories of Manual Work Cost</h2>
            
            <div className="bg-brand-surface p-8 rounded-xl mb-6">
              <h3 className="font-display font-bold text-xl text-brand-navy mb-4">1. Direct Labour Cost</h3>
              <p className="text-brand-slate leading-relaxed mb-4">
                The hours your team spends copying data between systems, building reports, and chasing status updates.
              </p>
              <p className="text-brand-slate text-sm bg-white p-4 rounded-lg font-mono">
                A simple starting calculation: (hours per week spent on manual data tasks) × (average hourly fully-loaded cost) × 52
              </p>
            </div>

            <div className="bg-brand-surface p-8 rounded-xl mb-6">
              <h3 className="font-display font-bold text-xl text-brand-navy mb-4">2. Error Cost</h3>
              <p className="text-brand-slate leading-relaxed">
                Manual data entry has an error rate of 1-4%. In a business processing hundreds of transactions per week, this means incorrect invoices, missed orders, and planning decisions based on wrong numbers.
              </p>
            </div>

            <div className="bg-brand-surface p-8 rounded-xl mb-6">
              <h3 className="font-display font-bold text-xl text-brand-navy mb-4">3. Opportunity Cost</h3>
              <p className="text-brand-slate leading-relaxed">
                Every hour your operations manager spends assembling a report is an hour they are not managing operations. This is harder to quantify but often the largest cost.
              </p>
            </div>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">A Simple Framework for Your Business</h2>
            
            <div className="bg-brand-navy text-white p-8 rounded-xl mb-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-brand-gold font-bold">Step 1:</span>
                  <span>List every process in your business that involves manually moving data from one system to another.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-brand-gold font-bold">Step 2:</span>
                  <span>Estimate the weekly hours spent on each.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-brand-gold font-bold">Step 3:</span>
                  <span>Multiply total hours by your average fully-loaded hourly labour cost.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-brand-gold font-bold">Step 4:</span>
                  <span>Add a 25% error-correction premium.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-brand-gold font-bold">Step 5:</span>
                  <span>Multiply by 52 for your annual cost.</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-gold/10 border-l-4 border-brand-gold p-6 rounded-r-xl mb-8">
              <p className="text-brand-navy font-bold">
                For a company with 50 employees, this number is typically $150,000-$400,000 per year. Most owners are surprised.
              </p>
            </div>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">What To Do With That Number</h2>
            <p className="text-brand-slate leading-relaxed mb-8">
              Once you have a baseline, you can evaluate automation investments against a real ROI calculation rather than a gut feel. A $30,000 automation project that recovers $150,000 in annual labour cost pays back in less than three months. The math is usually better than people expect - which is why the Leverage Audit starts here.
            </p>
          </article>

          {/* CTA Box */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-brand-navy p-8 md:p-12 rounded-xl text-white text-center">
              <h3 className="font-display font-bold text-2xl mb-4">We run this calculation for you in the first 30 minutes of the Leverage Audit - for free.</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Book your session and leave with a number.
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
