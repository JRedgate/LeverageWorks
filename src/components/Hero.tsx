
import React from 'react';

interface HeroProps {
    onCtaClick: () => void;
    onSecondCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, onSecondCtaClick }) => (
    <header className="relative pt-40 pb-32 md:pt-56 md:pb-48 overflow-hidden bg-brand-surface">
        {/* Abstract geometric background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-navy/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>

        <div className="container mx-auto px-6 md:px-16 relative z-10">
            <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 bg-white border border-gray-100 px-4 py-1.5 rounded-full mb-8 shadow-sm animate-fade-in">
                    <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
                    <span className="text-[10px] font-bold tracking-[0.1em] text-brand-navy uppercase">Operating Leverage Protocol</span>
                </div>

                <h1 className="font-display font-semibold text-6xl md:text-7xl leading-[1.1] text-brand-navy mb-8 tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    Where strategy becomes<br />
                    <span className="text-brand-slate italic">operating advantage.</span>
                </h1>

                <p className="text-brand-slate text-xl leading-relaxed mb-10 max-w-2xl font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    LeverageWorks helps North American executive teams move AI from experimentation into disciplined operating systems. Human judgment remains accountable while intelligent systems reduce friction at scale.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <button
                        onClick={onCtaClick}
                        className="bg-brand-navy text-white px-10 py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-3 hover:bg-brand-slate transition-all shadow-lg hover:shadow-brand-navy/20 group"
                    >
                        Initialize Diagnostic
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                    <button
                        onClick={onSecondCtaClick}
                        className="bg-white border border-gray-200 text-brand-navy px-10 py-4 rounded-lg font-bold text-sm hover:border-brand-navy/30 hover:bg-gray-50 transition-all"
                    >
                        View Operating Model
                    </button>
                </div>

                {/* Trust Signals */}
                <div className="mt-16 flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Trusted By Leaders In:</p>
                    <div className="flex gap-6 text-sm font-bold text-gray-400">
                        <span>ENERGY</span>
                        <span>FINANCE</span>
                        <span>MANUFACTURING</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
);
