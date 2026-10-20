import type { Metadata } from "next";
import { ArticleLayout, ArticleSection } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "උණුසුම් කළ සහ නොකළ නිල්මැණික් අතර වෙනස",
  description: "Heated සහ unheated blue sapphire යන ප්‍රකාශවල අර්ථය, පරීක්ෂණ වාර්තා සහ මිලදී ගැනීමේදී අසන්න ඕනෑ දේ.",
};

export default function Page() {
  return (
    <ArticleLayout category="සිංහල මැණික් දැනුම" readTime="මිනිත්තු 5" title="උණුසුම් කළ සහ නොකළ නිල්මැණික් අතර වෙනස" crumbHref="/si/learn/blue-sapphire-complete-guide" crumbLabel="නිල්මැණික් මාර්ගෝපදේශය" related={[
      { label: "උණුසුම් ප්‍රතිකාර කළ නිල්මැණික්", href: "/si/learn/heated-sapphire-guide" },
      { label: "මැණික් පරීක්ෂණ වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
      { label: "ප්‍රතිකාර තොරතුරු හෙළි කිරීම", href: "/si/learn/gemstone-treatment-disclosure" },
    ]}>
      <ArticleSection heading="Heated සහ unheated යන්නෙන් අදහස් කරන්නේ කුමක්ද?">
        <p>Heated sapphire යනු උණුසුම් ප්‍රතිකාරයක් කළ බවට තොරතුරු ඇති නිල්මැණිකකි. Unheated යන ප්‍රකාශය සාමාන්‍යයෙන් එවැනි ප්‍රතිකාරයක් හඳුනා නොගත් බව අදහස් කළත්, එය විශ්වාසදායක පරීක්ෂණයක සන්දර්භය තුළ කියවිය යුතුය.</p>
      </ArticleSection>
      <ArticleSection heading="ප්‍රතිකාරයක් තිබීමෙන් ගල අනිවාර්යයෙන් ව්‍යාජ වෙන්නේ නැහැ">
        <p>ප්‍රතිකාරය සහ ගලේ අනන්‍යතාව වෙනම කරුණු දෙකකි. ගල ස්වභාවික කොරන්ඩම් විය හැකි අතර එයට පෙනුම වැඩිදියුණු කරන ප්‍රතිකාරයක් කර තිබිය හැකියි. වැදගත් වන්නේ ප්‍රතිකාරය නිවැරදිව හෙළිදරව් කර තිබීම සහ මිලදී ගන්නා පුද්ගලයාට ඒ ගැන පැහැදිලි අවබෝධයක් තිබීමයි.</p>
      </ArticleSection>
      <ArticleSection heading="ඇසින් පමණක් තීරණය කරන්න එපා">
        <p>වර්ණය, දීප්තිය හෝ විකුණුම්කරුගේ විශ්වාසය පමණක් මත ගල heated ද unheated ද කියා තීරණය කළ නොහැකියි. අවශ්‍ය විට සුදුසුකම් ලත් පරීක්ෂණාගාරයක් භාවිත කර වාර්තාවේ පරීක්ෂණ ක්‍රම සහ සීමාවන් කියවන්න.</p>
      </ArticleSection>
      <ArticleSection heading="මිල සහ නැවත විකිණීම">
        <p>ප්‍රතිකාර තත්ත්වය ගලේ වෙළෙඳපොළ ස්ථානයට බලපාන්න පුළුවන්, නමුත් unheated යන වචනයක් පමණක් ඉහළ මිලක් හෝ ඉක්මන් නැවත විකිණීමක් සහතික නොකරයි. ගුණාත්මකභාවය, වාර්තාව, ඉල්ලුම සහ ගනුදෙනු කොන්දේසි එකට සලකා බලන්න.</p>
      </ArticleSection>
      <ArticleSection heading="මිලදී ගැනීමට පෙර">
        <p>ප්‍රතිකාර තත්ත්වය ලිඛිතව විමසන්න, වාර්තා අංකය සහ නිකුත් කළ ආයතනය පරීක්ෂා කරන්න, වාර්තාවේ ගලේ විස්තර ඔබ ඉදිරියේ ඇති ගලට ගැළපේද බලන්න. අවශ්‍ය නම් ස්වාධීන පරීක්ෂාවක් සහ ආපසු භාරදීමේ ලිඛිත කොන්දේසි ලබාගන්න.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
