import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const res = await req.json();
  const { username, password } = res;
  try {
    const user = await prisma.user.findFirst({
      where: {
        name: username,
        password: password,
      },
    });
    if (!user) {
      return Response.json(
        { error: "Incorrect credentials" },
        {
          status: 401,
        }
      );
    }
    return Response.json(
      { message: "Login successful" },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { error },
      {
        status: 500,
      }
    );
  }
}
