"use client";

import Link from "next/link";

import {
  IRegisterFormValues,
  registerInitialValues,
  registerValidationSchema,
} from "@/validators/registerSchema";
import { useFormik } from "formik";
import { PATHROUTES } from "@/helpers/NavItems";

export default function RegisterForm() {
  const formik = useFormik<IRegisterFormValues>({
    initialValues: registerInitialValues,
    validationSchema: registerValidationSchema,
    onSubmit: (values) => console.log("Usuario registrado", values),
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
      <label htmlFor="name" className="form-label">
        NAME
      </label>
      <input
        id="name"
        type="name"
        name="name"
        placeholder="First and Last Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="form-input"
      />
      {formik.errors.name && formik.touched.name ? (
        <p id="name-errors" className="text-red-500">
          {formik.errors.name}
        </p>
      ) : null}

      <label htmlFor="email" className="form-label">
        EMAIL
      </label>
      <input
        id="email"
        type="email"
        name="email"
        autoComplete="email"
        placeholder="example@mail.com"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="form-input"
      />
      {formik.errors.email && formik.touched.email ? (
        <p id="email-errors" className="text-red-500">
          {formik.errors.email}
        </p>
      ) : null}

      <label htmlFor="password" className="form-label">
        PASSWORD
      </label>
      <input
        id="password"
        type="password"
        name="password"
        placeholder="********"
        value={formik.values.password}
        onChange={formik.handleChange}
        className="form-input"
      />
      {formik.errors.password ? (
        <p id="password-errors" className="text-red-500">
          {formik.errors.password}
        </p>
      ) : null}

      <label htmlFor="confirmPassword" className="form-label">
        CONFIRM YOUR PASSWORD
      </label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        placeholder="********"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="form-input"
      />
      {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
        <p className="text-red-500">{formik.errors.confirmPassword}</p>
      ) : null}

      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="btn-form-primary mt-4"
      >
        {formik.isSubmitting ? "SIGNING UP..." : "REGISTER"}
      </button>

      <Link
        href={PATHROUTES.LOGIN}
        className="text-blue-900 hover:underline text-center pt-2"
      >
        Already have an account? Sign in
      </Link>
    </form>
  );
}
