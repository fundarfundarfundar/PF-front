import { P, TitleForm } from "@/components/common/Typography";
import RegisterForm from "@/components/forms/RegisterForm";
import React from "react";

export default function Register() {
  return (
    <section className="flex justify-center items-center h-[80vh] bg-gray-50">
      <div className="bg-white-smoke shadow-md rounded-md p-8 flex flex-col gap-3">
        <TitleForm>Create your account</TitleForm>
        <P className="text-gray-strong text-center mt-2">
          You&apos;re about to join 273,965 incredible members.
        </P>
        <RegisterForm />
      </div>
    </section>
  );
}
