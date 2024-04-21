"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { formatCurrency } from "@/lib/currencyFormatter";
import { Product } from "@prisma/client";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";

interface CheckoutFormProps {
  product: Product;
  clientSecret: string;
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const CheckoutForm = ({ product, clientSecret }: CheckoutFormProps) => {
  const appearance = { theme: "flat", labels: "floating" };

  return (
    <div className="my-5">
      <h2 className="max-sm:text-3xl text-4xl font-bold text-center mb-5">
        Checkout
      </h2>
      <div className="flex max-sm:flex-col flex-row justify-center items-center">
        <div>
          <Carousel className="mx-auto my-3">
            <CarouselContent>
              <CarouselItem className="relative h-[400px]">
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
                <CarouselItem className="relative h-[400px]">
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
          <p className="text-sm">{product.description}</p>
          <div className="">
            <Elements
              options={{
                clientSecret,
                appearance,
              }}
              stripe={stripePromise}
            >
              <Form />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;

const Form = () => {
  const stripe = useStripe();
  const elements = useElements();

  return <PaymentElement />;
};
