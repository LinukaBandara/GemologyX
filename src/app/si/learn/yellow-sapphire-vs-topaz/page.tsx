import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "පුෂ්පරාග සහ කහ ටොපාස් අතර වෙනස | GemologyX",
  description:
    "කහ sapphire (පුෂ්පරාග) සහ yellow topaz අතර ඛනිජ වෙනස, සමාන පෙනුම සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="පුෂ්පරාග සහ කහ ටොපාස් අතර වෙනස"
      crumbHref="/si/learn/topaz-intro"
      crumbLabel="Topaz හැඳින්වීම"
      lastReviewed="2026-10-24"
      related={[
        { label: "Topaz හැඳින්වීම", href: "/si/learn/topaz-intro" },
        { label: "Citrine හැඳින්වීම", href: "/si/learn/citrine-intro" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          පුෂ්පරාග / yellow sapphire = corundum (Mohs 9). Yellow topaz = වෙනම
          ඛනිජයකි (Mohs 8, cleavage තිබිය හැකියි). පෙනුමෙන් පමණක් වෙනස් කළ
          නොහැකියි. නම ලිඛිතව විමසන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="ඛනිජ වෙනස">
        <p>Sapphire = corundum. Topaz = aluminium silicate. දෘඪතාව සහ cleavage වෙනස්.</p>
      </ArticleSection>

      <ArticleSection heading="පෙනුම">
        <p>කහ පැහැය දෙකටම තිබිය හැකියි. Citrine (quartz) ද සමාන පෙනුමක් දක්වයි.</p>
      </ArticleSection>

      <ArticleSection heading="මිලදී ගැනීමේදී">
        <p>නිවැරදි නම ලිඛිතව. ප්‍රතිකාර තත්ත්වය. වාර්තාවේ species. මිල ඉහළ නම් ස්වාධීන පරීක්ෂාව.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම (sapphire / topaz) ලිඛිතව තියෙනවාද?",
          "ප්‍රතිකාර තත්ත්වය විමසුවාද?",
          "වර්ණය පමණක් මත තීරණය නොකළාද?",
        ]}
      />

      <Misconceptions
        items={[
          "කහ පැහැය = sapphire — නැහැ; topaz සහ citrine ද තියෙනවා.",
          "දෘඪතාව 8 නම් sapphire තරම්ම — cleavage නිසා බිඳීමේ අවදානම්.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
