"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CustomerNavLinkAdmin = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    toast({
      title: "Redirecting to Admin page ! Please wait...",
      description: "Use username 'admin' and password 'admin' to login",
    });

    setTimeout(() => {
      setLoading(false);
      router.push("/admin");
    }, 5000);
  };

  return (
    <>
      <Button variant={"ghost"} onClick={handleClick}>
        Admin
      </Button>
      {loading && <Spinner />}
    </>
  );
};

export default CustomerNavLinkAdmin;

const Spinner = () => {
  return (
    <div className="flex justify-center items-center  fixed inset-0 bg-black/80 h-screen w-full z-10">
      <AiOutlineLoading3Quarters size={100} className="animate-spin" />
    </div>
  );
};
