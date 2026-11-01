import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Search GemologyX",
  description: "Search the GemologyX gemstone reference library.",
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function SearchLayout({ children }: { children: ReactNode }) {
  return children;
}
