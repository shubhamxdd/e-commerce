import AdminUserTable from "../../_components/AdminUserTable";

const AdminUserPage = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-xl md:text-4xl font-bold my-4">List of users.</h1>
      </div>
      <AdminUserTable />
    </>
  );
};

export default AdminUserPage;
