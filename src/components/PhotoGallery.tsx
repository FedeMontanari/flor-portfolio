import Image from "next/image";
import React from "react";

export default function PhotoGallery({ urls, ...params }: { urls: string[] }) {
  return (
    <>
      {urls.map((url, i) => {
        return (
          <li
            className="relative h-[300px] transition-transform duration-200 hover:z-50 hover:scale-105"
            key={i}
          >
            <Image
              src={url}
              alt="Image"
              width={360}
              height={1}
              className="h-full w-full rounded-md object-cover align-middle"
              priority={true}
            />
          </li>
        );
      })}
    </>
  );
}
