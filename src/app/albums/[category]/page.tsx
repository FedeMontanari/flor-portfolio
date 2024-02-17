import fetchPictures from "@/utils/fetchPictures";
import Image from "next/image";
import React from "react";

export default async function Retratos({
  params,
}: {
  params: {
    category:
      | "retratos"
      | "deportes"
      | "fotoproductos"
      | "gastronomia"
      | "moda";
  };
}) {
  const imgUrls = await fetchPictures(params.category);
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="-mt-12 flex h-64 w-screen items-center justify-center">
        <h2 className="text-center font-arsenica text-5xl font-bold text-white">
          {params.category}
        </h2>
      </div>
      <div>
        <ul className="flex flex-wrap justify-center gap-3">
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
    </div>
  );
}
