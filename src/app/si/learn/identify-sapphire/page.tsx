import type { Metadata } from "next";
import { ArticleLayout, ArticleSection } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "නිල්මැණික් හඳුනාගැනීමේ මූලික කරුණු",
  description: "නිල්මැණික් හඳුනාගැනීමේදී වර්ණය, භෞතික ලක්ෂණ සහ වෘත්තීය පරීක්ෂණවල වැදගත්කම ඉගෙන ගන්න.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="නිල්මැණික් හඳුනාගැනීමේ මූලික කරුණු"
      crumbHref="/si/learn/blue-sapphire-complete-guide"
      crumbLabel="නිල්මැණික් මාර්ගෝපදේශය"
      related={[
        { label: "ස්වභාවික සහ කෘත්‍රිම මැණික් අතර වෙනස", href: "/si/learn/natural-vs-synthetic-gemstones" },
        { label: "මැණික් පරීක්ෂණ වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "මැණික් මිලදී ගැනීමට පෙර පරීක්ෂා කළ යුතු ලැයිස්තුව", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <ArticleSection heading="වර්ණය පමණක් ප්‍රමාණවත් නැහැ">
        <p>නිල් පැහැති ගලක් දුටු පමණින් එය නිල්මැණිකක් යැයි තීරණය කළ නොහැකියි. වෙනත් ඛනිජ, වීදුරු සහ කෘත්‍රිම ද්‍රව්‍යවලටත් සමාන පෙනුමක් තිබිය හැකියි. වර්ණය යනු මුල් නිරීක්ෂණයක් පමණි.</p>
      </ArticleSection>

      <ArticleSection heading="කොරන්ඩම් ගැන">
        <p>නිල්මැණික් යනු කොරන්ඩම් ඛනිජයේ නිල් පැහැති මැණික් ප්‍රභේදයකි. එහි දෘඪතාව ඉහළ වුවත් දෘඪතාව පමණක් මත ගලේ අනන්‍යතාව තහවුරු කළ නොහැකියි.</p>
      </ArticleSection>

      <ArticleSection heading="විශාලනය සහ ආලෝකය">
        <p>සුදුසු ආලෝකයකදී ගලේ මතුපිට සහ ඇතුළත ලක්ෂණ නිරීක්ෂණය කළ හැකියි. එහෙත් ලූප් එකක් හෝ දුරකථන කැමරාවක් පමණක් භාවිත කර නිශ්චිත නිගමනයකට එළඹීම අවදානම්.</p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර සහ වාර්තා">
        <p>උණුසුම් කිරීම හෝ වෙනත් ප්‍රතිකාර ගලේ පෙනුමට බලපාන්න පුළුවන්. ගලේ අනන්‍යතාව සහ ප්‍රතිකාර තත්ත්වය මිලදී ගැනීමට වැදගත් නම් සුදුසුකම් ලත් පරීක්ෂණාගාරයක වාර්තාවක් සලකා බලන්න.</p>
      </ArticleSection>

      <ArticleSection heading="ආරක්ෂිත නිගමනය">
        <p>මෙම මාර්ගෝපදේශය මූලික අධ්‍යාපනය සඳහායි; නිශ්චිත ගලක් හඳුනාගැනීමේ සහතිකයක් නොවේ. මිල වැඩි ගනුදෙනුවකට පෙර ස්වාධීන පරීක්ෂාවක් ලබාගන්න.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
