import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const content = [
  {
    url: "https://instagram.com",
    name: "Instagram",
  },
  {
    url: "https://facebook.com",
    name: "Facebook",
  },
  {
    url: "https://linkedin.com",
    name: "LinkedIn",
  },
];

export default async function Contact() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="font-extrabold text-4xl">Contacto</h1>
      {content.map((el, i) => {
        return (
          <Button asChild key={i}>
            <Link href={el.url}>{el.name}</Link>
          </Button>
        );
      })}
    </div>
  );
}
