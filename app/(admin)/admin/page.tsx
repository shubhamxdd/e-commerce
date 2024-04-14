import React from "react";
import AdminCard from "../_components/AdminCard";
import {
  getProductsData,
  getSalesData,
  getUserData,
} from "../_actions/actions";
import { formatCurrency, formatNumber } from "@/lib/currencyFormatter";
import { Metadata } from "next";

const AdminPage = async () => {
  const { totalSales, totalSalesAmount } = await getSalesData();
  const { userCount, averageSalesValue, maxSalesValue, minSalesValue } =
    await getUserData();
  const { availableProducts, totalProducts, unavailableProducts } =
    await getProductsData();

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-4">
      <AdminCard
        title="Sales"
        description={`Total number of sales: ${formatNumber(totalSales)}`}
        content={`Total amount of sales done: ${formatCurrency(
          totalSalesAmount
        )}`}
      />
      <AdminCard
        title="Users"
        description={`Total number of Users: ${formatNumber(userCount)}`}
        content={`Average amount of sales : ${formatCurrency(
          averageSalesValue
        )}`}
        content1={`Max amount of sales: ${formatCurrency(maxSalesValue)}`}
        content2={`Min amount of sales: ${formatCurrency(minSalesValue)}`}
      />
      <AdminCard
        title="Products"
        description={`Total Products: ${formatNumber(totalProducts)}`}
        content={`Available Products: ${formatNumber(availableProducts)}`}
        content1={`Unavailable Products: ${formatNumber(unavailableProducts)}`}
      />
    </div>
  );
};

export default AdminPage;
export const metadata: Metadata = {
  title: "Home",
  description: "Admin dashboard",
};