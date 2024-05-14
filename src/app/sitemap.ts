import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://florenciaeliasfotografia.online/",
      lastModified: new Date(),
      changeFrequency: "always",
    },
    {
      url: "https://florenciaeliasfotografia.online/albumes",
      lastModified: new Date(),
      changeFrequency: "always",
    },
    {
      url: "https://florenciaeliasfotografia.online/sobremi",
      lastModified: new Date(),
      changeFrequency: "always",
    },
    {
      url: "https://florenciaeliasfotografia.online/contacto",
      lastModified: new Date(),
      changeFrequency: "always",
    },
  ];
}
