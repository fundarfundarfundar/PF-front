import * as Yup from "yup";

export interface IRegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
  phone: string;
  country: string;
  city: string;
  birthDate: string;
}

export const registerInitialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  address: "",
  phone: "",
  country: "",
  city: "",
  birthDate: "",
  role: "user",
};

export const registerValidationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-zÀ-ÿ\s]+$/, "Name can only contain letters and spaces")
    .required("Please provide your first and last name"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("This field is required"),
  address: Yup.string().required("This field is required"),
  country: Yup.string().required("This field is required"),
  city: Yup.string().required("This field is required"),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]+$/, "Please enter a valid telephone")
    .required("This field is required"),
  password: Yup.string()
    .min(8, "You need at least 8 characters")
    .matches(/[A-Z]/, "You need at least 1 uppercase letter")
    .matches(/[@$!%*?&#]/, "You need at least 1 special character")
    .required("This field is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});
