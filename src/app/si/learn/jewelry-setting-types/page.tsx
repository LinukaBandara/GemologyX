import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "ආභරණ Setting වර්ග | GemologyX",
  description:
    "Prong, bezel, channel, pave — setting වර්ග, ආරක්ෂාව සහ මැණික් රැකවරණයට බලපෑම.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="ආභරණ Setting වර්ග — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/jewelry-with-gems-buying"
      crumbLabel="මැණික් සහිත ආභරණ"
      lastReviewed="2026-10-25"
      related={[
        { label: "මැණික් සහිත ආභරණ මිලදී ගැනීම", href: "/si/learn/jewelry-with-gems-buying" },
        { label: "මැණික් රැකවරණය", href: "/si/learn/gemstone-care-general" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Setting = ගල ලෝහයේ රඳවන ආකාරය. Prong = වැඩි light, අඩු protection.
          Bezel = වැඩි protection, අඩු light. මෘදු ගල් (opal, emerald, pearl)
          සඳහා protective settings සලකා බලන්න. Setting ලිහිල්දැයි පරීක්ෂා කරන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="පොදු types">
        <ul>
          <li>Prong — claws; light + easy cleaning</li>
          <li>Bezel — metal rim; protection</li>
          <li>Channel — row of stones</li>
          <li>Pave / micro-pave — small stones set close</li>
          <li>Tension — modern; not for all stones</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="Durability match">
        <p>මෘදු හෝ cleaved ගල් — bezel හෝ protective design. Daily ring — prongs regularly check කරන්න.</p>
      </ArticleSection>

      <ArticleSection heading="මිලදී ගැනීමේදී">
        <p>ගල ලිහිල්ද, prongs worn ද, metal type (gold karat, platinum) ලිඛිතව. Repair history තිබේ නම් අසන්න.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Setting type ගලේ durability ට ගැළපේද?",
          "ගල ලිහිල්ද / prongs හානිද බැලුවාද?",
          "Metal type ලිඛිතව තියෙනවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "ලස්සන setting = ආරක්ෂිත setting — protection වෙනස්.",
          "Bezel = ගලේ quality අඩු — design choice එකක්.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. ආභරණ තක්සේරු හෝ අලුත්වැඩියා උපදෙස් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
