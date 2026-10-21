import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික්වල Diffusion ප්‍රතිකාරය | GemologyX",
  description:
    "Diffusion treatment යනු කුමක්ද, heat සමඟ වෙනස, හෙළිදරව් කිරීම සහ වාර්තා කියවන ආකාරය.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="මැණික්වල Diffusion ප්‍රතිකාරය"
      crumbHref="/si/learn/heat-treatment-guide"
      crumbLabel="Heat treatment"
      lastReviewed="2026-10-21"
      related={[
        { label: "Heat treatment මාර්ගෝපදේශය", href: "/si/learn/heat-treatment-guide" },
        { label: "ප්‍රතිකාර තොරතුරු හෙළි කිරීම", href: "/si/learn/gemstone-treatment-disclosure" },
        { label: "මැණික් පරීක්ෂණ වාර්තාව කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Diffusion treatment යනු ගලේ මතුපිටට හෝ ආසන්නයට වර්ණය ගෙන එන ප්‍රතිකාර
          වර්ගයකි. සාමාන්‍ය heat treatment ට වඩා වෙනස් විය හැකියි. එය හෙළිදරව්
          කළ යුතු අතර මිලට සහ රැකවරණයට බලපාන්න පුළුවන්. ඇසින් පමණක් හඳුනාගත නොහැකියි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Diffusion යනු කුමක්ද?">
        <p>
          සමහර මැණික්වල වර්ණය වෙනස් කිරීමට රසායනික ද්‍රව්‍ය උණුසුම් කිරීම සමඟ
          භාවිත කර ගලේ මතුපිටට හෝ ආසන්න ස්ථරයට වර්ණය “ගෙන එන” ක්‍රම තිබේ. මෙය
          diffusion ලෙස හැඳින්වේ. වර්ග සහ ක්‍රම වෙනස් විය හැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="Heat සමඟ වෙනස">
        <p>
          සාමාන්‍ය heat treatment බොහෝ විට ගලේ අභ්‍යන්තර වර්ණය / පෙනුම වෙනස්
          කිරීමට භාවිත වේ. Diffusion සමහර අවස්ථාවල මතුපිටට හෝ ආසන්නයට සීමා විය
          හැකියි. නැවත කැපීමේදී වර්ණය අඩු වීමේ අවදානමක් තිබිය හැකියි — නමුත්
          සෑම අවස්ථාවකම එකම නොවේ. විස්තර වාර්තාවෙන් සහ විශේෂඥයකුගෙන් තහවුරු කරන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="ඇයි හෙළිදරව් කළ යුතුද?">
        <p>
          ප්‍රතිකාර තත්ත්වය මිලට, රැකවරණයට සහ නැවත විකිණීමේ අපේක්ෂාවට බලපාන්න
          පුළුවන්. විකුණුම්කරුගෙන් ලිඛිතව විමසන්න. වාර්තාවේ treatment section
          කියවන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="හඳුනාගැනීම">
        <p>
          ඇසින් හෝ ඡායාරූපයකින් diffusion තීරණය කිරීම විශ්වාසදායක නොවේ.
          සුදුසුකම් ලත් පරීක්ෂණාගාරයක වාර්තාව සහ එහි සීමාවන් අවශ්‍ය විය හැකියි.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ප්‍රතිකාර වර්ගය (heat / diffusion / other) ලිඛිතව විමසන්න",
          "වාර්තාවේ treatment notes කියවන්න",
          "වාර්තා අංකය සත්‍යාපනය කරන්න",
          "නැවත කැපීම හෝ රැකවරණය ගැන අවදානම් විමසන්න",
          "මිලට ප්‍රතිකාර වැදගත් නම් ස්වාධීන පරීක්ෂාවක් සලකා බලන්න",
        ]}
      />

      <Misconceptions
        items={[
          "Diffusion = ව්‍යාජ ගල — නැහැ; ප්‍රතිකාරයකි.",
          "ඇසින් diffusion හඳුනාගත හැකියි — බොහෝ විට නැහැ.",
          "සියලුම heat treated ගල් diffusion — නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. එය ගලක් diffusion කර තිබේද යන්න
          නිශ්චය කරන පරීක්ෂණයක් නොවේ. වැදගත් ගනුදෙනුවකදී සුදුසුකම් ලත්
          පරීක්ෂණාගාරයක් භාවිත කරන්න.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}
