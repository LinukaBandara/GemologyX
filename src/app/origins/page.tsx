import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { origins } from "@/data/origins";

export const metadata: Metadata = {
  title: "Famous Gemstone Origins | GemologyX",
  description: "Explore the world's best-known gemstone sources and trading centres through photography, geology and gem history.",
  alternates: { canonical: "/origins" },
  openGraph: { type: "website", images: ["/gemologyx-social.svg"], title: "Famous Gemstone Origins", description: "Explore notable gemstone sources and trading centres through geology, photography and gem history.", url: "/origins" },
  twitter: { card: "summary_large_image", images: ["/gemologyx-social.svg"], title: "Famous Gemstone Origins", description: "Explore notable gemstone sources and trading centres through geology, photography and gem history." },
};

export default function OriginsPage() {
  const featuredOrigins = origins.filter((origin) => origin.slug !== "kashmir");

  return (
    <div className="container-page py-12 md:py-16">
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://gemologyx.com/" }, { name: "Gemstone Origins", url: "https://gemologyx.com/origins" }]} />
      <header className="mx-auto max-w-3xl border-b border-border pb-9 text-center">
        <div className="gx-eyebrow justify-center"><span /> WORLD GEMSTONE ATLAS</div>
        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
          Famous Gemstone Origins
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Discover the places best known for the world’s most celebrated gemstones — from Ceylon sapphires and Madagascar deposits to Thailand’s legendary gem trade.
        </p>
      </header>

      <section aria-label="Famous gemstone origins" className="gx-origins-grid mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredOrigins.map((origin, index) => (
          <Link key={origin.slug} href={`/origins/${origin.slug}`} className="gx-card group overflow-hidden">
            {origin.image ? (
              <div className="relative aspect-[4/3] overflow-hidden bg-[#e9e2d7]">
                <Image src={origin.image.src} alt={origin.image.alt} fill unoptimized sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                <span className="absolute left-4 top-4 rounded-full bg-[#101820]/75 px-3 py-1 text-xs font-semibold tracking-wide text-white">{String(index + 1).padStart(2, "0")}</span>
              </div>
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center bg-[#eee7dc] font-serif text-5xl text-[#8b7557]">{String(index + 1).padStart(2, "0")}</div>
            )}
            <div className="p-5 md:p-6">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-serif text-2xl font-semibold text-foreground transition-colors group-hover:text-accent">{origin.name}</h2>
                <ArrowUpRight size={20} className="mt-1 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
              </div>
              <p className="mt-2 text-base leading-relaxed text-muted">{origin.summary}</p>
              {origin.gemstones && <p className="mt-4 border-t border-border pt-3 text-sm leading-relaxed text-muted">{origin.gemstones.join(" · ")}</p>}
              {origin.image && <p className="mt-3 text-xs text-muted">Photo: {origin.image.credit}</p>}
            </div>
          </Link>
        ))}
      </section>

      <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-muted">
        Kashmir is covered as a historic sapphire-producing region within the atlas, rather than presented as a country. A gemstone’s appearance alone cannot establish its geographic origin.
      </p>
    </div>
  );
}
