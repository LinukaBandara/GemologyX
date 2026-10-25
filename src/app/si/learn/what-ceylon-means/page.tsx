import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Ceylon Sapphire කියන්නේ මොකක්ද? | GemologyX",
  description:
    "Ceylon / Sri Lanka origin claims — trade use, lab origin opinion, and why the name alone is not a guarantee.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="Ceylon Sapphire කියන්නේ මොකක්ද?"
      crumbHref="/si/learn/sri-lankan-blue-sapphire"
      crumbLabel="ශ්‍රී ලංකා නිල්මැණික්"
      lastReviewed="2026-10-25"
      related={[
        { label: "ශ්‍රී ලංකා නිල්මැණික්", href: "/si/learn/sri-lankan-blue-sapphire" },
        { label: "Origin opinion vs guarantee", href: "/si/learn/origin-opinion-vs-guarantee" },
        { label: "නිල්මැණික් මාර්ගෝපදේශය", href: "/si/learn/blue-sapphire-complete-guide" },
      ]}
    >
      <QuickAnswer>
        <p>
          “Ceylon sapphire” is widely used to mean sapphire associated with Sri
          Lanka — often light-to-medium blue, bright. In trade it can be
          marketing language. On a lab report, origin is typically an *opinion*,
          not a GPS certificate. Ask how origin was determined; do not pay a
          premium on the word alone.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Trade name vs lab opinion">
        <p>Dealers may use Ceylon for style/colour. Labs may state “Sri Lanka” as origin opinion based on inclusions and data — still opinion-level in most cases.</p>
      </ArticleSection>

      <ArticleSection heading="Quality is separate">
        <p>Origin does not replace colour, clarity, cut, treatment. A heated Ceylon stone and an unheated one are different market stories.</p>
      </ArticleSection>

      <ArticleSection heading="Buyer habit">
        <p>Premium for origin → require report + verify number + read treatment notes. Verbal “pure Ceylon unheated” without evidence is incomplete.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Ceylon / SL claim written ද?",
          "Lab origin opinion vs seller story separate කළාද?",
          "Treatment notes origin එක්කම කියවුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Ceylon = always unheated — නැහැ.",
          "Ceylon = always highest quality — quality varies.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. Origin determination සේවාවක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
