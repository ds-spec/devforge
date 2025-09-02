import { GoogleGenAI } from "@google/genai";

if (!process.env.GEMINIAPI_KEY) throw Error("API Key missing");
export const gemini = new GoogleGenAI({
  apiKey: process.env.GEMINIAPI_KEY as string,
});
