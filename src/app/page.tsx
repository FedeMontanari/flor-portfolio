"use client";

import fetchPictures from "@/utils/fetchPictures";
import { useEffect, useState } from "react";
import Image from "next/image";
import pfp from "@/assets/images/florpic.jpg";
import Link from "next/link";

export default function Home() {
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      setImgUrls(await fetchPictures("highlights"));
    })();
  }, []);
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="-mt-12 flex h-64 w-screen items-center justify-center">
        <h2 className="text-center text-5xl text-white">
          <span className="font-poppins">PORTFOLIO</span>
          <br />
          <span className="font-arsenica">fotogaleria</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 items-center gap-3 px-4">
        <Image src={pfp} alt="Foto de Perfil" className="rounded-lg" />
        <p className="text-center text-lg italic text-white">
          ¡Bienvenidos! Gracias por pasar y tomarse el tiempo de venir a mí
          lugar en el mundo. Los invito a conocerme mejor en la sección llamada{" "}
          <Link href="/sobremi" className="text-second">
            Sobre Mí
          </Link>
          . En ese espacio les cuento lo que significa para mí el arte de la
          fotografía. <br />
          En la sección{" "}
          <Link href="/albums" className="text-second">
            Albums
          </Link>{" "}
          podrán observar las distintas áreas a las que me dedico. Cada una de
          ellas está realizada con mucha creatividad y mucho amor para todos
          ustedes. <br /> Y por último en la sección{" "}
          <Link href="/contacto" className="text-second">
            Contacto
          </Link> podrán
          comunicarse directamente conmigo a través de mis redes, lo que nos
          permitirá acercarnos para crear momentos increíbles a través de la
          fotografía. <br /> Espero que les guste. <br /> ¡Muchas gracias y
          bonito día! <br /> <b>Florencia Elías 📸</b>
        </p>
      </div>
    </main>
  );
}
