import prisma from "@/prisma/prisma";

export const getLatestProducts = async () => {
  try {
    const products = await prisma.product.findMany({
      where: {
        isAvailable: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    if (!products) return [];

    return products;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch latest products");
  }
};

export const getPopularProducts = async () => {
  try {
    const products = await prisma.product.findMany({
      where: {
        isAvailable: true,
      },
      orderBy: {
        Order: {
          _count: "desc",
        },
      },
    });
    if (!products) return [];

    return products;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch popular products");
  }
};

export const getAllProducts = async () => {
  try {
    const products = await prisma.product.findMany({
      where: { isAvailable: true },
    });
    if (!products) return [];
    return products;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch all products");
  }
};
