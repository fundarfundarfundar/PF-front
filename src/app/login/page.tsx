import { P, TitleForm } from "@/components/common/Typography";
import LoginForm from "@/components/forms/LoginForm";

export default function Login() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-medium">
      <div className="bg-white-smoke shadow-md rounded-md p-8 flex flex-col gap-5">
        <TitleForm>Sign in to your account</TitleForm>
        <P className="text-gray-strong text-center max-w-md">
          Sign in today to view your impact, manage your donations, and connect
          with others.
        </P>
        <LoginForm />
      </div>
    </section>
  );
}
