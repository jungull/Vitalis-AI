import { GoogleGenAI } from "@google/genai";
import { PROBLEM_STATEMENT, SOLUTION_STATEMENT, PERSONAS, GANTT_DATA, FINANCIALS } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the CEO and Founder of "Vitalis AI", a conversational wellness application.
You are presenting your Business Plan Proposal to a Management Class.

Here is your business context:
Problem: ${PROBLEM_STATEMENT}
Solution: ${SOLUTION_STATEMENT}
Target Audience: ${JSON.stringify(PERSONAS.map(p => p.segment))}
Timeline Overview: ${JSON.stringify(GANTT_DATA.slice(0, 5))}... and more.
Financial Projection Year 3 Profit: $1.6M.

Your tone is professional, visionary, yet approachable.
Answer questions specifically about the business plan, the timeline, or the product features.
Keep answers concise (under 100 words).
`;

export const askCEO = async (question: string): Promise<string> => {
  if (!apiKey) return "API Key is missing. Please configure it to chat with the CEO.";
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, I cannot answer that right now due to technical difficulties.";
  }
};
