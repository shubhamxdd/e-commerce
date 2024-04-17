import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import { getProducts } from "../../_actions/actions";
import { formatCurrency, formatNumber } from "@/lib/currencyFormatter";
import ProductDropdown from "../../_components/ProductDropdown";

const ProductsTable = async () => {
  const products = await getProducts();

  // console.log(products[0])

  if (products.length === 0)
    return (
      <h1 className="font-semibold text-xl text-center my-4">
        No products found
      </h1>
    );

  return (
    <Table className="bg-slate-50 dark:bg-slate-900 rounded-md">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Orders</TableHead>
          <TableHead>Available</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="capitalize">{product.name}</TableCell>
            <TableCell>{formatCurrency(product.price)}</TableCell>
            <TableCell>{formatNumber(product._count.Order)}</TableCell>
            <TableCell>
              {product.isAvailable ? (
                <FaRegCircleCheck
                  size={16}
                  className="text-green-500 dark:text-green-700"
                />
              ) : (
                <FaRegCircleXmark
                  size={16}
                  className="text-red-500 dark:text-red-700"
                />
              )}
            </TableCell>
            <TableCell>
              {/* dropdown */}
              <ProductDropdown product={product} key={product.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProductsTable;
