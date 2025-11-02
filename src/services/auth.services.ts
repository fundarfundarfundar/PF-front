import { ILoginFormValues } from "@/validators/loginSchema";
import { IRegisterFormValues } from "@/validators/registerSchema";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const loginUser = async (userData: ILoginFormValues) => {
  try {
    const response = await fetch(`${apiURL}/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data?.message || "Unable to sign in. Please try again.",
      };
    }

    return {
      success: true,
      message: "Login successful",
      user: data?.user,
      token: data?.token,
    };
  } catch (error) {
    console.error("API error", error);
    return {
      success: false,
      message: "Unexpected error. Please try again later.",
    };
  }
};

export const registerUser = async (userData: IRegisterFormValues) => {
  try {
    const response = await fetch(`${apiURL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: data?.message || "Registration failed",
      };
    }
    return {
      success: true,
      message: "User registered successfully",
    };
  } catch (error) {
    console.error("API error", error);
    return {
      success: false,
      message: "Unexpected error, please try again later",
    };
  }
};
