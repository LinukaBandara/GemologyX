import type { Metadata } from "next";
import { ArticleLayout, ArticleSection, QuickAnswer, PracticalChecklist, Misconceptions } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "නිල්මැණික් හඳුනාගැනීම: නිරීක්ෂණ සහ පරීක්ෂණ",
  description: "නිල් පැහැති ගලක් sapphire ද යන්න, natural හෝ synthetic ද යන්න සහ treatment status එක හඳුනාගැනීමේ සීමා.",
  alternates: { canonical: "/si/learn/identify-sapphire" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 8"
      title="නිල්මැණික් හඳුනාගැනීම: නිරීක්ෂණ සහ පරීක්ෂණ"
      heroImage={{
        src: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Gemmological_microscopic_examination.jpg",
        alt: "A pink sapphire being examined under a gemmological microscope",
        credit: "Gemmological microscopic examination — Sara Abey · CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Gemmological_microscopic_examination.jpg",
      }}

      crumbHref="/si/learn/blue-sapphire-complete-guide"
      crumbLabel="නිල්මැණික් මාර්ගෝපදේශය"
      lastReviewed="2026-11-02"
      related={[
        { label: "Natural සහ lab-grown අතර වෙනස", href: "/si/learn/natural-vs-synthetic-gemstones" },
        { label: "Synthetic sapphire", href: "/si/learn/synthetic-sapphire-guide" },
        { label: "නිල්මැණික් report guide", href: "/si/learn/blue-sapphire-lab-report" },
        { label: "නිල්මැණික් සම්පූර්ණ මාර්ගෝපදේශය", href: "/si/learn/blue-sapphire-complete-guide" },
      ]}
    >
      <QuickAnswer>
        <p>නිල් පැහැය පමණක් නිල්මැණික් බවට සාක්ෂියක් නොවේ. Sapphire යනු corundum ඛනිජයේ ප්‍රභේදයකි; වෙනත් ඛනිජ, glass, imitation materials සහ lab-grown sapphire එකිනෙකට සමානව පෙනිය හැකියි. ඇසින් කරන නිරීක්ෂණ මුල් ඉඟි පමණක් වන අතර identity, origin සහ treatment තහවුරු කිරීමට වෘත්තීය gem testing අවශ්‍ය විය හැකියි.</p>
      </QuickAnswer>

      <ArticleSection heading="මුලින්ම වෙන්කරගත යුතු ප්‍රශ්න තුන">
        <p>පළමුව, ගලේ material එක sapphire ද? දෙවනුව, එය natural ද laboratory-grown ද? තෙවනුව, එයට heat හෝ වෙනත් treatment එකක් කර තිබේද? මේවා එකම ප්‍රශ්නයක් නොවේ. ගල sapphire බව තහවුරු වීමෙන් පමණක් එය natural, untreated හෝ ශ්‍රී ලංකාවේ මූලාරම්භයක් ඇති බව තහවුරු නොවේ.</p>
      </ArticleSection>

      <ArticleSection heading="වර්ණය, cut සහ දීප්තිය">
        <p>Blue colour එකේ hue, tone සහ saturation වෙනස් විය හැකියි; lighting සහ cut එක නිසා පෙනුමත් වෙනස් වේ. වෙනත් blue gemstones සහ glass ද සමාන පෙනුමක් ලබා දිය හැකි නිසා ඡායාරූපයක් හෝ shop lighting එකක් මත පමණක් මිල තීරණය නොකරන්න.</p>
      </ArticleSection>

      <ArticleSection heading="Loupe සහ inclusions">
        <p>Magnification යටතේ inclusions, growth features, facet edges සහ surface wear වැනි ලක්ෂණ නිරීක්ෂණය කළ හැකියි. නමුත් ලක්ෂණයක පෙනුමෙන් පමණක් natural/synthetic status එක හෝ origin එක තහවුරු කිරීම විශේෂඥ දැනුම සහ වෙනත් පරීක්ෂණ ඉල්ලා සිටිය හැකියි. Inclusions නොපෙනීම “synthetic” බවට සාක්ෂියක් නොවේ.</p>
      </ArticleSection>

      <ArticleSection heading="අනතුරුදායක home tests වලින් වළකින්න">
        <p>Scratch test, flame, chemical, හෝ ගල උණු කිරීම වැනි පරීක්ෂණ භාවිත නොකරන්න. ඒවා ගලට, setting එකට හෝ පරිශීලකයාට හානි කළ හැකි අතර විශ්වාසදායක identification එකක්ද ලබා නොදෙයි. UV light එකක ප්‍රතිචාරයත් තනිවම identity හෝ treatment තහවුරු නොකරයි.</p>
      </ArticleSection>

      <ArticleSection heading="Lab report එකෙන් මොනවා බලන්නද?">
        <p>Report එකේ gemstone identification, natural/laboratory-grown wording, treatment comments, measurements, weight සහ report limitations බලන්න. Report number එක lab එකේ නිල verification channel එකෙන් පරීක්ෂා කර, report details ගලේ භෞතික ලක්ෂණ සමඟ ගැළපේද බලන්න. Geographic origin opinion එකක් තිබුණත් එය laboratory opinion එකක් වන අතර සෑම ගලකටම ලබාගත හැකි හෝ absolute guarantee එකක් නොවේ.</p>
      </ArticleSection>

      <PracticalChecklist items={[
        "Seller description එකේ material, natural/lab-grown status සහ known treatments ලිඛිතව තිබේද?",
        "Report number එක issuing laboratory එකෙන් verify කළාද?",
        "Report measurements සහ stone details ගලට ගැළපේද?",
        "මිල ඉහළ නම් seller ට අයත් නොවන independent lab එකක් සලකා බැලුවාද?",
        "Scratch, flame සහ chemical tests වළක්වා ගත්තාද?",
      ]} />

      <Misconceptions items={[
        "නිල් පාට නම් sapphire — නැහැ.",
        "Mohs hardness ඉහළ නම් natural sapphire — hardness පමණක් ප්‍රමාණවත් නැහැ.",
        "Loupe එකෙන් origin එක තහවුරු කළ හැකියි — නැහැ.",
        "Sapphire report එකක් තිබුණොත් resale price එක සහතිකයි — report එක මිල සහතිකයක් නොවේ.",
      ]} />

      <ArticleSection heading="ආරක්ෂිත නිගමනය">
        <p>මෙය මූලික අධ්‍යාපනික මාර්ගෝපදේශයකි; නිශ්චිත ගලක් හඳුනාගැනීමේ සහතිකයක් නොවේ. මිල අධික ගනුදෙනුවකට පෙර සුදුසුකම් ලත් gem laboratory එකක පරීක්ෂාවක් ලබාගන්න.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}