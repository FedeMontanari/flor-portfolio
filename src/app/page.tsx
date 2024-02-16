"use client";

import fetchPictures from "@/utils/fetchPictures";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

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
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {imgUrls.map((url, i) => {
          return (
            <Card
              key={i}
              className="size-80"
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
              }}
            ></Card>
          );
        })}
      </div>
    </main>
  );
}
