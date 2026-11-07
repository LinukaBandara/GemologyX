import type { Metadata } from "next";
import { ArticleLayout, ArticleSection, QuickAnswer, PracticalChecklist, Misconceptions } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "ස්වභාවික සහ Lab-grown මැණික් අතර වෙනස",
  description: "Natural, lab-grown / synthetic සහ imitation මැණික් අතර ප්‍රධාන වෙනස්කම්, පරීක්ෂණ සීමා සහ ආරක්ෂිත මිලදී ගැනීමේ ක්‍රම.",
  alternates: { canonical: "/si/learn/natural-vs-synthetic-gemstones" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 8"
      title="ස්වභාවික සහ Lab-grown මැණික් අතර වෙනස"
      crumbHref="/si/learn/natural-synthetic-imitation-gems"
      crumbLabel="මැණික් වෙළෙඳ පද"
      lastReviewed="2026-11-02"
      heroImage={{
        src: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Synthetic_sapphire_1.jpg",
        alt: "A faceted synthetic blue sapphire manufactured by the Verneuil flame-fusion process",
        credit: "James St. John · CC BY 2.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Synthetic_sapphire_1.jpg",
      }}
      related={[
        { label: "Natural, synthetic සහ imitation පද", href: "/si/learn/natural-synthetic-imitation-gems" },
        { label: "Synthetic sapphire ගැන", href: "/si/learn/synthetic-sapphire-guide" },
        { label: "මැණික් වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "නිල්මැණික් හඳුනාගැනීම", href: "/si/learn/identify-sapphire" },
      ]}
    >
      <QuickAnswer>
        <p>Natural මැණික් ස්වභාවික භූගර්භීය හෝ ජෛව ක්‍රියාවලීන් හරහා ඇතිවේ. Lab-grown / synthetic මැණික් රසායනාගාරයක වර්ධනය කරයි; එය අදාළ ස්වභාවික මැණික් වර්ගයට සමාන හෝ ඉතා සමීප රසායනික හා භෞතික ගුණ තිබිය හැකියි. Imitation එකක් පෙනුමෙන් සමාන වුවත් වෙනත් ද්‍රව්‍යයක් විය හැකියි. පෙනුමෙන් පමණක් origin හෝ identity තහවුරු කළ නොහැකියි.</p>
      </QuickAnswer>

      <ArticleSection heading="Natural කියන්නේ මොකක්ද?">
        <p>Natural යන්නෙන් ගලේ මූලාරම්භය දක්වයි. එයින් ගල කිසිදු ප්‍රතිකාරයකට ලක් නොවූ බව අදහස් නොවේ. ස්වභාවික මැණික් උණුසුම් කිරීම, filling හෝ වෙනත් enhancement ක්‍රියාවලියකට ලක්ව තිබිය හැකි නිසා identity සහ treatment යනු වෙන වෙනම ප්‍රශ්න දෙකකි.</p>
      </ArticleSection>

      <ArticleSection heading="Lab-grown / synthetic කියන්නේ මොකක්ද?">
        <p>මෙම පද රසායනාගාර පරිසරයක වර්ධනය කළ මැණික් සඳහා භාවිත වේ. උදාහරණයක් ලෙස synthetic sapphire යනු corundum වන නමුත් එහි වර්ධන මූලාරම්භය ස්වභාවික sapphire එකකට වඩා වෙනස්ය. “Synthetic” යන්න “glass” යන්නට සමාන නොවේ. එහි ගුණාංග, දුර්ලභත්වය, වෙළෙඳපොළ සහ මිල ස්වභාවික ගලකින් වෙනස් විය හැකියි.</p>
      </ArticleSection>

      <ArticleSection heading="Imitation සහ assembled materials">
        <p>Imitation එකක් වෙනත් ද්‍රව්‍යයක් භාවිත කර මැණික් වර්ගයක පෙනුම අනුකරණය කරයි; උදාහරණයක් ලෙස glass. Assembled stone එකක කොටස් දෙකක් හෝ වැඩි ගණනක් එකට සම්බන්ධ කර තිබිය හැකියි. මේවා synthetic මැණික් සමඟ එකම කාණ්ඩයක් නොවේ. වචනවල අර්ථය සහ ගලේ සත්‍ය ද්‍රව්‍යය විකුණුම්කරුගෙන් පැහැදිලි කරගන්න.</p>
      </ArticleSection>

      <ArticleSection heading="හඳුනාගැනීමේ සීමා">
        <p>වර්ණය, දීප්තිය, බර, inclusions හෝ ඡායාරූපයක් පමණක් තීරණාත්මක සාක්ෂියක් නොවේ. සමහර ලක්ෂණ පරීක්ෂණයක් අවශ්‍ය විය හැකි බව පෙන්විය හැකි නමුත් ඒවා තනිවම identity තහවුරු නොකරයි. Scratch, flame හෝ chemical home tests ගලට හානි කළ හැකි බැවින් ඒවා භාවිත නොකරන්න.</p>
      </ArticleSection>

      <ArticleSection heading="වාර්තාවක් බලන විට">
        <p>වාර්තාවේ material identification, natural හෝ laboratory-grown යන සඳහන, treatment observations සහ report limitations කියවන්න. Report number එක පමණක් පරීක්ෂා කිරීම ප්‍රමාණවත් නොවේ; වාර්තාවේ විස්තර ගලේ බර, මිනුම්, හැඩය සහ ඡායාරූප සමඟ ගැළපේද බලන්න. වාර්තාවක් තිබීමෙන් ගලේ වෙළෙඳ වටිනාකමක් හෝ resale price එකක් ස්වයංක්‍රීයව සහතික නොවේ.</p>
      </ArticleSection>

      <PracticalChecklist items={[
        "Natural / laboratory-grown / imitation යන material description එක ලිඛිතව ලබාගන්න.",
        "Treatment status එක වෙනම විමසන්න.",
        "වාර්තාවක් තිබේ නම් issuing lab එකෙන් සත්‍යාපනය කර ගලේ විස්තර ගලපන්න.",
        "මිල ඉහළ නම් විකුණුම්කරුගෙන් ස්වාධීන පරීක්ෂණයක් සලකා බලන්න.",
        "Return terms සහ invoice එකේ විස්තර තබාගන්න.",
      ]} />

      <Misconceptions items={[
        "Natural කියන්නේ untreated — අනිවාර්යයෙන්ම එසේ නොවේ.",
        "Synthetic කියන්නේ glass හෝ ව්‍යාජ — එසේ නොවේ; එය lab-grown material category එකකි.",
        "Inclusions නැති ගලක් synthetic — inclusions පමණක් මත තීරණය කළ නොහැකියි.",
        "Certificate එකක් තිබුණොත් ගලේ මිල සහ resale එක සහතිකයි — වාර්තාවේ scope එක එතරම් පුළුල් නොවේ.",
      ]} />

      <ArticleSection heading="අවසාන සටහන">
        <p>මෙය අධ්‍යාපනික මාර්ගෝපදේශයකි; නිශ්චිත ගලක් හඳුනාගැනීමේ වාර්තාවක් නොවේ. වටිනා ගනුදෙනුවකට පෙර සුදුසුකම් ලත් gem laboratory එකක පරීක්ෂාවක් ලබාගන්න.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}