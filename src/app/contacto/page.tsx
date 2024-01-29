import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

const fetchData = async () => {
  const content = await prisma.contact.findMany();
  return content;
};

export default async function Contact() {
  const content = await fetchData();
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="font-extrabold text-4xl">Contacto</h1>
      {content.length ? (
        content.map((el) => {
          return (
            <Button asChild key={el.id}>
              <Link href={el.url}>{el.name}</Link>
            </Button>
          );
        })
      ) : (
        <p>Problemas cargando el contendio, por favor intente de nuevo.</p>
      )}
    </div>
  );
}
