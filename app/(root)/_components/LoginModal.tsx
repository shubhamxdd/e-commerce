"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import ProfileForm from "./LoginForm";
import useLoginModal from "@/hooks/useLoginModal";

export default function LoginModal() {
  const loginModal = useLoginModal();

  return (
    <Dialog
      open={loginModal.isOpen}
      onOpenChange={loginModal.isOpen ? loginModal.onClose : loginModal.onOpen}
    >
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
        </DialogHeader>
        <ProfileForm />
      </DialogContent>
    </Dialog>
  );
}
