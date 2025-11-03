"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { PATHROUTES } from "@/helpers/NavItems";
import { IUserSession } from "@/interfaces/IUserSession";
import { useRouter } from "next/navigation";

//Defino Interfaz que define los valores
interface AuthContextProps {
  dataUser: IUserSession | null;
  setDataUser: (dataUser: IUserSession | null) => void;
  logout: () => void;
  isLoading: boolean;
}

//Esto si es la creacion del context y la definicion de sus valores iniciales
const AuthContext = createContext<AuthContextProps>({
  dataUser: null,
  setDataUser: () => {},
  logout: () => {},
  isLoading: true,
});

//Defino Interfaz de AuthProvider
interface AuthProviderProps {
  children: React.ReactElement;
}

//Crear nuestro componente de AuthProvider, encargado de manejar estados, etc
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();
  const [dataUser, setDataUser] = useState<IUserSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  //Lógica que controlaré con useEffect (1 o 2 )
  useEffect(() => {
    if (dataUser) {
      localStorage.setItem("userSession", JSON.stringify(dataUser));
    }
  }, [dataUser]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const dataUser = localStorage.getItem("userSession");
      if (dataUser) {
        setDataUser(JSON.parse(dataUser));
      } else {
        setDataUser(null);
      }
      setIsLoading(false);
    }
  }, []);

  //Métodos disponibles
  const logout = () => {
    setDataUser(null);
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem("userSession");
      localStorage.removeItem("token");
    }
    router.push(PATHROUTES.HOME);
  };
  return (
    <AuthContext.Provider value={{ dataUser, setDataUser, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
