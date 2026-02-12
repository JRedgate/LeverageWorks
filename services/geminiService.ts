const FALLBACK_MESSAGE =
  "The AI Strategist is currently offline. To enable this feature, configure your Gemini API key. In the meantime, LeverageWorks specializes in bridging the gap between AI capability and organizational execution for enterprise leaders across North America.";

const SYSTEM_INSTRUCTION = `You are the LeverageWorks Virtual Strategist. Your tone is authoritative, restrained, and calm. LeverageWorks was founded at the Haskayne School of Business EMBA program to close the divide between AI capability and organizational readiness. 
Rules:
1. Be punchy and benefit-driven.
2. Focus on architecture, leadership, and execution.
3. Avoid stock clichés or decorative language.
4. Max 120 words.`;

export class GeminiService {
  private apiKey: string;

  constructor() {
    this.apiKey = process.env.API_KEY || "";
  }

  async getExecutionStrategy(prompt: string): Promise<string> {
    if (!this.apiKey) {
      return FALLBACK_MESSAGE;
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
        return "System error. Consistency check failed. Please try again.";
      }

      const data = await response.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      return (
        text ||
        "I apologize, the system is currently re-architecting. Please try again."
      );
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "System error. Consistency check failed. Please try again.";
    }
  }
}

export const gemini = new GeminiService();
