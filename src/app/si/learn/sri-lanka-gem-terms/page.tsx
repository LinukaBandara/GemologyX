import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "ශ්‍රී ලංකාවේ මැණික් පද — Geuda සහ අනෙකුත් | GemologyX",
  description:
    "ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාමේ භාවිත වන පද (geuda, රළු, කැපූ ගල් ආදිය) සරල සිංහලෙන් තේරුම් ගන්න.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 7"
      title="ශ්‍රී ලංකාවේ මැණික් පද — Geuda සහ අනෙකුත්"
      crumbHref="/si/learn/sri-lanka-gem-trade-intro"
      crumbLabel="ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාම"
      lastReviewed="2026-10-21"
      related={[
        { label: "ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාම", href: "/si/learn/sri-lanka-gem-trade-intro" },
        { label: "Heat treatment", href: "/si/learn/heat-treatment-guide" },
        { label: "ශ්‍රී ලංකාවේ නිල්මැණික්", href: "/si/learn/sri-lankan-blue-sapphire" },
        { label: "රළු මැණික් මිලදී ගැනීම", href: "/si/learn/buying-rough-gemstones" },
      ]}
    >
      <QuickAnswer>
        <p>
          ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාමේ “geuda”, රළු ගල්, කැපූ ගල් වැනි පද භාවිත
          වේ. Geuda බොහෝ විට උණුසුම් කිරීමෙන් වර්ණය වෙනස් විය හැකි කොරන්ඩම්
          රළු ද්‍රව්‍යයක් ලෙස සඳහන් වේ. පදයක් පමණක් ගලේ අනන්‍යතාව, ප්‍රතිකාර හෝ
          වටිනාකම තහවුරු නොකරයි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Geuda">
        <p>
          Geuda යනු ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාමේ බහුලව ඇසෙන පදයකි. බොහෝ විට
          එයින් අදහස් වන්නේ උණුසුම් ප්‍රතිකාරයෙන් වර්ණය / පෙනුම වෙනස් කළ හැකි
          කොරන්ඩම් රළු ද්‍රව්‍යයකි. සියලුම geuda එකම ගුණාත්මකභාවයක් හෝ ප්‍රතිඵලයක්
          නොදක්වයි. කැපීමෙන් පසු ලැබෙන බර සහ වර්ණය කලින් නිශ්චිතව කිව නොහැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="රළු ගල් (Rough)">
        <p>
          කැපීමට සහ ඔප දැමීමට පෙර ඇති ගල්. ඉරිතැලීම්, හැඩය සහ අභ්‍යන්තර ලක්ෂණ
          කැපීමේ ප්‍රතිඵලයට බලපායි. රළු බර ≠ කැපූ පසු බර.
        </p>
      </ArticleSection>

      <ArticleSection heading="කැපූ / ඔප දැමූ ගල්">
        <p>
          කැපීම සහ ඔප දැමීම අවසන් වූ ගල්. වර්ණය, පැහැදිලි බව, කැපීමේ ගුණාත්මකභාවය
          සහ බර මෙහිදී වඩාත් පැහැදිලිව සසඳන්න පුළුවන්.
        </p>
      </ArticleSection>

      <ArticleSection heading="Ceylon / Sri Lankan">
        <p>
          වෙළෙඳ නාමයක් හෝ origin opinion එකක් විය හැකියි. ලේබලයක් පමණක්
          මූලාරම්භය තහවුරු නොකරයි. වාර්තාවේ භාෂාව සහ සීමාවන් කියවන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රායෝගික උපදෙස්">
        <p>
          පදයක් ඇසුණු විට: (1) එහි අර්ථය විකුණුම්කරුගෙන් පැහැදිලි කරගන්න, (2)
          අනන්‍යතාව සහ ප්‍රතිකාර ලිඛිතව විමසන්න, (3) අවශ්‍ය නම් වාර්තාවක් සහ
          ස්වාධීන පරීක්ෂාවක් සලකා බලන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "පදයේ අර්ථය විකුණුම්කරුගෙන් පැහැදිලි කරගත්තාද?",
          "අනන්‍යතාව සහ ප්‍රතිකාර ලිඛිතව තියෙනවාද?",
          "රළු ගලක් නම් — කැපීමේ අවදානම තේරුම් ගත්තාද?",
          "Origin / Ceylon ප්‍රකාශයක් තිබේ නම් වාර්තාවේ සීමාවන් බැලුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Geuda = සෑම විටම ලාභදායක — නැහැ; ප්‍රතිඵලය වෙනස් වේ.",
          "පදයක් දන්නවා නම් ගලේ වටිනාකම තීරණය කළ හැකියි — නැහැ.",
          "Ceylon ලේබලය = මූලාරම්භය තහවුරු — නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය පද තේරුම් ගැනීමට අධ්‍යාපනික මාර්ගෝපදේශයකි. එය ගලක මිල හෝ
          ප්‍රතිකාර ප්‍රතිඵලයක් සහතික නොකරයි.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}
