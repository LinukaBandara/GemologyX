import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the GemologyX website.",
};

export default function TermsPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">Terms of Use</h1>
      <p className="mt-2 text-xs text-muted">Placeholder — have this reviewed before launch.</p>
      <div className="prose-content mt-6 space-y-5 text-sm leading-relaxed text-foreground/90 md:text-base">
        <p>By using GemologyX, you agree to use the site&rsquo;s content and tools for personal, informational purposes.</p>
        <p>Content is provided &ldquo;as is&rdquo; for educational purposes. See our <a href="/disclaimer" className="text-accent hover:text-accent-strong">disclaimer</a> for important limitations, particularly regarding identification, origin, and valuation.</p>
        <p>All content is the property of GemologyX unless otherwise credited. Reproduction without permission is not permitted.</p>
      </div>
    </div>
  );
}
