import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Manrope, Noto_Sans_Sinhala } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteLoader } from "@/components/site-loader";

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const sinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sinhala",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gemologyx.com"),
  title: {
    default: "GemologyX — The Digital Guide to Gemstones",
    template: "%s",
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
    <html lang="en" className={`${sans.variable} ${serif.variable} ${sinhala.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-3 focus:text-foreground focus:shadow-lg">Skip to main content</a>
        <SiteLoader />
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="min-w-0 flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
