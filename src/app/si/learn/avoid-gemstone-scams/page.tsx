import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් ගනුදෙනුවල වංචා අවදානම් | GemologyX",
  description:
    "මැණික් මිලදී ගැනීමේදී red flags — පීඩනය, ලාභ පොරොන්දු, ලේඛන ගැටලු සහ ආරක්ෂිත පියවර.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="මැණික් ගනුදෙනුවල වංචා අවදානම් හඳුනාගන්නේ කෙසේද?"
      crumbHref="/si/learn/gemstone-buying-checklist"
      crumbLabel="මිලදී ගැනීමේ checklist"
      lastReviewed="2026-10-24"
      related={[
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
        { label: "නිල්මැණික් red flags", href: "/si/learn/blue-sapphire-red-flags" },
        { label: "වෙළෙන්දාගෙන් අසන්න ඕනේ ප්‍රශ්න", href: "/si/learn/questions-to-ask-gem-dealer" },
        { label: "වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
      ]}
    >
      <QuickAnswer>
        <p>
          Red flags: “අදම” පීඩනය, කෙටි කාලයේ විශාල ලාභ පොරොන්දු, ලේඛන නැතිකම,
          වාර්තාව ගලට නොගැළපීම, ස්වාධීන පරීක්ෂාවට ඉඩ නොදීම. ගල, ලේඛන සහ
          කොන්දේසි ලිඛිතව පැහැදිලි නොවේ නම් නවත්වන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="ඉක්මන් තීරණයකට බල කිරීම">
        <p>
          “දැන්ම ගෙවන්න, නැත්නම් අවස්ථාව නැතිවෙනවා” — නවතින්න. ගල පරීක්ෂා කිරීමට
          සහ ලේඛන කියවීමට සාධාරණ කාලයක් තිබිය යුතුයි.
        </p>
      </ArticleSection>

      <ArticleSection heading="තහවුරු කළ නොහැකි ලාභ පොරොන්දු">
        <p>
          කෙටි කාලයකින් විශාල ලාභයක් හෝ නිශ්චිත නැවත මිලදී ගැනීමේ සහතිකයක්
          ලිඛිතව නොදීම අවදානම්. වෙළෙඳපොළ මිල වෙනස් විය හැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="වාර්තා සහ ගල ගැළපීම">
        <p>
          වාර්තා අංකය, බර, මිනුම් — ගලට ගැළපේද. නිල මාර්ගයෙන් සත්‍යාපනය කරන්න.
          වාර්තාවක් පමණක් තිබීමෙන් සියල්ල තහවුරු නොවේ.
        </p>
      </ArticleSection>

      <ArticleSection heading="ලිඛිත විස්තර">
        <p>
          ගලේ විස්තර, බර, මිල, විකුණුම්කරු, ගෙවීම්, ආපසු භාරදීමේ කොන්දේසි
          ලිඛිතව. රිසිට්පතක් ලබාගන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "පීඩනයෙන් තීරණයක් ගන්නේ නැද්ද?",
          "අනන්‍යතාව / ප්‍රතිකාර ලිඛිතව තියෙනවාද?",
          "වාර්තාව සත්‍යාපනය + ගලට ගැළපේද?",
          "ස්වාධීන පරීක්ෂාවට ඉඩ තියෙනවාද?",
          "දරාගත නොහැකි අවදානමක් නැද්ද?",
        ]}
      />

      <Misconceptions
        items={[
          "මිත්‍රශීලී වෙළෙන්දා = ආරක්ෂිත ගනුදෙනු — ලේඛන බලන්න.",
          "ලාභ මිල = හොඳ deal — සමහර විට ගැටලුවකි.",
          "වාර්තාව තියෙනවා නම් සියල්ල OK — ගලට ගැළපේද බලන්න.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. ගනුදෙනුවක සැකයක් ඇත්නම් නවත්වා
          ස්වාධීන උපදෙස් ලබාගන්න.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}
