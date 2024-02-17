import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import simpleIconsPath from "@/utils/simpleIconsPath";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

const content = [
  {
    url: "https://instagram.com/floreliass",
    name: "Instagram",
    icon: "siInstagram",
  },
  // {
  //   url: "https://facebook.com/",
  //   name: "Facebook",
  // },
  {
    url: "mailto:florenciaelias12@gmail.com",
    name: "Email",
    icon: "siGmail",
  },
  {
    url: "https://wa.me/543854300953",
    name: "Whatsapp",
    icon: "siWhatsapp",
  },
];

export default async function Contact() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" -mt-12 flex h-64 w-screen items-center justify-center">
        <h2 className="z-10 text-center font-poppins text-5xl text-white">
          CONTACTO
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        {content.map((el, i) => {
          return (
            <Card
              key={i}
              className="border-none bg-second transition hover:bg-third"
            >
              <Link href={el.url} target="_blank">
                <Button
                  variant="link"
                  className="relative inset-x-[10.5rem] -top-5 block"
                >
                  <ExternalLink color="black" aria-hidden="true" />
                </Button>
                <CardHeader>
                  <CardTitle className="-mt-7 text-center">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width="32px"
                      height="32px"
                      className="mr-2 inline p-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>{el.name}</title>
                      <path d={simpleIconsPath(el.icon)}></path>
                    </svg>
                    {el.name}
                  </CardTitle>
                </CardHeader>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
