"use client";

import React, { useState } from "react";
import { uploadBytes, ref } from "firebase/storage";
import { storage } from "@/lib/firebase";
import { Button } from "@/components/ui/button";

export default function Upload() {
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState<boolean>(false);

  async function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
      return;
    }
  }

  async function submit() {
    setLoading(true);
    try {
      if (file) {
        let imgRef = ref(storage, `images/${file.name}`);
        let upref = await uploadBytes(imgRef, file);
        if (upref) {
          setFile(undefined);
          setLoading(false);
          return alert("File uploaded!");
        }
        return alert("An error occurred, please try again!");
      }
      return alert("Select a file first!");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="flex flex-col items-center justify-around w-fit rounded-md mx-auto h-2/4 p-12">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center py-5">
        Upload an image
      </h1>
      <div className="w-fit h-fit p-5 flex flex-col items-center rounded-md gap-5">
        {loading ? (
          <div> Loading.... </div>
        ) : (
          <>
            <input
              type="file"
              accept="image/*"
              name="image"
              id="image"
              onChange={onUpload}
              className="p-1 bg-third rounded-sm border"
            />
            <Button variant="outline" className="bg-third" onClick={async () => await submit()}>
              Upload
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
