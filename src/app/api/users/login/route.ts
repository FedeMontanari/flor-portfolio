import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const {
    username,
    password,
  }: { username: string | null; password: string | null } = await req.json();
  if (!username || !password) {
    return NextResponse.json(
      { message: "Missing Credentials" },
      { status: 500 }
    );
  }
  const user = await prisma.user.findFirst({
    where: {
      name: username,
      password: password,
    },
  });
  if (!user) {
    return NextResponse.json(
      { message: "User with those credentials does not exist" },
      { status: 404 }
    );
  } else {
    return NextResponse.json(user, { status: 200 });
  }
}
