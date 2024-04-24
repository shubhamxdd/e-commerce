import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
} from "@react-email/components";
import OrderInformation from "./Order";

interface PurchaseEmailProps {
  email: string;
  product: { id: string; name: string; image: string; description: string };

  price: string;
  order: { id: string; createdAt: Date; price: number };
}

const PurchaseEmail = ({
  email,
  price,
  product,
  order,
}: PurchaseEmailProps) => {
  return (
    <Html>
      <Preview>Hi you have placed order of {product.name}</Preview>
      <Tailwind>
        <Head>
          <title>Order Confirmed for product {product.name}</title>
        </Head>
        <Body className="font-sans bg-white">
          <Container className="max-w-xl">
            <Heading>Purchase receipt</Heading>
            <Hr />
            <OrderInformation
              order={order}
              product={{
                id: product.id,
                image: product.image,
                description: product.description,
                name: product.name,
              }}
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PurchaseEmail;

// PurchaseEmail.PreviewProps = {
//   email: "shubham@gmail.com",
//   product: {
//     id: "442",
//     image:
//       "https://e-commerce-gamma-six-62.vercel.app/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdpzegsll4%2Fimage%2Fupload%2Fv1713555583%2Fmwrjdrwidfhhgin3j86y.png&w=1920&q=75",
//     name: "Mekbook",
//     description: "A laptop that is very fast",
//   },
//   price: "2000",
//   order: { id: "123", createdAt: new Date(), price: 200 },
// } satisfies PurchaseEmailProps;
