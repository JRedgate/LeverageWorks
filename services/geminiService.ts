
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Directly use process.env.API_KEY as per the @google/genai SDK guidelines
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async getExecutionStrategy(prompt: string) {
    try {
      // Use ai.models.generateContent with the appropriate model for text tasks
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: `You are the LeverageWorks Virtual Strategist. Your tone is authoritative, restrained, and calm. LeverageWorks was founded at the Haskayne School of Business EMBA program to close the divide between AI capability and organizational readiness. 
          Rules:
          1. Be punchy and benefit-driven.
          2. Focus on architecture, leadership, and execution.
          3. Avoid stock clichés or decorative language.
          4. Max 120 words.`,
          temperature: 0.4,
        }
      });
      // Access the .text property directly (not a method call)
      return response.text || "I apologize, the system is currently re-architecting. Please try again.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "System error. Consistency check failed.";
    }
  }
}

export const gemini = new GeminiService();
