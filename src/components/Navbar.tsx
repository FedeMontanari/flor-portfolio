"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MouseEvent, useEffect, useState } from "react";
import getCookie from "@/utils/getCookie";
import validateToken from "@/utils/validateToken";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogContent,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { AlertCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

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
  // {
  //   name: "Subir Foto",
  //   href: "/upload",
  // },
];

function useForceUpdate() {
  let [value, setState] = useState(true);
  return () => setState(!value);
}

export default function Navbar() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const router = useRouter();
  const pathname = usePathname();
  const handleForceUpdate = useForceUpdate();

  useEffect(() => {
    const token = getCookie("jwtToken");
    (async () => {
      setAuthenticated(await validateToken({ token }));
    })();
  }, []);

  useEffect(() => {
    handleForceUpdate();
  }, [pathname]);

  function logoutHandler(e: MouseEvent<HTMLButtonElement>) {
    document.cookie = `jwtToken=""  `;
    router.replace("/");
    setAuthenticated(false);
    handleForceUpdate();
  }

  return (
    <div className="flex w-full items-center justify-center bg-third">
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
          {authenticated ? (
            <>
              <NavigationMenuItem>
                <Link href="/dashboard" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} bg-inherit`}
                  >
                    Panel de Control
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} cursor-pointer bg-destructive`}
                    >
                      Cerrar Sesion
                    </NavigationMenuLink>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        <AlertCircle className="inline text-destructive" />{" "}
                        Desea cerrar sesión?
                      </AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={logoutHandler}
                        className="bg-destructive"
                      >
                        Aceptar
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </NavigationMenuItem>
            </>
          ) : (
            <></>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
