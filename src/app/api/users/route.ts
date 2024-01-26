import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const { API_KEY } = process.env;

export async function GET(req: NextRequest) {
  const auth = req.headers.get("Authorization");
  if (auth == API_KEY) {
    const entries = await prisma.user.findMany();
    return NextResponse.json(entries);
  }
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const auth = req.headers.get("Authorization");
  if (auth == API_KEY) {
    const newEntry = await prisma.user.create({
      data,
    });
    return NextResponse.json(newEntry);
  }
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function PUT(req: NextRequest) {
  const data = await req.json();
  const auth = req.headers.get("Authorization");
  if (auth == API_KEY) {
    const entry = await prisma.user.update({
      where: {
        id: data.id,
      },
      data,
    });
    return NextResponse.json(entry);
  }
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function DELETE(req: NextRequest) {
  const data = await req.json();
  const auth = req.headers.get("Authorization");
  if (auth == API_KEY) {
    const entry = await prisma.user.delete({
      where: {
        id: data.id,
      },
    });
    return NextResponse.json(entry);
  }
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
