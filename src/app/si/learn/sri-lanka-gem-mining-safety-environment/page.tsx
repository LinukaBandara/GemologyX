import type { Metadata } from "next";
import { ExternalLink, Leaf, ShieldAlert, Waves } from "lucide-react";
import { ArticleLayout, ArticleSection, QuickAnswer } from "@/components/article-layout";
import { SriLankaMineResponsibilityExplorer } from "@/components/interactive-learning-tools";

export const metadata: Metadata = {
  title: "ශ්‍රී ලංකාවේ මැණික් පතල්: පරිසරය සහ වගකීම්",
  description: "NGJA නිල තොරතුරු මත ශ්‍රී ලංකාවේ මැණික් පතල් පරිසර සමාලෝචනය, ජලය, පතල් වසා දැමීම සහ මහජන ආරක්ෂාව ගැන කියවන්න.",
  alternates: { canonical: "/si/learn/sri-lanka-gem-mining-safety-environment" },
};

const officialSources = [
  { title: "NGJA: Gemstone Mining Industry", href: "https://ngja.gov.lk/gems/gemstone-mining-industry/", note: "පතල් ක්‍රම, සංවේදී ප්‍රදේශ, ජලය/සිල්ට් කළමනාකරණය සහ rehabilitation ගැන ආයතනය පළ කර ඇති පසුබිම." },
  { title: "NGJA: Mining Consultancy", href: "https://ngja.gov.lk/business_services/minning-consultancy/", note: "Mining engineer, geologist සහ environmental officer උපදේශන සේවා සහ පරිසර ඇගයීම් පිළිබඳ නිල විස්තර." },
  { title: "NGJA: Mining Licence Process", href: "https://ngja.gov.lk/business_services/minning-licence-process/", note: "වත්මන් බලපත්‍ර ක්‍රියාවලිය, අවසර සහ කොන්දේසි NGJA වෙතින් තහවුරු කරන්න. පිටුවේ ගාස්තු හෝ නියමයන් වෙනස් විය හැකියි." },
];

