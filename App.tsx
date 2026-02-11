import React, { useState, useEffect } from 'react';
import { gemini } from './services/geminiService';
import { ServiceCardProps, NavigationItem } from './types';

// --- Helper Functions ---

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// --- Precise Brand Logo Component ---

const LwSymbol: React.FC<{ className?: string, color?: string }> = ({ className, color = "#1A1A1A" }) => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="LeverageWorks Logo">
    <path d="M20 15V85H65" stroke={color} strokeWidth="12" strokeLinecap="round"/>
    <path d="M45 55L75 55L75 65L45 55Z" fill="#B77035"/>
    <circle cx="75" cy="45" r="7" fill="#004751"/>
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// --- Interface Components ---

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavigationItem[] = [
    { label: 'Our Story', href: '#firm' },
    { label: 'Philosophy', href: '#capabilities' },
    { label: 'Engagements', href: '#scenarios' },
    { label: 'Virtual Strategist', href: '#divide' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 border-b border-gray-100 py-4 backdrop-blur-sm' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 md:px-16 flex justify-between items-center">
        <a href="#" className="flex items-center gap-4" aria-label="LeverageWorks Home">
          <LwSymbol className="w-10 h-10" />
        </a>
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-[14px] font-medium text-brand-ash hover:text-brand-teal transition-colors">
              {item.label}
            </a>
          ))}
          <div className="h-4 w-[1px] bg-gray-200"></div>
          <a 
            href="https://www.linkedin.com/company/lvrgwrks/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-brand-ash hover:text-brand-teal transition-all transform hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <button 
            onClick={() => scrollToSection('contact')}
            className="ml-2 border border-brand-graphite px-6 py-2 text-[13px] font-semibold hover:bg-brand-graphite hover:text-white transition-all"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <article className="p-10 bg-white border border-gray-100 hover:shadow-xl hover:border-brand-teal transition-all duration-500 group">
    <div className="mb-8 text-brand-teal transform transition-transform group-hover:scale-110 duration-300">
      {icon}
    </div>
    <h3 className="font-serif font-bold text-2xl mb-4 text-brand-graphite">{title}</h3>
    <p className="text-brand-ash leading-relaxed text-[15px] font-light">{description}</p>
  </article>
);

