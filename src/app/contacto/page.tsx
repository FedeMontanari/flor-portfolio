import heroHighlight from "@/assets/images/hero-highlight-alt.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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
      <div className="w-screen h-64 -mt-12 flex justify-center items-center hero-container">
        <Image
          src={heroHighlight}
          alt="Hero Title Highlight"
          className="absolute h-60"
        />
        <h2 className="font-bold text-5xl z-10 text-center">Contacto</h2>
      </div>
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
