import type { Metadata } from "next";
import { ArticleLayout, ArticleSection } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් මිලදී ගැනීමට පෙර පරීක්ෂා කළ යුතු ලැයිස්තුව",
  description: "මැණික් මිලදී ගැනීමට පෙර අනන්‍යතාව, ප්‍රතිකාර, වාර්තා, මිල සහ ගනුදෙනු කොන්දේසි පරීක්ෂා කිරීමට ප්‍රායෝගික සිංහල ලැයිස්තුවක්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="මැණික් මිලදී ගැනීමට පෙර පරීක්ෂා කළ යුතු ලැයිස්තුව"
      crumbHref="/learn"
      crumbLabel="Learn Gemology"
      related={[
        { label: "රළු මැණික් ගලක් මිලදී ගැනීමට පෙර", href: "/si/learn/buying-rough-gemstones" },
        { label: "මැණික් පරීක්ෂණ වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "මැණික් මිලදී ගැනීමට පෙර පරීක්ෂා කළ යුතු ලැයිස්තුව", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <ArticleSection heading="ගලේ අනන්‍යතාව පැහැදිලි කරගන්න">
        <p>ගලේ නම පමණක් නොව එය ස්වභාවිකද, රසායනාගාරයේ නිපදවූද, අනුකරණයක්ද යන්න විකුණුම්කරුගෙන් විමසන්න. නම හෝ පෙනුම මත පමණක් නිගමනය නොකරන්න.</p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර සහ වාර්තා">
        <p>උණුසුම් කිරීම හෝ වෙනත් ප්‍රතිකාර තිබේදැයි අසන්න. වාර්තාවක් තිබේ නම් එහි අංකය නිකුත් කළ ආයතනය හරහා තහවුරු කර, බර සහ විස්තර ගලට ගැළපේදැයි පරීක්ෂා කරන්න.</p>
      </ArticleSection>

      <ArticleSection heading="ගල හොඳින් පරීක්ෂා කරන්න">
        <p>සුදුසු ආලෝකයකදී ගල බලන්න. මතුපිට හානි, ඉරිතැලීම්, ඇතුළත ලක්ෂණ සහ වර්ණයේ වෙනස්කම් ගැන අවධානය යොමු කරන්න. සැකයක් ඇත්නම් ස්වාධීන විශේෂඥයකුගේ අදහස ගන්න.</p>
      </ArticleSection>

      <ArticleSection heading="මිල සහ කොන්දේසි ලිඛිතව තබන්න">
        <p>ගලේ විස්තර, බර, එකඟ වූ මිල, ගෙවීමේ ක්‍රමය, ආපසු භාරදීමේ කොන්දේසි සහ රිසිට්පත ගැන කලින් එකඟ වන්න. විවිධ ගල්වල මිල සසඳන විට ඒවායේ ගුණාංග සමානදැයි බලන්න.</p>
      </ArticleSection>

      <ArticleSection heading="ඉක්මන් තීරණ නොගන්න">
        <p>අසාමාන්‍ය ලාභයක් පොරොන්දු වීම, වහාම ගෙවීමට බල කිරීම හෝ ස්වාධීන පරීක්ෂාව ප්‍රතික්ෂේප කිරීම අනතුරු ඇඟවීම් විය හැකියි. ඔබට තේරුම් නොගිය හෝ දරාගත නොහැකි අවදානමක් ඇති ගනුදෙනුවක් නවත්වන්න.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
