import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using GemologyX’s educational gemstone information and online tools.",

  alternates: { canonical: "/terms" },
  openGraph: { type: "website", images: ["/gemologyx-social.svg"], title: "Terms of Use", description: "Terms governing access to and use of GemologyX educational content and tools.", url: "/terms" },
  twitter: { card: "summary_large_image", images: ["/gemologyx-social.svg"], title: "Terms of Use", description: "Terms governing access to and use of GemologyX educational content and tools." },
};

export default function TermsPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">Terms of Use</h1>
      <p className="mt-2 text-sm text-muted">Last updated: November 5, 2026</p>
      <div className="prose-content mt-6 space-y-5 text-sm leading-relaxed text-foreground/90 md:text-base">
        <p>These terms apply when you access or use the GemologyX website. By using the site, you agree to use it lawfully and in a way that does not interfere with its operation or other visitors’ access.</p>
        <section>
          <h2 className="font-serif text-xl font-semibold text-accent-strong">Educational information</h2>
          <p className="mt-2">Articles, gemstone profiles, calculators, and other tools are provided for general education. They are not a substitute for examination by a qualified gemologist or a report from an appropriately equipped laboratory. Do not rely on website content alone to identify, buy, sell, insure, treat, or value a gemstone. Read the <a href="/disclaimer" className="text-accent hover:text-accent-strong">site disclaimer</a> before relying on information for a decision.</p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-accent-strong">Use of content</h2>
          <p className="mt-2">Unless a page says otherwise, GemologyX page text and original site materials are made available for personal, non-commercial reading. You may link to a page and quote a short passage with clear attribution. Do not republish substantial portions, present our work as your own, or use site materials commercially without permission. Third-party names, marks, photographs, and credited material remain subject to their respective owners’ rights.</p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-accent-strong">Tools, links, and availability</h2>
          <p className="mt-2">Tools and reference material are offered without a guarantee that they will be complete, current, uninterrupted, or suitable for a particular purpose. External links are provided for convenience; GemologyX does not control or endorse every third-party page and is not responsible for its content or availability. We may update, remove, or change site material and features.</p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-accent-strong">Liability and local rights</h2>
          <p className="mt-2">To the extent permitted by applicable law, GemologyX is not responsible for losses arising from relying on general website information or from temporary site unavailability. Nothing in these terms limits rights or remedies that cannot lawfully be limited where you live.</p>
        </section>
        <section>
          <h2 className="font-serif text-xl font-semibold text-accent-strong">Updates and contact</h2>
          <p className="mt-2">These terms may change as the site develops; the date above indicates the latest revision. The site has not yet published an operating contact channel or identified a legal entity and governing jurisdiction. Those details should be added when established. The <a href="/contact" className="text-accent hover:text-accent-strong">contact page</a> currently cannot deliver messages.</p>
        </section>
      </div>
    </div>
  );
}
