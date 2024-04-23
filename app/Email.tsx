import * as React from "react";
import { Html } from "@react-email/html";
import { Button } from "@react-email/button";

interface EmailProps {
  email: string;
}

export function Email({ email }: EmailProps) {
  return (
    <Html lang="en">
      <Button href={""}>Click me</Button>
    </Html>
  );
}

// todo complete the email template
