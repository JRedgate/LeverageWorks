import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
    onCtaClick: () => void;
    onSecondCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, onSecondCtaClick }) => (
    <header className="relative pt-40 pb-32 md:pt-56 md:pb-48 overflow-hidden bg-brand-surface animate-fade-in">
        {/* Abstract geometric background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-navy/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>

        <div className="container mx-auto px-6 md:px-16 relative z-10">
            <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
                    <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Fractional CTO + AI Operations Partner</span>
                </div>

                <h1 className="font-display font-semibold text-5xl md:text-7xl leading-[1.1] text-brand-navy mb-8 tracking-tight">
                    Your business is growing.<br />
                    <span className="text-brand-slate italic">Your operations are not keeping up.</span>
                </h1>

                <p className="text-brand-slate text-xl leading-relaxed mb-10 max-w-2xl font-light">
                    Your platforms do not talk to each other. Your best people are manually moving data between them. You are paying the coordination tax every day, and it is quietly eroding your margin. LVRGWRKS embeds inside your business as your fractional CTO and AI operations partner, rebuilds how the work flows, and proves the ROI every 30 days. Built for mid-market operators in Alberta and Western Canada (20-250 employees, $5M-$150M revenue).
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={onCtaClick}
                        className="bg-brand-navy text-white px-10 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 hover:bg-brand-slate transition-all shadow-lg hover:shadow-brand-navy/20 group"
                    >
                        Request Free Leverage Audit
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                    <button
                        onClick={onSecondCtaClick}
                        className="bg-white border border-gray-200 text-brand-navy px-10 py-4 rounded-lg font-bold text-sm hover:border-brand-navy/30 hover:bg-gray-50 transition-all text-center"
                    >
                        See How We Work
                    </button>
                </div>

                {/* Trust Signals */}
                <div className="mt-16 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 opacity-60 hover:opacity-100 transition-all duration-500">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Serving:</p>
                    <div className="flex flex-wrap gap-4 md:gap-6 text-sm font-bold text-gray-400">
                        <Link to="/industries/property-management" className="hover:text-brand-navy transition-colors group inline-flex items-center gap-1">
                            PROPERTY MANAGEMENT
                            <svg className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                        </Link>
                        <Link to="/industries/construction" className="hover:text-brand-navy transition-colors group inline-flex items-center gap-1">
                            CONSTRUCTION
                            <svg className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                        </Link>
                        <Link to="/industries/manufacturing" className="hover:text-brand-navy transition-colors group inline-flex items-center gap-1">
                            MANUFACTURING
                            <svg className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                        </Link>
                        <Link to="/industries/energy-services" className="hover:text-brand-navy transition-colors group inline-flex items-center gap-1">
                            ENERGY SERVICES
                            <svg className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
);
