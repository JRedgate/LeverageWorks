
import React from 'react';
import { LwSymbol } from './Logo';

export const Footer: React.FC = () => (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
        <div className="container mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                <div className="md:col-span-4">
                    <div className="flex items-center gap-3 mb-6">
                        <LwSymbol color="#FFFFFF" className="w-8 h-8" />
                        <span className="font-display font-bold text-xl tracking-tight text-white">LeverageWorks</span>
                    </div>
                    <p className="text-gray-400 max-w-sm leading-relaxed text-sm">
                        Architecting the future of global enterprise execution at scale. Bridging the divide between strategy and implementation for leadership teams across North America.
                    </p>
                </div>
                <div className="md:col-span-3">
                    <h4 className="text-[10px] tracking-[0.3em] uppercase mb-6 text-brand-gold font-bold">Expertise</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#capabilities" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Operating Models</a></li>
                        <li><a href="#capabilities" className="hover:text-white transition-colors hover:translate-x-1 inline-block">AI Governance</a></li>
                        <li><a href="#capabilities" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Systems Architecture</a></li>
                    </ul>
                </div>
                <div className="md:col-span-3">
                    <h4 className="text-[10px] tracking-[0.3em] uppercase mb-6 text-brand-gold font-bold">Network</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li>
                            <a
                                href="https://www.linkedin.com/company/lvrgwrks/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors flex items-center gap-2 group"
                            >
                                LinkedIn
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-brand-gold group-hover:text-white transition-colors">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <h4 className="text-[10px] tracking-[0.3em] uppercase mb-6 text-brand-gold font-bold">Headquarters</h4>
                    <p className="text-sm text-gray-400">Calgary, AB</p>
                    <p className="text-sm text-gray-400">Canada</p>
                </div>
            </div>
            <div className="pt-8 border-t border-white/10 flex justify-between items-center text-[11px] text-gray-500 uppercase tracking-widest">
                <p>© {new Date().getFullYear()} LeverageWorks</p>
                <p>Architecting Intelligence</p>
            </div>
        </div>
    </footer>
);
