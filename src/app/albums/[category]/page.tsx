import { Card } from "@/components/ui/card";
import fetchPictures from "@/utils/fetchPictures";
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
