import Image from "next/image";
import React from "react";

import logo from "@/assets/logo/negro.png";

export default function Footer() {
  return (
    <footer className="mt-16 flex w-full flex-col items-center justify-center self-end bg-third">
      <Image src={logo} alt="Logo" width={360} className="p-2" />
      <p className="font-poppins lg:absolute right-3">
        Made by{" "}
        <a
          href="http://itsyaki.online"
          target="_blank"
          rel="noopener noreferrer"
          className="text-fifth"
        >
          Yaki
        </a>
      </p>
    </footer>
  );
}
