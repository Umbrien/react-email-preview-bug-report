import {
  Body,
  Head,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

const literal = "12345678901234567890123456789012345678901234567890123456"

const WithBug = () => (
  <Html>
    <Head />

    {/* Is causing bug too */}
    {/*<Preview>{literal}</Preview>*/}

    <Preview>12345678901234567890123456789012345678901234567890123456</Preview>
    <Body>
        <Text>
          Email
        </Text>
    </Body>
  </Html>
);

export default WithBug;