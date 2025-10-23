"use client";

import { PATHROUTES } from "@/helpers/NavItems";
import {
  ILoginFormValues,
  loginInitialValues,
  loginValidationSchema,
} from "@/validators/loginSchema";
import { useFormik } from "formik";
import Link from "next/link";

export default function LoginForm() {
  const formik = useFormik<ILoginFormValues>({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: (values) => console.log("Formulario enviado", values),
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
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

      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="btn-form-primary mt-4"
      >
        {formik.isSubmitting ? "SIGNIN IN..." : "SIGN IN"}
      </button>

      <div className="flex items-center my-4">
        <hr className="grow border-gray-300" />
        <span className="px-2 text-gray-500 text-sm">or sign in below</span>
        <hr className="grow border-gray-300" />
      </div>

      <button type="button" className="btn-form-secondary">
        SIGN IN WITH GMAIL
      </button>

      <div className="text-center mt-6 text-sm">
        <Link href="#" className="text-blue-900 hover:underline">
          Forgot password?
        </Link>{" "}
        |{" "}
        <Link
          href={PATHROUTES.REGISTER}
          className="text-blue-900 hover:underline"
        >
          Create an account
        </Link>
      </div>
    </form>
  );
}
