"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <div className="container max-w-2xl py-24 text-center mx-auto flex flex-col items-center">
      <div className="size-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
        <CheckCircle2 className="size-10" />
      </div>
      <h1 className="font-heading text-4xl font-bold text-secondary mb-4">
        Dziękujemy za zamówienie!
      </h1>
      <p className="text-muted-foreground mb-8">
        Twoja płatność została pomyślnie zrealizowana. Szczegóły transakcji oraz
        potwierdzenie prześlemy na Twój adres email.
      </p>

      {sessionId && (
        <p className="text-xs text-muted-foreground/60 mb-8 font-mono">
          ID sesji: {sessionId}
        </p>
      )}

      <Link href="/store">
        <Button size="lg" className="rounded-full shadow-md font-bold px-8">
          Wróć do sklepu
        </Button>
      </Link>
    </div>
  );
}
