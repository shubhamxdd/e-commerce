"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export default function ProfileForm({
  className,
}: React.ComponentProps<"form">) {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const { toast } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      return toast({ title: "Please fill in all fields" });
    }

    signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    }).then((callback) => {
      setLoading(false);
      if (callback?.ok) {
        toast({
          title: "User logged in successfully",
        });
        router.refresh();
      }
      if (callback?.error) {
        console.log(callback.error);
        toast({
          title: "An error occurred",
          description: callback.error,
        });
      }
    });
    setLoading(false);
  };

  return (
    <form
      className={cn("grid items-start gap-4", className)}
      onSubmit={onSubmit}
    >
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <div className="flex items-center gap-2">
          <Input
            id="password"
            value={password}
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant={"secondary"}
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {/* {!showPassword ? <IoMdEye size={24} /> : <IoMdEyeOff size={24} />} */}
            {!showPassword ? "Show" : "Hide"}
          </Button>
        </div>
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? (
          <div className="animate-spin flex justify-center items-center">
            <AiOutlineLoading3Quarters size={24} />
          </div>
        ) : (
          "Login"
        )}
      </Button>
      <Button
        variant={"ghost"}
        className="text-sm text-slate-400"
        type="button"
        onClick={() => {
          loginModal.onClose();
          registerModal.onOpen();
        }}
      >
        Register instead?
      </Button>
    </form>
  );
}
