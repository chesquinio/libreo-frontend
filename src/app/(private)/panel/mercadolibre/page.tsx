"use client";

import { useAuth } from "@/context/auth-context";
import { googleSheetsUrl } from "@/lib/google";
import { redirect } from "next/navigation";

export default function MeliPage() {
  const { user } = useAuth();

  const handleGoogleAuth = () => {
    const url = googleSheetsUrl(user.email);
    if (url) redirect(url);
  };

  return (
    <div>
      <h3>MeliPage</h3>
      <button
        onClick={handleGoogleAuth}
        className="px-3 py-2.5 rounded border border-green-500 bg-white"
      >
        Google Sheets
      </button>
    </div>
  );
}
