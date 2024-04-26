import { formatCurrency } from "@/lib/currencyFormatter";
import {
  Column,
  Row,
  Section,
  Text,
  Img,
  Button,
} from "@react-email/components";

interface OrderInformationProps {
  order: { id: string; createdAt: Date; price: number };
  product: {
    id: string;
    name: string;
    image: string;
    description: string;
  };
}

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  dateStyle: "medium",
});

const OrderInformation = ({ order, product }: OrderInformationProps) => {
  return (
    <>
      <Section>
        <Row>
          <Column>
            <Text className="mb-0 text-gray-600 whitespace-nowrap text-nowrap mr-4">
              Order ID
            </Text>
            <Text className="mt-0 mr-4">{order.id}</Text>
          </Column>
          <Column>
            <Text className="mb-0 text-gray-600 whitespace-nowrap text-nowrap mr-4">
              Product Name
            </Text>
            <Text className="mt-0 mr-4">{product.name}</Text>
          </Column>
          <Column>
            <Text className="mb-0 text-gray-600 whitespace-nowrap text-nowrap mr-4">
              Date of purchase
            </Text>
            <Text className="mt-0 mr-4">
              {dateFormatter.format(order.createdAt)}
            </Text>
          </Column>
          <Column>
            <Text className="mb-0 text-gray-600 whitespace-nowrap text-nowrap mr-4">
              Price Paid
            </Text>
            <Text className="mt-0 mr-4">
              {formatCurrency(order.price / 100)}
            </Text>
          </Column>
        </Row>
      </Section>
      <Section className="border-solid border-2 border-gray-700 rounded-lg p-4 md:p-6 my-4">
        <Img src={product.image} width={"100%"} alt={product.name} />
        <Row className="mt-8">
          <Column className="align-bottom">
            <Text className="text-lg font-bold m-0 mr-4">{product.name}</Text>
          </Column>
          <Column align="right">
            <Button
              className="bg-blue-700 text-white rounded-lg  px-4 py-2"
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/products/${product.id}`}
            >
              Visit product page
            </Button>
          </Column>
        </Row>

        <Text className="text-gray-600 mb-0">{product.description}</Text>
      </Section>
    </>
  );
};

export default OrderInformation;
