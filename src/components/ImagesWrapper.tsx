"use client";

import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import fetchPictures from "@/utils/fetchPictures";

export default function ImagesWrapper({ path, ...props }: { path: string }) {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const items = await fetchPictures(path);
      setItems(items);
    })();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4 pb-5">
      {items.map(async (url, i) => {
        // <Image src={url} alt="Picture" key={i} />;
        return (
          <Card
            key={i}
            className="size-80"
            style={{ backgroundImage: `url(${url})`, backgroundSize: "cover" }}
          ></Card>
        );
      })}
    </div>
  );
}
