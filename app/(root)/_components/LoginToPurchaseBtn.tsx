"use client";

import { Button } from "@/components/ui/button";
import useLoginModal from "@/hooks/useLoginModal";

const LoginToPurchaseBtn = () => {
  const loginModal = useLoginModal();
  return (
    <Button className="w-full group" onClick={loginModal.onOpen}>
      Login to Purchase
    </Button>
  );
};

export default LoginToPurchaseBtn;
