"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navItems = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Mis Trabajos",
    href: "/mywork",
  },
  {
    name: "Sobre Mi",
    href: "/aboutme",
  },
  {
    name: "Contacto",
    href: "/contact",
  },
  {
    name: "Subir Foto",
    href: "/upload",
  },
];

export default function Navbar() {
  return (
    <div className="static h-20 w-fit flex justify-around bg-sixth m-auto px-3 rounded-lg mt-4">
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((n, i) => {
            return (
              <NavigationMenuItem key={i}>
                <Link href={n.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-fourth`}
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
