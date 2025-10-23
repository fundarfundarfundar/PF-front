import RegisterForm from "@/components/forms/RegisterForm";
import React from "react";

export default function Register() {
  return (
    <section className="flex justify-center items-center h-[80vh] bg-gray-50">
      <div className="bg-white-smoke shadow-md rounded-md p-8 flex flex-col gap-3">
        <h1 className="text-3xl font-serif text-gray-900 text-center">
          Create your account
        </h1>
        <p className="text-gray-600 text-center mt-2">
          You are about to join 273,965 incredible members.
        </p>
        <RegisterForm />
      </div>
    </section>
  );
}
