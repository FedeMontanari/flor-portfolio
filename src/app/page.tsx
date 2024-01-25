import Image from "next/image";

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
    <main className="flex min-h-screen flex-col items-center px-10">
      <div className="bg-white">
        <h2 className="font-bold text-3xl">
          Bienvenid@s a mi portfolio y fotogalería
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {pictures?.map((pic: UnsplashResponse) => {
          return (
            <Image
              key={pic.id}
              src={pic.urls.regular}
              alt={pic.alt_description}
              width={1920}
              height={1080}
            />
          );
        })}
      </div>
    </main>
  );
}
