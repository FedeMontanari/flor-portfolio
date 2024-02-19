import PhotoGallery from "@/components/PhotoGallery";
import fetchPictures from "@/utils/fetchPictures";
import Link from "next/link";

export default async function Categories({
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

  const camelParam =
    params.category.charAt(0).toUpperCase() + params.category.slice(1);

  return (
    <div className="flex min-h-screen flex-col items-center">
      <span className="absolute left-10 top-16 bg-second rounded-lg p-1 hover:cursor-default">
        <Link href="/albumes" className="text-primary">Albumes</Link> &gt; {camelParam}
      </span>
      <div className="-mt-7 flex h-64 w-screen items-center justify-center">
        <h2 className="text-center font-arsenica text-5xl font-bold text-white">
          {params.category}
        </h2>
      </div>
      <div>
        <ul className="flex flex-wrap justify-center gap-3">
          <PhotoGallery urls={imgUrls} />
        </ul>
      </div>
    </div>
  );
}
