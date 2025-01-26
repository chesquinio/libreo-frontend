"use client";
import { useMeli } from "@/context/meli-context";
import { redirect } from "next/navigation";

export default function MeliGate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { loading, meliAuth } = useMeli();

  if (loading) return <p>Cargando...</p>;
  if (!loading && !meliAuth) redirect("/panel");

  return <>{children}</>;
}
