import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Heat vs Diffusion vs Filling | GemologyX",
  description:
    "Heat treatment, diffusion, fracture filling — වෙනස, disclosure සහ ගැනුම්කරුවන් අසන්න ඕනේ දේ.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 7"
      title="Heat vs Diffusion vs Fracture Filling"
      crumbHref="/si/learn/heat-treatment-guide"
      crumbLabel="Heat treatment"
      lastReviewed="2026-10-25"
      related={[
        { label: "Heat treatment", href: "/si/learn/heat-treatment-guide" },
        { label: "Diffusion", href: "/si/learn/diffusion-treatment-guide" },
        { label: "Fracture filling", href: "/si/learn/fracture-filling-guide" },
        { label: "ප්‍රතිකාර හෙළි කිරීම", href: "/si/learn/gemstone-treatment-disclosure" },
      ]}
    >
      <QuickAnswer>
        <p>
          Heat = temperature-driven colour/clarity change (common in sapphire/
          ruby). Diffusion = colouring agents driven into surface/near-surface
          (different disclosure weight). Filling = fractures filled (glass,
          resin, oil) — stability and care differ. තුනම “treatment”; market
          acceptance සහ price impact වෙනස්. ලිඛිතව වෙන් වෙන්ව අසන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Heat">
        <p>Widely used; often stable. Still must be disclosed. “Unheated” is a premium claim — needs evidence.</p>
      </ArticleSection>

      <ArticleSection heading="Diffusion">
        <p>Can produce strong colour; may be surface-related depending on type. Recutting risk. Ask specifically — not only “heated or not.”</p>
      </ArticleSection>

      <ArticleSection heading="Filling">
        <p>Improves apparent clarity. Fillers can change with heat, chemicals, ultrasonic. Care and disclosure critical (especially emerald oil, glass-filled ruby).</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Heat / diffusion / filling වෙන වෙනම අහුවාද?",
          "වාර්තාවේ exact wording කියවුවාද?",
          "Care limits (ultrasonic, heat) දැනගත්තාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Heated = same as diffusion — නැහැ.",
          "Filled = always worthless — disclosure + type matter; still must be honest.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක treatment ID එකක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
