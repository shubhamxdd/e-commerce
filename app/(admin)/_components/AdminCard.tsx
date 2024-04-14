import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AdminCardProps {
  title: string;
  description: string;
  content: string;
  content1?: string;
  content2?: string;
}

const AdminCard = ({
  content,
  content1,
  content2,
  description,
  title,
}: AdminCardProps) => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300 dark:shadow-slate-900">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
        <p>{content1}</p>
        <p>{content2}</p>
      </CardContent>
    </Card>
  );
};

export default AdminCard;
