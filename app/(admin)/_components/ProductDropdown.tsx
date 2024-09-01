"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { HiDotsHorizontal } from "react-icons/hi";
import { changeAvailability, deleteProduct } from "../_actions/actions";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

interface ProductDropdownProps {
  product: {
    name: string;
    id: string;
    price: number;
    isAvailable: boolean;
    _count: {
      Order: number;
    };
  };
}

const ProductDropdown = ({ product }: ProductDropdownProps) => {
  const [isPending, startTransition] = useTransition();
  const [isPendingDel, startTransitionDel] = useTransition();

  const router = useRouter();

  const { toast } = useToast();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost">
          <HiDotsHorizontal size={30} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href={`/admin/products/${product.id}/edit`} prefetch={false}>Edit</Link>
        </DropdownMenuItem>

        {/* change availability  */}

        <DropdownMenuItem
          disabled={isPending}
          onClick={() => {
            startTransition(async () => {
              await changeAvailability(product.id, !product.isAvailable);
            });
            router.refresh();
            toast({
              title: "Product availability changed",
              description: `Product ${product.name} is now ${
                product.isAvailable ? "unavailable" : "available"
              }`,
            });
          }}
        >
          Make {product.isAvailable ? "Unavailable" : "Available"}
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        {/* del dropdown */}
        <DropdownMenuItem
          className="text-red-500"
          disabled={isPendingDel || product._count.Order > 0}
          onClick={() => {
            startTransitionDel(async () => {
              await deleteProduct(product.id);
            });
            router.refresh();
            toast({
              title: "Product is deleted",
              description: `Product ${product.name} is deleted`,
            });
          }}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProductDropdown;
