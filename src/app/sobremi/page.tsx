import heroHighlight from "@/assets/images/hero-highlight-alt.svg";
import aboutmeBg from "@/assets/images/ssshape.svg";
import Image from "next/image";
import React from "react";

export default async function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-screen h-64 -mt-12 flex justify-center items-center hero-container">
        <Image
          src={heroHighlight}
          alt="Hero Title Highlight"
          className="absolute h-60"
        />
        <h2 className="font-bold text-5xl z-10 text-center">
          Sobre
          <br />
          Mi
        </h2>
      </div>
      <div className="p-12 aboutme-container">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Bienvenidos! Mí nombre es Florencia Elías, tengo 27 años y soy oriunda
          de la provincia de Santiago del Estero. Me considero una apasionada de
          la fotografía, con creatividad para capturar momentos significativos.
          Mí objetivo no solo es tomar fotografías, sino también contar
          historias a través de cada imagen. Tengo más de 8 años de experiencia
          en áreas como deportes, gastronomía, producto, etc; y estoy
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
