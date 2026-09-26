import type { Metadata } from "next";
import { ArticleLayout, ArticleSection } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "What Makes a Sapphire Valuable?",
  description: "The main factors gemologists and dealers weigh when assessing sapphire value: colour, clarity, cut, carat, treatment, and origin.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="Sapphire"
      readTime="5 min read"
      title="What Makes a Sapphire Valuable?"
      crumbHref="/gemstones/sapphire"
      crumbLabel="Sapphire"
      related={[
        { label: "Sapphire overview", href: "/gemstones/sapphire" },
        { label: "What Is Ceylon Sapphire?", href: "/learn/sapphire/what-is-ceylon-sapphire" },
        { label: "Heated vs Unheated", href: "/learn/heated-vs-unheated" },
      ]}
    >
      <ArticleSection heading="Colour comes first">
        <p>
          Colour is generally the single most influential factor in sapphire value — specifically
          hue, saturation, and tone. A medium-toned, vividly saturated blue is typically valued more
          than either an overly dark, blackish blue or an overly pale, washed-out blue.
        </p>
      </ArticleSection>
      <ArticleSection heading="Clarity">
        <p>
          Sapphire is not expected to be flawless, but heavily included stones with inclusions that
          reach the surface or affect transparency are valued lower than cleaner material of
          comparable colour.
        </p>
      </ArticleSection>
      <ArticleSection heading="Cut quality">
        <p>
          A well-proportioned cut maximizes a sapphire's colour and brilliance; an poorly cut stone
          can look dull or display uneven colour ("windowing" or dark extinction) even with good
          rough material to start.
        </p>
      </ArticleSection>
      <ArticleSection heading="Carat weight, treatment, and origin">
        <p>
          Value generally increases non-linearly with carat weight — larger fine sapphires are
          disproportionately rarer and more valuable per carat than smaller ones. Treatment status
          matters significantly: unheated stones of fine colour command a substantial premium over
          heated stones of similar appearance. Where a supportable laboratory origin opinion exists,
          certain origins (such as Kashmir, or in some markets, Sri Lanka) can add further premium,
          though this varies by market and individual stone quality.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}
