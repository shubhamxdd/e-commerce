"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const CardDetailsModal = () => {
  const { toast } = useToast();
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant={"outline"}>Click here for card details</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Card details</AlertDialogTitle>
          <AlertDialogDescription>
            <p
              className="text-zinc-400 cursor-pointer"
              onClick={() =>
                navigator.clipboard
                  .writeText("4242 4242 4242 4242")
                  .then(() => {
                    toast({
                      title: "Card copied",
                      description: "Card number copied to clipboard",
                    });
                  })
              }
            >
              Card No. : 4242 4242 4242 4242
            </p>
            <p className="text-[10px]">Click card number to copy it.</p>
            <p className="text-zinc-400">
              Expiration: Use any date but not past date
            </p>
            <p className="text-zinc-400">CVV: Any 3 digit number</p>
            <p className="text-zinc-400">
              Email: Use a valid email as on that email you will receipt of
              purchase
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CardDetailsModal;
