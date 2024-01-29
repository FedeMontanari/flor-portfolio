import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

const { API_KEY } = process.env;

export async function GET(req: NextRequest) {
  const entries = await prisma.contact.findMany();
  if (!entries.length) {
    return NextResponse.json({ error: "Entries not found" }, { status: 404 });
  }
  return NextResponse.json(entries);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const newEntry = await prisma.contact.create({
    data,
  });
  return NextResponse.json(newEntry);
}

export async function PUT(req: NextRequest) {
  const data = await req.json();
  if (!data.name || !data.url) {
    return NextResponse.json({ error: "Missing parameters" }, { status: 500 });
  }
  const entry = await prisma.contact.findFirst({
    where: {
      name: data.name,
    },
  });
  if (entry) {
    await prisma.contact.update({
      where: {
        id: entry.id,
      },
      data: {
        url: data.url,
        name: data.name,
      },
    });
  } else {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(entry);
}

export async function DELETE(req: NextRequest) {
  const data = await req.json();
  const auth = req.headers.get("Authorization");
  if (auth == API_KEY) {
    const entry = await prisma.aboutme.delete({
      where: {
        id: data.id,
      },
    });
    return NextResponse.json(entry);
  }
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
