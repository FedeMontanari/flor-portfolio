import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="font-extrabold text-4xl">Contacto</h1>
      <Button asChild>
        <Link href="#">Instagram</Link>
      </Button>
      <Button asChild>
        <Link href="#">Whatsapp</Link>
      </Button>
    </div>
  );
}
