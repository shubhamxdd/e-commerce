"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { FormEvent, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { signIn } from "next-auth/react";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

export default function ProfileForm({
  className,
}: React.ComponentProps<"form">) {
  const [data, setData] = useState({
    email: "",
    name: "",
    password: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const { toast } = useToast();

  const onSubmit = async (e: FormEvent) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const resData = await res.json();

      if (!res.ok) {
        throw resData;
      }

      // console.log(resData);

      toast({
        title: "User created successfully",
        description: "You will be signed in shortly !",
      });

      await signIn("credentials", {
        email: data.email,
        password: data.password,
      }).then(() => {
        toast({
          title: "User logged in successfully",
        });
      });
    } catch (error: any) {
      console.log(error);
      toast({
        title: "Error creating user",
        description: error.error || error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className={cn("grid items-start gap-4", className)}
      onSubmit={onSubmit}
    >
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          disabled={loading}
          type="email"
          id="email"
          minLength={1}
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          disabled={loading}
          minLength={1}
          type="name"
          id="name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input
          disabled={loading}
          minLength={1}
          type="username"
          id="username"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
      </div>
      <div className="">
        <Label htmlFor="password">Password</Label>
        <div className="flex items-center gap-2">
          <Input
            disabled={loading}
            minLength={1}
            id="password"
            type={showPassword ? "text" : "password"}
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <Button
            size={"icon"}
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className=""
          >
            {!showPassword ? <IoMdEye size={24} /> : <IoMdEyeOff size={24} />}
          </Button>
        </div>
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? (
          <div className="animate-spin flex justify-center items-center">
            <AiOutlineLoading3Quarters size={24} />
          </div>
        ) : (
          "Register"
        )}
      </Button>
      <Button
        variant={"ghost"}
        className="text-sm text-slate-400"
        type="button"
        onClick={() => {
          registerModal.onClose();
          loginModal.onOpen();
        }}
      >
        Login instead?
      </Button>
    </form>
  );
}
