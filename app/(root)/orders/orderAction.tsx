"use server";

import HistoryEmail from "@/email/History";
import OrderInformation from "@/email/Order";
import prisma from "@/prisma/prisma";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { z } from "zod";

const emailSchema = z.string().email();

export const getProductsByEmail = async (
  prevState: unknown,
  formData: FormData
): Promise<{ message?: string; error?: string }> => {
  try {
    const res = emailSchema.safeParse(formData.get("email"));

    if (!res.success) {
      return { error: "Invalid email" };
    }

    //    console.log(formData);

    const user = await prisma.user.findUnique({
      where: { email: res.data },
      select: {
        email: true,
        orders: {
          select: {
            price: true,
            id: true,
            createdAt: true,
            product: {
              select: {
                id: true,
                name: true,
                price: true,
                description: true,
                image: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      console.log("No user found with this email");
      return { message: "Email sent" };
    }

    const orders = user.orders.map((order) => {
      return { ...order };
    });

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
      <HistoryEmail email={user.email} order={await Promise.all(orders)} />
    );

    const mailOptions = {
      from: `History <${process.env.GMAIL_USER}>`,
      to: user.email,
      subject: `Order History for user ${user.email}`,
      html: emailHtml,
    };

    const mailers = await transporter.sendMail(mailOptions);

    // console.log(mailers);

    return { message: "Email sent" };
  } catch (error) {
    console.log(error);
    return { error: "Failed to fetch products by email" };
  }
};
