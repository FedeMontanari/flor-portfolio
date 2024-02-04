import Image from "next/image";
import heroHighlight from "../assets/images/hero-highlight-alt.svg";
import fetchPictures from "@/lib/fetchPictures";
import { Card } from "@/components/ui/card";

export default async function Home() {
  const imgUrls = await fetchPictures("highlights");
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="w-full h-64 -mt-12 flex justify-center items-center">
        <Image
          src={heroHighlight}
          alt="Hero Title Highlight"
          className="absolute h-60"
        />
        <h2 className="font-bold text-5xl z-10 text-left">
          Portfolio
          <br />
          Fotogaleria
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
    </main>
  );
}
