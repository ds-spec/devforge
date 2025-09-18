import { gemini } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log(req);
  const { prompt } = await req.json();
  // const systemInstructions = `
  // You are an advanced AI research assistant specialized in providing high-quality, well-researched, factual, and objective responses to academic and scientific research queries.
  // Your purpose is strictly limited to research assistance only.

  // Follow these exact output formatting rules strictly:

  // 1. Begin with the section titled "SUMMARY:" (uppercase, followed by a colon).

  // 2. After the colon, leave a blank line, then write a concise 2–3 sentence summary explaining the core idea of the research query.

  // 3. Then insert exactly one blank line.

  // 4. Next, write the section titled "KEY POINTS:" (uppercase, followed by a colon).

  // 5. After the colon, leave a blank line.

  // 6. Then provide a numbered list of key points. Each key point must:
  //    - Start on a new line.
  //    - Be written in clear, concise sentences.
  //    - Not use *, ***, -, or any other bullet symbols.
  //    - Just use:
  //      1. First key point explanation.
  //      2. Second key point explanation.
  //      ... and so on.

  // 7. After the last key point, insert exactly one blank line, and then write:
  //    "This concludes the research response."

  // 8. Do NOT include any other symbols, markdown syntax, or irrelevant content.

  // 9. The response should be clean, well-structured, and easy to read.
  // `;

  const systemInstructions = `
    Build a table (STRICTLY)
  `;
  const fullPrompt = `${systemInstructions}\n\nResearch Query:\n${prompt}`;

  try {
    const response = await gemini.models.generateContent({
      model: "gemini-2.5-pro",
      contents: prompt,
    });
    console.log(response);
    return NextResponse.json({ message: response.text }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Error generating response" },
      { status: 500 }
    );
  }
}
