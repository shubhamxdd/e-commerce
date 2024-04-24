"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button className="w-full" type="submit" disabled={pending}>
      {pending ? (
        <AiOutlineLoading3Quarters className={`animate-spin`} size={28} />
      ) : (
        "Submit"
      )}
    </Button>
  );
};

export default SubmitButton;
