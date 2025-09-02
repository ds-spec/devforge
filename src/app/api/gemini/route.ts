import { gemini } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // const { prompt } = await req.json();
  try {
    const response = await gemini.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Explain cognitive distortions?",
    });
    console.log(response);
    return NextResponse.json({ message: response.text }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Error generating response" },
      { status: 500 }
    );
  }
}
