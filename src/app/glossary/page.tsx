import type { Metadata } from "next";
import { GlossaryBrowser } from "@/components/glossary-browser";

export const metadata: Metadata = {
  title: "Gemstone Glossary",
  description:
    "A glossary of gemological terminology, from asterism to treatment.",
};

export default function GlossaryPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <header className="border-b border-border pb-8">
        <div className="gx-eyebrow"><span /> Gemological Reference</div>
        <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight md:text-4xl">
          Glossary
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          A clear reference for the terminology used to describe, identify, and study gemstones.
        </p>
      </header>
      <div className="mt-10">
        <GlossaryBrowser />
      </div>
    </div>
  );
}
