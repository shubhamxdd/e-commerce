import { getProductById } from "@/app/(admin)/_actions/actions";
import Stripe from "stripe";
import CheckoutForm from "./CheckoutForm";

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
