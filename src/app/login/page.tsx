import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-5">
      <h3 className="text-3xl">Iniciar Sesión</h3>
      <LoginForm className="bg-second p-4 rounded-md w-72" />
    </div>
  );
}
