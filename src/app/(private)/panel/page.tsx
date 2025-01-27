"use client";

import { useMeli } from "@/context/meli-context";
import { toast } from "@/hooks/use-toast";
import { useEffect } from "react";

export default function PanelPage() {
  const { errors, message, meliAuth } = useMeli();

  useEffect(() => {
    if (errors)
      toast({
        title: "Error",
        description: errors,
      });

    if (message)
      toast({
        title: "Notificación",
        description: message,
      });
  }, [errors, message]);

  return (
    <div className="max-w-7xl h-dvh m-auto flex justify-center items-center">
      <div className="h-2/3 w-full">
        <div className="w-full p-4 border-b border-gray-200">
          <h2 className="text-5xl">Francis Willener</h2>
        </div>
        <div className="relative">
          {!meliAuth && (
            <div className="absolute w-full h-full bg-black bg-opacity-50 z-10 rounded">
              <div className="flex flex-col items-center justify-center w-full h-full">
                <h2 className="text-3xl text-gray-200 mb-3">Autorizacion</h2>
                <p className="text-lg font-light text-white mb-5">
                  Debes conectar tu cuenta de Mercado Libre si deseas ver
                  informacion
                </p>
                <a
                  href="https://auth.mercadolibre.com.ar/authorization?response_type=code&client_id=8217483335819429&redirect_uri=https://libreo.vercel.app/redirect"
                  target="_blank"
                  className="bg-yellow-400 text-white shadow py-2.5 px-3 rounded-lg hover:shadow-lg transition"
                >
                  Conectar Mercado Libre
                </a>
              </div>
            </div>
          )}
          <div className="p-5 grid grid-rows-3 gap-5 mt-10">
            <div className="flex flex-col items-center justify-center w-full h-40 bg-gray-100 rounded-lg"></div>
            <div className="flex flex-col items-center justify-center w-full h-40 bg-gray-100 rounded-lg"></div>
            <div className="flex flex-col items-center justify-center w-full h-40 bg-gray-100 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
