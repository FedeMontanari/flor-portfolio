import { prisma } from "@/lib/prisma";
import React from "react";

const fetchData = async () => {
  const content = await prisma.aboutme.findFirst();
  return content
    ? content
    : {
        content: "Problemas cargando el contendo. Intente de nuevo por favor.",
      };
};

export default async function AboutMe() {
  const { content } = await fetchData();
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-extrabold text-4xl">Sobre Mi</h1>
      <p>{content}</p>
    </div>
  );
}
