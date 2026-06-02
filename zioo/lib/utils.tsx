import { clsx, type ClassValue } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return `${price.toFixed(2).replace(".", ",")} zł`;
}

export function formatSemiMarkdown(text: string) {
  return text.split("\n").map((line, i, arr) => (
    <React.Fragment key={i}>
      {line
        .split(/(\*\*.*?\*\*)/)
        .map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <b key={j}>{part.slice(2, -2)}</b>
          ) : (
            part
          ),
        )}
      {i < arr.length - 1 && <br />}
    </React.Fragment>
  ));
}

export const cleanupSemiMarkdown = (text: string) => text.replace(/\*\*/g, "");
