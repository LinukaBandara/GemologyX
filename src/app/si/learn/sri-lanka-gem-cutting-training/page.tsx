import type { Metadata } from "next";
import { ArrowUpRight, ExternalLink, Gem, GraduationCap, Info, MoveRight, Target, Timer } from "lucide-react";
import { ArticleLayout, ArticleSection, QuickAnswer } from "@/components/article-layout";
import { SriLankaCuttingJourney } from "@/components/sri-lanka-cutting-journey";

export const metadata: Metadata = {
  title: "ශ්‍රී ලංකාවේ මැණික් කැපීම සහ පුහුණුව",
  description: "ශ්‍රී ලංකාවේ faceting උරුමය, free-size හා calibrated සේවා, GJRTI පුහුණු මාර්ග සහ මැණික් කැපුම් වැඩ භාරදීම ගැන සිංහලෙන් කියවන්න.",
  alternates: { canonical: "/si/learn/sri-lanka-gem-cutting-training" },
};

const sources = [
  { title: "NGJA: Gemstone Faceting Industry", href: "https://ngja.gov.lk/gems/gemstone-faceting-industry/", note: "Hanaporuwa/Bow cutting සම්ප්‍රදාය සහ ශ්‍රී ලංකාවේ faceting කර්මාන්තය ගැන NGJA හි පසුබිම් විස්තරය." },
  { title: "GJRTI: Certificate Courses", href: "https://www.gjrti.gov.lk/certificate-courses/", note: "Gem cutting and polishing සහ precision gem cutting ඇතුළු GJRTI පාඨමාලා ලැයිස්තුව. වත්මන් intake, මධ්‍යස්ථාන, සුදුසුකම් සහ ගාස්තු මෙතැනින් තහවුරු කරන්න." },
  { title: "GJRTI: National Accreditations", href: "https://www.gjrti.gov.lk/national-accreditations/", note: "GJRTI හි TVEC හා NVQ ප්‍රතීතන පිළිබඳ ප්‍රකාශිත තොරතුරු." },
  { title: "GJRTI: Ratnapura Regional Center", href: "https://www.gjrti.gov.lk/ratnapura-regional-center/", note: "Ratnapura මධ්‍යස්ථානය සහ ප්‍රකාශිත gem sector course options." },
];

const trainingPaths = [
  {
    number: "01",
    title: "කෙටි ප්‍රායෝගික පාඨමාලාව",
    duration: "දින 10ක පාඨමාලාවක් ලෙස ලැයිස්තුගතයි",
    description: "මැණික් කැපීම හා ඔප දැමීමේ මූලික අත්දැකීමක් සොයන වෙළෙඳුන්ට, ආධුනිකයන්ට සහ ක්ෂේත්‍රයට ඇතුළු වීමට කැමති අයට.",
    icon: Timer,
    tone: "bg-[#edf4f0]",
  },
  {
    number: "02",
    title: "NVQ 3/4 කැපීම සහ ඔප දැමීම",
    duration: "දිගුකාලීන ප්‍රායෝගික පුහුණුව",
    description: "වර්ග කිරීම, සලකුණු කිරීම, dopping, shaping, faceting, polishing සහ අවසාන තත්ත්ව පරීක්ෂාව ඇතුළත් වෘත්තීය මාර්ගය.",
    icon: GraduationCap,
    tone: "bg-[#f3eef7]",
  },
  {
    number: "03",
    title: "Precision gem cutting",
    duration: "Ratnapura මධ්‍යස්ථානයේ විශේෂිත විකල්පයක්",
    description: "කුඩා ගල් සහ මානවල අනුකූලතාව ඉලක්ක කරන විශේෂිත පුහුණුව. අවශ්‍ය පූර්ව කුසලතා සහ වත්මන් intake එක සෘජුව තහවුරු කරන්න.",
    icon: Target,
    tone: "bg-[#f7f1e5]",
  },
];

