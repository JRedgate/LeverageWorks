import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LwSymbol } from './Logo';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

interface DropdownItem {
  label: string;
  href: string;
}

interface NavbarProps {
  onContactClick: () => void;
}

// Pages whose hero is dark navy -- navbar needs white text when unscrolled
const DARK_HERO_ROUTES = ['/leverage-audit'];

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const hasDarkHero = DARK_HERO_ROUTES.includes(location.pathname);

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
    setOpenDropdown(null);
  }, [location.pathname]);

  const servicesItems: DropdownItem[] = [
    { label: 'Fractional CTO Calgary', href: '/fractional-cto-calgary' },
    { label: 'AI Automation Consulting', href: '/ai-automation-consulting' },
    { label: 'Digital Transformation Consulting', href: '/digital-transformation-consulting' },
    { label: 'Business Process Automation', href: '/business-process-automation' },
  ];

  const industriesItems: DropdownItem[] = [
    { label: 'Manufacturing', href: '/industries/manufacturing' },
    { label: 'Energy Services', href: '/industries/energy-services' },
    { label: 'Property Management', href: '/industries/property-management' },
    { label: 'Construction', href: '/industries/construction' },
  ];

  const isActive = (href: string) => location.pathname === href;
  const isDropdownActive = (items: DropdownItem[]) => items.some(item => location.pathname === item.href);

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  // Nav link color logic:
  // - scrolled: always dark (bg-white navbar)
  // - unscrolled + dark hero: white text
  // - unscrolled + light hero: slate text
  const navLinkBase = isScrolled
    ? 'text-brand-slate hover:text-brand-navy'
    : hasDarkHero
      ? 'text-white/80 hover:text-white'
      : 'text-brand-slate hover:text-brand-navy';

  const navLinkActive = isScrolled
    ? 'text-brand-navy'
    : hasDarkHero
      ? 'text-white'
      : 'text-brand-navy';

  // Hamburger bar color
  const hamburgerColor = !isScrolled && hasDarkHero ? 'bg-white' : 'bg-brand-navy';

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
        <div className="hidden md:flex items-center gap-6">

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`text-sm font-medium transition-colors relative group flex items-center gap-1 ${isDropdownActive(servicesItems) ? navLinkActive : navLinkBase}`}
            >
              Services
              <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${isDropdownActive(servicesItems) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${openDropdown === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="bg-white border border-gray-100 rounded-lg shadow-xl py-2 min-w-[240px]">
                {servicesItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`block px-4 py-2.5 text-sm transition-colors ${isActive(item.href) ? 'text-brand-gold bg-brand-surface' : 'text-brand-slate hover:text-brand-navy hover:bg-brand-surface'}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('industries')}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`text-sm font-medium transition-colors relative group flex items-center gap-1 ${isDropdownActive(industriesItems) ? navLinkActive : navLinkBase}`}
            >
              Industries
              <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'industries' ? 'rotate-180' : ''}`} />
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${isDropdownActive(industriesItems) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
            <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${openDropdown === 'industries' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="bg-white border border-gray-100 rounded-lg shadow-xl py-2 min-w-[200px]">
                {industriesItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`block px-4 py-2.5 text-sm transition-colors ${isActive(item.href) ? 'text-brand-gold bg-brand-surface' : 'text-brand-slate hover:text-brand-navy hover:bg-brand-surface'}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/firm" className={`text-sm font-medium transition-colors relative group ${isActive('/firm') ? navLinkActive : navLinkBase}`}>
            Firm
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${isActive('/firm') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>

          <Link to="/capabilities" className={`text-sm font-medium transition-colors relative group ${isActive('/capabilities') ? navLinkActive : navLinkBase}`}>
            Capabilities
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${isActive('/capabilities') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>

          <Link to="/impact" className={`text-sm font-medium transition-colors relative group ${isActive('/impact') ? navLinkActive : navLinkBase}`}>
            Impact
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${isActive('/impact') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>

          <Link to="/insights" className={`text-sm font-medium transition-colors relative group ${isActive('/insights') || location.pathname.startsWith('/insights/') ? navLinkActive : navLinkBase}`}>
            Insights
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${isActive('/insights') || location.pathname.startsWith('/insights/') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>

          <div className={`h-6 w-[1px] mx-2 ${!isScrolled && hasDarkHero ? 'bg-white/20' : 'bg-gray-200'}`}></div>

          <a
            href="https://www.linkedin.com/company/lvrgwrks/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all transform hover:scale-110 ${!isScrolled && hasDarkHero ? 'text-white/70 hover:text-white' : 'text-brand-slate hover:text-brand-navy'}`}
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>

          <Link
            to="/contact"
            className={`ml-2 px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wide transition-all shadow-md hover:shadow-lg ${
              isActive('/contact')
                ? 'bg-brand-gold text-brand-navy'
                : !isScrolled && hasDarkHero
                  ? 'bg-white text-brand-navy hover:bg-brand-gold'
                  : 'bg-brand-navy text-white hover:bg-brand-slate'
            }`}
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
          <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${isMobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${hamburgerColor} ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-white border-t border-gray-100 shadow-lg px-6 py-6 flex flex-col gap-2">
          {/* Services Section */}
          <div className="border-b border-gray-50 pb-3">
            <button
              onClick={() => setOpenDropdown(openDropdown === 'mobile-services' ? null : 'mobile-services')}
              className="w-full flex items-center justify-between text-left text-base font-medium text-brand-slate py-2"
            >
              Services
              <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-services' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${openDropdown === 'mobile-services' ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
              {servicesItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block pl-4 py-2 text-sm ${isActive(item.href) ? 'text-brand-gold' : 'text-brand-slate hover:text-brand-navy'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Industries Section */}
          <div className="border-b border-gray-50 pb-3">
            <button
              onClick={() => setOpenDropdown(openDropdown === 'mobile-industries' ? null : 'mobile-industries')}
              className="w-full flex items-center justify-between text-left text-base font-medium text-brand-slate py-2"
            >
              Industries
              <ChevronDownIcon className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-industries' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${openDropdown === 'mobile-industries' ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
              {industriesItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block pl-4 py-2 text-sm ${isActive(item.href) ? 'text-brand-gold' : 'text-brand-slate hover:text-brand-navy'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/firm" className={`text-left text-base font-medium transition-colors py-2 border-b border-gray-50 ${isActive('/firm') ? 'text-brand-gold' : 'text-brand-slate hover:text-brand-navy'}`}>Firm</Link>
          <Link to="/capabilities" className={`text-left text-base font-medium transition-colors py-2 border-b border-gray-50 ${isActive('/capabilities') ? 'text-brand-gold' : 'text-brand-slate hover:text-brand-navy'}`}>Capabilities</Link>
          <Link to="/impact" className={`text-left text-base font-medium transition-colors py-2 border-b border-gray-50 ${isActive('/impact') ? 'text-brand-gold' : 'text-brand-slate hover:text-brand-navy'}`}>Impact</Link>
          <Link to="/insights" className={`text-left text-base font-medium transition-colors py-2 border-b border-gray-50 ${isActive('/insights') || location.pathname.startsWith('/insights/') ? 'text-brand-gold' : 'text-brand-slate hover:text-brand-navy'}`}>Insights</Link>

          <div className="flex items-center gap-4 pt-4">
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