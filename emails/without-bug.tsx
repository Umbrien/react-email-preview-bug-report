import {
  Body,
  Head,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

const WithoutBug = () => (
  <Html>
    <Head />
    <Preview>{'a'.repeat(55)}</Preview>
    <Body>
        <Text>
          Email
        </Text>
    </Body>
  </Html>
);

export default WithoutBug;