"use client";

import fetchPictures from "@/utils/fetchPictures";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      <div>
        <ul className="flex flex-row flex-wrap justify-center gap-3">
          {imgUrls.map((url, i) => {
            return (
              <li
                key={i}
                className="relative h-[300px] transition-transform duration-200 hover:z-50 hover:scale-110 hover:shadow-lg"
              >
                <Image
                  src={url}
                  alt="Image"
                  width={360}
                  height={1}
                  className="h-full w-full rounded-md object-cover align-middle"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
