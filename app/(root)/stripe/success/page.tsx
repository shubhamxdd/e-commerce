import { getProductById } from "@/app/(admin)/_actions/actions";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { formatCurrency } from "@/lib/currencyFormatter";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Stripe from "stripe";
import dynamic from "next/dynamic";

const ConfettiComp = dynamic(() => import("../../Confetti"), { ssr: false });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const StripeSuccessPage = async ({
  searchParams,
}: {
  searchParams: {
    payment_intent: string;
    payment_intent_client_secret: string;
    redirect_status: string;
  };
}) => {
  const paymentIntent = await stripe.paymentIntents.retrieve(
    searchParams.payment_intent
  );

  if (!paymentIntent.metadata.productId) {
    return notFound();
  }

  const product = await getProductById(paymentIntent.metadata.productId);

  if (!product) return notFound();

  //   console.log(product);

  const isPaymentSuccessful = paymentIntent.status === "succeeded";

  return (
    <div className="my-5">
      <h2 className="max-sm:text-3xl text-4xl font-extrabold text-center mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-red-500 to-indigo-500">
        {isPaymentSuccessful
          ? "Payment was successful"
          : "An error occured while processing payment"}
      </h2>
      {isPaymentSuccessful && <ConfettiComp />}
      {isPaymentSuccessful && (
        <p className="text-center dark:text-blue-300 text-sky-600">
          You will shortly recive an email!
        </p>
      )}
      <div className="flex max-sm:flex-col flex-row justify-center md:items-center mt-10">
        <div>
          <Carousel className="mx-auto my-6">
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
        <div className="my-3 md:mx-20 flex flex-col gap-4">
          <h3 className="text-2xl font-semibold capitalize">{product.name}</h3>
          <p className="text-lg">{formatCurrency(product.price)}</p>
          <p className="text-sm line-clamp-4">{product.description}</p>
          {isPaymentSuccessful ? (
            <Button className="" variant={"secondary"} asChild size={"lg"}>
              <Link href={`/products/${product.id}`}>Go to product page</Link>
            </Button>
          ) : (
            <Button className="" variant={"secondary"} asChild size={"lg"}>
              <Link href={`/products/${product.id}/purchase`}>
                Try making payment again
              </Link>
            </Button>
          )}
          <Button className="" variant={"secondary"} asChild size={"lg"}>
            <Link href={`/products`}>Go to home page</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StripeSuccessPage;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: {
    payment_intent: string;
    payment_intent_client_secret: string;
    redirect_status: string;
  };
}): Promise<Metadata> {
  const paymentIntent = await stripe.paymentIntents.retrieve(
    searchParams.payment_intent
  );
  const isPaymentSuccessful = paymentIntent.status === "succeeded";
  const product = await getProductById(paymentIntent.metadata.productId);
  return {
    title: isPaymentSuccessful ? "Payment successful 🥳" : "Payment failed",
    description: `The product name is ${product.name} and ${
      product.description
    } and it costs ${product.price} and the payment status  ${
      isPaymentSuccessful ? "Payment successful 🥳" : "Payment failed"
    }`,
  };
}
