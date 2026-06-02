import * as React from "react";
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { emailTailwindConfig } from "@/lib/email-theme";

interface NewOrderAlertEmailProps {
  orderId: string;
  customerName: string;
  customerEmail: string;
  orderTotal: string;
  shippingDetails: {
    line1?: string;
    line2?: string;
    city?: string;
    postalCode?: string;
    country?: string;
  };
  lineItems: Array<{
    description: string;
    quantity: number;
    amountTotal: string;
  }>;
}

export const NewOrderAlertEmail = ({
  orderId = "N/A",
  customerName = "Brak danych",
  customerEmail = "Brak danych",
  orderTotal = "0,00 zł",
  shippingDetails = {},
  lineItems = [],
}: NewOrderAlertEmailProps) => {
  const previewText = `Nowe zamówienie - ${orderTotal}`;

  return (
    <Html>
      <Tailwind config={emailTailwindConfig}>
        <Head>
          <style>
            {`@import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@300;400;500;600;700&family=Public+Sans:wght@300;400;500;600;700&display=swap");`}
          </style>
        </Head>
        <Preview>{previewText}</Preview>
        <Body className="bg-bg font-sans text-brand py-12 px-4">
          <Container className="bg-white border border-border shadow-lg rounded-[24px] mx-auto max-w-xl overflow-hidden">
            {/* Header Area */}
            <Section className="px-10 pt-12 pb-6 text-center">
              <Heading className="text-4xl font-heading font-medium tracking-tight text-brand m-0">
                Nowe zamówienie
              </Heading>
            </Section>

            {/* Content Area */}
            <Section className="px-10 pb-12">
              <Section className="mb-10">
                <Text className="text-muted text-xs font-sans uppercase tracking-widest mb-3 m-0">
                  Klient
                </Text>
                <Text className="text-brand text-base leading-relaxed m-0 mb-1">
                  <strong className="font-medium text-muted">ID:</strong>{" "}
                  {orderId}
                </Text>
                <Text className="text-brand text-base leading-relaxed m-0">
                  <strong className="font-medium text-muted">Email:</strong>{" "}
                  {customerEmail}
                </Text>
              </Section>

              <Hr className="border-border my-8" />

              <Section className="mb-10">
                <Text className="text-muted text-xs font-sans uppercase tracking-widest mb-4 m-0">
                  Koszyk
                </Text>

                <Section className="bg-bg rounded-[16px] p-6 border border-border/50">
                  {lineItems.map((item, index) => (
                    <Row key={index}>
                      <Column
                        className={`w-[15%] align-top ${index === lineItems.length - 1 ? "" : "pb-4"}`}
                      >
                        <Text className="text-primary text-sm m-0 font-medium">
                          {item.quantity}x
                        </Text>
                      </Column>
                      <Column
                        className={`w-[55%] align-top ${index === lineItems.length - 1 ? "" : "pb-4"}`}
                      >
                        <Text className="text-brand text-base m-0">
                          {item.description}
                        </Text>
                      </Column>
                      <Column
                        className={`w-[30%] align-top text-right ${index === lineItems.length - 1 ? "" : "pb-4"}`}
                      >
                        <Text className="text-brand text-base m-0 font-medium">
                          {item.amountTotal}
                        </Text>
                      </Column>
                    </Row>
                  ))}
                  <Hr className="border-border my-5 border-dashed" />
                  <Row>
                    <Column>
                      <Text className="text-muted text-xs uppercase tracking-widest m-0">
                        Suma
                      </Text>
                    </Column>
                    <Column className="text-right">
                      <Text className="text-brand text-xl font-heading font-semibold m-0">
                        {orderTotal}
                      </Text>
                    </Column>
                  </Row>
                </Section>
              </Section>

              <Hr className="border-border my-8" />

              <Section className="mb-4">
                <Text className="text-muted text-xs font-sans uppercase tracking-widest mb-4 m-0">
                  Adres Wysyłki
                </Text>
                <Section className="bg-bg rounded-[16px] p-6 border border-border/50">
                  <Text className="text-brand text-base m-0 mb-1 font-medium">
                    {customerName}
                  </Text>
                  {shippingDetails.line1 && (
                    <Text className="text-brand text-base m-0 mb-1">
                      {shippingDetails.line1}
                    </Text>
                  )}
                  {shippingDetails.line2 && (
                    <Text className="text-brand text-base m-0 mb-1">
                      {shippingDetails.line2}
                    </Text>
                  )}
                  <Text className="text-brand text-base m-0">
                    {shippingDetails.postalCode} {shippingDetails.city}
                  </Text>
                  <Text className="text-brand text-base m-0">
                    {shippingDetails.country}
                  </Text>
                </Section>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NewOrderAlertEmail;