const UseCaseCard: React.FC<{
  id: string;
  industry: string;
  title: string;
  context: string;
  findings: string[];
  results: string[];
  roi: string;
}> = ({ id, industry, title, context, findings, results, roi }) => (
  <article className="bg-white border border-gray-100 p-8 md:p-12 transition-all hover:border-brand-teal group flex flex-col h-full">
    <div className="mb-6 flex items-center justify-between">
      <span className="text-[10px] font-bold tracking-[0.2em] text-brand-copper uppercase">{id} // {industry}</span>
      <div className="w-8 h-[1px] bg-brand-teal/20 group-hover:w-16 transition-all duration-500"></div>
    </div>
    <h3 className="font-serif text-3xl font-bold text-brand-graphite mb-6 leading-tight">{title}</h3>
    
    <div className="space-y-6 flex-1">
      <div>
        <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-ash mb-2">Context</h4>
        <p className="text-brand-ash text-sm leading-relaxed font-light">{context}</p>
      </div>

      <div>
        <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-ash mb-2">Diagnostic Findings</h4>
        <ul className="space-y-1">
          {findings.map((item, idx) => (
            <li key={idx} className="text-brand-ash text-sm font-light flex gap-2">
              <span className="text-brand-teal">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-ash mb-2">Measurable Results</h4>
        <div className="grid grid-cols-2 gap-3">
          {results.map((result, idx) => (
            <div key={idx} className="bg-brand-beige/30 p-3 rounded border border-brand-beige">
              <p className="text-brand-graphite text-xs font-bold leading-tight">{result}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-10 pt-6 border-t border-gray-50">
      <div className="flex justify-between items-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ash">System ROI</span>
        <span className="text-brand-teal font-serif font-bold text-2xl">{roi}</span>
      </div>
    </div>
  </article>
);

const Footer: React.FC = () => (
  <footer className="bg-brand-graphite text-white pt-24 pb-12">
    <div className="container mx-auto px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        <div className="md:col-span-4">
          <LwSymbol color="#FFFFFF" className="w-12 h-12 mb-8" />
          <p className="text-gray-400 max-w-sm leading-relaxed text-sm font-light">
            Architecting the future of global enterprise execution at scale. Bridging the divide between strategy and implementation for leadership teams in Calgary, AB and beyond.
          </p>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-[10px] tracking-[0.3em] uppercase mb-8 text-brand-copper font-bold">Expertise</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Operating Models</a></li>
            <li><a href="#" className="hover:text-white transition-colors">AI Governance</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Systems Architecture</a></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-[10px] tracking-[0.3em] uppercase mb-8 text-brand-copper font-bold">Network</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a 
                href="https://www.linkedin.com/company/lvrgwrks/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors flex items-center gap-2 group"
              >
                LinkedIn 
                <LinkedInIcon className="w-3 h-3 text-brand-copper group-hover:text-white" />
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-[10px] tracking-[0.3em] uppercase mb-8 text-brand-copper font-bold">Location</h4>
          <p className="text-sm text-gray-400">Calgary, AB</p>
          <p className="text-sm text-gray-400">Canada</p>
        </div>
      </div>
      <div className="pt-10 border-t border-white/10 flex justify-between items-center text-[11px] text-gray-500 uppercase tracking-widest">
        <p>© {new Date().getFullYear()} LeverageWorks Calgary</p>
        <p>Architecting Intelligence</p>
      </div>
    </div>
  </footer>
);

// --- Main Application ---

const App: React.FC = () => {
  const [aiMessage, setAiMessage] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  const handleAiConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setIsTyping(true);
    const result = await gemini.getExecutionStrategy(userInput);
    setAiMessage(result);
    setIsTyping(false);
    setUserInput('');
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] bg-brand-graphite flex flex-col items-center justify-center animate-fade-in p-6">
        <LwSymbol color="#FFFFFF" className="w-16 h-16 mb-8 animate-pulse" />
        
        {/* Brand Slogan */}
        <h2 className="text-white text-[11px] font-medium tracking-[0.5em] uppercase mb-12 opacity-90 animate-fade-in text-center" style={{ animationDelay: '0.3s' }}>
          Architecting Intelligence
        </h2>

        <div className="w-40 h-[1px] bg-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-teal animate-progress h-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <header className="relative pt-40 pb-32 md:pt-56 md:pb-48 overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-[#f8f6f4] -skew-x-12 transform origin-top translate-x-1/4"></div>
          
          <div className="container mx-auto px-6 md:px-16 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-[#fdf2e9] px-4 py-1.5 rounded-full mb-12">
                <div className="w-2 h-2 rounded-full bg-brand-copper"></div>
                <span className="text-[10px] font-bold tracking-[0.1em] text-brand-copper uppercase">Operating Leverage</span>
              </div>

              <h1 className="font-serif font-semibold text-6xl md:text-[88px] leading-[1.05] text-brand-graphite mb-10 tracking-tight">
                Where strategy becomes<br />
                <span className="text-brand-teal italic">operating advantage.</span>
              </h1>

              <p className="text-brand-ash text-xl md:text-[22px] leading-relaxed mb-12 max-w-3xl font-light">
                LeverageWorks helps Calgary executive teams move AI from experimentation into disciplined operating systems. Human judgment remains accountable while intelligent systems reduce friction at scale.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => scrollToSection('divide')}
                  className="bg-brand-teal text-white px-10 py-5 rounded-md font-semibold text-sm flex items-center justify-center gap-3 hover:bg-brand-graphite transition-all shadow-lg hover:shadow-brand-teal/20 group"
                >
                  Initialize Diagnostic 
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </button>
                <button 
                  onClick={() => scrollToSection('capabilities')}
                  className="bg-white border border-brand-graphite text-brand-graphite px-10 py-5 rounded-md font-semibold text-sm hover:bg-gray-50 transition-all"
                >
                  View the operating model
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Narrative Section */}
        <section id="firm" className="py-32 bg-[#faf9f8] border-y border-gray-100">
          <div className="container mx-auto px-6 md:px-16">
            <div className="max-w-5xl">
               <p className="text-brand-graphite text-2xl md:text-[28px] leading-relaxed mb-12 font-serif italic font-medium tracking-wide">
                 The divide between AI potential and realized value is found in the operating model.
               </p>
               <p className="text-brand-ash text-lg md:text-[22px] leading-relaxed font-light">
                 LeverageWorks was architected during the Haskayne EMBA to solve a specific problem: the friction between leadership intent and technological execution. We don't just implement AI; we rebuild the decision pathways that power your firm.
               </p>
            </div>
          </div>
        </section>

        {/* Philosophy / Capabilities */}
        <section id="capabilities" className="py-32 bg-white">
          <div className="container mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24">
              <div className="max-w-2xl">
                <span className="text-brand-copper font-bold tracking-widest text-[11px] uppercase mb-4 block">Our Philosophy</span>
                <h2 className="font-serif font-bold text-5xl text-brand-graphite">Architectural Excellence.</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <ServiceCard 
                title="Strategic Readiness"
                description="Auditing organizational workflows in Calgary to identify where intelligence can be natively embedded to reduce cognitive friction."
                icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>}
              />
              <ServiceCard 
                title="Execution Models"
                description="Redesigning standard operating procedures for an AI-augmented workforce where human judgment remains the primary lever."
                icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>}
              />
              <ServiceCard 
                title="Systems Design"
                description="Building custom intelligence pipelines that transform fragmented data into clear, executable leadership directives."
                icon={<svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>}
              />
            </div>
          </div>
        </section>

        {/* Use Cases Section - Representative Engagement Scenarios */}
        <section id="scenarios" className="py-32 bg-[#faf9f8] border-y border-gray-100">
          <div className="container mx-auto px-6 md:px-16">
            <div className="mb-20">
              <span className="text-brand-copper font-bold tracking-widest text-[11px] uppercase mb-4 block">Proven Execution</span>
              <h2 className="font-serif font-bold text-5xl text-brand-graphite mb-6">Representative Engagement Scenarios</h2>
              <p className="text-brand-ash text-lg font-light max-w-2xl leading-relaxed">
                Based on operating patterns observed across execution-critical industries where LeverageWorks closed the gap between potential and performance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <UseCaseCard 
                id="UC01"
                industry="Manufacturing"
                title="Unlocking Capacity Without Adding Headcount"
                context="A multi-site North American industrial manufacturer faced margin compression driven by input volatility and inconsistent production scheduling. Decision latency averaged 7 to 14 days."
                findings={[
                  "Manual consolidation of forecasts",
                  "No predictive bottleneck visibility",
                  "Excess safety inventory issues",
                  "Prioritization lacking data backing"
                ]}
                results={[
                  "14% Capacity Increase",
                  "22% Reduction in planning",
                  "9% Inventory Reduction",
                  "11% EBITDA Improvement"
                ]}
                roi="7.5x ROI"
              />
              <UseCaseCard 
                id="UC02"
                industry="Financial Sector"
                title="Private Equity Portfolio Optimization"
                context="A mid-market PE firm with diversified holdings lacked standardized performance visibility. Operating metrics were inconsistent and AI initiatives were fragmented."
                findings={[
                  "No unified KPI architecture",
                  "Heavy manual reporting burden",
                  "Limited operational AI tied to EBITDA",
                  "Slow signal detection at portfolio level"
                ]}
                results={[
                  "4-6% EBITDA Uplift",
                  "35% Reporting reduction",
                  "28% Faster signal detection",
                  "12% WC Efficiency"
                ]}
                roi="7.8x ROI"
              />
              <UseCaseCard 
                id="UC03"
                industry="Midstream Oil & Gas"
                title="Asset Throughput & Capital Efficiency"
                context="A midstream operator managing pipeline and storage assets faced regulatory complexity and rising opex. Siloed systems hindered cross-functional reconciliation."
                findings={[
                  "Disconnected utilization metrics",
                  "Manual compliance workflows",
                  "Under-optimized maintenance",
                  "Capital lacking throughput modeling"
                ]}
                results={[
                  "8% Asset Utilization boost",
                  "19% Reduction in downtime",
                  "31% Compliance cycle reduction",
                  "6% OpEx reduction per bbl"
                ]}
                roi="7.8x ROI"
              />
            </div>

            <div className="mt-16 text-center">
              <p className="text-brand-ash text-xs italic font-light">
                Results and ROI based on 12-18 month implementation cycles following the AI-Integrated Operating Model™ deployment.
              </p>
            </div>
          </div>
        </section>

        {/* AI Interface */}
        <section id="divide" className="py-32 bg-brand-graphite text-white overflow-hidden relative">
          <div className="container mx-auto px-6 md:px-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
              <div className="md:col-span-5">
                <span className="text-brand-copper font-bold tracking-widest text-[11px] uppercase mb-8 block">Operational Interface</span>
                <h2 className="font-serif font-bold text-5xl mb-8">Consult the <br /><span className="italic">Strategist.</span></h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
                  Input your organizational friction points to receive an architectural strategy briefing derived from our Calgary-based EMBA methodology.
                </p>
              </div>
              <div className="md:col-span-7">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-xl shadow-2xl">
                  <div className="min-h-[200px] mb-12">
                    {isTyping ? (
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-teal animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-brand-teal animate-bounce delay-100"></div>
                        <div className="w-2 h-2 rounded-full bg-brand-teal animate-bounce delay-200"></div>
                      </div>
                    ) : aiMessage ? (
                      <div className="animate-fade-in font-serif italic text-2xl leading-relaxed text-gray-200">
                        {aiMessage}
                      </div>
                    ) : (
                      <div className="text-gray-500 font-serif italic text-2xl">
                        Awaiting inquiry... Specify your organizational gap or execution challenge.
                      </div>
                    )}
                  </div>
                  <form onSubmit={handleAiConsult} className="relative">
                    <input 
                      type="text" 
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder="e.g., 'Our AI pilot lacks an integration roadmap...'" 
                      className="w-full bg-white/5 border border-white/20 rounded-lg px-6 py-5 focus:outline-none focus:border-brand-teal text-white placeholder:text-gray-600 transition-all font-sans"
                    />
                    <button 
                      type="submit"
                      className="absolute right-3 top-3 bg-brand-teal text-white px-6 py-2 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-brand-copper transition-all"
                    >
                      Consult
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="py-48 bg-white text-center">
          <div className="container mx-auto px-6 md:px-16">
            <h2 className="font-serif font-bold text-6xl md:text-[80px] text-brand-graphite mb-10 tracking-tight italic">Execute at scale.</h2>
            <p className="text-brand-ash max-w-xl mx-auto mb-16 text-lg font-light leading-relaxed">
              Ensure technology serves leadership intent in Calgary, AB. Ready to move beyond experimentation?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
              <button 
                onClick={() => scrollToSection('divide')}
                className="bg-brand-teal text-white px-12 py-5 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-brand-graphite transition-all shadow-xl"
              >
                Request Briefing
              </button>
              <button 
                onClick={() => scrollToSection('firm')}
                className="text-brand-graphite text-sm font-bold uppercase tracking-widest border-b-2 border-brand-copper pb-1 hover:text-brand-copper transition-all"
              >
                The Firm Thesis
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;