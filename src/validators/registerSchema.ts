import * as Yup from "yup";

export interface IRegisterFormValues {
  name: string;
  email: string;
  country: string;
  phone: string;
  birthDate: string;
  address: string;
  password: string;
  confirmPassword: string;
}

export const registerInitialValues = {
  name: "",
  email: "",
  country: "",
  phone: "",
  birthDate: "",
  address: "",
  password: "",
  confirmPassword: "",
};

export const registerValidationSchema = Yup.object({
  name: Yup.string().required("Please provide your first and last name"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("This field is required"),
  address: Yup.string().required("This field is required"),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]+$/, "Please enter a valid telephone")
    .required("This field is required"),
  password: Yup.string()
    .min(8, "You need at least 8 characters")
    .matches(/[A-Z]/, "You need at least 1 uppercase letter")
    .matches(/[@$!%*?&#]/, "You need at least 1 special character")
    .required("This field is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});
