"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

interface GeowidgetProps {
  onPointSelect: (point: {
    name: string;
    address: { line1: string; line2: string };
  }) => void;
}

const token = process.env.NEXT_PUBLIC_INPOST_GEOWIDGET_TOKEN;
// it's preloaded in layout to avoid flickering
export function Geowidget({ onPointSelect }: GeowidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointSelect = (event: any) => {
      onPointSelect(event.detail || event.details);
    };

    document.addEventListener("onpointselect", handlePointSelect);
    return () => {
      document.removeEventListener("onpointselect", handlePointSelect);
    };
  }, [onPointSelect]);

  // Using dangerouslySetInnerHTML to avoid TypeScript JSX custom element errors natively
  return (
    <div className="w-full flex-col flex gap-2">
      <div
        ref={containerRef}
        className="w-full h-[500px] border border-border/20 rounded-xl overflow-hidden shadow-sm"
        dangerouslySetInnerHTML={{
          __html: `<inpost-geowidget onpoint="onpointselect" token="${token}" language="pl" config="parcelcollect"></inpost-geowidget>`,
        }}
      />
    </div>
  );
}
