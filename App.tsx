
import React, { useState, useEffect } from 'react';
import { gemini } from './services/geminiService';
import { Navbar } from './src/components/Navbar';
import { Hero } from './src/components/Hero';

import { ServiceCard } from './src/components/ServiceCard';
import { UseCaseCard } from './src/components/UseCaseCard';
import { Footer } from './src/components/Footer';
import { LwSymbol } from './src/components/Logo';
import { BriefingModal } from './src/components/BriefingModal';

// --- Icons used in App.tsx (moved here or can be in separate files) ---
const ChartIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
);
const FlowIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
);
const SystemIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
);

// --- Helper Functions ---
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const App: React.FC = () => {
  const [aiMessage, setAiMessage] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [loading, setLoading] = useState(true);
  const [briefingOpen, setBriefingOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // reduced loading time
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
      <div className="fixed inset-0 z-[100] bg-brand-navy flex flex-col items-center justify-center animate-fade-in p-6">
        <LwSymbol color="#FFFFFF" className="w-16 h-16 mb-8 animate-pulse" />
        <h2 className="text-white text-[11px] font-medium tracking-[0.5em] uppercase mb-12 opacity-90 animate-fade-in text-center" style={{ animationDelay: '0.3s' }}>
          Architecting Intelligence
        </h2>
        <div className="w-40 h-[1px] bg-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-gold animate-progress h-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-surface flex flex-col font-sans">
      <Navbar onContactClick={() => scrollToSection('contact')} />

      <main className="flex-1">
        <Hero
          onCtaClick={() => scrollToSection('divide')}
          onSecondCtaClick={() => scrollToSection('capabilities')}
        />

        {/* Narrative Section */}
        <section id="firm" className="py-20 md:py-32 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6 md:px-16">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">The Firm</span>
              <p className="text-brand-navy text-2xl md:text-4xl leading-relaxed mb-8 font-display font-medium">
                The divide between AI potential and realized value is found in the <span className="text-brand-gold italic">operating model.</span>
              </p>
              <p className="text-brand-slate text-lg leading-relaxed max-w-3xl mx-auto">
                LeverageWorks was architected during the Haskayne EMBA to solve a specific problem: the friction between leadership intent and technological execution. We don't just implement AI; we rebuild the decision pathways that power your firm.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto">
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="text-brand-navy font-display font-bold text-xl mb-4">Leadership & Origin</h3>
                <p className="text-brand-slate leading-relaxed">
                  Founded in Calgary, LeverageWorks bridges the gap between executive strategy and engineering reality. Our methodology is rooted in systems thinking and architectural precision, ensuring that "Digital Transformation" results in measurable EBITDA uplift, not just new software.
                </p>
              </div>
              <div className="bg-brand-surface p-8 rounded-xl border border-gray-100">
                <h3 className="text-brand-navy font-display font-bold text-xl mb-4">The Mandate</h3>
                <p className="text-brand-slate leading-relaxed">
                  We operate with a singular mandate: to equip enterprise leaders with the "synthesis layer" required to govern AI agents. We turn theoretical capability into deployed, governed, and revenue-generating infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy / Capabilities */}
        <section id="capabilities" className="py-20 md:py-32 bg-brand-surface">
          <div className="container mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div className="max-w-2xl">
                <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">Our Philosophy</span>
                <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-navy">Architectural Excellence.</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Strategic Readiness"
                description="Auditing organizational workflows across North America to identify where intelligence can be natively embedded to reduce cognitive friction."
                icon={<ChartIcon />}
              />
              <ServiceCard
                title="Execution Models"
                description="Redesigning standard operating procedures for an AI-augmented workforce where human judgment remains the primary lever."
                icon={<FlowIcon />}
              />
              <ServiceCard
                title="Systems Design"
                description="Building custom intelligence pipelines that transform fragmented data into clear, executable leadership directives."
                icon={<SystemIcon />}
              />
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="scenarios" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6 md:px-16">
            <div className="mb-20">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-4 block">Proven Execution</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-navy mb-6">Representative Scenarios</h2>
              <p className="text-brand-slate text-lg max-w-2xl leading-relaxed">
                Based on operating patterns observed across execution-critical industries where LeverageWorks closed the gap between potential and performance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <UseCaseCard
                id="UC01"
                industry="Manufacturing"
                title="Unlocking Capacity Without Adding Headcount"
                context="A multi-site North American industrial manufacturer faced margin compression driven by input volatility and inconsistent production scheduling."
                findings={[
                  "Manual consolidation of forecasts",
                  "No predictive bottleneck visibility",
                  "Prioritization lacking data backing"
                ]}
                results={[
                  "14% Capacity Increase",
                  "22% Reduction in planning",
                  "9% Inventory Reduction"
                ]}
                roi="7.5x ROI"
                expandedStory="Faced with rising input costs and a fixed headcount, this manufacturer was unable to meet growing demand. We deployed a predictive scheduling engine that integrated real-time machine telemetry with sales forecasts. This system autonomically rebalanced production lines to optimize for throughput rather than just utilization. The result was a 'hidden factory' unlocked within their existing footprint, allowing them to take on 14% more volume without hiring a single additional operator."
              />
              <UseCaseCard
                id="UC02"
                industry="Financial Sector"
                title="Private Equity Portfolio Optimization"
                context="A mid-market PE firm with diversified holdings lacked standardized performance visibility. Operating metrics were inconsistent."
                findings={[
                  "No unified KPI architecture",
                  "Heavy manual reporting burden",
                  "Slow signal detection at portfolio level"
                ]}
                results={[
                  "4-6% EBITDA Uplift",
                  "35% Reporting reduction",
                  "28% Faster signal detection"
                ]}
                roi="7.8x ROI"
                expandedStory="The firm struggled with a 45-day lag in portfolio reporting, making it impossible to react to market shifts in real-time. LeverageWorks architected a unified data layer that ingested disparate ERP data from 12 portfolio companies into a single command center. We then deployed agentic workflows to automate the variance analysis. Leadership moved from retroactive monthly reviews to proactive weekly steering, directly correlating to a 4-6% EBITDA uplift across the optimized assets."
              />
              <UseCaseCard
                id="UC03"
                industry="Midstream Oil & Gas"
                title="Asset Throughput & Capital Efficiency"
                context="A midstream operator managing pipeline and storage assets faced regulatory complexity and rising opex."
                findings={[
                  "Disconnected utilization metrics",
                  "Manual compliance workflows",
                  "Under-optimized maintenance"
                ]}
                results={[
                  "8% Asset Utilization boost",
                  "19% Reduction in downtime",
                  "31% Compliance cycle reduction"
                ]}
                roi="7.8x ROI"
                expandedStory="With regulatory pressure mounting and aging infrastructure, this operator needed to do more with less. We implemented a 'digital twin' of their critical pipeline assets, fed by IoT sensors. This allowed for predictive maintenance scheduling that reduced downtime by 19%. Furthermore, we automated the compliance reporting workflow, turning a manual, error-prone process into an auditable, instant digital record. The capital efficiency gained funded the entire transformation within 9 months."
              />
            </div>
          </div>
        </section>

        {/* AI Interface */}
        <section id="divide" className="py-20 md:py-32 bg-brand-navy text-white overflow-hidden relative">
          <div className="container mx-auto px-6 md:px-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
              <div className="md:col-span-5">
                <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">Operational Interface</span>
                <h2 className="font-display font-bold text-5xl mb-8">Consult the <br /><span className="italic text-gray-300">Strategist.</span></h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  Input your organizational friction points to receive an architectural strategy briefing derived from our adaptive EMBA methodology.
                </p>
              </div>
              <div className="md:col-span-7">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <LwSymbol className="w-32 h-32" color="#FFFFFF" />
                  </div>

                  <div className="min-h-[200px] mb-12 relative z-10">
                    {isTyping ? (
                      <div className="flex gap-2 items-center h-full">
                        <div className="w-2 h-2 rounded-full bg-brand-gold animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-brand-gold animate-bounce delay-100"></div>
                        <div className="w-2 h-2 rounded-full bg-brand-gold animate-bounce delay-200"></div>
                      </div>
                    ) : aiMessage ? (
                      <div className="animate-fade-in font-display text-xl leading-relaxed text-gray-200">
                        "{aiMessage}"
                      </div>
                    ) : (
                      <div className="text-gray-500 font-display italic text-2xl flex items-center gap-4">
                        <span className="text-5xl opacity-20">"</span>
                        Awaiting inquiry... Specify your organizational gap.
                      </div>
                    )}
                  </div>
                  <form onSubmit={handleAiConsult} className="relative z-10">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder="e.g., 'Our AI pilot lacks an integration roadmap...'"
                      className="w-full bg-black/20 border border-white/20 rounded-lg px-6 py-5 focus:outline-none focus:border-brand-gold text-white placeholder:text-gray-600 transition-all font-sans"
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-3 bg-brand-gold text-brand-navy px-6 py-2 rounded-md font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-lg"
                    >
                      Consult
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="py-20 md:py-32 bg-brand-surface text-center">
          <div className="container mx-auto px-6 md:px-16">
            <h2 className="font-display font-bold text-5xl md:text-7xl text-brand-navy mb-8 tracking-tight">Scale Your Execution.</h2>
            <p className="text-brand-slate max-w-xl mx-auto mb-12 text-lg leading-relaxed">
              Ensure technology serves leadership intent at scale. Ready to move beyond experimentation?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
              <button
                onClick={() => setBriefingOpen(true)}
                className="bg-brand-navy text-white px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-brand-gold transition-all shadow-xl hover:shadow-brand-gold/20"
              >
                Request Briefing
              </button>
              <button
                onClick={() => scrollToSection('firm')}
                className="text-brand-navy text-sm font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-all"
              >
                The Firm Thesis
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <BriefingModal isOpen={briefingOpen} onClose={() => setBriefingOpen(false)} />
    </div>
  );
};

export default App;
