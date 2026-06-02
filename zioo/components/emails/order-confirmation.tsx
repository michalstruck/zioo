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

interface OrderConfirmationEmailProps {
  customerName: string;
  orderTotal: string;
  lineItems: Array<{
    description: string;
    quantity: number;
  }>;
}

export const OrderConfirmationEmail = ({
  customerName = "Kliencie",
  orderTotal = "0,00 zł",
  lineItems = [],
}: OrderConfirmationEmailProps) => {
  const previewText = `Twoje zamówienie zioo zostało potwierdzone.`;

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
          <Container className="bg-white border border-border rounded-xl mx-auto max-w-xl overflow-hidden shadow-sm">
            {/* Header Area */}
            <Section className="bg-primary px-10 py-12 text-center">
              <Text className="text-4xl font-heading font-medium tracking-tight text-bg mb-4">
                zioo.
              </Text>
              <Heading className="text-3xl font-heading font-normal tracking-tight text-bg">
                Dziękujemy.
              </Heading>
            </Section>

            {/* Content Area */}
            <Section className="px-10 py-10">
              <Text className="text-lg font-heading font-medium text-brand mb-6 m-0">
                {customerName},
              </Text>

              <Text className="text-muted text-base leading-relaxed mb-6 m-0">
                Twoje zioła wkrótce wyruszą w drogę. Stworzyliśmy zioo z myślą o
                zdrowiu i odprężeniu, bazując na starannie dobranych profilach
                terpenowych.
              </Text>

              <Text className="text-muted text-base leading-relaxed mb-8 m-0">
                Zgodnie z naszą filozofią spokoju, jest to jedyna wiadomość
                e-mail, którą od nas otrzymasz. Numer przesyłki oraz szczegóły
                dostarczenia paczki zostaną wysłane bezpośrednio przez firmę
                kurierską.
              </Text>

              <Hr className="border-border my-8" />

              <Heading className="text-xl font-heading font-normal text-brand mb-6 m-0 text-center">
                Podsumowanie Twojego Odprężenia
              </Heading>

              <Section className="bg-bg rounded-lg p-6 mb-2 border border-border">
                {lineItems.map((item, index) => (
                  <Row
                    key={index}
                    className={index === lineItems.length - 1 ? "" : "mb-3"}
                  >
                    <Column className="w-[15%]">
                      <Text className="text-muted text-sm m-0 font-medium">
                        {item.quantity}x
                      </Text>
                    </Column>
                    <Column className="w-[85%]">
                      <Text className="text-brand text-base m-0">
                        {item.description}
                      </Text>
                    </Column>
                  </Row>
                ))}
              </Section>

              <Row className="px-6 py-4">
                <Column>
                  <Text className="text-muted text-sm uppercase tracking-wider m-0">
                    Razem
                  </Text>
                </Column>
                <Column className="text-right">
                  <Text className="text-brand text-xl font-heading font-medium m-0">
                    {orderTotal}
                  </Text>
                </Column>
              </Row>

              <Hr className="border-border my-8" />

              <Text className="text-muted font-heading text-base text-center leading-relaxed italic m-0">
                Bądź tu i teraz.
                <br />
                Zespół zioo.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default OrderConfirmationEmail;
