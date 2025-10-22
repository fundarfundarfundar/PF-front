export enum PATHROUTES {
  HOME = "/",
  PROJETS = "/projects",
  LOGIN = "/login",
  REGISTER = "/register",
  DASHBOARD = "/dashboard",
}

export const NavItems = [
  {
    name: "Inicio",
    route: PATHROUTES.HOME,
    prefetch: true,
  },
  {
    name: "Products",
    route: PATHROUTES.PROJETS,
    prefetch: true,
  },
  {
    name: "Login",
    route: PATHROUTES.LOGIN,
    prefetch: true,
  },
  {
    name: "Register",
    route: PATHROUTES.REGISTER,
    prefetch: true,
  },
  {
    name: "Dashboard",
    route: PATHROUTES.DASHBOARD,
    prefetch: true,
  },
];
