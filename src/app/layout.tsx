import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://gemologyx.com"),
  title: {
    default: "GemologyX — The Digital Guide to Gemstones",
    template: "%s | GemologyX",
  },
  description:
    "Explore gemstone characteristics, origins, treatments, certification, buying knowledge and practical tools — all in one place.",
  openGraph: {
    type: "website",
    siteName: "GemologyX",
    title: "GemologyX — The Digital Guide to Gemstones",
    description:
      "Explore gemstone characteristics, origins, treatments, certification, buying knowledge and practical tools — all in one place.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GemologyX — The Digital Guide to Gemstones",
    description:
      "Explore gemstone characteristics, origins, treatments, certification, buying knowledge and practical tools — all in one place.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
