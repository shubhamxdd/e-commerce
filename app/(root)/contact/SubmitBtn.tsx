"use client";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      className="flex flex-row gap-2 group"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <AiOutlineLoading3Quarters className={`animate-spin`} size={28} />
      ) : (
        <>
          <IoIosSend
            size={22}
            className="group-hover:scale-150 group-focus:scale-150 group-focus-within:scale-150 transition-all duration-300"
          />
          <span>Submit</span>
        </>
      )}
    </Button>
  );
};

export default SubmitBtn;
