"use server";

import prisma from "@/prisma/prisma";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  query: z.string(),
});

export const submitContactForm = async (
  prevState: unknown,
  formData: FormData
) => {
  try {
    console.log(formData);
    const res = contactFormSchema.safeParse(
      Object.fromEntries(formData.entries())
    );

    if (!res.success) {
      // console.log(res.error);
      return res.error.formErrors.fieldErrors;
    }

    const contact = await prisma.contact.create({
      data: {
        name: res.data.name,
        email: res.data.email,
        query: res.data.query,
      },
    });

    return {
      message: `${contact.id}`,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to submit contact form");
  }
};
