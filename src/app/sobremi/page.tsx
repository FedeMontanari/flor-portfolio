import React from "react";

export default async function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" -mt-12 flex h-64 w-screen items-center justify-center">
        <h2 className="z-10 text-center font-poppins text-5xl text-white">
          SOBRE MI
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <p className="w-3/4 rounded-full bg-third p-20 text-center text-xl font-medium italic leading-7 md:p-12">
          Bienvenidos! Mí nombre es Florencia Elías, tengo 27 años y soy oriunda
          de la provincia de Santiago del Estero. Me considero una apasionada de
          la fotografía, con creatividad para capturar momentos significativos.
          Mí objetivo no solo es tomar fotografías, sino también contar
          historias a través de cada imagen. Tengo más de 8 años de experiencia
          en áreas como deportes, gastronomía, productos, etc; y estoy
          constantemente explorando nuevas técnicas y enfoques para elevar mí
          trabajo. Me encanta trabajar en equipo, colaborar con los clientes y
          superar sus expectativas en cada trabajo que realizo. Los invito a mí
          mundo visual, a explorar mí portfolio y sumergirse en las historias
          que capturé a través de mí lente. Espero que disfruten! Saludos! Flor
          📸
        </p>
      </div>
    </div>
  );
}
