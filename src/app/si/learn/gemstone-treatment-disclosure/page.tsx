import type { Metadata } from "next";
import { ArticleLayout, ArticleSection } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් ප්‍රතිකාර පිළිබඳ නිවැරදි තොරතුරු හෙළි කිරීම",
  description: "මැණික්වල ප්‍රතිකාර තත්ත්වය, විකුණුම්කරුගේ ප්‍රකාශ සහ පරීක්ෂණ වාර්තා ගැන ගැනුම්කරුවන් දැනගත යුතු කරුණු.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="මැණික් ප්‍රතිකාර පිළිබඳ නිවැරදි තොරතුරු හෙළි කිරීම"
      crumbHref="/si/learn/blue-sapphire-complete-guide"
      crumbLabel="නිල්මැණික් මාර්ගෝපදේශය"
      related={[
        { label: "ස්වභාවික සහ කෘත්‍රිම මැණික් අතර වෙනස", href: "/si/learn/natural-vs-synthetic-gemstones" },
        { label: "මැණික් පරීක්ෂණ වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "මැණික් මිලදී ගැනීමට පෙර පරීක්ෂා කළ යුතු ලැයිස්තුව", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <ArticleSection heading="ප්‍රතිකාර ගැන දැනුම් දීම වැදගත් ඇයි?">
        <p>මැණික්වල පෙනුම වෙනස් කිරීමට විවිධ ප්‍රතිකාර භාවිත විය හැකියි. එම තත්ත්වය ගලේ මිල, නඩත්තුව සහ ගැනුම්කරුගේ තීරණයට බලපාන්න පුළුවන්. එබැවින් විකුණුම්කරුගෙන් පැහැදිලි තොරතුරු ඉල්ලීම වැදගත්.</p>
      </ArticleSection>

      <ArticleSection heading="වාචික පොරොන්දුවක් පමණක් නොව">
        <p>“ප්‍රතිකාර නැහැ” වැනි ප්‍රකාශයක් ගනුදෙනුවට වැදගත් නම් එය ලිඛිතව ලබාගන්න. ගලේ අනන්‍යතාව සහ ප්‍රතිකාර පිළිබඳ සැකයක් ඇත්නම් ස්වාධීන පරීක්ෂාවක් සලකා බලන්න.</p>
      </ArticleSection>

      <ArticleSection heading="වාර්තාව කියවන්න">
        <p>පරීක්ෂණ වාර්තාවේ හඳුනාගත් ප්‍රතිකාර, පරීක්ෂණ සීමා සහ වාර්තාවේ විෂය පථය කියවන්න. වාර්තාවක් සියලුම අනාගත වෙළෙඳපොළ මිල හෝ වටිනාකම සහතික කරන්නේ නැහැ.</p>
      </ArticleSection>

      <ArticleSection heading="රිසිට්පත සහ ගනුදෙනු කොන්දේසි">
        <p>ගලේ විස්තර, ප්‍රතිකාර තත්ත්වය ගැන එකඟ වූ ප්‍රකාශ, මිල සහ ආපසු භාරදීමේ කොන්දේසි ලිඛිතව තබාගන්න.</p>
      </ArticleSection>

      <ArticleSection heading="අවසාන උපදෙස්">
        <p>ප්‍රතිකාර පිළිබඳ නිශ්චිත නිගමනයක් සඳහා පෙනුම පමණක් ප්‍රමාණවත් නොවිය හැකියි. සුදුසුකම් ලත් මැණික් පරීක්ෂණාගාරයක උපදෙස් ලබාගන්න.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
