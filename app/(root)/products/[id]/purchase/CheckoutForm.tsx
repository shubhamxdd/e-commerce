"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useToast } from "@/components/ui/use-toast";
import { formatCurrency } from "@/lib/currencyFormatter";
import { Product } from "@prisma/client";
import {
  Elements,
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface CheckoutFormProps {
  product: Product;
  clientSecret: string;
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const CheckoutForm = ({ product, clientSecret }: CheckoutFormProps) => {
  return (
    <div className="my-5">
      <h2 className="max-sm:text-3xl text-4xl font-bold text-center mb-5">
        Checkout
      </h2>
      <div className="flex max-sm:flex-col flex-row justify-center md:items-center">
        <div>
          <Carousel className="mx-auto my-3">
            <CarouselContent>
              <CarouselItem className="relative h-[400px] w-[200px]">
                {product?.image && (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                )}
              </CarouselItem>
              {["center", "left", "right", "top", "bottom"].map((pos) => (
                <CarouselItem className="relative h-[400px]" key={pos}>
                  {product?.image && (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover", objectPosition: pos }}
                    />
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <p className="text-muted-foreground">
            👆 this is a carousel component
          </p>
        </div>

        <div className="my-5 md:mx-20 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold capitalize">{product.name}</h3>
          <p className="text-lg">{formatCurrency(product.price)}</p>
          <p className="text-sm line-clamp-4">{product.description}</p>
          <div className="max-md:w-[400px] md:w-[600px]">
            <Elements
              options={{
                clientSecret,
                appearance: { theme: "flat", labels: "floating" },
              }}
              stripe={stripePromise}
            >
              <Form price={product.price} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;

const Form = ({ price }: { price: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState<string>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (stripe === null || elements === null) {
      toast({
        title: "Error",
        description: "Error occured try again later",
      });
      return;
    }
    setIsLoading(true);
    toast({
      title: "Processing ...",
      description: "Please wait while we process your payment",
    });

    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/stripe/success`,
        },
      })
      .then((error) => {
        if (
          error.error.type === "card_error" ||
          error.error.type === "validation_error"
        ) {
          toast({
            title: "Error",
            description: error.error.message,
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="">
        <CardHeader>
          <CardTitle>{formatCurrency(price)}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <PaymentElement />
          <LinkAuthenticationElement
            onChange={(e) => setEmail(e.value.email)}
          />
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            size={"lg"}
            variant={"secondary"}
            disabled={
              stripe === null ||
              elements === null ||
              isLoading ||
              email === null
            }
          >
            {isLoading ? <Spinner /> : "Checkout"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

const Spinner = () => {
  return (
    <div className="animate-spin">
      <AiOutlineLoading3Quarters size={20} />
    </div>
  );
};
