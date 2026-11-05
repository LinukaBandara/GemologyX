import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about GemologyX, an educational reference for gemstones, gemology, and Sri Lankan gem knowledge.",
};

export default function AboutPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">About GemologyX</h1>
      <div className="prose-content mt-6 space-y-5 text-sm leading-relaxed text-foreground/90 md:text-base">
        <p>
          GemologyX is an educational reference for gemstones and gemology. It brings together
          plain-language explanations, reference guides, interactive learning tools, and links to
          further sources so readers can build a foundation and know when expert examination is needed.
        </p>
        <p>
          GemologyX is not a jewellery store or a marketplace. We do not sell gemstones directly,
          and our content is not designed to sell any particular product. Where we mention external
          resources, we aim to do so only where it is genuinely relevant to the topic at hand.
        </p>
        <p>
          The English library covers general gemology topics. The dedicated Sinhala learning section
          focuses on Sri Lankan gemstones, places, terminology, trade, and reader needs. Coverage and
          review status vary by page; see our <a href="/editorial-standards" className="text-accent hover:text-accent-strong">editorial
          standards</a> for the approach used to develop and improve this library.
        </p>
      </div>
    </div>
  );
}
