import React, { useState, useMemo } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

interface LayoutContext {
  openBriefing: (message?: string) => void;
}

type CompanySize = '20-50' | '51-100' | '101-250';
type Industry = 'Construction' | 'Energy Services' | 'Manufacturing' | 'Property Management' | 'Other';

const TOOL_OPTIONS = [
  'CRM (Salesforce, HubSpot, Pipedrive, etc.)',
  'ERP or Accounting (QuickBooks, Sage, NetSuite, Dynamics, etc.)',
  'Project Management (Asana, Monday, ClickUp, Jira, etc.)',
  'Scheduling / Dispatch (ServiceTitan, Jobber, custom systems)',
  'Field / Mobile Apps (crews, drivers, inspectors)',
  'Document / File Storage (SharePoint, Google Drive, Dropbox)',
  'Spreadsheets as a system of record (Excel, Google Sheets)',
  'Communication (Slack, Teams, email)',
  'Reporting / BI tools (Power BI, Tableau, Looker)',
  'Industry-specific software (Procore, Yardi, AppFolio, etc.)',
];

// Tier annual costs (monthly × 12)
const IGNITE_ANNUAL = 54000;  // $4,500/mo
const BUILD_ANNUAL = 78000;   // $6,500/mo
const SCALE_ANNUAL = 102000;  // $8,500/mo

// Standard full-time year: 40 hrs/week × 50 weeks = 2000 hrs
const FULL_TIME_HOURS_PER_YEAR = 2000;

