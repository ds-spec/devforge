import { gemini } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log(req);
  const { prompt } = await req.json();
  console.log(prompt);
  try {
    const response = await gemini.models.generateContent({
      model: "gemini-2.5-flash",
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
