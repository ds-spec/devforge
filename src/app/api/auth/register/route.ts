import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    console.log(email, password);
    if (!email || !password)
      return NextResponse.json(
        { message: ' error: "Missing Fields!"' },
        { status: 400 }
      );

    const isExistingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (isExistingUser)
      return NextResponse.json(
        { message: "User already exists!" },
        { status: 400 }
      );

    const hashedPass = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPass,
      },
    });
    return NextResponse.json(
      { message: "User created successfully! ", user },
      { status: 201 }
    );
  } catch (error) {
    const err = error as Error;
    return NextResponse.json(
      { message: "Internal Server Error!", error: err.message },
      { status: 500 }
    );
  }
}
