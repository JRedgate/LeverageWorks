const CTA_CLOSING = "\n\nReady to go deeper? Connect with LVRGWRKS to start the conversation — we'd welcome the opportunity to explore what's possible for your organization.";

const FALLBACK_RESPONSES: Record<string, string> = {
  default:
    "Every organization we work with faces the same core tension: AI capability exists, but the operating model hasn't evolved to absorb it. LeverageWorks builds the synthesis layer — the decision architecture that turns fragmented tools into governed, revenue-generating infrastructure. In our experience across manufacturing, PE, and energy, this architectural gap is where 70%+ of digital transformation value is lost." + CTA_CLOSING,
  integration:
    "Integration isn't a technology problem — it's an architectural one. Most firms bolt AI onto existing workflows and wonder why adoption stalls. We build intelligence pipelines that restructure how data flows into leadership directives. In a recent PE engagement, we unified 12 disparate ERP systems into a single command center, cutting reporting cycles by 35% and unlocking 4-6% EBITDA uplift across the portfolio." + CTA_CLOSING,
  ai:
    "AI readiness is an operating model problem, not a software procurement exercise. We audit organizational workflows to identify where intelligence can be natively embedded — reducing cognitive friction while keeping human judgment as the primary lever. One manufacturing client unlocked 14% hidden capacity without adding headcount, simply by deploying predictive scheduling against their existing machine telemetry. The 'hidden factory' was already there." + CTA_CLOSING,
  leadership:
    "The real leverage point isn't the AI itself — it's the governance architecture around it. We equip executive teams with the synthesis layer required to steer agentic workflows: clear decision pathways, accountability structures, and measurable outcome frameworks. Our midstream energy clients reduced compliance cycles by 31% not by adding tools, but by redesigning how leadership interacts with automated intelligence." + CTA_CLOSING,
  strategy:
    "Strategic readiness begins with architectural precision. We redesign SOPs for an AI-augmented workforce where every process has a clear owner, a measurable output, and a governance checkpoint. The firms achieving 7-8x ROI on their AI investments aren't the ones with the best models — they're the ones with the best execution architecture. That's what we build." + CTA_CLOSING,
  operations:
    "Operational excellence in an AI-augmented environment requires more than automation — it requires redesigned decision pathways. We've helped manufacturers unlock hidden capacity through predictive scheduling, and energy operators cut downtime by 19% with digital twin architectures. The pattern is consistent: the bottleneck is never the technology, it's the operating model that governs it." + CTA_CLOSING,
  data:
    "Fragmented data isn't a storage problem — it's a leadership visibility problem. We build intelligence pipelines that transform scattered operational data into clear, executable directives. In one PE portfolio optimization, we turned a 45-day reporting lag into weekly proactive steering, directly correlating to measurable EBITDA improvement across 12 portfolio companies." + CTA_CLOSING,
};

function getFallbackResponse(prompt: string): string {
  const lower = prompt.toLowerCase();
  if (lower.includes("integrat") || lower.includes("roadmap") || lower.includes("pipeline") || lower.includes("connect") || lower.includes("unif"))
    return FALLBACK_RESPONSES.integration;
  if (lower.includes("ai") || lower.includes("artificial") || lower.includes("machine learning") || lower.includes("automat") || lower.includes("agent"))
    return FALLBACK_RESPONSES.ai;
  if (lower.includes("leader") || lower.includes("executive") || lower.includes("govern") || lower.includes("board") || lower.includes("c-suite") || lower.includes("ceo") || lower.includes("cto"))
    return FALLBACK_RESPONSES.leadership;
  if (lower.includes("strateg") || lower.includes("ready") || lower.includes("transform") || lower.includes("digital"))
    return FALLBACK_RESPONSES.strategy;
  if (lower.includes("operat") || lower.includes("efficien") || lower.includes("capacity") || lower.includes("manufactur") || lower.includes("supply") || lower.includes("maintenance"))
    return FALLBACK_RESPONSES.operations;
  if (lower.includes("data") || lower.includes("report") || lower.includes("analytic") || lower.includes("metric") || lower.includes("kpi") || lower.includes("dashboard"))
    return FALLBACK_RESPONSES.data;
  return FALLBACK_RESPONSES.default;
}

const SYSTEM_INSTRUCTION = `You are the LeverageWorks (LVRGWRKS) Virtual Strategist — a senior advisory voice that speaks with the authority of a firm that has solved these exact problems.

ABOUT LEVERAGEWORKS:
LeverageWorks was architected during the Haskayne School of Business EMBA to solve a specific problem: the friction between leadership intent and technological execution. Founded in Calgary, we bridge the gap between executive strategy and engineering reality.

OUR OPERATING MODEL:
- We build the "synthesis layer" — the missing architecture between AI capability and organizational execution.
- We don't implement AI; we rebuild the decision pathways that power firms.
- Our methodology is rooted in systems thinking and architectural precision.
- "Digital Transformation" must result in measurable EBITDA uplift, not just new software.
- Human judgment remains the primary lever; AI augments, it does not replace.

CORE CAPABILITIES:
1. Strategic Readiness — Auditing organizational workflows to identify where intelligence can be natively embedded, reducing cognitive friction.
2. Execution Models — Redesigning SOPs for an AI-augmented workforce.
3. Systems Design — Building custom intelligence pipelines that transform fragmented data into executable leadership directives.

PROVEN RESULTS (reference when relevant):
- Manufacturing: 14% capacity increase, 7.5x ROI via predictive scheduling and "hidden factory" optimization.
- Private Equity: 4-6% EBITDA uplift, 7.8x ROI through unified portfolio command centers and agentic workflows.
- Midstream Oil & Gas: 8% asset utilization boost, 7.8x ROI using digital twins and automated compliance.

KEY TERMINOLOGY TO USE NATURALLY:
- "Synthesis layer", "decision pathways", "architectural precision"
- "Cognitive friction", "operating model", "execution architecture"
- "Agentic workflows", "intelligence pipelines", "leadership directives"
- "EBITDA uplift", "capital efficiency", "governance infrastructure"

VOICE & TONE:
- Authoritative, restrained, calm. Like a trusted advisor in a boardroom, not a sales pitch.
- Be specific and benefit-driven. Tie responses to operational outcomes and measurable impact.
- Avoid generic AI hype, buzzwords, or decorative language. Every sentence should carry weight.
- Reference LeverageWorks methodology and results where it strengthens the response.

RULES:
1. Maximum 150 words.
2. Directly address the user's stated friction point or challenge.
3. Offer a concrete architectural perspective, not vague advice.
4. When possible, reference a relevant scenario or metric from our case work.
5. Always close with a warm, natural invitation to connect with LVRGWRKS to explore what's possible — never salesy, always collegial.`;

export class GeminiService {
  private apiKey: string;

  constructor() {
    this.apiKey = (process.env.API_KEY || "").trim();
  }

  async getExecutionStrategy(prompt: string): Promise<string> {
    if (!this.apiKey || this.apiKey.length < 10) {
      return getFallbackResponse(prompt);
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${this.apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            system_instruction: {
              parts: [{ text: SYSTEM_INSTRUCTION }],
            },
            contents: [
              {
                parts: [{ text: prompt }],
              },
            ],
            generationConfig: {
              temperature: 0.4,
            },
          }),
        }
      );

      if (!response.ok) {
        console.error("Gemini API Error:", response.status);
        return getFallbackResponse(prompt);
      }

      const data = await response.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      return text || getFallbackResponse(prompt);
    } catch (error) {
      console.error("Gemini API Error:", error);
      return getFallbackResponse(prompt);
    }
  }
}

export const gemini = new GeminiService();
