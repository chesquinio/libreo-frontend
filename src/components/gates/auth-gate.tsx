"use client";
import { useAuth } from "@/context/auth-context";
import { redirect } from "next/navigation";

export default function AuthGate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { loading, isAuth } = useAuth();

  if (loading) return <p>Cargando...</p>;
  if (!loading && !isAuth) return redirect("/iniciar-sesion");

  return <>{children}</>;
}
