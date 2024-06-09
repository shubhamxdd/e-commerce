import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MdDeleteOutline } from "react-icons/md";

interface Props {
  onClick: () => void;
}

const RemoveItemFromCart = ({ onClick }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button variant={"destructive"} onClick={onClick}>
            <MdDeleteOutline size={20} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Remove item from cart</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default RemoveItemFromCart;
