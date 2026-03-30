import React from 'react';
import { Link } from 'react-router-dom';
import { LwSymbol } from './Logo';

export const Footer: React.FC = () => (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
        <div className="container mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                <div className="md:col-span-3">
                    <Link to="/" className="flex items-center gap-3 mb-6 group">
                        <LwSymbol color="#FFFFFF" className="w-8 h-8" />
                        <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-brand-gold transition-colors">LVRGWRKS</span>
                    </Link>
                    <p className="text-gray-400 max-w-sm leading-relaxed text-sm mb-4">
                        Your fractional CTO and AI operations partner. Serving mid-market companies across Alberta and Western Canada.
                    </p>
                    <a href="mailto:jredgate@lvrgwrks.com" className="text-brand-gold hover:text-white transition-colors text-sm font-medium">
                        jredgate@lvrgwrks.com
                    </a>
                </div>
                <div className="md:col-span-3">
                    <h4 className="text-[10px] tracking-[0.3em] uppercase mb-6 text-brand-gold font-bold">Expertise</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><Link to="/fractional-cto-calgary" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Fractional CTO Calgary</Link></li>
                        <li><Link to="/ai-automation-consulting" className="hover:text-white transition-colors hover:translate-x-1 inline-block">AI Automation Consulting</Link></li>
                        <li><Link to="/digital-transformation-consulting" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Digital Transformation</Link></li>
                        <li><Link to="/business-process-automation" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Business Process Automation</Link></li>
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <h4 className="text-[10px] tracking-[0.3em] uppercase mb-6 text-brand-gold font-bold">Industries</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><Link to="/industries/manufacturing" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Manufacturing</Link></li>
                        <li><Link to="/industries/energy-services" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Energy Services</Link></li>
                        <li><Link to="/industries/property-management" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Property Management</Link></li>
                        <li><Link to="/industries/construction" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Construction</Link></li>
                    </ul>
                </div>
                <div className="md:col-span-2">
                    <h4 className="text-[10px] tracking-[0.3em] uppercase mb-6 text-brand-gold font-bold">Company</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><Link to="/firm" className="hover:text-white transition-colors hover:translate-x-1 inline-block">The Firm</Link></li>
                        <li><Link to="/impact" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Impact</Link></li>
                        <li><Link to="/insights" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Insights</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Contact</Link></li>
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
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 uppercase tracking-widest">
                <p>&copy; {new Date().getFullYear()} LVRGWRKS (LeverageWorks)</p>
                <p>We Prove It Every 30 Days</p>
            </div>
        </div>
    </footer>
);
