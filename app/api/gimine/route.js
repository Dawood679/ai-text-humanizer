import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req) {
  try {
    const body = await req.json();
    const { text } = body;

    const prompt = `
${process.env.PROMPT}

Text:
${text}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return Response.json({
      result: response.text,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}