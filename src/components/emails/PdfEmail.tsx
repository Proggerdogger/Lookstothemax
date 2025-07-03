import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface PdfEmailProps {
  firstName?: string;
}

export const PdfEmail = ({
  firstName = "there",
}: PdfEmailProps) => (
  <Html>
    <Head />
    <Preview>Your Looksmaxxing PDF is here!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Your Looksmaxxing PDF</Heading>
        <Text style={text}>
          Hi {firstName},
        </Text>
        <Text style={text}>
          Thank you for your interest in LooksMaxPlus.ai! Please find your attached PDF guide to get started on your journey.
        </Text>
        <Text style={text}>
          We'll be launching our AI-powered analysis tool soon. Keep an eye on your inbox for updates!
        </Text>
        <Text style={text}>
          Best,
          <br />
          The LooksMaxPlus.ai Team
        </Text>
      </Container>
    </Body>
  </Html>
);

export default PdfEmail;

const main = {
  backgroundColor: "#0f172a",
  color: "#f8fafc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const h1 = {
  color: "#f8fafc",
  fontSize: "32px",
  fontWeight: "bold",
  margin: "30px 0",
  padding: "0",
  lineHeight: "42px",
  textAlign: "center" as const,
};

const text = {
  color: "#d1d5db",
  fontSize: "16px",
  lineHeight: "26px",
}; 