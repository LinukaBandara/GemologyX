import type { Metadata } from "next";
import { ArticleLayout, ArticleSection } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "ස්වභාවික, කෘත්‍රිම සහ අනුකරණ මැණික්",
  description: "ස්වභාවික මැණික්, රසායනාගාරයේ නිපදවූ ගල් සහ අනුකරණ අතර මූලික වෙනස්කම් පැහැදිලි කරන මාර්ගෝපදේශය.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="ස්වභාවික, කෘත්‍රිම සහ අනුකරණ මැණික්"
      crumbHref="/learn"
      crumbLabel="Learn Gemology"
      related={[
        { label: "ස්වභාවික සහ කෘත්‍රිම මැණික් අතර වෙනස", href: "/si/learn/natural-vs-synthetic-gemstones" },
        { label: "මැණික් පරීක්ෂණ වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "මැණික් මිලදී ගැනීමට පෙර පරීක්ෂා කළ යුතු ලැයිස්තුව", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <ArticleSection heading="පද තුනේ අර්ථය">
        <p>ස්වභාවික මැණික් ස්වභාවික භූගර්භීය ක්‍රියාවලීන් මඟින් සෑදේ. රසායනාගාරයේ නිපදවූ මැණික්වලට අනුරූප ස්වභාවික ගල්වලට සමාන රසායනික හා ස්ඵටික ගුණාංග තිබිය හැකියි. අනුකරණයක් පෙනුමෙන් සමාන වුවත් ද්‍රව්‍යමය වශයෙන් වෙනස් විය හැකියි.</p>
      </ArticleSection>

      <ArticleSection heading="කෘත්‍රිම යන්නෙන් ව්‍යාජ යන්න අදහස් නොවේ">
        <p>රසායනාගාරයේ නිපදවූ මැණිකක් සහ ස්වභාවික මැණිකක් සෑදෙන ආකාරයෙන් වෙනස් වේ. නමුත් ඒ දෙකේ වෙනස ගැන පැහැදිලිව දැනුම් දීම වැදගත්. වෙළෙඳ දැන්වීම්වල භාවිත කරන පද නිවැරදිව තේරුම් ගන්න.</p>
      </ArticleSection>

      <ArticleSection heading="පෙනුමෙන් තීරණය කිරීමේ සීමා">
        <p>වර්ණය, දීප්තිය හෝ ඡායාරූපයක් පමණක් මත ගලේ වර්ගය තහවුරු කළ නොහැකියි. සමහර වෙනස්කම් හඳුනාගැනීමට විශේෂ උපකරණ සහ පළපුරුද්ද අවශ්‍ය වේ.</p>
      </ArticleSection>

      <ArticleSection heading="ගනුදෙනුවේදී">
        <p>රිසිට්පතේ ගලේ වර්ගය, ප්‍රතිකාර තත්ත්වය සහ එකඟ වූ විස්තර ලියවා ගන්න. අවශ්‍ය නම් වාර්තා අංකය නිකුත් කළ ආයතනය හරහා තහවුරු කරන්න.</p>
      </ArticleSection>

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම වචන එකිනෙකට සමාන අර්ථයෙන් භාවිත නොකළ යුතුයි. මිලදී ගැනීමට පෙර ඔබ ගෙවන්නේ කුමන වර්ගයේ ගලකටද යන්න පැහැදිලි කරගන්න.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
