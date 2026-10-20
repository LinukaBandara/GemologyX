import type { Metadata } from "next";
import { ArticleLayout, ArticleSection } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "රතු මැණික් සහ රතු ස්පිනල් අතර වෙනස",
  description: "රතු කොරන්ඩම් සහ ස්පිනල්වල වෙනස්කම්, සමාන පෙනුම සහ නිවැරදි හඳුනාගැනීමේ සීමා ගැන ඉගෙන ගන්න.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="රතු මැණික් සහ රතු ස්පිනල් අතර වෙනස"
      crumbHref="/learn"
      crumbLabel="Learn Gemology"
      related={[
        { label: "ස්වභාවික සහ කෘත්‍රිම මැණික් අතර වෙනස", href: "/si/learn/natural-vs-synthetic-gemstones" },
        { label: "මැණික් පරීක්ෂණ වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "මැණික් මිලදී ගැනීමට පෙර පරීක්ෂා කළ යුතු ලැයිස්තුව", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <ArticleSection heading="පෙනුමෙන් සමාන විය හැකියි">
        <p>රූබි සහ රතු ස්පිනල් දෙකම ආකර්ෂණීය රතු පැහැයෙන් පෙනිය හැකියි. පැහැය පමණක් මත ඒවා වෙන්කර හඳුනාගැනීම විශ්වාසදායක ක්‍රමයක් නොවේ.</p>
      </ArticleSection>

      <ArticleSection heading="ඛනිජ වෙනස">
        <p>රූබි යනු කොරන්ඩම් ඛනිජයේ රතු ප්‍රභේදයයි. ස්පිනල් වෙනම ඛනිජයකි. ඒවායේ භෞතික හා දෘශ්‍ය ගුණාංග වෙනස් වුවත් නිවැරදිව පරීක්ෂා කිරීමට විශේෂඥ දැනුම අවශ්‍ය විය හැකියි.</p>
      </ArticleSection>

      <ArticleSection heading="මිලදී ගැනීමේදී">
        <p>විකුණුම්කරුගේ නාමකරණය පමණක් විශ්වාස නොකරන්න. ලිඛිත විස්තර, බර, ප්‍රතිකාර තත්ත්වය සහ අවශ්‍ය නම් ස්වාධීන පරීක්ෂණ වාර්තාවක් ඉල්ලන්න.</p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර සහ අනුකරණ">
        <p>රතු පැහැති වීදුරු හෝ වෙනත් අනුකරණ ද්‍රව්‍යද වෙළෙඳපොළේ තිබිය හැකියි. ඡායාරූප හෝ වීඩියෝවක් මත පමණක් ගලේ අනන්‍යතාව තහවුරු කළ නොහැකියි.</p>
      </ArticleSection>

      <ArticleSection heading="අවසාන උපදෙස්">
        <p>ගලේ වටිනාකමට අනන්‍යතාව වැදගත් නම්, ගනුදෙනුව අවසන් කිරීමට පෙර සුදුසුකම් ලත් මැණික් විශේෂඥයකුගෙන් පරීක්ෂාවක් ලබාගන්න.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
