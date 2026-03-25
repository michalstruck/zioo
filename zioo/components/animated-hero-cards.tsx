"use client";

import Image from "next/image";
import { useState } from "react";

type Card = {
  src: string;
  alt: string;
  label: string;
  /** Base rotation in degrees when fanned out */
  rotate: number;
  /** Vertical offset so cards stack naturally */
  translateY: number;
  /** Base (1x) horizontal nudge from pivot */
  translateX: number;
  /** z-index in fanned state */
  z: number;
};

const CARDS: Card[] = [
  {
    src: "/deep_unwind_blend.png",
    alt: "Deep Unwind blend",
    label: "Slep",
    rotate: -14,
    translateY: 18,
    translateX: -72,
    z: 1,
  },
  {
    src: "/clear_mind_blend.png",
    alt: "Clear Mind blend",
    label: "Fokus",
    rotate: 0,
    translateY: 0,
    translateX: 0,
    z: 3,
  },
  {
    src: "/social_spark_blend.png",
    alt: "Social Spark blend",
    label: "Fresz",
    rotate: 14,
    translateY: 18,
    translateX: 72,
    z: 2,
  },
];

export function AnimatedHeroCards() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className="relative flex items-end justify-center w-80 h-[380px] max-sm:w-[260px] max-sm:h-[310px]"
      aria-label="Zioo product card fan"
    >
      {CARDS.map((card, i) => {
        const isHovered = hovered === i;
        const isDimmed = hovered !== null && !isHovered;

        return (
          <div
            key={card.src}
            className="hero-card-wrapper absolute bottom-0 left-1/2 flex flex-col items-center gap-2.5 origin-bottom"
            style={
              {
                "--rotate": `${card.rotate}deg`,
                "--tx": `${card.translateX}px`,
                "--ty": `${card.translateY}px`,
                "--delay": `${i * 120}ms`,
                opacity: isDimmed ? 0.6 : 1,
                filter: isDimmed ? "saturate(0.5)" : "saturate(1)",
                zIndex: isHovered ? 10 : card.z,
                transition: "opacity 0.3s ease, filter 0.3s ease",
              } as React.CSSProperties
            }
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Card shell */}
            <div
              className="w-50 md:w-80 lg:w-70 xl:w-90 rounded-2xl overflow-hidden bg-white border border-black/6 cursor-pointer"
              style={{
                boxShadow: isHovered
                  ? "0 20px 48px rgba(0,0,0,0.16), 0 4px 12px rgba(0,0,0,0.10)"
                  : "0 4px 12px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.08)",
                transform: isHovered
                  ? "translateY(-18px) scale(1.06)"
                  : undefined,
                transition:
                  "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <Image
                src={card.src}
                alt={card.alt}
                width={220}
                height={300}
                className="block w-full h-auto object-cover"
                priority={i === 1}
              />
            </div>

            {/* Label */}
            <span
              className="text-[9px] font-bold tracking-[0.18em] uppercase text-secondary transition-opacity duration-300"
              style={{ opacity: isHovered ? 1 : 0.55 }}
            >
              {card.label}
            </span>
          </div>
        );
      })}

      {/*
        Minimal style block — only for things Tailwind cannot express:
        1. @keyframes that reference per-card CSS vars (--tx, --ty, --rotate)
        2. The wrapper's var()-driven transform + animation declaration
        3. Responsive --tx scale override
      */}
      <style>{`
        .hero-card-wrapper {
          animation: card-entrance 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--delay);
          transform:
            translateX(calc(-50% + var(--tx)))
            translateY(var(--ty))
            rotate(var(--rotate));
        }

        @keyframes card-entrance {
          from {
            transform:
              translateX(-50%)
              translateY(60px)
              rotate(0deg);
            opacity: 0;
          }
          to {
            transform:
              translateX(calc(-50% + var(--tx)))
              translateY(var(--ty))
              rotate(var(--rotate));
            opacity: 1;
          }
        }

        @media (max-width: 480px) {
          .hero-card-wrapper {
            --tx: calc(var(--tx) * 0.75);
          }
        }
      `}</style>
    </div>
  );
}
