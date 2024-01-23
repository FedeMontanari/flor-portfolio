import ImagesWrapper from "@/components/ImagesWrapper";
import React, { Suspense } from "react";

export default function MyWork() {
  return (
    <div>
      <Suspense fallback={<div>Cargando...</div>}>
        <ImagesWrapper />
      </Suspense>
    </div>
  );
}
