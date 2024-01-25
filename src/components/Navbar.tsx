"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

import logo from "../assets/logo/negro.png";

const navItems = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Albums",
    href: "/albums",
  },
  {
    name: "Sobre Mi",
    href: "/sobremi",
  },
  {
    name: "Contacto",
    href: "/contacto",
  },
  {
    name: "Subir Foto",
    href: "/upload",
  },
];

export default function Navbar() {
  return (
    <div className="flex flex-row w-screen flex-nowrap justify-between items-center bg-third">
      <Link href="/">
        <Image src={logo} alt="Logo" width={240} className="p-3" />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((n, i) => {
            return (
              <NavigationMenuItem key={i}>
                <Link href={n.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-inherit`}
                  >
                    {n.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
