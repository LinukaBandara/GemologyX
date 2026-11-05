import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./brand-compat.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SiteLoader } from "@/components/site-loader";

export const metadata: Metadata = {
  metadataBase: new URL("https://gemologyx.com"),
  title: { default: "GemologyX — The Science, The Origin, The Gem", template: "%s | GemologyX" },
  description: "Explore gemstone science, mineral properties, origins, treatments, identification and Sri Lanka's remarkable gem heritage through the GemologyX reference library.",
  openGraph: { type: "website", siteName: "GemologyX", title: "GemologyX — The Science, The Origin, The Gem", description: "A considered guide to gemstone science, origins and the world of gems." },
  twitter: { card: "summary_large_image", title: "GemologyX — The Science, The Origin, The Gem", description: "A considered guide to gemstone science, origins and the world of gems." },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en" className="h-full antialiased"><body className="min-h-full flex flex-col bg-background text-foreground"><SiteLoader /><SiteHeader /><main className="flex-1">{children}</main><SiteFooter /></body></html>;
}