export default function SriLankaGemMiningSafetyEnvironmentPage() {
  return (
    <ArticleLayout
      category="ශ්‍රී ලංකාවේ පතල්, පරිසරය සහ මහජන දැනුවත්කම"
      readTime="මිනිත්තු 7"
      title="ශ්‍රී ලංකාවේ මැණික් පතල්: පරිසරය සහ වගකීම්"
      crumbHref="/si/learn"
      crumbLabel="ශ්‍රී ලංකා සිංහල එකතුව"
      heroImage={{ src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Timbered_gallery_of_a_gem_pit%2C_Pelmadulla%2C_Sri_Lanka_%282026%29.jpg", alt: "Timbered underground gallery in a gem pit near Pelmadulla", credit: "පැල්මඩුල්ලේ මැණික් පතලක ආධාරක සහිත භූගත මාර්ගය · Ilyes Makria / Joalys · CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Timbered_gallery_of_a_gem_pit,_Pelmadulla,_Sri_Lanka_(2026).jpg" }}
      lastReviewed="2026-11-05"
      related={[
        { label: "රත්නපුර සහ බලංගොඩ භූවිද්‍යාව", href: "/si/learn/ratnapura-balangoda-gem-geology" },
        { label: "පතල් බලපත්‍රයක් ගැන විමසිය යුතු දේ", href: "/si/learn/sri-lanka-mining-licence-basics" },
        { label: "ශ්‍රී ලංකාවේ අපනයන මාර්ගෝපදේශය", href: "/si/learn/export-documents-intro" },
        { label: "English: mining overview", href: "/sri-lanka-mining" },
      ]}
    >
      <QuickAnswer locale="si">
        <p>ශ්‍රී ලංකාවේ මැණික් පතල් ගැන කතා කරන විට භූගත වැඩ, ජලය සහ අවසාදිත, සංවේදී පරිසර ප්‍රදේශ, බලපත්‍ර කොන්දේසි සහ පතල් වසා දැමීම එකට සලකා බැලිය යුතුයි. NGJA පළ කරන්නේ පතල් උපදේශනය, පරිසර ඇගයීම්, සිල්ට් පාලනය සහ rehabilitation පිළිබඳ තොරතුරුයි. ඒවා සාමාන්‍ය පසුබිමක් පමණක් වන අතර නිශ්චිත ස්ථානයක නවතම නීතිමය හෝ ආරක්ෂක අවසර තහවුරු කිරීමක් නොවේ.</p>
      </QuickAnswer>

      <section className="grid gap-3 sm:grid-cols-3" aria-label="මූලික වගකීම්">
        <div className="rounded-2xl border border-border bg-white p-4"><Leaf size={19} className="text-teal" aria-hidden="true"/><h2 className="mt-3 font-semibold">පරිසරය</h2><p className="mt-1 text-sm leading-5 text-muted">ස්ථානයට අදාළ සමාලෝචන හා අනුමැති.</p></div>
        <div className="rounded-2xl border border-border bg-white p-4"><Waves size={19} className="text-accent" aria-hidden="true"/><h2 className="mt-3 font-semibold">ජලය</h2><p className="mt-1 text-sm leading-5 text-muted">සේදීමේ ජලය, සිල්ට් සහ ගංගා ඉවුරු.</p></div>
        <div className="rounded-2xl border border-border bg-white p-4"><ShieldAlert size={19} className="text-gold" aria-hidden="true"/><h2 className="mt-3 font-semibold">ආරක්ෂාව</h2><p className="mt-1 text-sm leading-5 text-muted">ක්‍රියාත්මක පතල් සඳහා විශේෂඥ පාලනය අවශ්‍යයි.</p></div>
      </section>

      <SriLankaMineResponsibilityExplorer />

      <ArticleSection heading="ශ්‍රී ලංකාවේ පතල් ක්‍රම පිළිබඳ නිල පසුබිම">
        <p>NGJA එහි කර්මාන්ත පිටුවේ pit-head mining සහ tunnelling බහුලව භාවිත වන ක්‍රම ලෙසත්, surface placer mining සහ river-bed dredging වෙනත් ක්‍රම ලෙසත් හඳුන්වයි. ක්‍රමයක් තිබෙනවා යන්න එය ඕනෑම ස්ථානයක අවසර ලත්, පරිසරයට සුදුසු හෝ ආරක්ෂිත බව අදහස් නොකරයි. භූමියේ ස්වභාවය, ස්ථානය සහ අදාළ බලපත්‍ර කොන්දේසි තීරණාත්මකයි.</p>
        <p>NGJA හි Mining Consultancy පිටුව අනුව, පරිසරයට සංවේදී ස්ථානවල පතල් කිරීමෙන් පරිසර හා භූරූපමය ගැටලු ඇති විය හැකි අතර, උපදේශනය සඳහා mining engineers, geologists සහ environmental officers සම්බන්ධ වේ. එම පිටුව environmental impact assessments ගැනත් විස්තර කරයි.</p>
      </ArticleSection>

      <ArticleSection heading="ජලය, මඩ සහ පතල් අවසන් කළ පසු">
        <p>NGJA කර්මාන්ත පිටුව gravel washing වලින් පිටවන ජලයේ මඩ හා සිල්ට් ඉවත් කිරීමට sedimentation ponds සහ silt traps භාවිත කිරීම සහ ජලය නැවත භාවිත කිරීම ගැන විස්තර කරයි. එම පිටුවම rehabilitation සැලැස්ම ව්‍යාපෘතිය ආරම්භයේ සිටම සලකා බැලිය යුතු බවත්, excavated overburden වෙන්කර තැබීම බලපත්‍ර කොන්දේසිවලට සම්බන්ධ බවත් කියයි.</p>
        <p>NGJA බලපත්‍ර පිටුවේ mechanical mining permit අවස්ථා සඳහා deposit ආපසු ලබාදීමට පෙර වළවල් වසා තිබීම සහ ඉඩම යථා තත්ත්වයට පත් කිරීම පිළිබඳ පරීක්ෂාවක් සඳහන් වේ. බලපත්‍ර වර්ග, කොන්දේසි සහ ගාස්තු වෙනස් විය හැකි නිසා, මෙම ලිපියේ සාරාංශයෙන් තීරණ නොගෙන NGJA වෙතින් නවතම උපදෙස් බලන්න.</p>
      </ArticleSection>

      <div className="rounded-2xl border border-gold/25 bg-gold-soft/45 p-5 md:p-6">
        <div className="flex gap-3"><ShieldAlert size={19} className="mt-1 shrink-0 text-gold" aria-hidden="true"/><div><h2 className="font-serif text-lg font-semibold">මහජන ආරක්ෂාව පිළිබඳ සීමාව</h2><p className="mt-2 text-sm leading-6">ක්‍රියාත්මක වළවල්, උමං සහ යන්ත්‍ර සූදානම් නොකළ සංචාරක ස්ථාන නොවේ. මෙම පිටුව වැඩබිම් පරීක්ෂා කිරීමේ ක්‍රමයක්, PPE ලැයිස්තුවක් හෝ පතල් වැඩ සඳහා අවසරයක් නොදේ. අවසර නොමැතිව ක්‍රියාත්මක පතල් ස්ථානයකට නොයන්න; පතල් කටයුතු සඳහා වත්මන් NGJA සහ අනෙකුත් අදාළ බලධාරීන්ගේ කොන්දේසි, සහ සුදුසුකම්ලත් විශේෂඥයන්ගේ උපදෙස් අනුගමනය කළ යුතුය.</p></div></div>
      </div>

      <ArticleSection heading="වත්මන් නිල මූලාශ්‍ර">
        <div className="grid gap-3">{officialSources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="rounded-xl border border-border bg-white p-4 transition-colors hover:border-accent/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"><span className="flex items-center justify-between gap-3 font-medium">{source.title}<ExternalLink size={15} className="shrink-0 text-accent" aria-hidden="true"/></span><span className="mt-1 block text-sm leading-6 text-muted">{source.note}</span></a>)}</div>
      </ArticleSection>

      <p className="rounded-xl border border-border bg-background p-4 text-sm leading-6 text-muted">මෙය ශ්‍රී ලංකාවේ මැණික් කර්මාන්තය ගැන අධ්‍යාපනික හැඳින්වීමකි. එය පතල් බලපත්‍රයක්, පරිසර අනුමැතියක්, ආරක්ෂක ප්‍රමිතියක් හෝ නීතිමය උපදෙසක් නොවේ. නිශ්චිත තත්ත්වයක් සඳහා අදාළ ආයතනය සහ සුදුසුකම් ලත් වෘත්තීයවේදියෙකුගෙන් විමසන්න.</p>
    </ArticleLayout>
  );
}
