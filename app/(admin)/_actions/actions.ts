"use server";
import prisma from "@/prisma/prisma";
import { notFound, redirect } from "next/navigation";
import { z } from "zod";

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

const productSchema = z.object({
  name: z.string().min(2),
  price: z.coerce.number().min(1),
  description: z.string().min(2),
  image: z.string().url(),
});

export const createProduct = async (
  previousState: unknown,
  formData: FormData
) => {
  // add some dalay for testing here
  // async function delay(num: number) {
  //   return new Promise((resolve) => {
  //     setTimeout(resolve, num);
  //   });
  // }

  // delay(5000);

  let res = productSchema.safeParse(Object.fromEntries(formData.entries()));
  // console.log(res)
  if (!res.success) {
    return res.error.formErrors.fieldErrors;
  }
  const data = res.data;

  await prisma.product.create({
    data: {
      name: data.name,
      price: data.price,
      description: data.description,
      image: data.image,
    },
  });

  redirect("/admin/products");

  // console.log(formData);
};

export const getProducts = async () => {
  try {
    const products = await prisma.product.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        isAvailable: true,
        _count: { select: { Order: true } },
      },
      orderBy: {
        name: "asc",
      },
    });
    // console.log(products);
    return products;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching products");
  }
};

export const changeAvailability = async (id: string, isAvailable: boolean) => {
  try {
    await prisma.product.update({
      where: { id },
      data: {
        isAvailable,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error changing availability");
  }
};
export const deleteProduct = async (id: string) => {
  try {
    const product = await prisma.product.delete({
      where: { id },
    });

    if (!product) return notFound();
  } catch (error) {
    console.log(error);
    throw new Error("Error changing availability");
  }
};
