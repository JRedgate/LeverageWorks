import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';

export const CostOfManualDataEntryArticle: React.FC = () => {
  useSEO({
    title: 'The Real Cost of Manual Data Entry in Your Business | LVRGWRKS',
    description: 'Manual data entry does not appear on your P&L. But it is one of the largest controllable costs in most Alberta mid-market companies. Here is how to find it and what to do about it.',
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
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Insight - Business Process Automation</span>
            </div>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mb-6 leading-tight">
              The Real Cost of Manual Data Entry in Your Business
            </h1>
            <p className="text-brand-slate text-lg leading-relaxed">
              It does not appear as a line item on your P&L. But for most mid-market companies in Alberta, the cost of manual data entry is one of the largest controllable expenses in the business. Most owners have never tried to calculate it.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <article className="max-w-3xl mx-auto">

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">Why it stays invisible</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              Manual data entry hides inside salaries. It hides in overtime. It hides in the cost of errors that get caught late, decisions that get made on stale information, and hires that get justified because the workload keeps growing even though revenue is not growing proportionally.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              The people doing the manual work are not idle. They are busy. That is part of why the cost stays invisible. When your operations manager is spending three hours a day assembling reports from four different systems, those three hours look like productive work. They are accounted for in her salary. What does not show up anywhere is what she could have been doing instead, and what decisions got made more slowly because the information was not ready.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              This is what we call the hidden cost of coordination inflation: the structural overhead that accumulates when your platforms do not talk to each other and your team fills the gap. It compounds as you grow. Every new system you add without integrating properly creates more manual work, not less.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">Where the cost actually lives</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              In our diagnostic work with Alberta mid-market companies, manual data entry costs consistently show up in three categories. Understanding all three is necessary before you can quantify what it is actually costing your business.
            </p>

            <div className="space-y-6 mb-10">
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Direct labour cost</h3>
                <p className="text-brand-slate leading-relaxed mb-4">
                  This is the most visible category and the easiest to start calculating. It is the hours your team spends copying data between systems, building reports that should be automatic, chasing status updates across email chains, and reconciling records that should already agree.
                </p>
                <p className="text-brand-slate leading-relaxed mb-4">
                  The calculation is straightforward: identify every recurring process in your business that involves moving data from one place to another manually. Estimate the weekly hours spent on each. Multiply by the fully loaded hourly cost of the person doing it. Annualize.
                </p>
                <p className="text-brand-slate leading-relaxed font-medium text-brand-navy">
                  Most owners who run this calculation for the first time are surprised by the number. It is typically much larger than they expected.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Error cost</h3>
                <p className="text-brand-slate leading-relaxed mb-4">
                  Every manual data entry process has an error rate. Humans are not reliable data transfer mechanisms, particularly when moving information between systems that do not naturally connect. The errors produce incorrect invoices, missed orders, duplicate records, and planning decisions based on numbers that do not reflect reality.
                </p>
                <p className="text-brand-slate leading-relaxed">
                  The downstream cost of a single bad number in the wrong place can be significant. A purchase order processed against the wrong project. A job costed incorrectly because the labour data was entered twice. A client billed for something they did not receive. Each incident carries a direct cost to correct and a relationship cost that does not show up in any calculation.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Opportunity cost</h3>
                <p className="text-brand-slate leading-relaxed mb-4">
                  This is the largest category and the hardest to quantify. Every hour your operations manager spends assembling a report is an hour she is not managing operations. Every hour your project coordinator spends reconciling job cost data is an hour he is not coordinating projects. The work still gets done, but the people doing it are not operating at the level the business needs from them.
                </p>
                <p className="text-brand-slate leading-relaxed">
                  The opportunity cost also shows up in decision speed. When the information to make a good decision takes three days to compile, decisions get made on instinct or delayed until the information arrives. Both outcomes have costs that compound over time.
                </p>
              </div>
            </div>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">A framework for your own business</h2>
            <div className="bg-brand-navy text-white p-8 rounded-xl mb-8">
              <p className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-6">The LVRGWRKS Manual Work Audit</p>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <span className="text-brand-gold font-bold flex-shrink-0">Step 1</span>
                  <span className="text-gray-300">List every process in your business that involves manually moving data from one system, spreadsheet, or document to another.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-brand-gold font-bold flex-shrink-0">Step 2</span>
                  <span className="text-gray-300">For each process, estimate the weekly hours spent and identify who is doing it. Be honest. Most managers underestimate this by a factor of two when they do it from memory rather than observation.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-brand-gold font-bold flex-shrink-0">Step 3</span>
                  <span className="text-gray-300">Calculate the fully loaded hourly cost for each person. Salary plus benefits plus overhead, divided by working hours. Use that number, not the base wage.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-brand-gold font-bold flex-shrink-0">Step 4</span>
                  <span className="text-gray-300">Add 25% to account for error correction -- the time spent finding mistakes, fixing them, and communicating the corrections downstream.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-brand-gold font-bold flex-shrink-0">Step 5</span>
                  <span className="text-gray-300">Multiply by 52 for your annual direct labour cost of manual work. This is your baseline. It is the minimum amount a well-built automation system needs to recover to justify its cost.</span>
                </div>
              </div>
            </div>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">What to do with the number</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              Once you have a baseline, the conversation about automation investment changes completely. It stops being a gut-feel decision about whether technology is "worth it" and becomes a straightforward ROI calculation. An automation build that costs a defined amount and recovers a known annual labour cost has a payback period you can calculate before the first line of code is written.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              The math is usually better than people expect, which is why so many companies sit on automation opportunities that would pay back quickly. They have not done the calculation, so they treat automation as a discretionary investment rather than a measurable operational improvement.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              The second thing the number does is prioritize. Once you have quantified the cost of every manual process, you can rank automation opportunities by annual labour recovery, build complexity, and operational risk. The highest-value, lowest-risk opportunities get built first. Every subsequent build has a clear business case before work begins.
            </p>
            <p className="text-brand-slate leading-relaxed mb-8">
              This is the diagnostic work we do in the first 30 minutes of every Leverage Audit. We run the manual work calculation with you, across your actual processes, using your actual people and costs. You leave the conversation with a number you can act on -- and a clear picture of where automation investment makes the most sense for your business specifically.
            </p>

          </article>

          {/* CTA Box */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-brand-navy p-8 md:p-12 rounded-xl text-white text-center">
              <h3 className="font-display font-bold text-2xl mb-4">We run this calculation with you in the first 30 minutes. At no cost.</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                The Leverage Audit maps your manual workflows, quantifies the exact labour cost, and gives you a clear picture of where automation investment makes sense for your business. 60 minutes. No commitment.
              </p>
              <Link
                to="/leverage-audit"
                className="inline-block bg-brand-gold text-brand-navy px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all"
              >
                Book Your Leverage Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};