import AdminCard from "../_components/AdminCard";
import {
  getProductsData,
  getSalesData,
  getUserData,
} from "../_actions/actions";
import { formatCurrency, formatNumber } from "@/lib/currencyFormatter";
const AdminDashboard = async () => {
  const { totalSales, totalSalesAmount } = await getSalesData();
  const { userCount, averageSalesValue, maxSalesValue, minSalesValue } =
    await getUserData();
  const { availableProducts, totalProducts, unavailableProducts } =
    await getProductsData();

  const data = [
    {
      title: "Sales",
      description: `Total number of sales: ${formatNumber(totalSales)}`,
      content: `Total amount of sales done: ${formatCurrency(
        totalSalesAmount
      )}`,
    },
    {
      title: "Users",
      description: `Total number of Users: ${formatNumber(userCount)}`,
      content: `Average amount of sales : ${formatCurrency(averageSalesValue)}`,
      content1: `Max amount of sales: ${formatCurrency(maxSalesValue)}`,
      content2: `Min amount of sales: ${formatCurrency(minSalesValue)}`,
    },
    {
      title: "Products",
      description: `Total Products: ${formatNumber(totalProducts)}`,
      content: `Available Products: ${formatNumber(availableProducts)}`,
      content1: `Unavailable Products: ${formatNumber(unavailableProducts)}`,
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-4">
      {data.map((item) => (
        <AdminCard
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
