"use server";
import prisma from "@/prisma/prisma";
import { z } from "zod";
import fs from "fs/promises";
import { redirect } from "next/navigation";

export const getSalesData = async () => {
  try {
    const data = await prisma.order.aggregate({
      _sum: { price: true },
      _count: true,
    });

    return {
      totalSalesAmount: data._sum.price || 0,
      totalSales: data._count,
    };
  } catch (error) {
    console.log("Error fetching sales data", error);
    throw new Error("Error fetching sales data");
  }
};

export const getUserData = async () => {
  try {
    const userCount = await prisma.user.count();

    const maxMinSalesValue = await prisma.order.aggregate({
      _avg: { price: true },
      _max: { price: true },
      _min: { price: true },
    });

    return {
      userCount: userCount || 0,
      averageSalesValue: maxMinSalesValue._avg.price || 0,
      maxSalesValue: maxMinSalesValue._max.price || 0,
      minSalesValue: maxMinSalesValue._min.price || 0,
    };
  } catch (error) {
    console.log("Error fetching user data", error);
    throw new Error("Error fetching user data");
  }
};

export const getProductsData = async () => {
  try {
    const totalProducts = await prisma.product.count();
    const availableProducts = await prisma.product.count({
      where: { isAvailable: true },
    });
    const unavailableProducts = await prisma.product.count({
      where: { isAvailable: false },
    });

    return {
      totalProducts: totalProducts || 0,
      availableProducts: availableProducts || 0,
      unavailableProducts: unavailableProducts || 0,
    };
  } catch (error) {
    console.log("Error fetching products data", error);
    throw new Error("Error fetching products data");
  }
};

const fileSchema = z
  .instanceof(File, { message: "Invalid file" })
  .refine((file) => file.size === 0 || file.type.startsWith("image/"));

const productSchema = z.object({
  name: z.string().min(1),
  price: z.coerce.number().min(0),
  description: z.string().min(1),
  image: fileSchema.refine((file) => file.size > 0, "Required"),
});

export const formAction = async (formData: FormData) => {
  let res = productSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!res.success) {
    return res.error.formErrors.fieldErrors;
  }

  const data = res.data;

  await fs.mkdir("public/products", { recursive: true });
  const imagePath = `/products/${crypto.randomUUID()}-${data.image.name}`;
  await fs.writeFile(
    `public${imagePath}`,
    Buffer.from(await data.image.arrayBuffer())
  );

  prisma.product.create({
    data: {
      name: data.name,
      price: data.price,
      description: data.description,
      image: imagePath,
    },
  });

  redirect("/admin/products");

  // console.log(formData);
};
