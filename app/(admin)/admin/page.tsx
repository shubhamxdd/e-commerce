import { Metadata } from "next";
import AdminDashboard from "./AdminDashboard";

const AdminPage = async () => {
  return <AdminDashboard />;
};

export default AdminPage;
export const metadata: Metadata = {
  title: "Home",
  description: "Admin dashboard",
};
