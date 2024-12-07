import {
  Body,
  Head,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

const WithBug = () => (
  <Html>
    <Head />
    <Preview>{'a'.repeat(56)}</Preview>
    <Body>
        <Text>
          Email
        </Text>
    </Body>
  </Html>
);

export default WithBug;