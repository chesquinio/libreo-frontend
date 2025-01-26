"use client";
import { createSheetRequest } from "@/api/sheets";

export default function SheetsPage() {
  const handleCreateSheet = async () => {
    createSheetRequest();
  };

  return (
    <div>
      <button
        onClick={handleCreateSheet}
        className="py-2.5 px-3 rounded bg-gray-200"
      >
        Crear Hoja
      </button>
    </div>
  );
}
