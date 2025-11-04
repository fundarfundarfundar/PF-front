"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { PATHROUTES } from "@/helpers/NavItems";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  id: string;
  email: string;
  role: "user" | "admin";
}

export default function GoogleSuccessPage() {
  const router = useRouter();
  const { setDataUser } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      const decoded = jwtDecode<JwtPayload>(token);

      const userSession = {
        token,
        user: {
          id: decoded.id,
          email: decoded.email,
          role: decoded.role,
        },
      };

      setDataUser(userSession);

      localStorage.setItem("userSession", JSON.stringify(userSession));

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
