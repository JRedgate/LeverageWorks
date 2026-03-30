import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

export const InsightsPage: React.FC = () => {
  useSEO({
    title: 'Insights | LVRGWRKS (LeverageWorks) - AI Strategy & Operations for Alberta\'s Mid-Market',
    description: 'Practical insights on AI strategy, fractional CTO services, digital transformation, and business process automation for mid-market companies in Alberta and Western Canada.',
    canonical: 'https://www.lvrgwrks.com/insights',
  });

  const articles = [
    {
      label: 'DIGITAL TRANSFORMATION',
      heading: 'Why Most Digital Transformations Fail (And What Mid-Market Companies Do Instead)',
      body: '70% of digital transformations fail to deliver projected value. The reason is almost never the technology.',
      href: '/insights/why-digital-transformations-fail',
    },
    {
      label: 'FRACTIONAL CTO',
      heading: 'What Does a Fractional CTO Actually Do? A Guide for Alberta Business Owners',
      body: 'Thinking about hiring a fractional CTO? Here\'s exactly what they do, what they cost, and whether it\'s right for you.',
      href: '/insights/what-does-a-fractional-cto-do',
    },
    {
      label: 'BUSINESS PROCESS AUTOMATION',
      heading: 'How to Calculate the Real Cost of Manual Data Entry in Your Business',
      body: 'Most business owners underestimate what manual data movement is costing them. Here\'s a simple framework to find out.',
      href: '/insights/cost-of-manual-data-entry',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-56 md:pb-32 bg-brand-surface">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
              <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Insights & Resources</span>
            </div>

            <h1 className="font-display font-semibold text-5xl md:text-6xl leading-[1.1] text-brand-navy mb-6 tracking-tight">
              Thinking on AI, Operations,<br />
              <span className="text-brand-slate italic">and the Mid-Market.</span>
            </h1>

            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl font-light">
              Practical frameworks for founders, owners, and COOs navigating technology decisions in Alberta and Western Canada.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link 
                key={article.href} 
                to={article.href} 
                className="group bg-brand-surface p-10 rounded-xl border border-gray-100 hover:border-brand-gold/30 hover:shadow-xl transition-all flex flex-col"
              >
                <span className="text-brand-gold font-bold tracking-widest text-[10px] uppercase mb-4 block">{article.label}</span>
                <h3 className="font-display font-bold text-xl text-brand-navy mb-4 group-hover:text-brand-gold transition-colors leading-tight">{article.heading}</h3>
                <p className="text-brand-slate leading-relaxed mb-6 flex-grow">{article.body}</p>
                <span className="text-brand-navy font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:text-brand-gold transition-colors">
                  Read
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 tracking-tight">Ready to move beyond the reading?</h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            The Leverage Audit puts these frameworks to work on your actual business in 60 minutes.
          </p>
          <Link
            to="/leverage-audit"
            className="inline-flex items-center gap-3 bg-brand-gold text-brand-navy px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-lg group"
          >
            Request Leverage Audit
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
};
