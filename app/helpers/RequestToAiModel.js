


const apikey = process.env.GEMINI_API_KEY;


import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: apikey });

async function main(text_here) {
    console.log("Generating content...");
    const pormpt = `${process.env.PROMPT}
Text: ${text_here}`;
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: pormpt,
  });
  console.log('response form open ai ' + response.text);
  return response.text;
}



export default main;