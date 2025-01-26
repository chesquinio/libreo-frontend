"use client";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { RegisterUser } from "@/types/auth";
import { redirect } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { useEffect } from "react";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUser>();
  const { signup, isAuth, errors: registerErrors } = useAuth();

  useEffect(() => {
    if (isAuth) redirect("/");
  }, [isAuth]);

  const onSubmit = handleSubmit(async (values: RegisterUser) => {
    signup(values);
  });

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
            Crea una cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
          <form
            onSubmit={onSubmit}
            className="p-8 sm:p-14 shadow-md rounded-lg space-y-8 bg-white"
          >
            {registerErrors.map((error: any, i: number) => (
              <div
                key={i}
                className="rounded-lg font-medium text-white bg-red-600 py-2 px-3"
              >
                {error}
              </div>
            ))}
            <div>
              <label
                htmlFor="username"
                className="block text-md/6 font-medium text-gray-900"
              >
                Nombre
              </label>
              <div className="h-16 mt-3">
                <input
                  id="username"
                  type="text"
                  autoComplete="username"
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <p className="py-1 text-red-600">El nombre es obligatorio</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="lastname"
                className="block text-md/6 font-medium text-gray-900"
              >
                Apellido
              </label>
              <div className="h-16 mt-3">
                <input
                  id="lastname"
                  type="text"
                  autoComplete="lastname"
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  {...register("lastname", { required: true })}
                />
                {errors.lastname && (
                  <p className="py-1 text-red-600">
                    El apellido es obligatorio
                  </p>
                )}
              </div>
            </div>

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
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Registrarse
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-md/6 text-gray-500">
            Ya tienes una cuenta?{" "}
            <Link
              href="/iniciar-sesion"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
