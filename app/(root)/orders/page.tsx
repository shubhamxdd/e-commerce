import { Metadata } from "next";
import OrderForm from "./OrderForm";

const OrderPage = () => {
  return <OrderForm />;
};

export default OrderPage;

export const metadata: Metadata = {
  title: "Orders",
  description: "Here you can get history of all your orders.",
};
