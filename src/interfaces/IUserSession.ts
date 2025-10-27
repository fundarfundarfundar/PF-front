import { IUser } from "./IUser";

export interface IUserSession {
  token: string;
  user: IUser;
}
