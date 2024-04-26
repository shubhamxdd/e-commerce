import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { Contact } from "@prisma/client";
import ContactMail from "@/email/Contact";

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

  Query.query;

  const mail = render(<ContactMail query={Query} />);

  const mailOptions = {
    from: `Support <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `Contact Request Received: ${Query.name}`,
    html: mail,
  };

  const mailers = await transporter.sendMail(mailOptions);

  //   console.log(mailers);
  return mailers;
};