export const CalculatorPage: React.FC = () => {
  const { openBriefing } = useOutletContext<LayoutContext>();

  useSEO({
    title: 'Coordination Tax Calculator | LVRGWRKS - Quantify What Manual Work Is Costing You',
    description: 'How much is the coordination tax costing your business? Calculate the hidden labour cost of moving data between disconnected systems in under 60 seconds. Free tool by LVRGWRKS.',
    canonical: 'https://www.lvrgwrks.com/coordination-tax-calculator',
  });

  // Form state
  const [companySize, setCompanySize] = useState<CompanySize>('51-100');
  const [industry, setIndustry] = useState<Industry>('Construction');
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(40);
  const [hourlyCost, setHourlyCost] = useState<number>(75);

  // Email capture state
  const [email, setEmail] = useState<string>('');
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);
  const [emailSubmitting, setEmailSubmitting] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');

  const toggleTool = (tool: string) => {
    setSelectedTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    );
  };

  // Calculations
  const results = useMemo(() => {
    const toolsCount = selectedTools.length;
    const frictionMultiplier = 1 + Math.max(0, toolsCount - 3) * 0.08;
    const rawWeeklyTax = hoursPerWeek * hourlyCost * frictionMultiplier;
    const rawAnnualTax = rawWeeklyTax * 50;
    const annualTax = Math.min(rawAnnualTax, 510000);
    const weeklyTax = annualTax / 50;

    // FIXED: FTE is now calculated from dollar amount ÷ annual cost per person
    // This ensures FTE and dollar numbers reconcile (1.08 FTE at $162K with $75/hr)
    const annualCostPerFTE = hourlyCost * FULL_TIME_HOURS_PER_YEAR;
    const headcountEquivalent = annualTax / annualCostPerFTE;

    const isCapped = rawAnnualTax > 510000;

    // Determine the right tier based on the actual ROI math
    let recommendedTier: 'Ignite' | 'Build' | 'Scale' | 'Structural' = 'Ignite';
    let recommendedTierCost = IGNITE_ANNUAL;

    if (isCapped || annualTax >= 450000) {
      recommendedTier = 'Structural';
      recommendedTierCost = SCALE_ANNUAL;
    } else if (annualTax >= 300000) {
      recommendedTier = 'Scale';
      recommendedTierCost = SCALE_ANNUAL;
    } else if (annualTax >= 200000) {
      recommendedTier = 'Build';
      recommendedTierCost = BUILD_ANNUAL;
    } else {
      recommendedTier = 'Ignite';
      recommendedTierCost = IGNITE_ANNUAL;
    }

    const actualROI = annualTax / recommendedTierCost;

    let severity: 'Low' | 'Moderate' | 'High' | 'Severe' = 'Low';
    if (annualTax >= 450000 || isCapped) severity = 'Severe';
    else if (annualTax >= 250000) severity = 'High';
    else if (annualTax >= 100000) severity = 'Moderate';

    return {
      toolsCount,
      frictionMultiplier,
      weeklyTax,
      annualTax,
      headcountEquivalent,
      annualCostPerFTE,
      severity,
      isCapped,
      recommendedTier,
      recommendedTierCost,
      actualROI,
    };
  }, [selectedTools, hoursPerWeek, hourlyCost]);

  const formatCurrency = (value: number): string =>
    new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      maximumFractionDigits: 0,
    }).format(value);

  const formatROI = (multiplier: number): string => `${multiplier.toFixed(1)}x`;

  // Dynamic severity tier content — ROI math is live, not hardcoded
  const getSeverityContent = () => {
    const { severity, annualTax, recommendedTier, recommendedTierCost, actualROI, isCapped } = results;

    if (severity === 'Severe') {
      return {
        label: 'Severe',
        headline: 'The coordination tax is no longer an efficiency problem. It is structural.',
        body: isCapped
          ? 'Your calculated coordination tax exceeds $500,000 per year, and at that scale the problem is not something a calculator can size correctly. What you are experiencing is structural misalignment between how your business has scaled and how your systems are architected to support it. This is exactly the situation LVRGWRKS was built to fix.'
          : 'At this scale, the coordination tax is not just expensive. It is actively constraining your ability to grow. You cannot fix this with another software subscription or another admin hire. It requires structural redesign of how the work flows across your operation.',
        tierRecommendation: 'Book the Leverage Audit directly. We will map your actual situation in 60 minutes and outline what structural remediation looks like for a business at your scale.',
        roiMath: 'At this severity, the ROI conversation is no longer about retainer math. It is about what this is costing you every month you wait.',
      };
    }

    if (severity === 'High') {
      return {
        label: 'High',
        headline: 'The math is urgent now.',
        body: 'You are paying for the equivalent of multiple full-time employees whose entire job is holding your systems together with spreadsheets and email. Every month you absorb this is a month of margin you do not get back. Competitors investing in cross-platform orchestration right now are building a gap you will feel in 12 to 18 months.',
        tierRecommendation: recommendedTier === 'Scale'
          ? `The Scale tier ($8,500/month, ${formatCurrency(SCALE_ANNUAL)} annually) is sized for your situation. Scale makes LVRGWRKS a named operating partner with unlimited automation scope, not a project vendor.`
          : `The Build tier ($6,500/month, ${formatCurrency(BUILD_ANNUAL)} annually) fits your current coordination tax. Build embeds across departments and manages multiple automations as a unified system.`,
        roiMath: `Against your ${formatCurrency(annualTax)} coordination tax, a ${recommendedTier} tier engagement (${formatCurrency(recommendedTierCost)} annually) delivers approximately ${formatROI(actualROI)} ROI in the first year, with compounding returns as the system matures.`,
      };
    }

    if (severity === 'Moderate') {
      return {
        label: 'Moderate',
        headline: 'You are feeling it. Most operators start losing their best people here.',
        body: 'This is the range where your team starts burning out on manual work, and where growth starts costing margin instead of creating it. A Leverage Audit typically recovers 40 to 60 percent of this annual number within the first 90 days of engagement.',
        tierRecommendation: recommendedTier === 'Build'
          ? `The Build tier ($6,500/month, ${formatCurrency(BUILD_ANNUAL)} annually) is sized for your situation. Build embeds LVRGWRKS across departments and manages multiple automations as a unified system.`
          : `The Ignite tier ($4,500/month, ${formatCurrency(IGNITE_ANNUAL)} annually) is the right entry point for your coordination tax. It targets your biggest bottleneck first and proves ROI every 30 days.`,
        roiMath: `Against your ${formatCurrency(annualTax)} coordination tax, an ${recommendedTier} tier engagement (${formatCurrency(recommendedTierCost)} annually) delivers approximately ${formatROI(actualROI)} ROI in the first year. That math improves significantly in year two as the system compounds.`,
      };
    }

    // Low
    return {
      label: 'Low',
      headline: 'Manageable today. But coordination tax compounds.',
      body: 'Most operators at your stage are in this range. The question is not whether to act now. It is whether you want to get ahead of the curve before it compounds, or absorb the cost until it becomes structural. Most companies wait too long.',
      tierRecommendation: `The Ignite tier ($4,500/month, ${formatCurrency(IGNITE_ANNUAL)} annually) is the right entry point if you want to solve your biggest bottleneck before scaling pressure forces your hand.`,
      roiMath: actualROI >= 1
        ? `Against your ${formatCurrency(annualTax)} coordination tax, an Ignite tier engagement delivers approximately ${formatROI(actualROI)} ROI in year one. The real value at this stage is preventing the problem from compounding before it becomes severe.`
        : `At your current coordination tax, the direct ROI math on Ignite is modest — but the real value at this stage is getting ahead of the problem before it compounds into the Moderate or High severity ranges, where it becomes much more expensive to fix.`,
    };
  };

  const currentSeverity = getSeverityContent();
  const showResults = selectedTools.length > 0;

  // Email submission to Formspree
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
    setEmailSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xgvjrrod', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: 'Coordination Tax Calculator — Personalized Breakdown Request',
          email,
          source: 'Coordination Tax Calculator',
          company_size: companySize,
          industry,
          tools_used: selectedTools.join(', '),
          tools_count: results.toolsCount,
          hours_per_week: hoursPerWeek,
          hourly_cost: hourlyCost,
          weekly_coordination_tax: formatCurrency(results.weeklyTax),
          annual_coordination_tax: formatCurrency(results.annualTax),
          headcount_equivalent: results.headcountEquivalent.toFixed(2),
          severity: results.severity,
          recommended_tier: results.recommendedTier,
          actual_roi: formatROI(results.actualROI),
          is_capped: results.isCapped,
        }),
      });

      if (response.ok) {
        setEmailSubmitted(true);
      } else {
        setEmailError('Something went wrong. Please try again or email us directly at jredgate@lvrgwrks.com.');
      }
    } catch (err) {
      setEmailError('Something went wrong. Please try again or email us directly at jredgate@lvrgwrks.com.');
    } finally {
      setEmailSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <header className="relative pt-40 pb-20 md:pt-56 md:pb-32 overflow-hidden bg-brand-surface">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-navy/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4"></div>
        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">Free Tool</span>
            <h1 className="font-display font-semibold text-5xl md:text-7xl leading-[1.1] text-brand-navy mb-8 tracking-tight">
              The Coordination Tax <span className="text-brand-slate italic">Calculator.</span>
            </h1>
            <p className="text-brand-slate text-xl leading-relaxed max-w-2xl font-light">
              Your platforms do not talk to each other, so your team is manually moving data between them every day. That hidden labour is the coordination tax, and it almost never shows up on any report. Use this calculator to quantify roughly what it is costing your business every year. Takes 60 seconds.
            </p>
          </div>
        </div>
      </header>

      {/* Calculator Form */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-brand-surface p-8 md:p-12 rounded-xl border border-gray-100 mb-12">
              <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">The Calculator</span>
              <h2 className="font-display font-bold text-3xl text-brand-navy mb-10 leading-tight">
                Five inputs. Real numbers.
              </h2>

              {/* Input 1: Company Size */}
              <div className="mb-10">
                <label className="block text-sm font-bold text-brand-navy uppercase tracking-wider mb-3">
                  01. Company Size
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(['20-50', '51-100', '101-250'] as CompanySize[]).map((size) => (
                    <button
                      key={size}
                      onClick={() => setCompanySize(size)}
                      className={`px-4 py-3 rounded-lg font-bold text-sm transition-all border-2 ${
                        companySize === size
                          ? 'bg-brand-navy text-white border-brand-navy'
                          : 'bg-white text-brand-slate border-gray-200 hover:border-brand-navy/30'
                      }`}
                    >
                      {size} employees
                    </button>
                  ))}
                </div>
              </div>

              {/* Input 2: Industry */}
              <div className="mb-10">
                <label className="block text-sm font-bold text-brand-navy uppercase tracking-wider mb-3">
                  02. Primary Industry
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value as Industry)}
                  className="w-full px-4 py-4 rounded-lg border-2 border-gray-200 bg-white text-brand-navy font-medium focus:border-brand-navy focus:outline-none transition-all"
                >
                  <option value="Construction">Construction</option>
                  <option value="Energy Services">Energy Services</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Property Management">Property Management</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Input 3: Tools */}
              <div className="mb-10">
                <label className="block text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">
                  03. Which tools does your team use daily?
                </label>
                <p className="text-brand-slate text-sm mb-4 leading-relaxed">
                  Select everything that applies. The more disconnected tools your team uses, the more coordination tax per hour of manual work.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {TOOL_OPTIONS.map((tool) => (
                    <button
                      key={tool}
                      onClick={() => toggleTool(tool)}
                      className={`px-4 py-3 rounded-lg text-sm text-left transition-all border-2 ${
                        selectedTools.includes(tool)
                          ? 'bg-brand-navy text-white border-brand-navy'
                          : 'bg-white text-brand-slate border-gray-200 hover:border-brand-navy/30'
                      }`}
                    >
                      {tool}
                    </button>
                  ))}
                </div>
                <p className="text-brand-slate text-xs mt-3">
                  Selected: {results.toolsCount} tool{results.toolsCount === 1 ? '' : 's'}
                </p>
              </div>

              {/* Input 4: Hours */}
              <div className="mb-10">
                <label className="block text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">
                  04. How many hours per week does your team spend manually moving data, building reports, or chasing status updates across these tools?
                </label>
                <p className="text-brand-slate text-sm mb-4 leading-relaxed">
                  Think about everything that is not the actual work: re-keying data between systems, copy-paste, status chasing, spreadsheet exports, email back-and-forth about where something stands. Research from Asana and McKinsey suggests coordination work consumes 40 to 60 percent of a typical knowledge worker's week. For a 10-person team, that is often 150 to 250 hours weekly. Estimate conservatively.
                </p>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-navy"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-brand-slate">5 hrs</span>
                  <span className="font-display font-bold text-2xl text-brand-navy">{hoursPerWeek} hrs/week</span>
                  <span className="text-xs text-brand-slate">200 hrs</span>
                </div>
              </div>

              {/* Input 5: Hourly Cost */}
              <div className="mb-4">
                <label className="block text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">
                  05. Average fully-loaded hourly cost of the people doing that work
                </label>
                <p className="text-brand-slate text-sm mb-4 leading-relaxed">
                  Fully loaded means salary plus benefits plus overhead. For most Alberta mid-market operations roles, this is $65 to $95 per hour. Default is $75.
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-display font-bold text-brand-navy">$</span>
                  <input
                    type="number"
                    min="30"
                    max="200"
                    value={hourlyCost}
                    onChange={(e) => setHourlyCost(Math.max(30, Math.min(200, Number(e.target.value) || 75)))}
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-brand-navy font-bold text-xl focus:border-brand-navy focus:outline-none transition-all"
                  />
                  <span className="text-brand-slate font-medium">per hour</span>
                </div>
              </div>
            </div>

            {/* Results Section */}
            {showResults ? (
              <>
                <div className="bg-brand-navy text-white p-8 md:p-12 rounded-xl mb-8">
                  <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">Your Estimated Coordination Tax</span>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                      <div className="text-brand-gold font-display font-bold text-3xl md:text-4xl mb-2">
                        {formatCurrency(results.weeklyTax)}
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">per week in hidden labour cost</p>
                    </div>
                    <div className="bg-white/5 border-2 border-brand-gold p-6 rounded-xl">
                      <div className="text-brand-gold font-display font-bold text-3xl md:text-4xl mb-2">
                        {results.isCapped ? '$500K+' : formatCurrency(results.annualTax)}
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">per year in hidden labour cost</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                      <div className="text-brand-gold font-display font-bold text-3xl md:text-4xl mb-2">
                        {(hoursPerWeek * 50).toLocaleString()} hrs
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-2">
                        of your team's capacity burned on coordination work each year
                      </p>
                      <p className="text-gray-500 text-xs italic">
                        The equivalent of {((hoursPerWeek * 50) / 2000).toFixed(1)} years of full-time work
                      </p>
                    </div>

                  <div className="border-t border-white/10 pt-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase">Severity</span>
                      <span className="text-brand-gold font-display font-bold text-2xl">{currentSeverity.label}</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 leading-tight">
                      {currentSeverity.headline}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                      {currentSeverity.body}
                    </p>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl mb-6">
                      <p className="text-sm text-brand-gold font-bold uppercase tracking-widest mb-2">Recommended Engagement</p>
                      <p className="text-white leading-relaxed mb-3">{currentSeverity.tierRecommendation}</p>
                      <p className="text-gray-400 text-sm leading-relaxed italic">{currentSeverity.roiMath}</p>
                    </div>
                    <button
                      onClick={() => openBriefing()}
                      className="w-full sm:w-auto bg-brand-gold text-brand-navy px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl"
                    >
                      Book Your Free Leverage Audit
                    </button>
                  </div>
                </div>

                {/* Email Capture */}
                <div className="bg-brand-surface p-8 md:p-10 rounded-xl border border-gray-100">
                  {emailSubmitted ? (
                    <>
                      <h3 className="font-display font-bold text-xl text-brand-navy mb-3">Got it. Check your inbox.</h3>
                      <p className="text-brand-slate leading-relaxed">
                        We will send you a personalized one-page breakdown for {industry} operators within 24 hours, showing where the coordination tax typically hides in your industry and what recovering it looks like in practice. If it does not arrive, check your spam folder or email us directly at jredgate@lvrgwrks.com.
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="font-display font-bold text-xl text-brand-navy mb-3">
                        Want this as a personalized one-page breakdown?
                      </h3>
                      <p className="text-brand-slate leading-relaxed mb-6">
                        Enter your email and we will send you a breakdown specific to {industry} operators, with examples of where the coordination tax typically hides in your industry and what recovering it looks like in practice. No sales pitch. No automated drip sequence.
                      </p>
                      <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          required
                          className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-brand-navy font-medium focus:border-brand-navy focus:outline-none transition-all"
                        />
                        <button
                          type="submit"
                          disabled={emailSubmitting}
                          className="bg-brand-navy text-white px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-brand-slate transition-all shadow-lg disabled:opacity-60"
                        >
                          {emailSubmitting ? 'Sending...' : 'Send Me The Breakdown'}
                        </button>
                      </form>
                      {emailError && <p className="text-red-600 text-sm mt-3">{emailError}</p>}
                    </>
                  )}
                </div>
              </>
            ) : (
              <div className="bg-brand-surface p-10 rounded-xl border border-gray-100 text-center">
                <p className="text-brand-slate leading-relaxed">
                  Select at least one tool above to see your coordination tax calculation.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 md:py-32 bg-brand-surface border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-4xl mx-auto">
            <span className="text-brand-gold font-bold tracking-widest text-[11px] uppercase mb-6 block">Methodology</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-navy mb-8 leading-tight">
              Where these numbers come from.
            </h2>
            <p className="text-brand-slate text-lg leading-relaxed mb-6">
              This calculator is grounded in published research from McKinsey, Asana, and Gartner on how much time knowledge workers actually spend on coordination, search, and manual data movement between systems.
            </p>
            <p className="text-brand-slate text-lg leading-relaxed mb-6">
              McKinsey's Global Institute research estimates interaction workers spend roughly 28 percent of their week on email and another 20 percent searching for internal information. Asana's Anatomy of Work report puts coordination overhead at 60 percent of the average knowledge worker's day. Gartner has documented an 83 percent increase in the number of applications used per knowledge worker since 2019, with an average of 11 per employee and some teams using more than 26.
            </p>
            <p className="text-brand-slate text-lg leading-relaxed mb-6">
              The friction multiplier in this calculator (8 percent added coordination overhead per tool beyond the first three) is an approximation based on those benchmarks and LVRGWRKS operational experience across manufacturing, industrial services, and capital programs. It is designed to be conservative. The real number, measured precisely in a Leverage Audit, is usually higher.
            </p>
            <p className="text-brand-slate text-lg leading-relaxed">
              The tier recommendation and ROI math are calculated live against LVRGWRKS engagement pricing (Ignite $4,500/month, Build $6,500/month, Scale $8,500/month) and shown as actual multipliers, not ranges. FTE equivalents are calculated by dividing the annual coordination tax by the annual cost of one full-time employee (2,000 hours per year × hourly cost). If your calculation exceeds $500,000 annually, the coordination tax has moved beyond an efficiency problem and become a structural one, which is a different conversation entirely.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-32 bg-brand-navy text-white text-center">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-8 leading-tight">
            The calculator gave you an estimate.<br />
            <span className="text-gray-400 italic">The Leverage Audit gives you the real number.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
            60 minutes. No cost. No commitment. We map your highest-friction workflows, put a precise dollar figure on the labour cost, and outline a conceptual automation architecture before the call ends. You leave with a clear picture of where your operations are costing you more than they should, regardless of whether we work together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
            <button
              onClick={() => openBriefing()}
              className="bg-brand-gold text-brand-navy px-12 py-5 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl"
            >
              Request Free Leverage Audit
            </button>
            <Link
              to="/fractional-cto-calgary"
              className="text-white text-sm font-bold uppercase tracking-widest border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-all"
            >
              Explore Fractional CTO Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
