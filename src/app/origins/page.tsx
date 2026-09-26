import type { Metadata } from "next";
import Link from "next/link";
import { origins } from "@/data/origins";

export const metadata: Metadata = {
  title: "Gemstone Origins",
  description: "Explore where gemstones come from, country by country, with geological and historical context.",
};

export default function OriginsPage() {
  return (
    <div className="container-page py-14">
      <p className="text-xs font-medium tracking-[0.16em] text-teal uppercase">Geography</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
        Where Do Gemstones Come From?
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-muted md:text-base">
        Geographic origin can, in some cases, be scientifically assessed by a gemological
        laboratory — but it cannot reliably be determined from appearance alone.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {origins.map((o) => (
          <Link
            key={o.slug}
            href={`/origins/${o.slug}`}
            className="card-hover flex flex-col rounded-xl border border-border bg-surface p-5"
          >
            <h2 className="font-serif text-lg font-semibold">{o.name}</h2>
            <p className="mt-2 text-sm text-muted">{o.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
