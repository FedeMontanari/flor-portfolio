import type { Metadata } from "next";
import { Inter, Faustina } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";

import logo from "@/assets/logo/negro.png";

const inter = Inter({ subsets: ["latin"] });
const faustina = Faustina({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${faustina.className} overflow-x-hidden min-h-screen`}>
        <Navbar />
        <div className="m-12">{children}</div>
        <Image src={logo} alt="Logo" width={420} className="p-3 fixed bottom-0 left-1/3 -z-10" />
      </body>
    </html>
  );
}
