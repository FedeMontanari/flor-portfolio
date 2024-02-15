import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const content = [
  {
    url: "https://instagram.com/floreliass",
    name: "Instagram",
  },
  // {
  //   url: "https://facebook.com/",
  //   name: "Facebook",
  // },
  {
    url: "florenciaelias12@gmail.com",
    name: "Email",
  },
  {
    url: "3854300953",
    name: "Whatsapp"
  }
];

export default async function Contact() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="w-screen h-64 -mt-12 flex justify-center items-center hero-container">
        <h2 className="font-bold text-5xl z-10 text-center text-white">
          {/* Fuente POPPINS */}
          Contacto</h2>
      </div>
      <div className="flex flex-row gap-5 mt-12">
        {content.map((el, i) => {
          return (
            <Button className="bg-second text-black text-md hover:bg-third" asChild key={i}>
              <Link href={el.url}>{el.name}</Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
