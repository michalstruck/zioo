import type { Metadata } from "next";

import { render } from "@react-email/components";

import { NewOrderAlertEmail } from "@/components/emails/new-order-alert";
import OrderConfirmationEmail from "@/components/emails/order-confirmation";

export const metadata: Metadata = {
  title: "test page",
};

export default async function EmailPreviewPage() {
  const emailHtml = await render(
    <OrderConfirmationEmail
      customerName="Kliencie"
      orderTotal="100,00 zł"
      lineItems={[
        {
          description: "Test",
          quantity: 1,
        },
        {
          description: "Test",
          quantity: 1,
        },
        {
          description: "Test",
          quantity: 1,
        },
        {
          description: "Test",
          quantity: 1,
        },
      ]}
    />,
  );

  // return <div dangerouslySetInnerHTML={{ __html: emailHtml }} />;
  return <h1>nothing to see</h1>;
}
