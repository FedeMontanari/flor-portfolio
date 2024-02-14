"use client";

import React, { useEffect, useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UploadPicture from "@/components/UploadPicture";
import validateToken from "@/lib/validateToken";
import { useRouter } from "next/navigation";
import getCookie from "@/lib/getCookie";
import DeletePicture from "@/components/DeletePicture";
import { LoaderIcon } from "lucide-react";

export default function Dashboard() {
  const [authenticated, setAuthenticated] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const token = getCookie("jwtToken");
    setLoading(true);
    (async () => {
      setAuthenticated(await validateToken({ token }));
      setLoading(!authenticated);
    })();
  }, []);

  useEffect(() => {
    if (!authenticated) {
      router.replace("/login");
    }
  }, [authenticated, router]);

  return (
    <>
      {!loading ? (
        <div className="flex justify-center items-center">
          <div className="w-max bg-second p-6 rounded-md border-2">
            <Tabs defaultValue="upload" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="upload">Cargar</TabsTrigger>
                <TabsTrigger value="delete">Eliminar</TabsTrigger>
              </TabsList>
              <TabsContent value="upload">
                <UploadPicture />
              </TabsContent>
              <TabsContent value="delete">
                <DeletePicture />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <span>
            <LoaderIcon className="animate-spin inline" />
            Cargando...
          </span>
        </div>
      )}
    </>
  );
}
