import { NextResponse } from "next/server";
const messages: { id: number; title: string }[] = [];

export async function POST(req: Request) {
  const { id, title } = await req.json();
  const newMessage = {
    id,
    title,
  };
  messages.push(newMessage);

  return NextResponse.json({
    message: "New Conversation Created!",
    newMessage,
  });
}

export async function GET() {
  return NextResponse.json({ message: "Getting messages", messages });
}
