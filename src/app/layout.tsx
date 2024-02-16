import type { Metadata } from "next";
import { Faustina, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import localFont from "next/font/local";

import logo from "@/assets/logo/negro.png";

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
  title: "Florencia Elias",
  description: "Portfolio",
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
        <div>
          <Navbar />
        </div>
        <div>{children}</div>
        <footer className="mt-16 flex w-full justify-center self-end bg-third">
          <Image src={logo} alt="Logo" width={360} className="p-2" />
        </footer>
      </body>
    </html>
  );
}
