import type { Metadata } from "next";
import { GlossaryBrowser } from "@/components/glossary-browser";

export const metadata: Metadata = {
  title: "Gemstone Glossary",
  description: "A glossary of gemological terminology, from asterism to treatment.",
};

export default function GlossaryPage() {
  return <div className="container-page py-12 md:py-16">
    <header className="directory-hero">
      <div className="luxury-eyebrow"><span /> GEMOLOGICAL REFERENCE</div>
      <h1>Glossary</h1>
      <p>A clear reference for the terminology used to describe, identify, and study gemstones.</p>
    </header>
    <div className="mt-10"><GlossaryBrowser /></div>
  </div>;
}
