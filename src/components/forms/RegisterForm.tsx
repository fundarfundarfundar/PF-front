"use client";

import {
  IRegisterFormValues,
  registerInitialValues,
  registerValidationSchema,
} from "@/validators/registerSchema";
import { useFormik } from "formik";
import { PATHROUTES } from "@/helpers/NavItems";
import { toast } from "sonner";
import { registerUser } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterForm() {
  const router = useRouter();

  const formik = useFormik<IRegisterFormValues>({
    initialValues: registerInitialValues,
    validationSchema: registerValidationSchema,

    onSubmit: async (values, { resetForm }) => {
      const response = await registerUser(values);
      if (response.success) {
        toast.success("User registered successfully");
        router.push(PATHROUTES.LOGIN);
      } else {
        toast.error("Registration failed");
      }

      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
      <div className="flex gap-5">
        <div className="flex flex-col gap-2">
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
            onBlur={formik.handleBlur}
            className="form-input"
          />
          {formik.errors.password && formik.touched.password ? (
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
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="address" className="form-label">
            ADDRESS
          </label>
          <input
            id="address"
            type="text"
            name="address"
            placeholder="You address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-input"
          />
          {formik.errors.address && formik.touched.address ? (
            <p id="address-errors" className="text-red-500">
              {formik.errors.address}
            </p>
          ) : null}

          <label htmlFor="country" className="form-label">
            COUNTRY
          </label>
          <input
            id="country"
            type="text"
            name="country"
            placeholder="You country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-input"
          />
          {formik.errors.country && formik.touched.country ? (
            <p id="country-errors" className="text-red-500">
              {formik.errors.country}
            </p>
          ) : null}

          <label htmlFor="city" className="form-label">
            CITY
          </label>
          <input
            id="city"
            type="text"
            name="city"
            placeholder="Your city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-input"
          />
          {formik.errors.city && formik.touched.city ? (
            <p id="city-errors" className="text-red-500">
              {formik.errors.city}
            </p>
          ) : null}

          <label htmlFor="birthDate" className="form-label">
            BIRTHDATE
          </label>
          <input
            id="birthDate"
            type="date"
            name="birthDate"
            value={formik.values.birthDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-input"
          />
          {formik.errors.birthDate && formik.touched.birthDate ? (
            <p id="city-errors" className="text-red-500">
              {formik.errors.birthDate}
            </p>
          ) : null}

          <label htmlFor="phone" className="form-label">
            PHONE
          </label>
          <input
            id="phone"
            type="text"
            name="phone"
            placeholder="999999999"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-input"
          />
          {formik.errors.phone && formik.touched.phone ? (
            <p id="phone-errors" className="text-red-500">
              {formik.errors.phone}
            </p>
          ) : null}
        </div>
      </div>
      <div>
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="btn-form-primary mt-4"
        >
          {formik.isSubmitting ? "SIGNING UP..." : "REGISTER"}
        </button>

        <Link
          href={PATHROUTES.LOGIN}
          className="text-blue-strong hover:underline text-center pt-2 text-sm"
        >
          Already have an account? Sign in
        </Link>
      </div>
    </form>
  );
}
