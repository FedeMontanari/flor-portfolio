import ImagesWrapper from "@/components/ImagesWrapper";
import React, { Suspense } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

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

export default function Albums() {
  return (
    <div className="flex items-center justify-center flex-wrap gap-5 pb-7">
      {/* <Suspense fallback={<div>Cargando...</div>}>
        <ImagesWrapper />
      </Suspense> */}
      {categories.map((cat, i) => {
        return (
          <Card key={i} className="hover:bg-primary transition">
            <Link href={`albums/${cat.href}`}>
              <CardHeader>
                <CardTitle>{cat.name}</CardTitle>
                <CardDescription>Descripción Categoria</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Contenido de Categoria</p>
              </CardContent>
              <CardFooter>
                <p>Pie de Categoria</p>
              </CardFooter>
            </Link>
          </Card>
        );
      })}
    </div>
  );
}
