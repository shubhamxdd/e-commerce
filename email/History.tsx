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
import React from "react";

interface HistoryEmailProps {
  email: string;
  order: {
    id: string;
    price: number;
    createdAt: Date;
    product: { id: string; name: string; image: string; description: string };
  }[];
}

const HistoryEmail = ({ order }: HistoryEmailProps) => {
  return (
    <Html>
      <Preview>Hi you have requested for your order history</Preview>
      <Tailwind>
        <Head>
          <title>Order History</title>
        </Head>
        <Body className="font-sans bg-white">
          <Container className="max-w-xl">
            <Heading>Purchase receipt</Heading>
            <Hr />
            {order.map((item) => (
              <React.Fragment key={item.id}>
                <OrderInformation
                  order={item}
                  product={{
                    id: item.product.id,
                    image: item.product.image,
                    description: item.product.description,
                    name: item.product.name,
                  }}
                />
                <Hr />
              </React.Fragment>
            ))}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default HistoryEmail;

HistoryEmail.PreviewProps = {
  order: [
    {
      id: "123",
      price: 200,
      createdAt: new Date(),
      product: {
        id: "442",
        name: "Mekbook",
        image:
          "https://e-commerce-gamma-six-62.vercel.app/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdpzegsll4%2Fimage%2Fupload%2Fv1713555583%2Fmwrjdrwidfhhgin3j86y.png&w=1920&q=75",
        description: "A laptop that is very fast",
      },
    },
    {
      id: "534",
      price: 400,
      createdAt: new Date(),
      product: {
        id: "777",
        name: "sssss",
        image:
          "https://e-commerce-gamma-six-62.vercel.app/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdpzegsll4%2Fimage%2Fupload%2Fv1713555583%2Fmwrjdrwidfhhgin3j86y.png&w=1920&q=75",
        description: "that is very fast",
      },
    },
  ],
  email: "s@s.com",
} satisfies HistoryEmailProps;
