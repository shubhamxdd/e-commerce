"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProfileForm from "./RegisterForm";
import useRegisterModal from "@/hooks/useRegisterModal";

export default function RegisterModal() {
  const registerModal = useRegisterModal();

  return (
    <Dialog
      open={registerModal.isOpen}
      onOpenChange={
        registerModal.isOpen ? registerModal.onClose : registerModal.onOpen
      }
    >
      <DialogTrigger asChild>
        <Button variant="outline">Register</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register</DialogTitle>
        </DialogHeader>
        <ProfileForm />
      </DialogContent>
    </Dialog>
  );
}
