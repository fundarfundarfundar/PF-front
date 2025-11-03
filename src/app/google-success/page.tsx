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
    const email = params.get("email");
    const name = params.get("name");

  //   if (token) {
  //     // Guardar token en contexto o localStorage
  //     localStorage.setItem("token", token);
  //     setDataUser({ token, user }); // si usás AuthContext

  //     // Redirigir al dashboard (o donde quieras)
  //     router.push(PATHROUTES.PROJECTS);
  //   } else {
  //     router.push(PATHROUTES.LOGIN);
  //   }
  // }, [router, setDataUser]);
   if (token && email && name) {
      localStorage.setItem("token", token);

      // Construye el objeto user manualmente
      setDataUser({
        token: token,
        email,
        name,
        role: "user", // Si tienes el rol en la URL, úsalo; si no, pon "user"
        id: "",       // Si tienes el id en la URL, úsalo; si no, pon ""
      });

      router.push(PATHROUTES.PROJECTS);
    }
  }, [router, setDataUser]);

  return (
    <div className="flex justify-center items-center h-screen text-lg text-gray-700">
      Processing your Google login...
    </div>
  );
}
