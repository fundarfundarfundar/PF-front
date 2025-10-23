export enum PATHROUTES {
  HOME = "/",
  PROJETS = "/projects",
  LOGIN = "/login",
  REGISTER = "/register",
  DASHBOARD = "/dashboard",
}

export const NavItems = [
  {
    name: "HOME",
    route: PATHROUTES.HOME,
    prefetch: true,
  },
  {
    name: "PROJECTS",
    route: PATHROUTES.PROJETS,
    prefetch: true,
  },
  {
    name: "SIGN IN",
    route: PATHROUTES.LOGIN,
    prefetch: true,
  },
  {
    name: "DASHBOARD",
    route: PATHROUTES.DASHBOARD,
    prefetch: true,
  },
];
