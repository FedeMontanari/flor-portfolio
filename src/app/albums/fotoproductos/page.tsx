import { Card } from "@/components/ui/card";
import fetchPictures from "@/lib/fetchPictures";
import React from "react";

export default async function Fotoproductos() {
  const imgUrls = await fetchPictures("fotoproductos");
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="grid grid-cols-1 gap-3 pb-12 md:grid-cols-2 lg:grid-cols-4">
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
    </div>
  );
}
