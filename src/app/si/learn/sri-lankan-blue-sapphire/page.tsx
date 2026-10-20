import type { Metadata } from "next";
import { ArticleLayout, ArticleSection } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "ශ්‍රී ලංකාවේ නිල්මැණික් ගැන මූලික දැනුම",
  description: "ශ්‍රී ලාංකික නිල්මැණික් පිළිබඳ වර්ණය, වෙළෙඳ නාම, මූලාරම්භ ප්‍රකාශ සහ ස්වාධීන පරීක්ෂණ ගැන හැඳින්වීමක්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="ශ්‍රී ලංකාවේ නිල්මැණික් ගැන මූලික දැනුම"
      crumbHref="/si/learn/blue-sapphire-complete-guide"
      crumbLabel="නිල්මැණික් මාර්ගෝපදේශය"
      related={[
        { label: "රළු මැණික් ගලක් මිලදී ගැනීමට පෙර", href: "/si/learn/buying-rough-gemstones" },
        { label: "මැණික් පරීක්ෂණ වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "මැණික් මිලදී ගැනීමට පෙර පරීක්ෂා කළ යුතු ලැයිස්තුව", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <ArticleSection heading="නිල්මැණික් සහ කොරන්ඩම්">
        <p>නිල්මැණික් යනු කොරන්ඩම් ඛනිජයේ මැණික් ගුණාත්මක ප්‍රභේදයකි. එහි වර්ණය සහ පෙනුම ගලෙන් ගලට වෙනස් විය හැකි අතර වර්ණය පමණක් මත ගලේ වටිනාකම තීරණය කළ නොහැකියි.</p>
      </ArticleSection>

      <ArticleSection heading="“Ceylon sapphire” යන නාමය">
        <p>“Ceylon sapphire” යන නාමය ශ්‍රී ලංකාව සමඟ සම්බන්ධ නිල්මැණික් සඳහා වෙළෙඳපොළේ භාවිත වේ. එහෙත් ලේබලයක් හෝ විකුණුම්කරුගේ වාචික ප්‍රකාශයක් පමණක් නිශ්චිත භූගෝලීය මූලාරම්භය තහවුරු නොකරයි.</p>
      </ArticleSection>

      <ArticleSection heading="මූලාරම්භය තහවුරු කිරීම">
        <p>නිශ්චිත මූලාරම්භයක් මිලදී ගැනීමට වැදගත් නම්, ඒ ගැන අදහසක් ලබාදෙන සුදුසුකම් ලත් පරීක්ෂණාගාරයක වාර්තාවක් අවශ්‍ය විය හැකියි. මූලාරම්භ නිගමනවලට සීමා තිබිය හැකි බැවින් වාර්තාවේ භාෂාව සහ සීමාවන් කියවන්න.</p>
      </ArticleSection>

      <ArticleSection heading="ගුණාංග සහ ප්‍රතිකාර">
        <p>වර්ණය, පැහැදිලි බව, කැපීම, බර සහ ප්‍රතිකාර තත්ත්වය තක්සේරුවට බලපායි. ඡායාරූපයක වර්ණය ආලෝකය සහ කැමරා සැකසුම් නිසා වෙනස් විය හැකි නිසා, හැකි විට ගල සෘජුව පරීක්ෂා කරන්න.</p>
      </ArticleSection>

      <ArticleSection heading="ගනුදෙනුවේදී">
        <p>ගලේ අනන්‍යතාව, ප්‍රතිකාර සහ මූලාරම්භය පිළිබඳ ප්‍රකාශ ලිඛිතව ලබාගන්න. අවශ්‍ය නම් ස්වාධීන පරීක්ෂාවක් ලබාගෙන රිසිට්පත සහ ගනුදෙනු කොන්දේසි සුරකින්න. මෙම ලිපිය කිසිදු ගලකට නිශ්චිත මූලාරම්භයක් හෝ මිලක් සහතික නොකරයි.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
