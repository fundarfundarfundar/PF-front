import { IDonation } from "./IDonation";

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  country?: string;
  city?: string;
  phone?: string;
  birthDate?: string | Date;
  address?: string;
  donations?: IDonation[];
  imageUrl?: string;
  role: "admin" | "user";
}
