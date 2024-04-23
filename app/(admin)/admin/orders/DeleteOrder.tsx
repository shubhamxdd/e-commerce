"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { deleteOrder } from "../../_actions/actions";

const DeleteOrder = ({ id }: { id: string }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <DropdownMenuItem
      disabled={isPending}
      className="text-red-500"
      onClick={() => {
        startTransition(async () => {
          await deleteOrder(id);
          router.refresh();
        });
      }}
    >
      Delete
    </DropdownMenuItem>
  );
};

export default DeleteOrder;
