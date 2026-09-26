import type { Metadata } from "next";
import { GlossaryBrowser } from "@/components/glossary-browser";

export const metadata: Metadata = {
  title: "Gemstone Glossary",
  description: "A glossary of gemological terminology, from asterism to treatment.",
};

export default function GlossaryPage() {
  return (
    <div className="container-page py-14">
      <p className="text-xs font-medium tracking-[0.16em] text-teal uppercase">Reference</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight md:text-4xl">Glossary</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted md:text-base">
        Gemological terminology, from asterism to treatment.
      </p>
      <div className="mt-6">
        <GlossaryBrowser />
      </div>
    </div>
  );
}
