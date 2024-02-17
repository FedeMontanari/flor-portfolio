"use client";

import { useEffect, useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UploadPicture from "@/components/UploadPicture";
import validateToken from "@/utils/validateToken";
import { useRouter } from "next/navigation";
import getCookie from "@/utils/getCookie";
import DeletePicture from "@/components/DeletePicture";
import { LoaderIcon } from "lucide-react";

export default function Dashboard() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const token = getCookie("jwtToken");
    (async () => {
      setAuthenticated(await validateToken({ token }));
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (!authenticated && !loading) {
      router.replace("/login");
    }
  }, [authenticated, loading, router]);

  return (
    <>
      {!loading ? (
        <div className="mt-12 flex items-center justify-center">
          <div className="flex w-4/5 flex-col items-center rounded-md border-2 bg-second p-6">
            <Tabs defaultValue="upload" className="flex flex-col items-center">
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
        <div className="flex items-center justify-center">
          <span>
            <LoaderIcon className="inline animate-spin" />
            Cargando...
          </span>
        </div>
      )}
    </>
  );
}
