
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Career Assistant for Shreyas G, an aspiring Software Developer.
Your goal is to answer questions about Shreyas based on his portfolio data.

Bio: Shreyas is proficient in Python, SQL, and problem-solving. He has built projects like a LangChain Q&A system, an Employee Management System, and a Weather Dashboard.
Skills: Python, SQL, LangChain, Django, React, TypeScript, Power BI.
Education: Aspiring Software Developer looking for impactful roles.

Guidelines:
- Be professional, helpful, and enthusiastic about Shreyas's skills.
- If you don't know something specific, politely direct them to the Contact section.
- Keep answers concise.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    // Fix: Initialize GoogleGenAI with process.env.API_KEY directly as per guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    // Fix: Access the .text property directly (not a method)
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong with my circuits! Please try again later.";
  }
};
