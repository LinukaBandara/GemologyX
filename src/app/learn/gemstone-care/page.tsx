import type { Metadata } from "next";
import { ArticleLayout, ArticleSection, QuickAnswer } from "@/components/article-layout";
import { CarePreparationChecklist } from "@/components/interactive-learning-tools";

export const metadata: Metadata = {
  title: "Gemstone Care: Cleaning, Storage and Treatment Risks",
  description: "Practical gemstone care guidance: how to choose a cleaning method, why treatments matter, and when to ask a professional.",
  alternates: { canonical: "/learn/gemstone-care" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="Care and Durability"
      readTime="6 min read"
      title="How to Care for Gemstones"
      crumbHref="/learn"
      crumbLabel="Learning Guides"
      lastReviewed="2026-11-05"
      related={[
        { label: "Mohs hardness reference", href: "/tools/mohs-hardness" },
        { label: "Sapphire profile", href: "/gemstones/sapphire" },
      ]}
    >
      <QuickAnswer>
        <p>
          Cleaning advice depends on the gemstone, treatment, setting and condition. Mild soap and warm water suit many coloured gems, but no one method is right for every stone. If you do not know the material or treatment, avoid steam and ultrasonic cleaning until a jeweller or gemologist has checked it.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Hardness is only one part of durability">
        <p>
          Mohs hardness compares resistance to scratching. Toughness, cleavage, fractures, porosity and the way a stone is set affect how it handles impacts and cleaning. A high hardness number does not make a gemstone immune to chipping or breakage.
        </p>
        <p>
          Before cleaning jewellery, check both the stone and its setting. A loose prong or a stone whose girdle touches another stone can be damaged even when the gem itself is relatively hard.
        </p>
      </ArticleSection>

      <ArticleSection heading="Choose a gentle method, then check the exceptions">
        <p>
          The Gemological Institute of America (GIA) recommends warm water, mild soap and a soft brush for many coloured gems. Its sapphire guide also recommends warm soapy water for sapphire. These are general recommendations: porous, coated, dyed, filled or otherwise treated materials may need a different approach.
        </p>
        <p>
          Do not assume that a method is safe because it is commonly used for jewellery. If the stone&apos;s identity or treatment is uncertain, ask a qualified jeweller or gemologist for stone-specific advice before using heat, steam, chemicals or mechanical cleaning.
        </p>
      </ArticleSection>

      <ArticleSection heading="Why ultrasonic and steam cleaning need caution">
        <p>
          Ultrasonic cleaners create vibration and heat; steamers expose jewellery to high temperature and pressure. GIA cautions against ultrasonic or steam cleaning for several situations, including fracture-filled stones, some treated gems, porous organic materials and stones vulnerable to heat or sudden temperature change. These methods can also loosen a setting.
        </p>
        <p>
          An unknown treatment history is a reason to pause, not to guess. A laboratory report may provide treatment observations, but cleaning instructions should account for the particular gem and mounting.
        </p>
      </ArticleSection>

      <ArticleSection heading="Store and wear jewellery with care">
        <p>
          Store pieces separately in a soft pouch or lined compartment so gems and metal do not scratch one another. Remove jewellery before strenuous work or activities where it could strike a hard surface. Check settings periodically and seek professional attention if a stone moves or a setting is damaged.
        </p>
      </ArticleSection>

      <CarePreparationChecklist locale="en" />

      <ArticleSection heading="Sources and further reading">
        <ul>
          <li><a href="https://www.gia.edu/gia-news-research-tips-caring-jewelry" target="_blank" rel="noreferrer">GIA: Tips on Caring for Jewelry</a></li>
          <li><a href="https://www.gia.edu/emerald-care-cleaning" target="_blank" rel="noreferrer">GIA: Emerald Care and Cleaning</a></li>
          <li><a href="https://4cs.gia.edu/en-us/blog/gems-ultrasonic-cleaners/" target="_blank" rel="noreferrer">GIA: Gems and Ultrasonic Cleaners</a></li>
        </ul>
        <p>These references describe general gem-care principles. Follow guidance for the exact stone, treatment and setting.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
