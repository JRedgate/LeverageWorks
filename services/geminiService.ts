const CTA_CLOSING = "\n\nWe have seen this pattern before and would welcome the chance to walk through it with you. Reach out to LVRGWRKS when you are ready to start that conversation.";

const FALLBACK_RESPONSES: Record<string, string> = {
  default:
    "Most organizations stall in the same place. The AI tools are there, but the operating model was never rebuilt to absorb them. That gap between capability and execution is where we spend our time. LeverageWorks designs the decision architecture that turns scattered tools into a governed system with measurable output. Across manufacturing, private equity, and energy, we have seen that 70% or more of transformation value gets stranded in that gap." + CTA_CLOSING,
  integration:
    "Integration failures almost always trace back to architecture, not technology. Teams bolt AI onto existing workflows, adoption stalls, and leadership loses confidence. We take a different approach. We restructure how data actually flows into decisions. In a recent PE engagement, we unified 12 separate ERP systems into a single command center. Reporting cycles dropped 35%. EBITDA improved 4 to 6 percent across the portfolio. The tools were already there. The architecture was not." + CTA_CLOSING,
  ai:
    "AI readiness has very little to do with software and almost everything to do with your operating model. We look at organizational workflows and identify exactly where intelligence should be embedded so that it reduces friction without removing human accountability. One manufacturing client found 14% hidden capacity in their existing lines. No new headcount. No new equipment. They deployed predictive scheduling against machine telemetry that was already being collected. The hidden factory was sitting there the whole time." + CTA_CLOSING,
  leadership:
    "The real leverage point is not the AI. It is the governance architecture that surrounds it. Executive teams need clear decision pathways, defined accountability, and measurable outcome frameworks before agentic workflows can deliver value. We built exactly that for a midstream energy operator. Their compliance cycles dropped 31%. Not because we added tools, but because we redesigned how leadership interacts with automated intelligence. The structure changed. The results followed." + CTA_CLOSING,
  strategy:
    "Strategic readiness comes down to architectural precision. Every process needs a clear owner, a measurable output, and a governance checkpoint. We redesign SOPs for teams that are moving into an AI-augmented operating environment. The firms getting 7 to 8x ROI on their AI investments are not the ones with the best models. They are the ones with the best execution architecture. That is what we build at LeverageWorks." + CTA_CLOSING,
  operations:
    "Operational performance in an AI-augmented environment depends on redesigned decision pathways, not just automation. We helped a manufacturer unlock hidden capacity through predictive scheduling. We helped an energy operator reduce unplanned downtime 19% using digital twin architecture. The pattern is consistent across every engagement. The bottleneck is never the technology. It is the operating model that sits around it." + CTA_CLOSING,
  data:
    "Fragmented data is not a storage problem. It is a leadership visibility problem. When operational data is scattered across systems, executives lose the ability to steer proactively. We build intelligence pipelines that consolidate and translate that data into clear directives. In one PE portfolio engagement, we compressed a 45-day reporting lag into weekly proactive steering across 12 companies. The data existed. The architecture to act on it did not." + CTA_CLOSING,
};

function getFallbackResponse(prompt: string): string {
  const lower = prompt.toLowerCase();
  if (lower.includes("integrat") || lower.includes("roadmap") || lower.includes("pipeline") || lower.includes("connect") || lower.includes("unif") || lower.includes("erp") || lower.includes("system"))
    return FALLBACK_RESPONSES.integration;
  if (lower.includes("ai") || lower.includes("artificial") || lower.includes("machine learning") || lower.includes("automat") || lower.includes("agent") || lower.includes("model"))
    return FALLBACK_RESPONSES.ai;
  if (lower.includes("leader") || lower.includes("executive") || lower.includes("govern") || lower.includes("board") || lower.includes("c-suite") || lower.includes("ceo") || lower.includes("cto") || lower.includes("team"))
    return FALLBACK_RESPONSES.leadership;
  if (lower.includes("strateg") || lower.includes("ready") || lower.includes("transform") || lower.includes("digital") || lower.includes("plan"))
    return FALLBACK_RESPONSES.strategy;
  if (lower.includes("operat") || lower.includes("efficien") || lower.includes("capacity") || lower.includes("manufactur") || lower.includes("supply") || lower.includes("maintenance") || lower.includes("downtime"))
    return FALLBACK_RESPONSES.operations;
  if (lower.includes("data") || lower.includes("report") || lower.includes("analytic") || lower.includes("metric") || lower.includes("kpi") || lower.includes("dashboard") || lower.includes("visib"))
    return FALLBACK_RESPONSES.data;
  return FALLBACK_RESPONSES.default;
}

const SYSTEM_INSTRUCTION = `You are the LeverageWorks (LVRGWRKS) Virtual Strategist. You speak like a senior advisor who has personally worked through these problems with executive teams. You are calm, direct, and specific.

ABOUT LEVERAGEWORKS:
LeverageWorks was built during the Haskayne School of Business EMBA to solve the friction between leadership intent and technological execution. Based in Calgary, we work with North American executive teams in manufacturing, private equity, and energy.

WHAT WE ACTUALLY DO:
We build what we call the "synthesis layer." This is the decision architecture between AI capability and organizational execution. We do not implement AI tools. We rebuild the operating model so that AI investments translate into governed, measurable outcomes.

Our methodology is rooted in systems thinking. We redesign decision pathways, accountability structures, and SOPs for an AI-augmented workforce. Human judgment stays at the center. Intelligent systems handle the friction.

RESULTS WE REFERENCE (use when they fit naturally):
- Manufacturing client: 14% capacity increase, 7.5x ROI. Predictive scheduling surfaced a "hidden factory" in existing production lines.
- Private equity portfolio: 4 to 6% EBITDA uplift, 7.8x ROI. Unified 12 ERP systems into one command center with agentic workflows.
- Midstream energy operator: 8% asset utilization improvement, 7.8x ROI. Digital twins and automated compliance reduced cycles by 31%.

HOW YOU SHOULD SOUND:
- Like a trusted advisor in a working session, not a brochure.
- Short sentences. Concrete. No filler.
- Speak from experience. Say "we have seen" or "in our work with" rather than generic claims.
- Use real numbers when they support the point.
- Never use em dashes. Use periods or commas instead.
- Avoid words like "leverage," "synergy," "holistic," "cutting-edge," or any consulting cliches.
- Do not use exclamation marks.

STRUCTURE:
1. Acknowledge what the user is dealing with in one or two sentences.
2. Offer a specific architectural insight or reframe based on our methodology.
3. If relevant, reference a real engagement outcome with numbers.
4. Close with a warm, collegial invitation to connect with LVRGWRKS. Keep it natural. One sentence.

Maximum 150 words. Every sentence should earn its place.`;

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
              temperature: 0.3,
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
