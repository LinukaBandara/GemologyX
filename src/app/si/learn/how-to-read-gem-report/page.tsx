import type { Metadata } from "next";
import { ArticleLayout, ArticleSection } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් පරීක්ෂණ වාර්තාවක් කියවන්නේ කෙසේද?",
  description: "මැණික් ගලක් මිලදී ගැනීමට පෙර පරීක්ෂණ වාර්තාවේ ගල් වර්ගය, ස්වභාවික බව, ප්‍රතිකාර සහ බර කියවන සරල සිංහල මාර්ගෝපදේශය.",
};

export default function Page() {
  return (
    <ArticleLayout category="සිංහල මැණික් දැනුම" readTime="මිනිත්තු 4" title="මැණික් පරීක්ෂණ වාර්තාවක් කියවන්නේ කෙසේද?" crumbHref="/learn" crumbLabel="Learn Gemology"
      related={[
        { label: "පුෂ්පරාග රළු ගලක මිල", href: "/si/learn/rough-yellow-sapphire-value" },
        { label: "Questions to Ask a Gem Dealer", href: "/learn/questions-to-ask-gem-dealer" },
        { label: "Natural vs Synthetic Gemstones", href: "/learn/natural-vs-synthetic-gemstones" },
      ]}>
      <ArticleSection heading="පරීක්ෂණ වාර්තාවක් කියන්නේ මොකක්ද?">
        <p>මැණික් පරීක්ෂණ වාර්තාවක් යනු පරීක්ෂා කළ ගල ගැන විද්‍යාගාරයක් සටහන් කරන තොරතුරු ලේඛනයකි. එය ගලේ මිලක් හෝ ඔබට ලාභ ලැබෙන බවට සහතිකයක් නොවේ. වාර්තාවේ සඳහන් දේ සහ ඔබ මිලදී ගන්නා ගල එකම ගලද යන්නත් තහවුරු කළ යුතුයි.</p>
      </ArticleSection>
      <ArticleSection heading="1. වාර්තාවේ අංකය සහ ගලේ විස්තර බලන්න">
        <p>වාර්තා අංකය, දිනය, බර, හැඩය, මිනුම් සහ ගලේ ඡායාරූප තිබේ නම් ඒවා හොඳින් බලන්න. ඔබ ඉදිරියේ ඇති ගලේ බර හෝ පෙනුම වාර්තාවට නොගැළපේ නම් පැහැදිලි කිරීමක් ඉල්ලන්න.</p>
      </ArticleSection>
      <ArticleSection heading="2. ගලේ නම සහ ස්වභාවික බව කියවන්න">
        <p>වාර්තාවේ ගල හඳුන්වා ඇති නම පරීක්ෂා කරන්න. “Natural” යන්න ස්වභාවික ගලක් බව සඳහන් කළ හැකි අතර “laboratory-grown” හෝ “synthetic” යන්න රසායනාගාරයේ නිපදවූ ගලක් බව දක්වයි. මේ වචනවල අර්ථය තේරුම් නොගන්නේ නම් විද්‍යාගාරයෙන් හෝ ස්වාධීන විශේෂඥයකුගෙන් විමසන්න.</p>
      </ArticleSection>
      <ArticleSection heading="3. ප්‍රතිකාර පිළිබඳ සටහන් බලන්න">
        <p>සමහර මැණික්වල වර්ණය හෝ පෙනුම වෙනස් කිරීමට ප්‍රතිකාර කර තිබිය හැකියි. වාර්තාවේ ප්‍රතිකාර පිළිබඳ සටහන් තිබේදැයි බලන්න. සෑම වාර්තාවකම එකම පරීක්ෂණ සිදු කරන්නේ නැති නිසා, වාර්තාවෙන් තහවුරු නොකරන කරුණු ගැන අනුමාන නොකරන්න.</p>
      </ArticleSection>
      <ArticleSection heading="4. වාර්තාව සත්‍යදැයි තහවුරු කරන්න">
        <ul className="list-disc space-y-1 pl-5">
          <li>වාර්තාව නිකුත් කළ විද්‍යාගාරයේ නිල වෙබ් අඩවියෙන් සත්‍යාපනය කළ හැකිදැයි බලන්න.</li>
          <li>වාර්තා අංකය සහ ගලේ විස්තර එකිනෙකට ගැළපෙනවාදැයි පරීක්ෂා කරන්න.</li>
          <li>වාර්තාව පැරණි නම් හෝ තොරතුරු ප්‍රමාණවත් නොවේ නම් නව පරීක්ෂාවක් ගැන සලකා බලන්න.</li>
          <li>මිල අධික ගනුදෙනුවකදී විකුණුම්කරුගෙන් පමණක් නොව ස්වාධීන උපදෙස්ද ලබාගන්න.</li>
        </ul>
      </ArticleSection>
      <ArticleSection heading="මතක තබාගන්න">
        <p>වාර්තාවක් කියවීමෙන් තීරණයක් ගැනීමට උපකාර ලැබෙන නමුත් එය වෙළෙඳපොළ මිලක් හෝ නැවත විකිණීමේ සහතිකයක් නොවේ. මිලදී ගැනීමට පෙර ගල, ලේඛන සහ ගනුදෙනු කොන්දේසි වෙන වෙනම පරීක්ෂා කරන්න.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
