import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ProductsTable = () => {
  return (
    <Table className="bg-slate-50 dark:bg-slate-900 rounded-md">
      <TableCaption>List of all products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-0">
            <span className="sr-only">Product</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Orders</TableHead>
          <TableHead className="w-0">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ProductsTable;
