import prisma from "@/prisma/prisma";

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
