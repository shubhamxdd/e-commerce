import AdminOrderTable from "../../_components/AdminOrderTable";

const AdminOrderPage = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-4xl font-bold my-4">Orders</h1>
      </div>
      <AdminOrderTable />
    </>
  );
};

export default AdminOrderPage;
