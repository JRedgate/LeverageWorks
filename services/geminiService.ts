const FALLBACK_RESPONSES: Record<string, string> = {
  default:
    "LeverageWorks specializes in bridging the gap between AI capability and organizational execution. Our methodology, rooted in the Haskayne EMBA, focuses on rebuilding the decision pathways that power your firm. Contact us to discuss your specific organizational challenges.",
  integration:
    "Integration roadmaps require a synthesis layer between your existing systems and AI capabilities. LeverageWorks builds custom intelligence pipelines that transform fragmented data into executable leadership directives. We typically see 7-8x ROI on integration architecture engagements.",
  ai:
    "AI readiness is not a technology problem — it is an operating model problem. LeverageWorks audits organizational workflows to identify where intelligence can be natively embedded, reducing cognitive friction while maintaining human judgment as the primary lever.",
  leadership:
    "The divide between AI potential and realized value is found in the operating model. We equip enterprise leaders with the synthesis layer required to govern AI agents, turning theoretical capability into deployed, governed, and revenue-generating infrastructure.",
  strategy:
    "Strategic readiness begins with architectural precision. We redesign standard operating procedures for an AI-augmented workforce, ensuring that digital transformation results in measurable EBITDA uplift — not just new software.",
};

function getFallbackResponse(prompt: string): string {
  const lower = prompt.toLowerCase();
  if (lower.includes("integrat") || lower.includes("roadmap") || lower.includes("pipeline"))
    return FALLBACK_RESPONSES.integration;
  if (lower.includes("ai") || lower.includes("artificial") || lower.includes("machine learning"))
    return FALLBACK_RESPONSES.ai;
  if (lower.includes("leader") || lower.includes("executive") || lower.includes("govern"))
    return FALLBACK_RESPONSES.leadership;
  if (lower.includes("strateg") || lower.includes("ready") || lower.includes("transform"))
    return FALLBACK_RESPONSES.strategy;
  return FALLBACK_RESPONSES.default;
}

const SYSTEM_INSTRUCTION = `You are the LeverageWorks Virtual Strategist. Your tone is authoritative, restrained, and calm. LeverageWorks was founded at the Haskayne School of Business EMBA program to close the divide between AI capability and organizational readiness. 
Rules:
1. Be punchy and benefit-driven.
2. Focus on architecture, leadership, and execution.
3. Avoid stock clichés or decorative language.
4. Max 120 words.`;

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
