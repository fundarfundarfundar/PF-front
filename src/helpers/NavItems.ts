export enum PATHROUTES {
  HOME = "/",
  LOGIN = "/login",
  REGISTER = "/register",
  DASHBOARD = "/dashboard",
  EDUCATION = "/projects/education",
  NUTRITION = "/projects/nutrition",
  INFRAESTRUCTURE = "/projects/infraestructure",
  ENVIROMENT = "/projects/enviroment",
  HEALTH = "/projects/health",
  PROJECTS = "/projects",
}

export const publicNavItems = [
  {
    name: "HOME",
    route: PATHROUTES.HOME,
    prefetch: true,
  },
  {
    name: "OUR PROJECTS",
    route: PATHROUTES.PROJECTS,
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
    route: PATHROUTES.PROJECTS,
    prefetch: true,
  },
  {
    name: "MY HELP",
    route: PATHROUTES.DASHBOARD,
    prefetch: true,
  },
];
