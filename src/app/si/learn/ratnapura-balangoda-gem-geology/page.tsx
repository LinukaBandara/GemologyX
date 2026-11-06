import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Gem, Info } from "lucide-react";
import { ArticleLayout, ArticleSection, QuickAnswer } from "@/components/article-layout";
import { SriLankaGeologyExplorer } from "@/components/sri-lanka-geology-explorer";

export const metadata: Metadata = {
  title: "රත්නපුර සහ බලංගොඩ මැණික් භූවිද්‍යාව",
  description: "NGJA සහ ශ්‍රී ලංකා විශ්වවිද්‍යාල පර්යේෂණ ඇසුරින් රත්නපුර, බලංගොඩ සහ ද්විතීයික මැණික් තැන්පතු සරලව තේරුම් ගන්න.",
  alternates: { canonical: "/si/learn/ratnapura-balangoda-gem-geology" },
};

const sources = [
  { title: "National Gem and Jewellery Authority: Gemstone Mining Industry", href: "https://ngja.gov.lk/gems/gemstone-mining-industry/", note: "ශ්‍රී ලංකාවේ මැණික් ප්‍රදේශ, තැන්පතු වර්ග සහ නිල කර්මාන්ත සන්දර්භය." },
  { title: "University of Peradeniya: Classification of gem-bearing sedimentary deposits in the Kalu Ganga basin", href: "https://ir.lib.pdn.ac.lk/items/e22316bd-5230-4d58-a996-3b57b32f9610", note: "කළු ගඟ ද්‍රෝණියේ නිරීක්ෂිත තැන්පතු පිළිබඳ 2016 සම්මේලන පර්යේෂණය." },
  { title: "University of Peradeniya PGIS: Upper Walawe river basin study", href: "https://ir.lib.pdn.ac.lk/items/258b00d3-c215-4cce-ae4f-35e32ae7f3e1", note: "ඉහළ වලවේ ද්‍රෝණියේ ගල් කැට නියැදි සහ ප්‍රශ්නාවලි මත පදනම් වූ 2022 පර්යේෂණ සාරාංශය." },
];

