import { PrismaClient } from "@prisma/client";
const jwt = require("jsonwebtoken");

const { JWT_KEY } = process.env;

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const res = await req.json();
  const { token } = res;
  const decodedData = jwt.verify(token, JWT_KEY);
  try {
    const user = await prisma.user.findFirst({
      where: {
        name: decodedData.name,
        password: decodedData.password,
      },
    });
    if (!user) {
      return Response.json({ message: "Invalid token" }, { status: 401 });
    }
    return Response.json({ message: "Validated" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error }, { status: 500 });
  }
}
