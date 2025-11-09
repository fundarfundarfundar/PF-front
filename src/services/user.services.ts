import { IUser } from "@/interfaces/IUser";
import { IEditUserFormValues } from "@/validators/editUserSchema";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const getAllUsers = async () => {
  try {
    const res = await fetch(`${apiURL}/users`, {
      method: "GET",
    });

    if (!res.ok) {
      const errMsg = await res.text();
      throw new Error(`Error fetching users: ${errMsg}`);
    }

    const users: IUser[] = await res.json();
    return users;
  } catch (err) {
    console.error("Server error while getting users:", err);
    throw err;
  }
};

export const updateUser = async (
  idUser: string,
  userData: IEditUserFormValues
) => {
  try {
    const res = await fetch(`${apiURL}/users/${idUser}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Error updating user: ${errorText || res.statusText}`);
    }

    const updatedUser = await res.json();
    return updatedUser;
  } catch (err) {
    console.error("Server error while updating user:", err);
    throw err;
  }
};
