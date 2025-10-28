import { IDonation } from "./IDonation";

export interface IUser {
  id: number;
  name: string;
  email: string;
  country?: string;
  city?: string;
  phone?: string;
  birthDate?: string | Date;
  address?: string;
  donations?: IDonation[];
  role: "admin" | "user";
}
