import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteLoader } from "@/components/site-loader";

export const metadata: Metadata = {
  metadataBase: new URL("https://gemologyx.com"),
  title: {
    default: "GemologyX — The Digital Guide to Gemstones",
    template: "%s | GemologyX",
  },
  description:
    "Explore gemstone characteristics, origins, treatments, certification, buying knowledge and practical tools — all in one place.",
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
  openGraph: {
    type: "website",
    siteName: "GemologyX",
    title: "GemologyX — The Digital Guide to Gemstones",
    description:
      "Explore gemstone characteristics, origins, treatments, certification, buying knowledge and practical tools — all in one place.",
    images: [{ url: "/gemologyx-social.svg", width: 1200, height: 630, alt: "GemologyX — Knowledge, Science, Integrity" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GemologyX — The Digital Guide to Gemstones",
    description:
      "Explore gemstone characteristics, origins, treatments, certification, buying knowledge and practical tools — all in one place.",
    images: ["/gemologyx-social.svg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteLoader />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
