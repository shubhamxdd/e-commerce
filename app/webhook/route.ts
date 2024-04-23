import { sendMail } from "@/lib/mailer";
import prisma from "@/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
  const event = stripe.webhooks.constructEvent(
    await request.json(),
    request.headers.get("stripe-signature")!,
    process.env.STRIPE_WEBHOOK_SECRET!
  );

  if (event.type === "charge.succeeded") {
    const charge = event.data.object;
    const productId = charge.metadata.productId;
    const email = charge.billing_details.email;
    const price = charge.amount;

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product || !email) {
      return NextResponse.json({ message: "Error occured" }, { status: 400 });
    }
    const {
      orders: [order],
    } = await prisma.user.upsert({
      where: { email },
      create: {
        email,
        name: email,
        username: email,
        orders: { create: { productId, price } },
      },
      update: { email, orders: { create: { productId, price } } },
      select: {
        orders: {
          orderBy: { createdAt: "desc" },
          take: 1,
        },
      },
    });

    await sendMail({ email });
  }

  return NextResponse.json({ received: true });
}
