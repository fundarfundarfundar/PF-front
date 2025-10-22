import * as Yup from "yup";

export interface ILoginFormValues {
  email: string;
  password: string;
}

export const loginInitialValues: ILoginFormValues = {
  email: "",
  password: "",
};

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es obligatorio"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La constraseña es obligatoria"),
});
