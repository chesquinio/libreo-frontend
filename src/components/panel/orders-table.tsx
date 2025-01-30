import { ordersRequest } from "@/api/orders";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export async function OrdersTable({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) {
  const { orders }: any = await ordersRequest(page, limit);

  return (
    <Table>
      <TableCaption>Lista de tus ventas en orden descendente.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Nick</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Productos</TableHead>
          <TableHead className="text-right">Monto</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order: any) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">
              {order.buyer.nickname}
            </TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell>{order.order_items.length}</TableCell>
            <TableCell className="text-right">{order.paid_amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}
