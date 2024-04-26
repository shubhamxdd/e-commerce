import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Contact } from "@prisma/client";
import UpdateStatusButton from "./UpdateStatusButton";
import SendMail from "./SendMail";

interface AdminContactCardProps {
  query: Contact;
}

const AdminContactCard = ({ query }: AdminContactCardProps) => {
  return (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>By: {query.name}</CardTitle>
        <CardDescription>{query.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{query.query}</p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <SendMail />
        <UpdateStatusButton id={query.id} />
      </CardFooter>
    </Card>
  );
};

export default AdminContactCard;
