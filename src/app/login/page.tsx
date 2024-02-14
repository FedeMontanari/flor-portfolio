"use client";

import LoginForm from "@/components/LoginForm";
import getCookie from "@/lib/getCookie";
import validateToken from "@/lib/validateToken";
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
        <div className="w-full h-full flex justify-center items-center">
          <span>
            <LoaderIcon className="inline animate-spin" />
            Cargando...
          </span>
        </div>
      ) : (
        <div className="w-full h-full flex justify-center items-center flex-col gap-5">
          <h3 className="text-3xl">Iniciar Sesión</h3>
          <LoginForm className="bg-second p-4 rounded-md w-72" />
        </div>
      )}
    </>
  );
}
