import { Metadata } from "next";
import { getContactQueries } from "../../_actions/actions";

const AdminContactPage = async () => {
  const queries = await getContactQueries();

  //   console.log(queries);

  return <div>AdminContactPage</div>;
};

export default AdminContactPage;

export const metadata: Metadata = {
  title: "Contact queries",
  description: "Contact queries from users",
};
