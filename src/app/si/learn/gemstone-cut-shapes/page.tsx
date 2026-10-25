import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් කැපුම් හැඩ (Cut Shapes) | GemologyX",
  description:
    "Round, oval, cushion, emerald cut, cabochon ආදිය — cut vs shape සහ මිලදී ගැනීමේදී බලන්න ඕනේ දේ.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="මැණික් කැපුම් හැඩ (Cut Shapes) තේරුම් ගැනීම"
      crumbHref="/si/learn/carat-weight-guide"
      crumbLabel="කැරට් බර"
      lastReviewed="2026-10-25"
      related={[
        { label: "කැරට් බර", href: "/si/learn/carat-weight-guide" },
        { label: "නිල්මැණිකක වටිනාකම", href: "/si/learn/blue-sapphire-value-factors" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Shape = outline (round, oval, cushion…). Cut quality = proportions,
          symmetry, polish — light performance ට බලපායි. Cabochon = උත්තල,
          faceted නොවේ (star sapphire, opal ආදියට බහුල). Shape preference
          පුද්ගලිකයි; “best cut” එකක් සියල්ලට නැත.
        </p>
      </QuickAnswer>

      <ArticleSection heading="පොදු shapes">
        <ul>
          <li>Round brilliant</li>
          <li>Oval, cushion, pear, marquise</li>
          <li>Emerald cut / step cut</li>
          <li>Princess, radiant</li>
          <li>Cabochon</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="Cut quality vs shape">
        <p>එකම shape එකේ cut quality වෙනස් විය හැකියි. Windowing, dark areas, uneven outline බලන්න — නමුත් coloured stones වල standards diamond තරම් standardized නොවේ.</p>
      </ArticleSection>

      <ArticleSection heading="Weight retention">
        <p>රළු ගලකින් උපරිම weight තබාගැනීමට cut compromise විය හැකියි. Face-up size සහ beauty balance කරන්න.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Shape සහ face-up size (mm) දැනගත්තාද?",
          "විවිධ ආලෝකයේ light performance බැලුවාද?",
          "Cabochon නම් — surface scratches / cracks බැලුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Round = සෑම විටම best — preference සහ stone type අනුව.",
          "Cut grade එකක් coloured stones වලට සෑම විටම තියෙනවා — බොහෝ විට නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක cut grade සහතික නොකරයි.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
