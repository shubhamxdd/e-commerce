import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import PurchaseEmail from "@/email/Purchase";
import { formatCurrency } from "./currencyFormatter";

interface mailerProps {
  email: string;
  order: { id: string; createdAt: Date; price: number };
  product: {
    id: string;
    name: string;
    image: string;
    description: string;
  };
  price: number;
}

export const sendMail = async ({
  email,
  order,
  price,
  product,
}: mailerProps) => {
  console.log({ email, order, price, product });

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 2525,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const emailHtml = render(
    <PurchaseEmail
      order={order}
      price={formatCurrency(price)}
      email={email}
      product={product}
    />
  );

  const mailOptions = {
    from: `Support <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `Order Confirmed for product ${product.name}`,
    html: emailHtml,
  };

  const mailers = await transporter.sendMail(mailOptions);

  console.log(mailers);
  return mailers;
};
