import { Metadata } from "next";
import AdminDashboard from "./AdminDashboard";

const AdminPage = async () => {
  // let loggedIn = false;
  // if (!loggedIn)
  //   return (
  //     <h1 className="text-2xl text-center my-3">
  //       Please login to view this page
  //     </h1>
  //   );
  return <AdminDashboard />;
};

export default AdminPage;
export const metadata: Metadata = {
  title: "Home",
  description: "Admin dashboard",
};
