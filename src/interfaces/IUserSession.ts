export interface IUserSession {
  token: string;
  user: {
    email: string;
    id: string;
    role: "admin" | "user";
  };
}
