"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { AddToCartButton } from "@/components/add-to-cart-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { X, ZoomIn } from "lucide-react";
import { Button } from "./ui/button";

export function ProductDetails({ product }: { product: Product }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [api, setApi] = useState<any>();
  const [selectedBundleId, setSelectedBundleId] = useState<string>(
    product.bundles[0]?.id,
  );

  const selectedBundle =
    product.bundles.find((b) => b.id === selectedBundleId) ||
    product.bundles[0];

  return (
    <>
      <div className="flex flex-col md:flex-row w-full h-full min-h-full md:max-h-[85vh] overflow-hidden bg-background">
        {/* Visuals - Left Column */}
        <div className="w-full md:w-1/2 lg:w-[55%] relative flex flex-col bg-muted/30">
          <div className="relative flex-1 min-h-[40vh] md:min-h-0 w-full group overflow-hidden bg-muted/20">
            <Carousel
              className="w-full h-full"
              opts={{ loop: true }}
              setApi={setApi}
            >
              <CarouselContent className="h-full">
                {product.images?.map((image, idx) => (
                  <CarouselItem
                    key={idx}
                    onClick={() => {
                      setActiveImageIndex(idx);
                      setLightboxOpen(true);
                    }}
                    className="relative cursor-zoom-in h-[40vh] md:h-screen lg:h-screen"
                  >
                    <Image
                      src={image}
                      alt={`${product.name} - Image ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-102"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none">
                      <ZoomIn className="text-white opacity-0 group-hover:opacity-70 w-10 h-10 duration-300 transition-opacity" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {product.images && product.images.length > 1 && (
                <>
                  <CarouselPrevious className="left-6 opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-hover:-translate-y-1/2 group:-translate-y-1/2 bg-white/60 hover:bg-white/90 backdrop-blur-sm border-none hover:translate-y-0" />
                  <CarouselNext className="right-6 opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-hover:-translate-y-1/2 group:-translate-y-1/2 bg-white/60 hover:bg-white/90 backdrop-blur-sm border-none hover:translate-y-0" />
                </>
              )}
            </Carousel>
          </div>

          {/* Thumbnail Navigation (if more than 1 image) */}
          {product.images && product.images.length > 1 && (
            <div className="absolute bottom-0 sm:bottom-6 left-0 right-0 flex justify-center gap-3 px-4 z-10">
              <div className="flex gap-3 bg-black/20 p-2 rounded-2xl backdrop-blur-md">
                {product.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => api?.scrollTo(idx)}
                    className="relative h-12 w-18 sm:h-14 sm:w-20 shrink-0 overflow-hidden rounded-xl border border-white/20 transition-all hover:scale-105 hover:border-white focus:outline-none focus:ring-2 focus:ring-white bg-black/50"
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className="object-cover opacity-80 hover:opacity-100 transition-opacity pointer-events-none"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Details - Right Column */}
        <div className="w-full md:w-1/2 lg:w-[45%] flex flex-col h-full bg-background relative z-20 shadow-[-10px_0_30px_rgba(0,0,0,0.03)] border-l border-border/10 overflow-hidden">
          {/* Crooked Label for Terpene products - Page Version */}
          {product.terpeneStyle && (
            <div
              className="absolute -right-16 top-10 z-30 w-64 py-3 text-center transform rotate-45 shadow-2xl select-none pointer-events-none"
              style={{
                backgroundColor: product.terpeneStyle.primary,
                color: product.terpeneStyle.text,
              }}
            >
              <span className="text-xs font-black uppercase tracking-[0.3em]">
                Terpene Infused
              </span>
            </div>
          )}

          {/* Scrollable content container */}
          <div className="flex-1 overflow-y-scroll px-6 py-10 md:px-10 lg:px-14 pb-32">
            {product.primaryTerpene && (
              <div
                className={`mb-6 inline-flex flex-col items-start w-fit px-6 py-4 rounded-2xl border-2 shadow-md transform -rotate-1 transition-all hover:rotate-0 duration-500 ${!product.terpeneStyle ? "border-primary/10 bg-muted/40" : ""}`}
                style={
                  product.terpeneStyle
                    ? {
                        borderColor: product.terpeneStyle.primary,
                        backgroundColor: `${product.terpeneStyle.primary}08`,
                      }
                    : {}
                }
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1 opacity-60"
                  style={{
                    color: product.terpeneStyle?.primary || "var(--primary)",
                  }}
                >
                  Profil Terpenowy
                </span>
                <span
                  className="text-2xl font-heading font-black tracking-tight"
                  style={{
                    color: product.terpeneStyle?.primary || "var(--secondary)",
                  }}
                >
                  {product.primaryTerpene}
                </span>
              </div>
            )}

            <div className="flex items-start justify-between gap-4 mb-4">
              <span
                className="text-3xl lg:text-5xl font-heading font-black tracking-tighter"
                style={
                  product.terpeneStyle
                    ? { color: product.terpeneStyle.primary }
                    : {}
                }
              >
                {product.name}
              </span>
              <span
                className="text-3xl lg:text-5xl font-heading font-black whitespace-nowrap"
                style={
                  product.terpeneStyle
                    ? { color: product.terpeneStyle.primary }
                    : { color: "var(--primary)" }
                }
              >
                {formatPrice(selectedBundle?.price || 0)}
              </span>
            </div>
            <p className="text-xs font-sans text-muted-foreground font-black tracking-widest uppercase mb-10 opacity-70">
              {product.tagline}
            </p>

            {/* Bundle Selector */}
            {product.bundles.length > 1 && (
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-sans uppercase font-bold tracking-widest text-secondary">
                    Wybierz ilość
                  </span>
                </div>
                <div className="flex gap-3">
                  {product.bundles.map((bundle) => (
                    <button
                      key={bundle.id}
                      onClick={() => setSelectedBundleId(bundle.id)}
                      className={`flex-1 py-3 px-2 sm:px-4 rounded-xl border-2 transition-all flex flex-col items-center gap-1 cursor-pointer ease-out-expo duration-300 ${
                        selectedBundleId === bundle.id
                          ? "border-primary bg-primary/10 scale-100 shadow-sm"
                          : "border-border/50 hover:border-border scale-[0.98] opacity-70 hover:opacity-100"
                      }`}
                      style={
                        selectedBundleId === bundle.id && product.terpeneStyle
                          ? {
                              borderColor: product.terpeneStyle.primary,
                              backgroundColor: `${product.terpeneStyle.primary}08`,
                            }
                          : {}
                      }
                    >
                      <span
                        className="font-heading font-black text-xl"
                        style={
                          selectedBundleId === bundle.id && product.terpeneStyle
                            ? { color: product.terpeneStyle.primary }
                            : {}
                        }
                      >
                        {bundle.size} szt.
                      </span>
                      <span className="text-xs font-sans font-medium whitespace-nowrap opacity-80">
                        {formatPrice(bundle.price)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Main Description */}
            <p
              className="text-xl text-secondary/90 font-medium mb-12 leading-relaxed italic border-l-4 pl-6"
              style={{
                borderColor: product.terpeneStyle?.primary || "var(--primary)",
              }}
            >
              {product.subheadline}
            </p>

            <div className="space-y-10">
              {/* Section 1: Receptura */}
              <div
                className="rounded-xl bg-muted p-8 md:p-10 border transition-all duration-700"
                style={
                  product.terpeneStyle
                    ? {
                        borderColor: `${product.terpeneStyle.primary}50`,
                      }
                    : {
                        borderColor: "var(--border)",
                      }
                }
              >
                <h3
                  className="text-xs font-heading font-black italic uppercase tracking-[0.4em] mb-8 flex items-center gap-4"
                  style={{
                    color: product.terpeneStyle?.primary || "var(--primary)",
                  }}
                >
                  <span className="h-px flex-1 bg-primary"></span>
                  Receptura & Działanie
                  <span className="h-px flex-1 bg-primary"></span>
                </h3>
                <p className="text-secondary/80 leading-relaxed text-md mb-8 font-medium">
                  {product.ingredientsDescription}
                </p>

                <ul className="space-y-5">
                  {product.blendProfile.map((ingredient) => (
                    <li key={ingredient.herb} className="flex flex-col gap-2">
                      <div className="flex items-baseline justify-between mb-0.5">
                        <span className="text-sm font-mono font-bold uppercase tracking-wider text-secondary/90">
                          {ingredient.herb}
                        </span>
                        <span
                          className="text-xs font-heading font-black"
                          style={{
                            color:
                              product.terpeneStyle?.primary || "var(--primary)",
                          }}
                        >
                          {ingredient.pct}%
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-white shadow-inner overflow-hidden border border-black/5">
                        <div
                          className="h-full rounded-full transition-all duration-300 ease-out-expo"
                          style={{
                            width: `${ingredient.pct}%`,
                            backgroundColor: product.terpeneStyle
                              ? product.terpeneStyle.primary
                              : "var(--secondary)",
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 2: Usage */}
              <div
                className="rounded-[2.5rem] p-8 md:p-10 border transform hover:-rotate-1 transition-transform duration-500 shadow-sm bg-white"
                style={{
                  borderColor: `${product.terpeneStyle?.primary || "var(--border)"}40`,
                }}
              >
                <h3 className="text-[10px] font-heading font-black italic uppercase tracking-[0.4em] mb-6 flex items-center gap-4 text-secondary/40">
                  <span className="h-px bg-border flex-1"></span>
                  Jak Stosować
                  <span className="h-px bg-border flex-1"></span>
                </h3>
                <p className="text-secondary/70 leading-relaxed text-md text-center font-medium">
                  {product.usageInstructions}
                </p>
              </div>
            </div>
          </div>

          {/* Sticky footer for Add to Cart */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-background via-background/95 to-transparent pt-12">
            <AddToCartButton product={product} bundle={selectedBundle} />
          </div>
        </div>
      </div>

      {/* Fullscreen Fixed Lightbox Override */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-100 bg-black/80 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 z-110 bg-white/10 text-white hover:bg-white/20 border-white/20"
          >
            <X className="w-6 h-6" />
          </Button>

          <div className="w-full h-full flex items-center justify-center p-4">
            <Carousel
              className="w-full max-w-[1400px] h-[90vh]"
              opts={{ startIndex: activeImageIndex, loop: true }}
            >
              <CarouselContent className="h-full">
                {product.images?.map((image, idx) => (
                  <CarouselItem
                    key={idx}
                    className="h-[90vh] relative flex items-center justify-center"
                  >
                    <div className="relative w-full h-[85vh] md:h-full">
                      <Image
                        src={image}
                        alt={`${product.name} - Fullscreen ${idx + 1}`}
                        fill
                        className="object-contain"
                        quality={100}
                        sizes="100vw"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {product.images && product.images.length > 1 && (
                <>
                  <CarouselPrevious className="left-4 md:left-10 h-12 w-12" />
                  <CarouselNext className="right-4 md:right-10 h-12 w-12" />
                </>
              )}
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
}
