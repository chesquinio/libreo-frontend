"use client";

import { useEffect } from "react";
import { redirect, useSearchParams } from "next/navigation";
import { useMeli } from "@/context/meli-context";
import { useToast } from "@/hooks/use-toast";

export default function MeliAuthPage() {
  const searchParams = useSearchParams();
  const { meliAuth, signup, errors, message } = useMeli();
  const { toast } = useToast();

  useEffect(() => {
    if (meliAuth) return redirect("/");
    const code = searchParams.get("code");

    if (code) signup(code);

    redirect("/panel");
  }, [searchParams]);

  return <>{!errors && !message && <p>Procesando...</p>}</>;
}
