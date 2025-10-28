export enum PATHROUTES {
  HOME = "/",
  PROJETS = "/projects",
  LOGIN = "/login",
  REGISTER = "/register",
  DASHBOARD = "/dashboard",
}

export const publicNavItems = [
  {
    name: "HOME",
    route: PATHROUTES.HOME,
    prefetch: true,
  },
  {
    name: "OUR PROJECTS",
    route: PATHROUTES.PROJETS,
    prefetch: true,
  },
];

export const privatedNavItems = [
  {
    name: "HOME",
    route: PATHROUTES.HOME,
    prefetch: true,
  },
  {
    name: "OUR PROJECTS",
    route: PATHROUTES.PROJETS,
    prefetch: true,
  },
  {
    name: "MY HELP",
    route: PATHROUTES.DASHBOARD,
    prefetch: true,
  },
];