export default function RatnapuraBalangodaGeologyPage() {
  return (
    <ArticleLayout
      category="ශ්‍රී ලංකාවේ ප්‍රදේශ සහ භූවිද්‍යාව"
      readTime="මිනිත්තු 8"
      title="රත්නපුර සහ බලංගොඩ: මැණික් තැන්පතු ගැන කියවමු"
      crumbHref="/si/learn"
      crumbLabel="ශ්‍රී ලංකා සිංහල එකතුව"
      related={[
        { label: "ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාම", href: "/si/learn/sri-lanka-gem-trade-intro" },
        { label: "ශ්‍රී ලංකාවේ මැණික් පද", href: "/si/learn/sri-lanka-gem-terms" },
        { label: "මැණික් සොයාගැනීම සහ පතල් ක්‍රම", href: "/sri-lanka-mining" },
      ]}
    >
      <QuickAnswer locale="si">
        <p>NGJA රත්නපුර දිස්ත්‍රික්කය සහ බලංගොඩ ඇතුළු සබරගමුවේ ප්‍රදේශ මැණික් නිෂ්පාදනයට සම්බන්ධ ප්‍රදේශ ලෙස සඳහන් කරයි. මේවායේ භූවිද්‍යාව එකම රටාවක් නොවේ: පර්යේෂණ අනුව පාෂාණ දිරායාම, බෑවුම් ප්‍රවාහනය සහ ගංගා අවසාදිත තැන්පත් වීම වැනි ක්‍රියාවලි දායක විය හැකියි. ප්‍රදේශයක නමක් පමණින් කිසියම් ඉඩමක මැණික් ඇති බව හෝ ගලක මූලාරම්භය තහවුරු නොවේ.</p>
      </QuickAnswer>

      <SriLankaGeologyExplorer />

      <ArticleSection heading="රත්නපුර ප්‍රදේශයේ භූවිද්‍යාත්මක පසුබිම">
        <p>NGJA රත්නපුර දිස්ත්‍රික්කයේ රත්නපුර, කුරුවිට, පැල්මඩුල්ල සහ බලංගොඩ ඇතුළු අවට ප්‍රදේශ පැරණි මැණික් ප්‍රදේශ ලෙස ලැයිස්තුගත කරයි. එම ආයතනය ශ්‍රී ලංකාවේ මැණික් ඛනිජ residual, eluvial සහ alluvial තැන්පතු තුළින් ලැබෙන බව සඳහන් කරයි.</p>
        <p>පේරාදෙණිය විශ්වවිද්‍යාලයේ Kalu Ganga basin අධ්‍යයනයේදී පර්යේෂකයන් ද්‍රෝණියේ gem pits නිරීක්ෂණය කර, පහළ catchment හි තෝරාගත් ස්ථාන කිහිපයක තට්ටු පරීක්ෂා කළහ. එහි සාරාංශය අනුව, තැන්පතු ගඟේ නිම්නවල සහ බෑවුම්වල වෙනස් ආකාරයෙන් දිස් විය හැකියි. පර්යේෂකයන් sediment ඉතිහාසය පිළිබඳ තවදුරටත් විස්තරාත්මක අධ්‍යයන අවශ්‍ය බවත් සඳහන් කරති.</p>
      </ArticleSection>

      <ArticleSection heading="බලංගොඩ සහ ඉහළ වලවේ ගැන පර්යේෂණ කියන්නේ කුමක්ද?">
        <p>NGJA බලංගොඩ සබරගමුවේ මැණික් ප්‍රදේශ අතර නම් කරයි. එයට අමතරව, පේරාදෙණිය විශ්වවිද්‍යාලයේ PGIS පර්යේෂකයන් 2022 දී upper Walawe river basin හි ගඟ ඉවුරු සහ gem pits වලින් නියැදි එකතු කර, ප්‍රශ්නාවලියක් ද භාවිත කර ඇත. එම අධ්‍යයනය Waleboda, Pinnawala සහ Amupitiya ආශ්‍රිත ප්‍රදේශවල ඇතැම් ගල් සඳහා විභවය වාර්තා කරයි.</p>
        <p>එය සීමිත නියැදි හා ක්‍රමවේදයක් සහිත පර්යේෂණ සාරාංශයකි. ඉඩමක ගල් තිබේද, පතල් කිරීම නීත්‍යානුකූලද, හෝ යම් ගලක් “බලංගොඩ” මූලාරම්භයක්ද යන්න එයින් තනිව තහවුරු කළ නොහැකියි.</p>
      </ArticleSection>

      <ArticleSection heading="ගංගා අවසාදිතයක් තුළ ගලක් පැමිණෙන්නේ කෙසේද?">
        <p>පාෂාණ කාලගුණික ක්‍රියාවලියෙන් බිඳී යන විට එහි ඛනිජ කණිකා නිදහස් විය හැකියි. බෑවුමකින් හෝ ජලයෙන් ගමන් කළ පසු, ඇතැම් කණිකා වෙනත් sediment සමඟ තැන්පත් වේ. බර ඛනිජ ගල් කැට, වැලි, මැටි සහ වෙනත් ද්‍රව්‍ය සමඟ එකම තට්ටුවක තිබිය හැකි අතර තට්ටු ගණන හා ස්වභාවය ස්ථානයෙන් ස්ථානයට වෙනස් වේ.</p>
        <p>“Illam” සහ “malawa” වැනි දේශීය පද පර්යේෂණ සාහිත්‍යයේ ඇතැම් තැන්පතු තට්ටු හඳුන්වන්නට භාවිත වේ. ඒවායේ අර්ථය හා භාවිතය ප්‍රදේශය හෝ කථිකයා අනුව වෙනස් විය හැකි නිසා, මෙහි සරල සමාන පදයක් ලෙස නොගත යුතුය. අපගේ <Link className="font-medium text-accent underline decoration-accent/30 underline-offset-4" href="/si/learn/sri-lanka-gem-terms">ශ්‍රී ලංකාවේ මැණික් පද මාර්ගෝපදේශය</Link> ද බලන්න.</p>
      </ArticleSection>

      <div className="rounded-2xl border border-teal/20 bg-teal-soft p-5 md:p-6">
        <div className="flex gap-3"><Info size={19} className="mt-1 shrink-0 text-teal" aria-hidden="true"/><div><h2 className="font-serif text-lg font-semibold">මෙම රූපය සහ පර්යේෂණයේ සීමාව</h2><p className="mt-2 text-sm leading-6">මෙහි පැතිකඩ රූපය තැන්පතු සංකල්ප තේරුම් ගැනීමට ඇඳූ සාමාන්‍ය නිදර්ශනයකි; භූවිද්‍යාත්මක සිතියමක්, සත්‍ය පතල් ඡායාරූපයක් හෝ සොයාගැනීමේ උපදෙසක් නොවේ. සබරගමුවේ සියලු ප්‍රදේශ එකසේ පරීක්ෂා කර නැති අතර පර්යේෂණවල නිගමන ඒ ඒ නියැදි, ප්‍රදේශ සහ කාලයට සීමා වේ.</p></div></div>
      </div>

      <ArticleSection heading="මූලාශ්‍ර සහ තවදුරටත් කියවීම">
        <div className="grid gap-3">
          {sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="group rounded-xl border border-border bg-white p-4 transition-colors hover:border-accent/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"><span className="flex items-start justify-between gap-3 font-medium">{source.title}<ExternalLink size={15} className="mt-1 shrink-0 text-accent" aria-hidden="true"/></span><span className="mt-1 block text-sm leading-6 text-muted">{source.note}</span></a>)}
        </div>
      </ArticleSection>

      <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-4 text-sm leading-6 text-muted"><Gem size={17} className="mt-1 shrink-0 text-accent" aria-hidden="true"/><p>භූවිද්‍යාත්මක තොරතුරු අධ්‍යාපනය සඳහා පමණි. ඉඩම් අයිතිය, පතල් බලපත්‍ර, පාරිසරික කොන්දේසි සහ සේවා ස්ථාන ආරක්ෂාව සඳහා අදාළ වත්මන් නිල ආයතන හා සුදුසුකම්ලත් විශේෂඥයන්ගෙන් විමසන්න.</p></div>
      <p className="text-sm"><a className="inline-flex items-center gap-2 font-medium text-accent hover:underline" href="https://ngja.gov.lk/gems/gemstone-mining-industry/" target="_blank" rel="noreferrer">NGJA mining industry page <ArrowUpRight size={14}/></a></p>
    </ArticleLayout>
  );
}
