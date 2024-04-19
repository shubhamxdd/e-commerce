"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      try {
        // Set the item in localStorage
        localStorage.setItem("isAdmin", "true");

        // You might want to navigate to the admin dashboard here

        router.refresh();
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    }, 2000); // 2000 milliseconds = 2 seconds
  };
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl text-center my-3">Please login to continue</h1>

      <form onSubmit={onSubmit} className="p-4 rounded-lg">
        <div>
          <Label htmlFor="username">Username</Label>
          <Input id="username" name="username" type="text" required />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <div className="flex items-center gap-3">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
            />
            <Button
              type="button"
              variant={"secondary"}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          </div>
          <Button className="my-4">
            {submitting ? (
              <AiOutlineLoading3Quarters className={`animate-spin`} size={28} />
            ) : (
              "Login"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
