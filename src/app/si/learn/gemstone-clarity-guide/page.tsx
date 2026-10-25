import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් Clarity (පැහැදිලි බව) | GemologyX",
  description:
    "Inclusions, clarity grades, eye-clean සංකල්පය සහ මිලදී ගැනීමේදී බලන්න ඕනේ දේ.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="මැණික් Clarity (පැහැදිලි බව) තේරුම් ගැනීම"
      crumbHref="/si/learn/gemstone-inclusions-guide"
      crumbLabel="Inclusions"
      lastReviewed="2026-10-25"
      related={[
        { label: "Inclusions මාර්ගෝපදේශය", href: "/si/learn/gemstone-inclusions-guide" },
        { label: "නිල්මැණිකක වටිනාකම", href: "/si/learn/blue-sapphire-value-factors" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Clarity = inclusions සහ surface blemishes කොපමණද සහ කොතරම් පෙනේද
          යන්න. “Eye-clean” = නිරුත්සාහයෙන් inclusions නොපෙනීම (දුර / ආලෝකය
          අනුව වෙනස්). Diamond clarity grades coloured stones වලට සෘජුවම
          යෙදෙන්නේ නැත. Inclusions සමහර විට natural origin හෝ identity hints
          දෙයි — නමුත් amateur ID සඳහා ප්‍රමාණවත් නොවේ.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Eye-clean vs loupe">
        <p>ඇසට නොපෙනෙන inclusions loupe / microscope එකෙන් පෙනෙන්න පුළුවන්. Preference සහ price impact ගල් වර්ගය අනුව වෙනස්.</p>
      </ArticleSection>

      <ArticleSection heading="Coloured stones vs diamond">
        <p>Diamond IF–I3 scale coloured gems වලට සෘජු standard නොවේ. Emerald වැනි ගල්වල inclusions “garden” ලෙස පිළිගැනේ — durability බලපෑම වෙනස්.</p>
      </ArticleSection>

      <ArticleSection heading="Durability">
        <p>විශාල fractures filling නොකළ නම් බිඳීමේ අවදානම්. Clarity = beauty පමණක් නොවේ; toughness ද සලකන්න.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ඇසට / loupe එකට inclusions බැලුවාද?",
          "Fractures durability ට බලපානවාදැයි විමසුවාද?",
          "Clarity enhancement (filling) තිබේද විමසුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Inclusions = fake — බොහෝ natural gems වල inclusions තියෙනවා.",
          "Diamond clarity grade = සියලු මැණික්වලට යෙදේ — නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක grade හෝ මිල සහතික නොකරයි.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
