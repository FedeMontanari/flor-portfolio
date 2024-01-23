"use client";

import { storage } from "@/lib/firebase";
import {
  StorageReference,
  getDownloadURL,
  listAll,
  ref,
} from "firebase/storage";
import Image from "next/image";
import { useEffect, useState } from "react";

const fetchPictures = async () => {
  const items = (await listAll(ref(storage, "images/"))).items;
  return items;
};

export default function ImagesWrapper() {
  const [items, setItems] = useState<StorageReference[]>([]);
  useEffect(() => {
    (async () => {
      const items = await fetchPictures();
      setItems(items);
    })();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-4 pb-5">
      {items.map(async (it, i) => {
        const url = await getDownloadURL(it);
        return (
          <Image src={url} alt="Pet image" width={480} height={480} key={i} />
        );
      })}
    </div>
  );
}