export default function SriLankaGemCuttingTrainingPage() {
  return (
    <ArticleLayout
      category="ශ්‍රී ලංකාවේ කර්මාන්තය, කැපීම සහ පුහුණුව"
      readTime="මිනිත්තු 8"
      title="ශ්‍රී ලංකාවේ මැණික් කැපීම: ශිල්පය, සේවා සහ පුහුණු මාර්ග"
      crumbHref="/si/learn"
      crumbLabel="ශ්‍රී ලංකා සිංහල එකතුව"
      heroImage={{ src: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Gem_cutting_on_a_lap_wheel%2C_Gintota%2C_Sri_Lanka_%282026%29.jpg", alt: "A gem cutter working at a lap wheel in Gintota, Sri Lanka", credit: "ගින්තොට මැණික් කැපීමේ වැඩමුළුව · Ilyes Makria / Joalys · CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Gem_cutting_on_a_lap_wheel,_Gintota,_Sri_Lanka_(2026).jpg" }}
      related={[
        { label: "ශ්‍රී ලංකාවේ මැණික් වෙළෙඳාම", href: "/si/learn/sri-lanka-gem-trade-intro" },
        { label: "Geuda සහ රළු ගල් ගැනුම්", href: "/si/learn/buying-geuda" },
        { label: "රත්නපුර සහ බලංගොඩ භූවිද්‍යාව", href: "/si/learn/ratnapura-balangoda-gem-geology" },
      ]}
    >
      <QuickAnswer locale="si">
        <p>ශ්‍රී ලංකාවේ මැණික් කැපීම දේශීය කර්මාන්තයේම කොටසකි. NGJA හි faceting පිටුව Hanaporuwa හෝ Bow Cutting ක්‍රමය සම්ප්‍රදායික උරුමයක් ලෙස සඳහන් කරන අතර, free-size, calibrated සහ precision cutting වැනි නවීන සේවා වර්ගත් ලැයිස්තුගත කරයි. දැනට ඇති පාඨමාලා සහ මධ්‍යස්ථාන සඳහා GJRTI වෙතින් නවතම තොරතුරු තහවුරු කළ යුතුය.</p>
      </QuickAnswer>

      <SriLankaCuttingJourney />

      <ArticleSection heading="දේශීය ශිල්පය සහ වෙනස්වන තාක්ෂණය">
        <p>NGJA හි කර්මාන්ත සටහන අනුව, Hanaporuwa හෝ Bow Cutting Method එක ශ්‍රී ලංකාවේ මැණික් faceting සම්ප්‍රදායේ කොටසකි. එම පිටුව computer-assisted precision technology වෙත කර්මාන්තය මාරුවීම ද සඳහන් කරයි. මෙය ආයතනයේ ඉතිහාසමය සාරාංශයකි; හැම වැඩමුළුවක්ම එකම උපකරණ භාවිත කරන බවට හෝ එක් කැපුම් ක්‍රමයක් අනෙකට වඩා හොඳ බවට සාක්ෂියක් නොවේ.</p>
        <p>NGJA හි විස්තරයේ free-size, calibrated සහ precision cutting යන වචන දක්නට ලැබේ. සේවා සපයන්නෙකුගෙන් මේවායේ අර්ථය, එකඟ වන මාන පරාසය, polish/finish අපේක්ෂාව සහ අවසාන පරීක්ෂණය කුමක්දැයි විමසීම ප්‍රයෝජනවත්ය.</p>
      </ArticleSection>

      <ArticleSection heading="GJRTI පුහුණුව සහ වෘත්තීය ඉගෙනීම">
        <p>GJRTI පාඨමාලා ලැයිස්තුවේ කෙටි ප්‍රායෝගික පාඨමාලාවක්, NVQ 3/4 මට්ටමේ gem cutting and polishing පුහුණුව සහ precision cutting මාර්ගයක් දක්වයි. Ratnapura මධ්‍යස්ථානයේ ද පාඨමාලා කිහිපයක් ලැයිස්තුගතයි. ආරම්භයට පෙර ඔබේ අරමුණට ගැළපෙන මාර්ගය තෝරාගන්න:</p>
        <div className="my-6 grid gap-3 md:grid-cols-3">
          {trainingPaths.map((path) => {
            const Icon = path.icon;
            return <article key={path.number} className={`group relative overflow-hidden rounded-2xl border border-border p-5 transition duration-200 hover:-translate-y-1 hover:shadow-md ${path.tone}`}>
              <div className="flex items-center justify-between"><span className="font-mono text-xs font-semibold tracking-widest text-muted">PATH {path.number}</span><span className="grid size-10 place-items-center rounded-full bg-white/80 text-accent"><Icon size={19} aria-hidden="true"/></span></div>
              <h3 className="mt-5 font-serif text-lg font-semibold leading-snug">{path.title}</h3>
              <p className="mt-2 text-xs font-semibold leading-5 text-accent">{path.duration}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{path.description}</p>
            </article>;
          })}
        </div>
        <a href="https://www.gjrti.gov.lk/certificate-courses/" target="_blank" rel="noreferrer" className="group mb-5 flex items-center justify-between gap-4 rounded-2xl bg-[#142f43] p-5 text-white transition hover:bg-[#1c4057] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:p-6">
          <span><span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[#d8bf80]">GJRTI · නිල පාඨමාලා</span><span className="mt-1 block font-serif text-lg font-semibold">පාඨමාලා, මධ්‍යස්ථාන සහ වත්මන් intake බලන්න</span><span className="mt-1 block text-sm text-white/70">ගාස්තු, සුදුසුකම් සහ දිනයන් වෙනස් විය හැකියි.</span></span>
          <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/25 transition group-hover:translate-x-1"><MoveRight size={18}/></span>
        </a>
        <p>GJRTI හි accreditation පිටුව gem cutting and polishing NVQ-සම්මත වැඩසටහන් අතරට දක්වයි. අදාළ පාඨමාලාවට සහ intake එකට accreditation, කාලසීමාව, අන්තර්ගතය, ප්‍රවේශ කොන්දේසි සහ මධ්‍යස්ථානය තවම අදාළදැයි GJRTI වෙතින් සෘජුව තහවුරු කරන්න.</p>
        <div className="flex gap-3 rounded-xl border border-teal/20 bg-teal-soft p-4 text-sm leading-6"><GraduationCap size={18} className="mt-1 shrink-0 text-teal" aria-hidden="true"/><p>මෙම මාර්ගෝපදේශයේ කාලසීමා සහ වත්මන් පන්ති කාලසටහන ස්ථිර පොරොන්දු නොවේ. ඇතුළත් වීමේ තීරණයට පෙර නිල course office එකෙන් තහවුරු කරන්න.</p></div>
      </ArticleSection>

      <ArticleSection heading="කැපීමේ වැඩ භාරදීමේදී පැහැදිලි කරගන්න">
        <p>රළු ගලක ස්වභාවය, inclusions, කැඩීමේ අවදානම සහ තෝරාගන්නා design එක අනුව ලැබෙන බර සහ පෙනුම වෙනස් විය හැකියි. කට වචනයෙන් දෙන yield estimate එකක් සහතික ප්‍රතිඵලයක් ලෙස නොසලකන්න. Yield අනුපාතය ගණනය කරන ආකාරය සහ cutter සමඟ ලිඛිතව එකඟ විය යුතු කරුණු සඳහා <a href="/si/learn/cutting-weight-loss">කැපීමේදී බර අඩුවීම පිළිබඳ මාර්ගෝපදේශය</a> බලන්න. එකඟතා වෙනස් නම් වැඩ ආරම්භයට පෙර ලිඛිතව පැහැදිලි කරගන්න.</p>
        <ul>
          <li>භාරදුන් ගලේ බර, ප්‍රමාණය සහ සියලු පැතිවල පැහැදිලි ඡායාරූප.</li>
          <li>බලාපොරොත්තු වන shape/size, finish, delivery date සහ estimate පරාසය.</li>
          <li>කැපීමේදී ගලට හානි වුවහොත් වගකීම සහ තීරණය ගන්නා පාර්ශ්වය.</li>
          <li>ඉතිරි rough, offcuts සහ polishing dust ගැන එකඟතාව.</li>
          <li>වැඩ අවසන් වූ පසු බර/මාන සසඳා බැලීමට සටහනක් හෝ invoice එකක්.</li>
        </ul>
      </ArticleSection>

      <div className="rounded-2xl border border-gold/25 bg-gold-soft/40 p-5 md:p-6">
        <div className="flex gap-3"><Info size={18} className="mt-1 shrink-0 text-gold" aria-hidden="true"/><div><h2 className="font-serif text-lg font-semibold">තක්සේරු කිරීමේ සීමා</h2><p className="mt-2 text-sm leading-6">කැපුම් වර්ගයක්, cutter කෙනෙකුගේ පළපුරුද්ද හෝ GJRTI පුහුණුවක් පමණක් ගලක අවසාන මිල, origin, treatment හෝ අනාගත yield සහතික නොකරයි. තාක්ෂණික සැකයක් ඇත්නම් ගලක් සුදුසුකම්ලත් gem laboratory එකකින් හෝ වෙනම විශේෂඥයෙකුගෙන් පරීක්ෂා කරගන්න.</p></div></div>
      </div>

      <ArticleSection heading="නිල මූලාශ්‍ර සහ වත්මන් පුහුණු තොරතුරු">
        <div className="grid gap-3 sm:grid-cols-2">{sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="group rounded-xl border border-border bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"><span className="flex items-center justify-between gap-3 font-medium">{source.title}<ExternalLink size={15} className="shrink-0 text-accent transition group-hover:translate-x-0.5" aria-hidden="true"/></span><span className="mt-1 block text-sm leading-6 text-muted">{source.note}</span></a>)}</div>
      </ArticleSection>

      <p className="rounded-xl border border-border bg-background p-4 text-sm leading-6 text-muted"><Gem size={15} className="mr-2 inline text-accent" aria-hidden="true"/>මෙය ශ්‍රී ලංකාවේ lapidary කර්මාන්තය පිළිබඳ අධ්‍යාපනික සටහනකි. ගනුදෙනුවක්, පුහුණු ස්ථානයක් හෝ කැපුම් ප්‍රතිඵලයක් පිළිබඳ සහතිකයක් නොවේ.</p>
      <p className="text-sm"><a className="inline-flex items-center gap-2 font-medium text-accent hover:underline" href="https://www.gjrti.gov.lk/certificate-courses/" target="_blank" rel="noreferrer">GJRTI පාඨමාලා පිටුව බලන්න <ArrowUpRight size={14}/></a></p>
    </ArticleLayout>
  );
}
