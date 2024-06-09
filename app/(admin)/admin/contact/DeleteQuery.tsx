"use client";

import { Button } from "@/components/ui/button";
import { MdDeleteOutline } from "react-icons/md";
import { deleteQuery } from "./contactActions";
import { useRouter } from "next/navigation";

interface Props {
  queryId: string;
}

const DeleteQuery = ({ queryId }: Props) => {
  const router = useRouter();
  return (
    <Button
      variant={"destructive"}
      onClick={() => {
        deleteQuery(queryId);
        router.refresh();
      }}
    >
      <MdDeleteOutline size={20} />
    </Button>
  );
};

export default DeleteQuery;
