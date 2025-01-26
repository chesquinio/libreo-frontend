"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { LoginUser } from "@/types/auth";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { googleAuthUrl } from "@/lib/google";

export default function LogInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>();

  const { signin, isAuth, errors: loginErrors } = useAuth();

  useEffect(() => {
    if (isAuth) redirect("/panel");
  }, [isAuth]);

  const onSubmit = handleSubmit(async (values: LoginUser) => {
    signin(values);
  });

  const handleGoogleAuth = () => {
    const url = googleAuthUrl();
    if (url) redirect(url);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-3xl/9 font-bold tracking-tight text-gray-900">
            Inicia sesión con tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
          <form
            onSubmit={onSubmit}
            className="p-8 sm:p-14 shadow-md rounded-lg space-y-8 bg-white"
          >
            {loginErrors.map((error: any, i: number) => (
              <div
                key={i}
                className="rounded-lg font-medium text-white bg-red-600 py-2 px-3"
              >
                {error}
              </div>
            ))}

            <div>
              <label
                htmlFor="email"
                className="block text-md/6 font-medium text-gray-900"
              >
                Email
              </label>
              <div className="h-16 mt-3">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="py-1 text-red-600">El correo es obligatorio</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-md/6 font-medium text-gray-900"
                >
                  Contraseña
                </label>
              </div>
              <div className="h-16 mt-3">
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className=" text-red-600">La contraseña es obligatoria</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Inicia sesión
              </button>
            </div>

            <div className="border-t border-gray-500 ">
              <button
                onClick={handleGoogleAuth}
                type="button"
                className="flex justify-center gap-2 rounded-md border border-gray-600 w-full mt-8 py-2.5 hover:bg-gray-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
                Inicia con Google
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-md/6 text-gray-500">
            No tienes una cuenta?{" "}
            <Link
              href="/registrarse"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Registrate aquí
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
