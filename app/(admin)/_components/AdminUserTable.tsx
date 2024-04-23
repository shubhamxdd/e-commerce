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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { getUsers } from "../_actions/actions";
import { formatCurrency, formatNumber } from "@/lib/currencyFormatter";
import { Button } from "@/components/ui/button";
import { HiDotsHorizontal } from "react-icons/hi";
import DeleteUser from "../admin/users/DeleteUser";

const AdminUserTable = async () => {
  const users = await getUsers();
  if (users.length === 0)
    return (
      <h1 className="font-semibold text-xl text-center my-4">No users found</h1>
    );

  return (
    <Table className="bg-slate-50 dark:bg-slate-900 rounded-md">
      <TableHeader>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead>Orders</TableHead>
          <TableHead>Value</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.email}</TableCell>
            <TableCell>{formatNumber(user.orders.length)}</TableCell>
            <TableCell>
              {formatCurrency(user.orders.reduce((acc, i) => i.price + acc, 0))}
            </TableCell>
            <TableCell>
              {/* dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="ghost">
                    <HiDotsHorizontal size={30} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <DeleteUser id={user.id} />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdminUserTable;
