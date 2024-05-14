import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Faustina, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import Footer from "@/components/Footer";

const faustina = Faustina({ subsets: ["latin"], variable: "--font-faustina" });
const poppins = Poppins({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-poppins",
});
const arsenica = localFont({
  src: "../assets/fonts/ArsenicaTrial-Regular.ttf",
  display: "swap",
  variable: "--font-arsenica",
});

export const metadata: Metadata = {
  description:
    "Portfolio Fotogalería. Conoce sobre mi, mis trabajos y contactame!",
  metadataBase: new URL("https://florenciaeliasfotografia.online/"),
  title: {
    default: "Florencia Elias Fotografía",
    template: "%s",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${faustina.variable} ${arsenica.variable} ${poppins.variable}`}
    >
      <body className="grid h-fit min-h-screen overflow-x-hidden">
        <Analytics />
        <div>
          <Navbar />
        </div>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
