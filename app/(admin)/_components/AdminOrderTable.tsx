import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { getOrders } from "../_actions/actions";
import { Button } from "@/components/ui/button";
import { HiDotsHorizontal } from "react-icons/hi";
import { formatCurrency } from "@/lib/currencyFormatter";
import DeleteOrder from "../admin/orders/DeleteOrder";

const AdminOrderTable = async () => {
  const orders = await getOrders();
  if (orders.length === 0)
    return (
      <h1 className="font-semibold text-xl text-center my-4">
        No orders found
      </h1>
    );

  return (
    <Table className="bg-slate-50 dark:bg-slate-900 rounded-md">
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Price Paid</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>{order.product.name}</TableCell>
            <TableCell>{order.user.email}</TableCell>
            <TableCell>{formatCurrency(order.price)}</TableCell>
            <TableCell>
              {/* dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost">
                    <HiDotsHorizontal size={30} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DeleteOrder id={order.id} />
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdminOrderTable;
