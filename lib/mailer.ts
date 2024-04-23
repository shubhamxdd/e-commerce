import nodemailer from "nodemailer";
// import { render } from '@react-email/render';

export const sendMail = async ({ email }: { email: string }) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    // host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  //   const emailHtml = render()

  const mailOptions = {
    from: "hmmmmm699@gmail.com",
    to: email,
    subject: "Order Confirmation",
    html: "<h1>Hi your order has been confirmed!</h1>",
  };

  const mailers = await transporter.sendMail(mailOptions);

  console.log(mailers);

  return mailers;
};
