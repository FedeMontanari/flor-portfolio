import Link from "next/link";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";

const categories = [
  {
    name: "Moda",
    href: "moda",
  },
  {
    name: "Deportes",
    href: "deportes",
  },
  {
    name: "Fotoproductos",
    href: "fotoproductos",
  },
  {
    name: "Retratos",
    href: "retratos",
  },
  {
    name: "Gastronomía",
    href: "gastronomia",
  },
];

// Subpage add title and Arsenica font (lowecase)

export default function Albums() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="-mt-12 flex h-64 w-screen items-center justify-center">
        <h2 className="z-10 text-center text-5xl font-bold text-white">
          <span className="font-poppins">MIS</span>
          <br />
          <span className="font-arsenica">trabajos</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => {
          return (
            <Card
              key={i}
              className="border-none bg-second transition duration-500 hover:bg-third"
            >
              <Link href={`albums/${cat.href}`}>
                <CardHeader>
                  <CardTitle className="text-center">{cat.name}</CardTitle>
                </CardHeader>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
