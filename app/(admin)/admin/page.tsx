import { Metadata } from "next";
import AdminDashboard from "./AdminDashboard";
// import AdminLogin from "./AdminLogin";

const AdminPage = async () => {
  // TODO Admin Login
  // let loggedIn = false;
  // if (!loggedIn) return <AdminLogin />;
  return <AdminDashboard />;
};

export default AdminPage;
export const metadata: Metadata = {
  title: "Home",
  description: "Admin dashboard",
};
