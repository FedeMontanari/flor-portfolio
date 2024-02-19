"use client";

import { ZoomIn } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function PhotoGallery({ urls, ...params }: { urls: string[] }) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentUrl, setCurrentUrl] = useState<string>("");

  function imageClickHandler(url: string) {
    setShowModal(true);
    setCurrentUrl(url);
  }

  function modalCloseHandler() {
    setCurrentUrl("");
    setShowModal(false);
  }
  return (
    <>
      {urls.map((url, i) => {
        return (
          <li
            className="group h-[300px] transition-transform duration-200 hover:z-20 hover:scale-105 hover:cursor-zoom-in"
            key={i}
            onClick={() => imageClickHandler(url)}
          >
            <ZoomIn
              className="invisible absolute text-white group-hover:visible"
              width={52}
              height={52}
              style={{
                left: "calc(50% - 32px)",
                top: "calc(50% - 32px)",
              }}
            />
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
      <div
        className={`fixed left-0 top-0 z-50 h-screen w-screen items-center justify-center bg-black/70 ${showModal ? "flex" : "hidden"}`}
      >
        <a
          href="javascript:void(0)"
          className="fixed right-8 top-6 z-40 text-5xl font-bold text-white"
          onClick={modalCloseHandler}
        >
          &times;
        </a>
        <img
          className="max-h-[600px] max-w-[800px] object-cover"
          src={currentUrl}
          alt="Image Modal"
        />
      </div>
    </>
  );
}
