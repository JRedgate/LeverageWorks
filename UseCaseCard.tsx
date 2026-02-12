
import React from 'react';
import { UseCaseProps } from '@/types';

export const UseCaseCard: React.FC<UseCaseProps> = ({ id, industry, title, context, findings, results, roi, expandedStory }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <article
            className={`bg-white border border-gray-100 rounded-xl p-8 transition-all hover:shadow-2xl hover:border-brand-navy/10 group flex flex-col h-full relative cursor-pointer overflow-hidden ${isExpanded ? 'shadow-2xl border-brand-navy/20' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl font-display font-bold text-brand-navy">{id.replace('UC', '')}</span>
            </div>

            <div className="mb-6 relative z-10">
                <div className="inline-block px-3 py-1 bg-brand-surface rounded-full border border-gray-100 mb-4">
                    <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase">{industry}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-navy mb-4 leading-tight group-hover:text-brand-gold transition-colors">{title}</h3>
            </div>

            <div className="flex-1 space-y-6 relative z-10">
                <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Context</h4>
                    <p className="text-brand-slate text-sm leading-relaxed">{context}</p>
                </div>

                <div className="bg-brand-surface/50 p-4 rounded-lg">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-navy mb-3">Impact Metrics</h4>
                    <div className="grid grid-cols-2 gap-3">
                        {results.map((result, idx) => (
                            <div key={idx} className="bg-white p-2 rounded border border-gray-100 shadow-sm flex items-center justify-center text-center h-full">
                                <p className="text-brand-navy text-xs font-semibold leading-tight">{result}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-50 flex justify-between items-center relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">ROI Verified</span>
                <span className="text-brand-navy font-display font-bold text-2xl bg-brand-gold/10 px-3 py-1 rounded text-brand-gold-darker">{roi}</span>
            </div>

            {/* Read Full Story Button (Visible when NOT expanded) */}
            <div className={`mt-6 text-center transition-opacity duration-300 ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <button className="text-xs font-bold uppercase tracking-widest text-brand-navy/70 hover:text-brand-gold transition-colors inline-flex items-center gap-2 group-hover:text-brand-navy">
                    Read Full Story
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
            </div>


            {/* Expanded Overlay */}
            <div className={`absolute inset-0 bg-brand-navy/95 backdrop-blur-sm z-20 p-8 flex flex-col justify-between transition-all duration-300 ease-in-out ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <div className="overflow-y-auto">
                    <div className="flex justify-between items-start mb-6">
                        <span className="text-brand-gold font-bold tracking-widest text-[10px] uppercase">{industry}</span>
                        <div className="text-white/40 hover:text-white transition-colors cursor-pointer" onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white mb-6 leading-tight">{title}</h3>

                    <div className="prose prose-sm prose-invert">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">The Expanded Story</h4>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            {expandedStory}
                        </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Impact</span>
                            <span className="text-brand-gold font-bold text-lg">{roi}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <button
                        className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                        onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
                    >
                        Close Story
                    </button>
                </div>
            </div>
        </article>
    );
};
