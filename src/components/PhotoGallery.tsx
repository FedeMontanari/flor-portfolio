"use client";

import { Loader2, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { KeyboardEvent, Suspense, useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function PhotoGallery({ urls, ...params }: { urls: string[] }) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentUrl, setCurrentUrl] = useState<string>("");
  const [index, setIndex] = useState<number>(-1);
  const [loading, setLoading] = useState<boolean>(false);

  function imageClickHandler(index: number) {
    setShowModal(true);
    setIndex(index);
  }

  function modalCloseHandler() {
    setCurrentUrl("");
    setShowModal(false);
  }

  function modalMoveHandler(key: "ArrowRight" | "ArrowLeft") {
    if (key === "ArrowLeft" && index > 0) {
      setIndex(index - 1);
      setLoading(true);
    }
    if (key === "ArrowRight" && index + 1 < urls.length) {
      setIndex(index + 1);
      setLoading(true);
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      modalCloseHandler();
    }
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      modalMoveHandler(e.key);
    }
  }

  useEffect(() => {
    //@ts-ignore
    if (showModal) document.addEventListener("keydown", handleKeyDown);
    return () => {
      //@ts-ignore
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal, index]);

  useEffect(() => {
    setCurrentUrl(urls[index]);
  }, [index]);

  return (
    <>
      {urls.map((url, i) => {
        return (
          <li
            className="group h-[300px] p-2 transition-transform duration-200 hover:z-20 hover:scale-105 hover:cursor-zoom-in"
            key={i}
            onClick={() => imageClickHandler(i)}
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
        <Button
          className="fixed right-8 top-6 z-40 text-5xl font-bold text-white"
          variant="ghost"
          onClick={modalCloseHandler}
        >
          <X />
        </Button>
        <img
          className={`max-h-full max-w-full object-cover ${loading ? "blur-sm" : ""}`}
          src={currentUrl}
          alt="Image Modal"
          onLoad={() => setLoading(false)}
        />
        <Loader2
          width={32}
          height={32}
          className={`animate-spin ${loading ? "absolute" : "hidden"}`}
        />
      </div>
    </>
  );
}
