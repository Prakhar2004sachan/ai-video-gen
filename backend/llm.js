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
    "Create an animation that shows the differentiation of the function f(x) = x^2. Include the graph of the function, a point on the graph, and the tangent line at a specific x-value (x = 2). Animate the point moving along the curve, the tangent line being drawn, and include labels for the point and tangent line.",
  ],
];

const aiMsg = await llm.invoke(aiPrompt);
console.log(aiMsg);
