import LoginForm from "@/components/forms/LoginForm";

export default function Login() {
  return (
    <section className="flex justify-center items-center h-[80vh] bg-gray-50">
      <div className="bg-white-smoke shadow-md rounded-md p-8 flex flex-col gap-5">
        <h1 className="text-3xl font-serif text-gray-900 text-center">
          Sign in to your account
        </h1>
        <p className="text-gray-600 text-center max-w-md">
          Sign in today to view your impact, manage your donations, and connect
          with others.
        </p>
        <LoginForm />
      </div>
    </section>
  );
}
