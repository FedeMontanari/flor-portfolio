"use client";

import LoginForm from "@/components/LoginForm";
import getCookie from "@/utils/getCookie";
import validateToken from "@/utils/validateToken";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    const token = getCookie("jwtToken");
    (async () => {
      setAuthenticated(await validateToken({ token }));
      setLoading(authenticated);
    })();
  }, []);

  useEffect(() => {
    if (authenticated) {
      router.replace("/dashboard");
    }
  }, [authenticated, router]);

  return (
    <>
      {loading ? (
        <div className="flex h-full w-full items-center justify-center">
          <span>
            <LoaderIcon className="inline animate-spin" />
            Cargando...
          </span>
        </div>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-5">
          <h3 className="text-3xl">Iniciar Sesión</h3>
          <LoginForm className="w-72 rounded-md bg-second p-4" />
        </div>
      )}
    </>
  );
}
