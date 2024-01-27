import Image from "next/image";
import heroHighlight from "../assets/images/hero-highlight-alt.svg";

import { Card } from "@/components/ui/card";

interface UnsplashResponse {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
  alt_description: string;
  width: number;
  height: number;
}

async function getPictures() {
  const res = await fetch("https://api.unsplash.com/photos", {
    headers: {
      Authorization: "Client-ID wvGZqZW1NXh12RSw83Hk7b_-UY8Jh9MQtnPPhonaQJI",
    },
  });
  return res.json();
}

export default async function Home() {
  const pictures = await getPictures();
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
        {pictures?.map((pic: UnsplashResponse) => {
          return (
            <Card
              key={pic.id}
              className="size-80"
              style={{
                backgroundImage: `url(${pic.urls.regular})`,
                backgroundSize: "cover",
              }}
            >
              {/* <CardContent>
                <Image
                  src={pic.urls.regular}
                  alt={pic.alt_description}
                  width={1920}
                  height={1080}
                />
              </CardContent> */}
            </Card>
          );
        })}
      </div>
    </main>
  );
}
