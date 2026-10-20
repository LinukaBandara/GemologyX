import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { origins } from "@/data/origins";

export const metadata: Metadata = {
  title: "Gemstone Origins",
  description:
    "Explore where gemstones come from, country by country, with geological and historical context.",
};

export default function OriginsPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <header className="border-b border-border pb-8">
        <div className="gx-eyebrow"><span /> Geological Atlas</div>
        <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          Where Do Gemstones Come From?
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          Explore geographic origins with geological and historical context. Origin cannot reliably be determined from appearance alone.
        </p>
      </header>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {origins.map((o, i) => (
          <Link
            key={o.slug}
            href={`/origins/${o.slug}`}
            className="gx-card group flex items-start gap-4 p-5"
          >
            <span className="mt-0.5 text-xs font-bold tracking-wider text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <h2 className="font-serif text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                {o.name}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{o.summary}</p>
            </div>
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
