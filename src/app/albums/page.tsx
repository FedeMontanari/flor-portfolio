import heroHighlight from "@/assets/images/hero-highlight-alt.svg";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <div className="flex flex-col items-center">
      <div className="w-screen h-64 -mt-12 flex justify-center items-center hero-container">
        <h2 className="font-bold text-5xl z-10 text-center text-white">
          {/* Cambiar Fuente */}
          Mis
          <br />
          Trabajos
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => {
          return (
            <Card
              key={i}
              className="border-none bg-second hover:bg-third transition"
            >
              <Link href={`albums/${cat.href}`}>
                {/* Centrar Titulo */}
                <CardHeader>
                  <CardTitle>{cat.name}</CardTitle>
                </CardHeader>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
