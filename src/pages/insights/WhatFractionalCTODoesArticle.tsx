import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../../hooks/useSEO';

export const WhatFractionalCTODoesArticle: React.FC = () => {
  useSEO({
    title: 'What Does a Fractional CTO Actually Do? | LVRGWRKS',
    description: 'Most mid-market companies in Alberta are feeling the pain of not having a CTO without being ready to hire one full-time. Here is what a fractional CTO actually does inside your business.',
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
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Insight - Fractional CTO</span>
            </div>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-brand-navy mb-6 leading-tight">
              What Does a Fractional CTO Actually Do Inside Your Business?
            </h1>
            <p className="text-brand-slate text-lg leading-relaxed">
              For founders and COOs running mid-market companies in Alberta, this is one of the most practical questions in the room right now. The answer matters because getting it wrong is expensive in both directions.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <article className="max-w-3xl mx-auto">

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">The problem that brings most people to this question</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              Your business is growing. The operations that worked at $10M are starting to creak at $30M. Platforms that used to be adequate are now disconnected from each other, and your team is manually bridging the gaps. Decisions are taking longer because no single tool has the full picture. You are feeling the pain of not having senior technical leadership, but a full-time CTO at $200,000 or more per year is not a hire you are ready to make.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              That gap is exactly where a fractional CTO operates. But the title means different things to different people, and before you engage anyone in that capacity you need to understand what the role actually looks like day to day.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">What a fractional CTO is not</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              A fractional CTO is not an IT manager. They do not handle helpdesk tickets, manage hardware, or troubleshoot day-to-day software problems. They are also not a developer. The fractional CTO role is a strategic and operational one, not an execution-only one.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              The confusion happens because the word "technology" is in the title. In practice, the best fractional CTO engagements are not primarily about technology at all. They are about operational design, decision architecture, and making sure that every technology investment serves a business outcome rather than creating more complexity to manage.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">What a fractional CTO actually does</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              The work falls into three areas, and the weight shifts depending on where your business is and what it needs.
            </p>

            <div className="space-y-6 mb-10">
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Diagnosing where the real friction lives</h3>
                <p className="text-brand-slate leading-relaxed">
                  Most growing companies have accumulated a stack of software tools that do not talk to each other. The fractional CTO maps where data moves manually, where decisions slow down because information is not available, and where coordination overhead is consuming capacity that should be driving growth. This diagnostic is not a theoretical exercise. It produces a clear picture of where the business is losing money to structural friction, and it creates the foundation for every decision that follows.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Owning the technology roadmap and vendor decisions</h3>
                <p className="text-brand-slate leading-relaxed">
                  Once the friction points are clear, the fractional CTO defines what gets built, in what order, and why. They evaluate vendors, hold them accountable to outcomes, and prevent the pattern that has burned most mid-market companies: buying software that looked good in a demo and created more problems than it solved. This is where having someone with direct operational experience in your sectors matters. The Alberta energy, construction, manufacturing, and property management markets have specific operational realities that a generalist technology consultant does not understand from first principles.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Leading AI and automation implementation</h3>
                <p className="text-brand-slate leading-relaxed">
                  The fractional CTO identifies where AI and automation can materially improve throughput, designs the system architecture, leads the build, and ensures adoption. This is not about buying an AI tool and hoping the team figures it out. It is about identifying the specific workflow in your business where removing manual work changes the economics of your operation, then building a system that does that reliably and keeps doing it as the business grows. The fractional CTO stays accountable to the outcome, not just the delivery.
                </p>
              </div>
            </div>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">The accountability structure that makes it work</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              The most common failure mode in fractional arrangements is that the engagement produces a strategy deck and a recommendation, and then the fractional executive disappears. The company is left to implement something they do not fully understand, and within six months the organization drifts back to what it knew.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              A properly structured fractional CTO engagement does not work that way. The fractional CTO attends leadership meetings as a full participant. They sit inside operational decisions that have a technology dimension. And they produce a monthly Value Creation Report that shows exactly what was built, what it cost, and what it returned. Not a summary of activities. An accounting of outcomes.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              That accountability structure is what separates an embedded operating partner from a consultant. A consultant tells you what to do. An operating partner stays until the value is proven.
            </p>

            <h2 className="font-display font-bold text-2xl text-brand-navy mt-12 mb-6">Is this the right move for your company right now?</h2>
            <p className="text-brand-slate leading-relaxed mb-6">
              A fractional CTO engagement makes sense when your operational complexity has outpaced your current technical leadership, when you are spending money on software without seeing proportional returns, or when you are ready to use AI and automation seriously but do not have someone on your team who can lead that work from diagnosis through to implementation and measurement.
            </p>
            <p className="text-brand-slate leading-relaxed mb-6">
              It is probably not the right move if your primary challenge is software development capacity rather than strategic direction, or if your organization is still small enough that the operational complexity has not yet created meaningful drag.
            </p>
            <p className="text-brand-slate leading-relaxed mb-8">
              The best way to find out which situation you are in is a clear-eyed look at where your operations are actually losing capacity. That is what the Leverage Audit does, and it costs nothing to find out.
            </p>

          </article>

          {/* CTA Box */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-brand-navy p-8 md:p-12 rounded-xl text-white text-center">
              <h3 className="font-display font-bold text-2xl mb-4">Not sure if a fractional CTO is the right move for your business?</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                The 60-Minute Leverage Audit maps your highest-friction workflows and gives you a clear picture of where your operations are costing you more than they should. No cost. No commitment.
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