import { Metadata } from "next";
import { getContactQueries } from "./contactActions";
import AdminContactCard from "./AdminContactCard";

const AdminContactPage = async () => {
  const queries = await getContactQueries();

  if (queries.length === 0)
    return <h1 className="text-4xl my-4 font-bold">No Queries currently !</h1>;

  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold my-4">Queries</h1>
      <div className="flex flex-wrap gap-4 my-5">
        {queries.map((query) => (
          <AdminContactCard query={query} key={query.id} />
        ))}
      </div>
    </>
  );
};

export default AdminContactPage;

export const metadata: Metadata = {
  title: "Contact queries",
  description: "Contact queries from users",
};
