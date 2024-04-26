"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { IoIosSend } from "react-icons/io";

const SendMail = () => {
  const { toast } = useToast();
  return (
    <Button
      className="group"
      onClick={() => {
        toast({
          title: "Mail is not sent",
          description: "Will be implemented soon",
        });
      }}
    >
      <IoIosSend
        size={20}
        className="group-hover:scale-125 group-focus-within:scale-125 group-focus:scale-125 transition-all duration-300"
      />
      <span>Send mail</span>
    </Button>
  );
};

export default SendMail;
