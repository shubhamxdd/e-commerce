import { getProductById } from "@/app/(admin)/_actions/actions";
import Stripe from "stripe";
import CheckoutForm from "./CheckoutForm";
import { Metadata, ResolvingMetadata } from "next";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const PurchasePage = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await getProductById(id);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: product.price * 100,
    currency: "inr",
    metadata: {
      productId: product.id,
    },
  });

  if (!paymentIntent.client_secret) {
    throw new Error("Error in payment");
  }

  return (
    <CheckoutForm
      product={product}
      clientSecret={paymentIntent.client_secret}
    />
  );
};

export default PurchasePage;

export async function generateMetadata(
  { params: { id } }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const prodData = await getProductById(id);
  return {
    title: prodData.name,
    description: `The product name is ${prodData.name} and ${prodData.description} and it costs ${prodData.price} `,
  };
}
