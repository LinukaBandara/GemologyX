import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "GemologyX is an independent educational platform focused on making gemstone knowledge easier to understand.",
};

export default function AboutPage() {
  return (
    <div className="container-page max-w-2xl py-14">
      <h1 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">About GemologyX</h1>
      <div className="prose-content mt-6 space-y-5 text-sm leading-relaxed text-foreground/90 md:text-base">
        <p>
          GemologyX is an independent educational platform focused on making gemstone knowledge
          easier to understand. Our mission is to make gemology more accessible through clear
          explanations, useful tools, and reliable references.
        </p>
        <p>
          GemologyX is not a jewellery store or a marketplace. We do not sell gemstones directly,
          and our content is not designed to sell any particular product. Where we mention external
          resources, we aim to do so only where it is genuinely relevant to the topic at hand.
        </p>
        <p>
          Content on GemologyX is prepared and reviewed by the <strong>GemologyX Editorial Team</strong>.
          See our <a href="/editorial-standards" className="text-accent hover:text-accent-strong">editorial
          standards</a> for how we select sources and handle claims that could affect a reader&rsquo;s
          buying decisions.
        </p>
      </div>
    </div>
  );
}
