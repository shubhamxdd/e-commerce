"use client";
import { Button } from "@/components/ui/button";
import { MdOutlineDoneOutline } from "react-icons/md";
import { updateStatus } from "./contactActions";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface UpdateStatusButtonProps {
  id: string;
}

const UpdateStatusButton = ({ id }: UpdateStatusButtonProps) => {
  const [isResolved, setIsResolved] = useState<boolean | undefined>();
  const router = useRouter();
  const onClick = async () => {
    try {
      const res = await updateStatus(id);
      //   console.log(res.isResolved);
      setIsResolved(res.isResolved);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      className="flex gap-2 group"
      variant={isResolved ? "destructive" : "outline"}
      onClick={onClick}
    >
      <MdOutlineDoneOutline
        size={20}
        className="group-hover:scale-125 group-focus-within:scale-125 group-focus:scale-125 transition-all duration-300"
      />
      <span>Set as {isResolved ? "pending" : "Done"}</span>
    </Button>
  );
};

export default UpdateStatusButton;
