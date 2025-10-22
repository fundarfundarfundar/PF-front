"use client";

import {
  ILoginFormValues,
  loginInitialValues,
  loginValidationSchema,
} from "@/validators/loginSchema";
import { useFormik } from "formik";

export default function LoginForm() {
  const formik = useFormik<ILoginFormValues>({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: (values) => console.log("Formulario enviado", values),
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-1">
      <label htmlFor="email">Correo Electrónico</label>
      <input
        id="email"
        type="email"
        name="email"
        autoComplete="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className=""
      />
      {formik.errors.email && formik.touched.email ? (
        <p id="email-errors" className="text-red-500">
          {formik.errors.email}
        </p>
      ) : null}
      <label htmlFor="password">Contraseña</label>
      <input
        id="password"
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        className=""
      />
      {formik.errors.password ? (
        <p id="password-errors" className="text-red-500">
          {formik.errors.password}
        </p>
      ) : null}
      <button type="submit" disabled={formik.isSubmitting} className="">
        {formik.isSubmitting ? "Iniciando sesión" : "Iniciar sesión"}
      </button>
    </form>
  );
}
