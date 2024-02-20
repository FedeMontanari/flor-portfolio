import type { Metadata } from "next";
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
  title: "Florencia Elias Fotografia",
  description:
    "Portfolio Fotogalería. Conoce sobre mi, mis trabajos y contactame!",
  authors: [{ name: "Florencia Elias" }],
  creator: "Yaki | Federico Montanari",
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
        <Footer />
      </body>
    </html>
  );
}
