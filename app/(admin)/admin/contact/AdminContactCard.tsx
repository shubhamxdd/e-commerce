import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Contact } from "@prisma/client";

import { IoIosSend } from "react-icons/io";
import UpdateStatusButton from "./UpdateStatusButton";

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
        <Button className="group">
          <IoIosSend
            size={20}
            className="group-hover:scale-125 group-focus-within:scale-125 group-focus:scale-125 transition-all duration-300"
          />
          <span>Send mail</span>
        </Button>
        <UpdateStatusButton id={query.id} />
      </CardFooter>
    </Card>
  );
};

export default AdminContactCard;
