import { cookies } from "next/headers";
import axios from "./axios";

export const ordersRequest = async (page: number, limit: number) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const { data } = await axios.get<{ orders: Object; total: number }>(
    `/meli/orders?page=${page}&limit=${limit}`,
    { headers: { Cookie: `token=${token}` } }
  );
  const { orders, total } = data;

  return { orders, total };
};
