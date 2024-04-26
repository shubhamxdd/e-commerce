import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactProps {
  query: {
    id: string;
    name: string;
    email: string;
    query: string | null;
    isResolved?: boolean;
  };
}

const Contact = ({ query }: ContactProps) => (
  <Html>
    <Head />
    <Preview>Contact request received</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>
          Contact request recevied regarding : {query.query}
        </Heading>
        <Section style={body}>
          <Tailwind>
            <Text className="text-xl font-bold">Kya dikkat hai bhai. </Text>
            <Text className="text-sm">
              This email is for {query.name} ({query.email}). They have a query.
              otherwise please ignore it !
            </Text>
          </Tailwind>
        </Section>

        <Hr style={hr} />
      </Container>
    </Body>
  </Html>
);

Contact.PreviewProps = {
  query: {
    id: "1",
    name: "Shubham",
    email: "s@s.com",
    query: "I have a query",
  },
} satisfies ContactProps;

export default Contact;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 25px 48px",
  backgroundImage: 'url("/assets/raycast-bg.png")',
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat, no-repeat",
};

const heading = {
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "48px",
};

const body = {
  margin: "24px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#dddddd",
  marginTop: "48px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginLeft: "4px",
};
