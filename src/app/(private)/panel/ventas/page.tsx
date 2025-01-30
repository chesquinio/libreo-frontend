import { PanelPagination } from "@/components/panel/pagination";
import { OrdersTable } from "@/components/panel/orders-table";
import { ordersRequest } from "@/api/orders";
import { Suspense } from "react";

interface SellsPageProps {
  searchParams: Promise<any>;
}

export default async function SellsPage({ searchParams }: SellsPageProps) {
  const { limit, page } = await searchParams;

  const currentPage = parseInt((page as string) || "1");
  const ordersPerPage = parseInt((limit as string) || "5");

  const { total }: any = await ordersRequest(currentPage, ordersPerPage);

  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center p-2 lg:p-6">
      <div className="w-full flex justify-start border-b border-gray-500 p-6">
        <h1 className="text-5xl font-extralight text-gray-700">Ventas</h1>
      </div>
      <div className="w-full">
        <Suspense
          key={currentPage + ordersPerPage}
          fallback={<div>Cargando ordenes...</div>}
        >
          <OrdersTable page={currentPage} limit={ordersPerPage} />
        </Suspense>
      </div>
      <div className="m-6">
        <PanelPagination
          page={currentPage}
          pageSize={ordersPerPage}
          totalCount={total}
          pageSizeSelectOptions={{ pageSizeOptions: [5, 10, 25, 50] }}
        />
      </div>
    </div>
  );
}
