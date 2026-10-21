import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Topaz (ටොපාස්) — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Topaz යනු කුමක්ද, වර්ණ, blue topaz treatments, sapphire සමඟ වෙනස සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="Topaz (ටොපාස්) — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/yellow-sapphire-vs-topaz"
      crumbLabel="පුෂ්පරාග vs Topaz"
      lastReviewed="2026-10-21"
      related={[
        { label: "පුෂ්පරාග vs Topaz", href: "/si/learn/yellow-sapphire-vs-topaz" },
        { label: "Heat treatment", href: "/si/learn/heat-treatment-guide" },
        { label: "Diffusion treatment", href: "/si/learn/diffusion-treatment-guide" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Topaz යනු වෙනම ඛනිජයකි (sapphire නොවේ). වර්ණ නිල්, කහ, රෝස, රතු
          ආදිය. Blue topaz බොහෝ විට irradiated / heated. දෘඪතාව 8 — හොඳයි නමුත්
          cleavage නිසා බිඳීමේ අවදානම් තිබිය හැකියි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Topaz යනු කුමක්ද?">
        <p>
          Topaz = aluminium silicate mineral. Sapphire (corundum) නොවේ. කහ
          topaz සහ yellow sapphire පෙනුමෙන් පටලවා ගත හැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="Blue topaz සහ ප්‍රතිකාර">
        <p>
          වෙළෙඳපොළේ බොහෝ blue topaz irradiated සහ/හෝ heated. Treatment
          තත්ත්වය ලිඛිතව විමසන්න. “Swiss blue”, “London blue” වැනි වෙළෙඳ නාම
          වර්ණ තීව්‍රතාවට සම්බන්ධ විය හැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="දෘඪතාව සහ cleavage">
        <p>
          Mohs 8 — සීරීම් වලට හොඳ ප්‍රතිරෝධයක්. නමුත් perfect cleavage නිසා
          බලපෑමකදී බිඳිය හැකියි. Hardness ≠ toughness.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නම (topaz) ලිඛිතව තියෙනවාද?",
          "Sapphire / වෙනත් ගලක් සමඟ නොපටලවා ගත්තාද?",
          "ප්‍රතිකාර තත්ත්වය (විශේෂයෙන් blue) විමසුවාද?",
          "Cleavage / බිඳීමේ අවදානම තේරුම් ගත්තාද?",
        ]}
      />

      <Misconceptions
        items={[
          "කහ topaz = yellow sapphire — නැහැ; වෙනස් ඛනිජ.",
          "දෘඪතාව 8 නම් කිසිම හානියක් නොවේ — cleavage තියෙනවා.",
          "සියලුම blue topaz natural untreated colour — බොහෝ විට treated.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
