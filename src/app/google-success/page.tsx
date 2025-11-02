"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { PATHROUTES } from "@/helpers/NavItems";

export default function GoogleSuccessPage() {
  const router = useRouter();
  const { setDataUser } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // Guardar token en contexto o localStorage
      localStorage.setItem("token", token);
      setDataUser({ token }); // si usás AuthContext

      // Redirigir al dashboard (o donde quieras)
      router.push(PATHROUTES.PROJECTS);
    } else {
      router.push(PATHROUTES.LOGIN);
    }
  }, [router, setDataUser]);

  return (
    <div className="flex justify-center items-center h-screen text-lg text-gray-700">
      Processing your Google login...
    </div>
  );
}
