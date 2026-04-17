"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { MapPin, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { formatPrice } from "@/lib/utils";
import type { CartItem } from "@/lib/cart-context";
import { Geowidget } from "./geowidget";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import {
  calculateShippingCost,
  getIsFreeShipping,
  SHIPPING_COST,
} from "@/lib/consts";
import Image from "next/image";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

const formSchema = z
  .object({
    firstName: z.string().min(2, "Imię jest wymagane"),
    lastName: z.string().min(2, "Nazwisko jest wymagane"),
    email: z.email("Nieprawidłowy adres email"),
    phone: z.string().optional(),
    shippingMethod: z.enum(["locker", "courier"], "Wybierz metodę wysyłki"),
    pointName: z.string().optional(),
    pointAddress: z.string().optional(),
    street: z.string().optional(),
    zip: z.string().optional(),
    city: z.string().optional(),
    termsAccepted: z
      .boolean()
      .refine((val) => val === true, "Akceptacja jest wymagana"),
  })
  .superRefine((data, ctx) => {
    if (data.shippingMethod === "locker" && !data.pointName) {
      ctx.addIssue({
        code: "custom",
        message: "Wybierz paczkomat",
        path: ["pointName"],
      });
    }
    if (data.shippingMethod === "courier") {
      if (!data.street)
        ctx.addIssue({
          code: "custom",
          message: "Pole wymagane",
          path: ["street"],
        });
      if (!data.zip)
        ctx.addIssue({
          code: "custom",
          message: "Pole wymagane",
          path: ["zip"],
        });
      if (!data.city)
        ctx.addIssue({
          code: "custom",
          message: "Pole wymagane",
          path: ["city"],
        });
      if (!data.phone)
        ctx.addIssue({
          code: "custom",
          message: "Telefon jest wymagany dla kuriera",
          path: ["phone"],
        });
    }
  });

type FormValues = z.infer<typeof formSchema>;

