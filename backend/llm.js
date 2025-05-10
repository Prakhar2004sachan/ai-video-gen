import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { configDotenv } from "dotenv";
configDotenv();

// const model = new ChatGoogleGenerativeAI({
//   model: "gemini-2.0-flash",
//   temperature: 0,
// });

const llm = new ChatGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GEN_AI_API_KEY,
  model: "gemini-2.0-flash",
  temperature: 0,
  maxRetries: 2,
  // other params...
});

const aiPrompt = [
  [
    "system",
    "You are an expert in Manim animation. Your task is to generate only a minimal valid Manim code snippet that is compatible with the latest version of Manim Community Edition (ManimCE) or ManimGL. The code must include all necessary imports, and should produce a simple, correct animation based on the given task.",
  ],
  [
    "human",
    "Create a short educational video on Explain the Bubble Sort algorithm in simple terms. Include its working principle, time complexity, and a dry run example using the array [5, 2, 9, 1, 5, 6]. The explanation should be beginner-friendly and highlight how the algorithm compares and swaps elements. Include Python code for the implementation",
  ],
];

const aiMsg = await llm.invoke(aiPrompt);
console.log(aiMsg);
