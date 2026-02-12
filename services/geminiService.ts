const FALLBACK_MESSAGE =
  "The AI Strategist is currently offline. To enable this feature, configure your Gemini API key. In the meantime, LeverageWorks specializes in bridging the gap between AI capability and organizational execution for enterprise leaders across North America.";

export class GeminiService {
  private ai: any = null;
  private initialized = false;

  private async init() {
    if (this.initialized) return;
    this.initialized = true;

    try {
      const apiKey = process.env.API_KEY;
      if (apiKey) {
        const { GoogleGenAI } = await import("@google/genai");
        this.ai = new GoogleGenAI({ apiKey });
      } else {
        console.warn(
          "Gemini API Key is missing. AI features will use fallback responses."
        );
      }
    } catch (e) {
      console.warn("Failed to initialize Gemini SDK:", e);
    }
  }

  async getExecutionStrategy(prompt: string) {
    await this.init();

    if (!this.ai) {
      return FALLBACK_MESSAGE;
    }

    try {
      const response = await this.ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
        config: {
          systemInstruction: `You are the LeverageWorks Virtual Strategist. Your tone is authoritative, restrained, and calm. LeverageWorks was founded at the Haskayne School of Business EMBA program to close the divide between AI capability and organizational readiness. 
          Rules:
          1. Be punchy and benefit-driven.
          2. Focus on architecture, leadership, and execution.
          3. Avoid stock clichés or decorative language.
          4. Max 120 words.`,
          temperature: 0.4,
        },
      });
      return (
        response.text ||
        "I apologize, the system is currently re-architecting. Please try again."
      );
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "System error. Consistency check failed. Please try again.";
    }
  }
}

export const gemini = new GeminiService();
