
import React, { useState, useEffect } from 'react';
import { LwSymbol } from './Logo';
import { NavigationItem } from '../../types';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

interface NavbarProps {
    onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems: NavigationItem[] = [
        { label: 'Firm Thesis', href: '#firm' },
        { label: 'Capabilities', href: '#capabilities' },
        { label: 'Impact', href: '#scenarios' },
        { label: 'Strategist', href: '#divide' }, // AI Tool
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 border-b border-gray-200 py-4 backdrop-blur-sm shadow-sm' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 md:px-16 flex justify-between items-center">
                <a href="#" className="flex items-center gap-4 group" aria-label="LeverageWorks Home">
                    <LwSymbol className="w-10 h-10 transition-transform group-hover:scale-105" />
                    <span className={`font-display font-bold text-xl tracking-tight transition-opacity duration-300 ${isScrolled ? 'opacity-100 text-brand-navy' : 'opacity-0'}`}>
                        LVRGWRKS
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a key={item.label} href={item.href} className="text-sm font-medium text-brand-slate hover:text-brand-navy transition-colors relative group">
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}

                    <div className="h-6 w-[1px] bg-gray-200 mx-2"></div>

                    <a
                        href="https://www.linkedin.com/company/lvrgwrks/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-slate hover:text-brand-navy transition-all transform hover:scale-110"
                        aria-label="LinkedIn Profile"
                    >
                        <LinkedInIcon className="w-5 h-5" />
                    </a>

                    <button
                        onClick={onContactClick}
                        className="ml-2 bg-brand-navy text-white px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wide hover:bg-brand-slate transition-all shadow-md hover:shadow-lg"
                    >
                        Contact
                    </button>
                </div>
            </div>
        </nav>
    );
};
