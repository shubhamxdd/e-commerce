import AdminCard from "../_components/AdminCard";
import {
  getProductsData,
  getSalesData,
  getUserData,
} from "../_actions/actions";
import { formatCurrency, formatNumber } from "@/lib/currencyFormatter";
import { getQueries } from "./contact/contactActions";
const AdminDashboard = async () => {
  const { totalSales, totalSalesAmount } = await getSalesData();
  const { userCount, averageSalesValue, maxSalesValue, minSalesValue } =
    await getUserData();
  const { availableProducts, totalProducts, unavailableProducts } =
    await getProductsData();

  const { queriesLength, resolvedQueriesLength } = await getQueries();

  const data = [
    {
      title: "Sales",
      description: `Total number of sales: ${formatNumber(totalSales)}`,
      content: `Total amount of sales done: ${formatCurrency(
        totalSalesAmount / 100
      )}`,
    },
    {
      title: "Users",
      description: `Total number of Users: ${formatNumber(userCount)}`,
      content: `Average amount of sales : ${formatCurrency(
        averageSalesValue / 100
      )}`,
      content1: `Max amount of sales: ${formatCurrency(maxSalesValue / 100)}`,
      content2: `Min amount of sales: ${formatCurrency(minSalesValue / 100)}`,
    },
    {
      title: "Products",
      description: `Total Products: ${formatNumber(totalProducts)}`,
      content: `Available Products: ${formatNumber(availableProducts)}`,
      content1: `Unavailable Products: ${formatNumber(unavailableProducts)}`,
    },
    {
      title: "Queries",
      description: `Total number of queries: ${formatNumber(queriesLength)}`,
      content: `Total number of resolved queries: ${formatNumber(
        resolvedQueriesLength
      )}`,
      content2: `Total number of unresolved queries: ${formatNumber(
        queriesLength - resolvedQueriesLength
      )}`,
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-4">
      {data.map((item) => (
        <AdminCard
          key={item.title}
          title={item.title}
          description={item.description}
          content={item.content}
          content1={item.content1}
          content2={item.content2}
        />
      ))}
    </div>
  );
};

export default AdminDashboard;
