import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const LeverageAuditPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'Book a Free Leverage Audit | LVRGWRKS - 60-Minute Operational Diagnostic',
    description: 'The LVRGWRKS Leverage Audit is a free 60-minute working session where we map your manual workflows, quantify the labour cost, and outline a conceptual automation architecture. No commitment.',
    canonical: 'https://www.lvrgwrks.com/leverage-audit',
  });

  return (
    <>
      {/* Hero */}
      <header className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-navy">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-gold uppercase">Free -- No Commitment</span>
            </div>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-white mb-6 tracking-tight">
              The Leverage Audit.
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mb-6">
              A free 60-minute working session where we map your highest-friction workflows, put a real dollar figure on the labour cost, and outline a conceptual automation architecture before the call ends.
            </p>
            <p className="text-gray-400 text-xl leading-relaxed max-w-2xl mb-10">
              You leave with a written summary of where your operations are bleeding capacity and what it is costing you. No pitch. No generic presentation. No commitment required.
            </p>
            <Link to="/leverage-audit" onClick={() => openBriefing()} className="inline-flex items-center gap-3 bg-brand-gold text-brand-navy px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl group">
              Book Your Leverage Audit
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </header>

      {/* What Happens in the Audit */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">What Happens</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-4">Three things you walk away with</h2>
              <p className="text-brand-slate text-lg max-w-2xl mx-auto">The Leverage Audit is a working session, not a sales call. Every minute is focused on your operation specifically.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-brand-gold font-display font-bold text-xl">01</span>
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Workflow map</h3>
                <p className="text-brand-slate leading-relaxed text-sm">
                  We work through your current workflows together -- where data moves manually, where your systems are not connected, and where your team is filling the gaps. This is specific to your business, not a generic template. The map becomes the foundation for everything that follows.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-brand-gold font-display font-bold text-xl">02</span>
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Labour cost quantification</h3>
                <p className="text-brand-slate leading-relaxed text-sm">
                  We translate every manual workflow into an annual dollar cost using your actual headcount and fully loaded labour rates. For most mid-market companies this number is larger than expected -- and it becomes the baseline against which any automation investment gets measured. You leave knowing what the current state is actually costing you.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-brand-gold font-display font-bold text-xl">03</span>
                </div>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4">Automation architecture outline</h3>
                <p className="text-brand-slate leading-relaxed text-sm">
                  Before the call ends, we outline what an automation architecture would look like for your highest-cost workflows -- which integrations to build, which processes to automate first, and what the ROI case looks like before any work begins. You leave with a conceptual blueprint, not a promise to send a proposal.
                </p>
              </div>
            </div>

            <div className="bg-brand-navy p-8 md:p-12 rounded-xl text-white text-center">
              <h3 className="font-display font-bold text-2xl mb-4">You own the output whether or not you engage us</h3>
              <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                The workflow map, cost quantification, and automation architecture outline are yours to keep. If the numbers make sense and you want to move forward, we talk about what an engagement looks like. If not, you leave with a clear operational picture you did not have before. Either way, the session pays for itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">Who This Is For</span>
                <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Founders, owners, and COOs who know something is costing them but cannot see exactly where</h2>
                <p className="text-brand-slate text-lg leading-relaxed mb-6">
                  The Leverage Audit is designed for operators running mid-market companies in Alberta who are experiencing the specific pain of coordination drag, headcount pressure, or margin erosion -- and want a clear picture of what is actually driving it before committing to any solution.
                </p>
                <p className="text-brand-slate text-lg leading-relaxed mb-6">
                  You do not need to know anything about AI or automation before the session. You need to know your business and be willing to walk through how work actually gets done day to day. We handle the diagnostic framework.
                </p>
                <p className="text-brand-slate text-lg leading-relaxed">
                  LVRGWRKS works with companies in construction, energy services, manufacturing, and property management across Calgary, Alberta, and Western Canada. Typically 20 to 250 employees, $5M to $150M in revenue.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                  <h3 className="font-display font-bold text-lg text-brand-navy mb-3">Good fit for the Audit if:</h3>
                  <div className="space-y-3">
                    {[
                      'Your team is spending meaningful time on manual reporting, data entry, or status tracking',
                      'Your platforms do not connect to each other and your people bridge the gap',
                      'You have grown the business but headcount has grown faster than revenue',
                      'You are ready to use AI seriously but are not sure where to start',
                      'You have tried automation before and it did not stick -- and you want to understand why',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-brand-gold mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                        <span className="text-brand-slate text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                  <h3 className="font-display font-bold text-lg text-brand-navy mb-3">Probably not the right fit if:</h3>
                  <div className="space-y-3">
                    {[
                      'Your primary need is software development capacity rather than operational strategy',
                      'Your organization has fewer than 15 employees and the operational complexity is not yet creating meaningful drag',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        <span className="text-brand-slate text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 text-center">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">What Comes Next</span>
              <h2 className="font-display font-bold text-4xl text-brand-navy mb-4">If you decide to move forward</h2>
              <p className="text-brand-slate text-lg max-w-2xl mx-auto">The Audit is the starting point for every LVRGWRKS engagement. If the numbers make sense, here is what the path looks like.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">First bottleneck solved in 60 days</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Every LVRGWRKS engagement starts with a defined first deliverable. Your highest-value automation opportunity is designed and deployed within 60 days of engagement start. You see a working system before the first monthly Value Creation Report is due.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">Monthly Value Creation Reports</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Every 30 days you receive a Value Creation Report showing exactly what was recovered -- labour hours, automation performance, and rolling ROI against the engagement cost. We do not estimate whether the system is working. We document it, every month.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">You own everything we build</h3>
                <p className="text-brand-slate text-sm leading-relaxed">Every workflow, automation, agent, and integration is client-owned from day one. No lock-in. No dependency on LVRGWRKS to keep the systems running. The engagement can end at any time and the systems continue operating on your infrastructure.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100">
                <h3 className="font-display font-bold text-xl text-brand-navy mb-3">Embedded, not advisory</h3>
                <p className="text-brand-slate text-sm leading-relaxed">LVRGWRKS operates as your fractional CTO and AI operations partner, not a consulting firm that delivers a report. We attend leadership meetings, sit inside operational decisions, and stay accountable to outcomes -- not just deliverables.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Book your Leverage Audit.</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-4 text-lg leading-relaxed">
            60 minutes. No cost. No commitment. You leave with a clear picture of where your operations are costing you more than they should.
          </p>
          <p className="text-gray-500 max-w-xl mx-auto mb-12 text-base leading-relaxed">
            Sessions available for founders, owners, and COOs of mid-market companies in Calgary, Alberta, and Western Canada.
          </p>
          <button
            onClick={() => openBriefing()}
            className="inline-flex items-center gap-3 bg-brand-gold text-brand-navy px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl group"
          >
            Book Your Leverage Audit
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
          <p className="text-gray-500 text-sm mt-6">Or email directly: jredgate@lvrgwrks.com</p>
        </div>
      </section>
    </>
  );
};