"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "./SubmitButton";
import { getProductsByEmail } from "./orderAction";
import { useFormState } from "react-dom";

const OrderForm = () => {
  const [data, action] = useFormState(getProductsByEmail, {});

  return (
    <form className="max-w-xl mx-auto my-4" action={action}>
      <Card>
        <CardHeader>
          <CardTitle className="font-bold">My orders</CardTitle>
          <CardDescription>
            Enter your email and there you will get a list of all orders.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              id="email"
              required
              type="email"
              placeholder="shubham@gmail.com"
            />
            {data.error && <p className="text-red-500">{data.error}</p>}
          </div>
        </CardContent>
        <CardFooter>
          {data.message ? (
            <p className="text-green-500">{data.message} !</p>
          ) : (
            <SubmitButton />
          )}
        </CardFooter>
      </Card>
    </form>
  );
};

export default OrderForm;
