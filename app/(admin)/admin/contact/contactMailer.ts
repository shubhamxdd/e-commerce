import nodemailer from "nodemailer";
// import { render } from "@react-email/render";
import { formatCurrency } from "@/lib/currencyFormatter";
import { Contact } from "@prisma/client";

interface mailerProps {
  email: string;
  Query: Contact;
}

export const sendContactMail = async ({ email, Query }: mailerProps) => {
  console.log({ email, Query });

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 2525,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `Support <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `Contact Request Received: ${Query.name}`,
    html: `
        <h1>Dear ${Query.name},</h1> 
        <p>Thank you for contacting us. We have received your request regarding "${Query.query}".</p>
        <p>Our team will review your request and get back to you shortly.</p>
        <p>Best regards,</p>
        <p>Shubham.</p>
    `,
  };

  const mailers = await transporter.sendMail(mailOptions);

  //   console.log(mailers);
  return mailers;
};
