import { IUser } from "./IUser";

export interface IUserSession {
  // token: string;
  // user: IUser;
  token: string;
  email: string;   // <-- agrega esta línea
  name: string;
  role: string;
  id: string;
}
