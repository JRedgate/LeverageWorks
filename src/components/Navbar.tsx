import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LwSymbol } from './Logo';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

interface NavItem {
    label: string;
    href: string;
}

interface NavbarProps {
    onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMobileOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileOpen(false);
    }, [location.pathname]);

    const navItems: NavItem[] = [
        { label: 'Firm', href: '/firm' },
        { label: 'Capabilities', href: '/capabilities' },
        { label: 'Impact', href: '/impact' },
    ];

    const isActive = (href: string) => location.pathname === href;

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 border-b border-gray-200 py-4 backdrop-blur-sm shadow-sm' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 md:px-16 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-4 group" aria-label="LeverageWorks Home">
                    <LwSymbol className="w-10 h-10 transition-transform group-hover:scale-105" />
                    <span className={`font-display font-bold text-xl tracking-tight transition-opacity duration-300 ${isScrolled ? 'opacity-100 text-brand-navy' : 'opacity-0'}`}>
                        LVRGWRKS
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link 
                            key={item.label} 
                            to={item.href} 
                            className={`text-sm font-medium transition-colors relative group ${isActive(item.href) ? 'text-brand-navy' : 'text-brand-slate hover:text-brand-navy'}`}
                        >
                            {item.label}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </Link>
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

                    <Link
                        to="/contact"
                        className={`ml-2 px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wide transition-all shadow-md hover:shadow-lg ${isActive('/contact') ? 'bg-brand-gold text-brand-navy' : 'bg-brand-navy text-white hover:bg-brand-slate'}`}
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMobileOpen}
                >
                    <span className={`block w-6 h-0.5 bg-brand-navy transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-brand-navy transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-brand-navy transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu Panel */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="bg-white border-t border-gray-100 shadow-lg px-6 py-6 flex flex-col gap-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.href}
                            className={`text-left text-base font-medium transition-colors py-2 border-b border-gray-50 ${isActive(item.href) ? 'text-brand-gold' : 'text-brand-slate hover:text-brand-navy'}`}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <div className="flex items-center gap-4 pt-2">
                        <a
                            href="https://www.linkedin.com/company/lvrgwrks/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-slate hover:text-brand-navy transition-all"
                            aria-label="LinkedIn Profile"
                        >
                            <LinkedInIcon className="w-5 h-5" />
                        </a>

                        <Link
                            to="/contact"
                            className="bg-brand-navy text-white px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wide hover:bg-brand-slate transition-all shadow-md"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
