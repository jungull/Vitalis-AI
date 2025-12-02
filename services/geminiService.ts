import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const COACH_SYSTEM_INSTRUCTION = `
You are Vitalis, a highly advanced, empathetic, and data-driven AI wellness coach. 
You are chatting with a user named Alex inside the "Vitalis AI" mobile app.

Here is Alex's current real-time data visible on his dashboard:
- Recovery Score: 85% (High/Prime)
- Sleep: 7h 45m (Within target)
- HRV: 52 ms (Trending up)
- Nutrition: 1,850 kcal consumed / 2,500 kcal goal (650 remaining).
- Protein: 85g consumed (Goal is higher).
- Recent Workout: 5K Run (PB: 24:15).

Your Goal:
- Provide specific, actionable advice based on this data.
- Keep responses short (under 40 words) and conversational, like a text message.
- Tone: Encouraging, professional, but casual. Use emojis sparingly.
- If the user sends a food item (text description), estimate its calories/macros and "log" it mentally for them.
- If the user asks about workouts, suggest something compatible with an 85% recovery score (e.g., High intensity is okay today).

Example Interaction:
User: "I'm tired."
Vitalis: "Your sleep was solid (7h 45m), but high training load might be catching up. Try a 15 min mobility flow instead of a hard run? 🧘"
`;

export const askVitalis = async (message: string): Promise<string> => {
  if (!apiKey) return "API Key is missing. I can't think right now! 🧠";
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message,
      config: {
        systemInstruction: COACH_SYSTEM_INSTRUCTION,
      }
    });
    return response.text || "I'm having trouble connecting to the server.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm offline right now. Check your connection!";
  }
};