export function CheckoutForm({ items }: { items: CartItem[] }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      shippingMethod: "locker",
      pointName: "",
      pointAddress: "",
      street: "",
      zip: "",
      city: "",
      termsAccepted: false,
    },
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    control,
  } = form;

  const shippingMethod = watch("shippingMethod");
  const selectedPoint = watch("pointName");
  const selectedPointAddress = watch("pointAddress");

  const subtotal = items.reduce(
    (acc, { product, quantity }) => acc + product.price * quantity,
    0,
  );

  const isFreeShipping = getIsFreeShipping(subtotal);
  const shippingCost = calculateShippingCost(shippingMethod, subtotal);
  const total = subtotal + shippingCost;

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // TODO: Connect to your backend route to create Stripe Session
    console.log("Form values", data);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, customer: data }),
      });

      if (!response.ok) throw new Error("Network error");
      const result = await response.json();
      if (result.clientSecret) {
        setClientSecret(result.clientSecret);
      } else if (result.url) {
        window.location.href = result.url;
      }
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  if (clientSecret) {
    return (
      <div className="w-full bg-white rounded-2xl border shadow-sm overflow-hidden min-h-[600px]">
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-12 lg:grid-cols-12 items-start max-w-sm md:max-w-lg lg:max-w-5xl"
    >
      <div className="lg:col-span-7 space-y-12">
        {/* Kontakt */}
        <section>
          <h2 className="font-heading mb-6 flex items-center gap-2 text-secondary">
            <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-sans">
              1
            </span>
            Dane kontaktowe
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">Imię</Label>
              <Input
                id="firstName"
                autoComplete="given-name"
                {...register("firstName")}
                className={errors.firstName ? "border-destructive" : ""}
              />
              {errors.firstName && (
                <span className="text-xs text-destructive">
                  {errors.firstName.message}
                </span>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nazwisko</Label>
              <Input
                id="lastName"
                autoComplete="family-name"
                {...register("lastName")}
                className={errors.lastName ? "border-destructive" : ""}
              />
              {errors.lastName && (
                <span className="text-xs text-destructive">
                  {errors.lastName.message}
                </span>
              )}
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <span className="text-xs text-destructive">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="phone">
                Telefon{" "}
                {shippingMethod !== "courier" && (
                  <span className="text-muted-foreground font-normal">
                    (Opcjonalny)
                  </span>
                )}
              </Label>
              <Input
                id="phone"
                type="tel"
                autoComplete="tel"
                {...register("phone")}
                className={errors.phone ? "border-destructive" : ""}
              />
              {errors.phone && (
                <span className="text-xs text-destructive">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Wysyłka */}
        <section>
          <h2 className="font-heading mb-6 flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary text-xl font-sans">
              2
            </span>
            Dostawa
          </h2>

          <Controller
            control={control}
            name="shippingMethod"
            render={({ field }) => (
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid gap-4 sm:grid-cols-2 mb-8"
              >
                <div className="relative flex">
                  <RadioGroupItem
                    value="locker"
                    id="locker"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="locker"
                    className="flex flex-1 cursor-pointer flex-col items-center justify-between rounded-xl border-2 border-muted bg-transparent p-4 hover:bg-muted/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 [&:has([data-state=checked])]:border-primary"
                  >
                    <MapPin className="mb-3 h-6 w-6" />
                    Paczkomat 24/7
                    <span className="text-sm text-muted-foreground mt-1">
                      {isFreeShipping
                        ? "Darmowa"
                        : formatPrice(SHIPPING_COST.locker)}
                    </span>
                  </Label>
                </div>
                <div className="relative flex">
                  <RadioGroupItem
                    value="courier"
                    id="courier"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="courier"
                    className="flex flex-1 cursor-pointer flex-col items-center justify-between rounded-xl border-2 border-muted bg-transparent p-4 hover:bg-muted/50 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 [&:has([data-state=checked])]:border-primary"
                  >
                    <Truck className="mb-3 h-6 w-6" />
                    Kurier InPost
                    <span className="text-sm text-muted-foreground mt-1">
                      {isFreeShipping
                        ? "Darmowa"
                        : formatPrice(SHIPPING_COST.courier)}
                    </span>
                  </Label>
                </div>
              </RadioGroup>
            )}
          />

          <div
            className={`rounded-xl border bg-card text-card-foreground p-6 shadow-sm mb-4 transition-all ${
              shippingMethod !== "locker" ? "hidden" : "block"
            }`}
          >
            <h3 className="font-semibold font-heading mb-4 text-lg">
              Wybierz paczkomat
            </h3>

            {/* Widok wybranego punktu */}
            {selectedPoint && (
              <div className="flex items-center justify-between bg-primary/5 p-4 rounded-lg border border-primary/20 mb-4">
                <div>
                  <p className="font-bold text-secondary">{selectedPoint}</p>
                  <p className="text-sm text-muted-foreground">
                    {selectedPointAddress}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setValue("pointName", "");
                    setValue("pointAddress", "");
                  }}
                >
                  Zmień
                </Button>
              </div>
            )}

            {/* Widget zawsze renderowany, ale ukrywany przy wybranym punkcie */}
            <div className={`mt-2 ${selectedPoint ? "hidden" : "block"}`}>
              <Geowidget
                onPointSelect={(point) => {
                  setValue("pointName", point.name, {
                    shouldValidate: true,
                  });
                  setValue(
                    "pointAddress",
                    `${point.address.line1}, ${point.address.line2}`,
                  );
                }}
              />
              {errors.pointName && (
                <p className="text-sm text-destructive mt-2">
                  {errors.pointName.message}
                </p>
              )}
            </div>
          </div>

          {shippingMethod === "courier" && (
            <div className="grid gap-4 mt-4 animate-in fade-in slide-in-from-top-4">
              <div className="space-y-2">
                <Label htmlFor="street">Ulica i numer domu/mieszkania</Label>
                <Input
                  id="street"
                  autoComplete="street-address"
                  {...register("street")}
                  className={errors.street ? "border-destructive" : ""}
                />
                {errors.street && (
                  <span className="text-xs text-destructive">
                    {errors.street.message}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="zip">Kod pocztowy</Label>
                  <Input
                    id="zip"
                    autoComplete="postal-code"
                    placeholder="00-000"
                    {...register("zip")}
                    className={errors.zip ? "border-destructive" : ""}
                  />
                  {errors.zip && (
                    <span className="text-xs text-destructive">
                      {errors.zip.message}
                    </span>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">Miejscowość</Label>
                  <Input
                    id="city"
                    autoComplete="address-level2"
                    {...register("city")}
                    className={errors.city ? "border-destructive" : ""}
                  />
                  {errors.city && (
                    <span className="text-xs text-destructive">
                      {errors.city.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </section>
      </div>

      <div className="lg:col-span-5 sticky top-24">
        {/* Podsumowanie */}
        <section className="rounded-2xl border bg-muted/30 p-6 sm:p-8 backdrop-blur-md">
          <h2 className="font-heading text-2xl font-semibold mb-6 text-secondary">
            Twoje zamówienie
          </h2>

          <ul className="space-y-4 mb-6">
            {items.map((item) => (
              <li key={item.product.id} className="flex items-center gap-4">
                <div className="size-12 overflow-hidden rounded-full border border-black/5 items-center justify-center">
                  <Image
                    src={item.product.images?.[0]}
                    alt={item.product.name}
                    width={128}
                    height={128}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-secondary truncate">
                    {item.product.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Ilość: {item.quantity}
                  </p>
                </div>
                <div className="font-semibold text-sm whitespace-nowrap">
                  {formatPrice(item.product.price * item.quantity)}
                </div>
              </li>
            ))}
          </ul>

          <div className="space-y-3 border-t border-border/20 pt-6 mb-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Suma częściowa</span>
              <span className="font-medium">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Dostawa{" "}
                {shippingMethod === "locker" ? "(Paczkomat 24/7)" : "(Kurier)"}
              </span>
              <span
                className={
                  isFreeShipping ? "text-green-600 font-medium" : "font-medium"
                }
              >
                {isFreeShipping
                  ? "Darmowa"
                  : formatPrice(
                      SHIPPING_COST[shippingMethod as "locker" | "courier"],
                    )}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-border/40 pt-6 mb-8">
            <span className="text-base font-semibold text-secondary">
              Razem (PLN)
            </span>
            <span className="font-heading text-3xl font-bold text-secondary">
              {formatPrice(total)}
            </span>
          </div>

          <div className="space-y-4">
            <Controller
              control={control}
              name="termsAccepted"
              render={({ field }) => (
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className={errors.termsAccepted ? "border-destructive" : ""}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-xs font-medium leading-tight text-muted-foreground cursor-pointer"
                    >
                      Akceptuję{" "}
                      <a
                        href="/regulamin"
                        target="_blank"
                        className="underline hover:text-primary"
                      >
                        regulamin sklepu
                      </a>{" "}
                      oraz zapoznałem się z{" "}
                      <a
                        href="/polityka-prywatnosci"
                        target="_blank"
                        className="underline hover:text-primary"
                      >
                        polityką prywatności
                      </a>
                      .
                    </label>
                  </div>
                </div>
              )}
            />
            {errors.termsAccepted && (
              <p className="text-xs text-destructive">
                {errors.termsAccepted.message}
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full text-lg shadow-xl"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Przetwarzanie..." : "Przejdź do płatności"}
            </Button>
          </div>
        </section>
      </div>
    </form>
  );
}
