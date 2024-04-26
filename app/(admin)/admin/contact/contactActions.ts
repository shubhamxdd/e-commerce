"use server";

import prisma from "@/prisma/prisma";

export const getContactQueries = async () => {
  try {
    const queries = await prisma.contact.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    if (queries.length === 0) return [];

    return queries;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching contact queries");
  }
};

export const updateStatus = async (id: string) => {
  try {
    const currentStatus = await prisma.contact.findUnique({
      where: {
        id,
      },
      select: {
        isResolved: true,
      },
    });

    if (!currentStatus) throw new Error("Query not found");

    const updateStatus = await prisma.contact.update({
      where: {
        id,
      },
      data: {
        isResolved: !currentStatus.isResolved,
      },
    });

    return updateStatus;
  } catch (error) {
    console.log(error);
    throw new Error("Error updating status");
  }
};

export const getQueries = async () => {
  try {
    const queries = await prisma.contact.aggregate({
      _count: true,
    });

    const resolvedQueries = await prisma.contact.count({
      where: {
        isResolved: true,
      },
    });

    return {
      queriesLength: queries._count,
      resolvedQueriesLength: resolvedQueries,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching queries");
  }
};
