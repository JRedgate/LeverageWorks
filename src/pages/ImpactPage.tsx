import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { UseCaseCard } from '../components/UseCaseCard';
import { useSEO } from '../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

export const ImpactPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'Impact & Case Studies | LVRGWRKS (LeverageWorks) - Proven AI Implementation Results',
    description: 'See how LVRGWRKS (LeverageWorks) delivers 7.5x+ ROI across manufacturing, finance, and energy sectors. Case studies in AI strategy, operating model optimization, and digital transformation.',
    canonical: 'https://www.lvrgwrks.com/impact',
  });

  return (
    <>
      {/* Hero */}
      <header className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-surface">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">Impact</span>
            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-8 tracking-tight">
              Proven <span className="text-brand-slate italic">Execution.</span>
            </h1>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl">
              Representative scenarios based on operating patterns observed across execution-critical industries where LeverageWorks closed the gap between potential and performance.
            </p>
          </div>
        </div>
      </header>

      {/* Case Studies */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <UseCaseCard
              id="UC01"
              industry="Manufacturing"
              title="Unlocking Capacity Without Adding Headcount"
              context="A multi-site North American industrial manufacturer faced margin compression driven by input volatility and inconsistent production scheduling."
              findings={[
                "Manual consolidation of forecasts",
                "No predictive bottleneck visibility",
                "Prioritization lacking data backing"
              ]}
              results={[
                "14% Capacity Increase",
                "22% Reduction in planning",
                "9% Inventory Reduction"
              ]}
              roi="7.5x ROI"
              expandedStory="Faced with rising input costs and a fixed headcount, this manufacturer was unable to meet growing demand. We deployed a predictive scheduling engine that integrated real-time machine telemetry with sales forecasts. This system autonomically rebalanced production lines to optimize for throughput rather than just utilization. The result was a 'hidden factory' unlocked within their existing footprint, allowing them to take on 14% more volume without hiring a single additional operator."
            />
            <UseCaseCard
              id="UC02"
              industry="Financial Sector"
              title="Private Equity Portfolio Optimization"
              context="A mid-market PE firm with diversified holdings lacked standardized performance visibility. Operating metrics were inconsistent."
              findings={[
                "No unified KPI architecture",
                "Heavy manual reporting burden",
                "Slow signal detection at portfolio level"
              ]}
              results={[
                "4-6% EBITDA Uplift",
                "35% Reporting reduction",
                "28% Faster signal detection"
              ]}
              roi="7.8x ROI"
              expandedStory="The firm struggled with a 45-day lag in portfolio reporting, making it impossible to react to market shifts in real-time. LeverageWorks architected a unified data layer that ingested disparate ERP data from 12 portfolio companies into a single command center. We then deployed agentic workflows to automate the variance analysis. Leadership moved from retroactive monthly reviews to proactive weekly steering, directly correlating to a 4-6% EBITDA uplift across the optimized assets."
            />
            <UseCaseCard
              id="UC03"
              industry="Midstream Oil & Gas"
              title="Asset Throughput & Capital Efficiency"
              context="A midstream operator managing pipeline and storage assets faced regulatory complexity and rising opex."
              findings={[
                "Disconnected utilization metrics",
                "Manual compliance workflows",
                "Under-optimized maintenance"
              ]}
              results={[
                "8% Asset Utilization boost",
                "19% Reduction in downtime",
                "31% Compliance cycle reduction"
              ]}
              roi="7.8x ROI"
              expandedStory="With regulatory pressure mounting and aging infrastructure, this operator needed to do more with less. We implemented a 'digital twin' of their critical pipeline assets, fed by IoT sensors. This allowed for predictive maintenance scheduling that reduced downtime by 19%. Furthermore, we automated the compliance reporting workflow, turning a manual, error-prone process into an auditable, instant digital record. The capital efficiency gained funded the entire transformation within 9 months."
            />
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-20 md:py-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">By The Numbers</span>
            <h2 className="font-display font-bold text-4xl text-brand-navy mb-6">Consistent Results Across Industries</h2>
            <p className="text-brand-slate text-lg leading-relaxed">
              The pattern is consistent: the bottleneck is never the technology, it is the operating model that governs it.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-gray-100 text-center">
              <div className="text-brand-gold font-display font-bold text-4xl mb-2">7.5x+</div>
              <div className="text-brand-slate text-sm">Average ROI</div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 text-center">
              <div className="text-brand-gold font-display font-bold text-4xl mb-2">14%</div>
              <div className="text-brand-slate text-sm">Capacity Unlocked</div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 text-center">
              <div className="text-brand-gold font-display font-bold text-4xl mb-2">35%</div>
              <div className="text-brand-slate text-sm">Reporting Reduction</div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 text-center">
              <div className="text-brand-gold font-display font-bold text-4xl mb-2">9mo</div>
              <div className="text-brand-slate text-sm">Avg. Payback Period</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">What could we unlock for you?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
            Every organization has hidden capacity waiting to be unlocked. Let us help you find it.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <button
              onClick={() => openBriefing()}
              className="bg-brand-gold text-brand-navy px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl"
            >
              Request Leverage Audit
            </button>
            <Link
              to="/capabilities"
              className="text-white text-sm font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-all"
            >
              View Capabilities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
