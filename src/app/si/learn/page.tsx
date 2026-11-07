import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Gem, Landmark, ShieldCheck } from "lucide-react";
import { SriLankaSinhalaExplorer } from "@/components/sri-lanka-sinhala-explorer";

export const metadata: Metadata = {
  title: "ශ්‍රී ලංකාවේ මැණික් — සිංහල දැනුම් මධ්‍යස්ථානය",
  description: "ශ්‍රී ලංකාවේ මැණික්, භූවිද්‍යාව, පතල්, Geuda, Ceylon sapphire, දේශීය වෙළෙඳාම සහ ගැනුම් පිළිබඳ සිංහල මාර්ගෝපදේශ.",
  alternates: { canonical: "/si/learn" },
};

export default function SinhalaSriLankaHub() {
  return (
    <main lang="si" className="gx-regional-hub gx-sinhala-hub">
      <div className="container-page">
        <nav className="gx-regional-breadcrumb" aria-label="ගමන් මඟ"><Link href="/">මුල් පිටුව</Link><span>/</span><span>සිංහල දැනුම් මධ්‍යස්ථානය</span></nav>
        <header className="gx-regional-hero gx-regional-hero-si">
          <div className="gx-regional-hero-copy">
            <p className="gx-regional-kicker"><span /> GEMOLOGYX · සිංහල දැනුම් එකතුව</p>
            <h1>ශ්‍රී ලංකාවේ මැණික් ලෝකය.</h1>
            <p className="gx-regional-lede">අපේ දිවයිනේ මැණික් සම්පත, භූවිද්‍යාව, පතල් කර්මාන්තය, කැපීම, දේශීය වෙළෙඳාම සහ මැණික් මිලදී ගැනීම පිළිබඳ විශ්වාසදායක දැනුම සිංහලෙන්.</p>
            <div className="gx-regional-actions">
              <a className="gx-regional-primary" href="#sri-lanka-guide-list-title">මාතෘකා ගවේෂණය කරන්න <ArrowUpRight size={16} /></a>
              <Link className="gx-regional-secondary" href="/sri-lanka">English country guide</Link>
            </div>
            <div className="gx-regional-meta"><span>සිංහල · ශ්‍රී ලංකාව කේන්ද්‍ර කරගත්</span><span>භූවිද්‍යාව · කර්මාන්තය · දැනුම</span></div>
          </div>
          <figure className="gx-regional-hero-image">
            <Image src="/images/homepage/Sri lanka.jpg" alt="ශ්‍රී ලංකාවේ භූදර්ශනයක්" fill priority sizes="(max-width: 800px) 100vw, 48vw" />
            <figcaption>අපේ දිවයින <span>ශ්‍රී ලංකාව</span></figcaption>
          </figure>
        </header>

        <section className="gx-regional-intro gx-regional-intro-si">
          <p className="gx-regional-kicker"><span /> දේශීය දැනුම · පැහැදිලි සීමා</p>
          <h2>මැණික් ගලකට වඩා පුළුල් කතාවක්.</h2>
          <p>ශ්‍රී ලංකාවේ මැණික් උරුමය භූවිද්‍යාව, ප්‍රාදේශීය අත්දැකීම්, පතල් කර්මාන්තය, කැපුම් ශිල්පය සහ වෙළෙඳ සම්බන්ධතා සමඟ බැඳී ඇත. මෙහි මාර්ගෝපදේශ ඒ සියල්ල වෙන වෙනම, සරලව සහ වගකීමෙන් පැහැදිලි කරයි.</p>
        </section>

        <div className="gx-sinhala-principles">
          <article><Gem size={20} /><h2>ගල් සහ භූවිද්‍යාව</h2><p>Sapphire, Geuda සහ මෙරටට සම්බන්ධ මැණික් වර්ග හා ඒවායේ භූවිද්‍යාත්මක පසුබිම.</p></article>
          <article><Landmark size={20} /><h2>කර්මාන්තය සහ වෙළෙඳාම</h2><p>පතල්, කැපීම, වෙළෙඳ භූමිකා, වාර්තා සහ අපනයන ක්‍රියාවලිය.</p></article>
          <article><ShieldCheck size={20} /><h2>සාක්ෂි සහ විශ්වාසය</h2><p>පෙනුමෙන් පමණක් ගලක අනන්‍යතාව, origin හෝ වටිනාකම තහවුරු කළ නොහැක.</p></article>
        </div>

        <SriLankaSinhalaExplorer />

        <section className="gx-regional-resources" aria-labelledby="sri-lanka-official-resources">
          <div><p className="gx-regional-kicker"><span /> නිල තොරතුරු සහ සේවා</p><h2 id="sri-lanka-official-resources">නවතම නියමයන් අදාළ ආයතනයෙන් තහවුරු කරන්න.</h2><p>බලපත්‍ර, අපනයන සහ පරීක්ෂණ සේවා කාලයත් සමඟ වෙනස් විය හැකියි. මෙහි සාරාංශය කියවීමෙන් පසු ඔබගේ අවස්ථාවට අදාළ තොරතුරු නිල ආයතනයෙන්ම තහවුරු කරගන්න.</p></div>
          <div className="gx-regional-resource-links">
            <a href="https://ngja.gov.lk/business_services/export-services-procedure/" target="_blank" rel="noreferrer"><span>01</span> NGJA · මැණික් සහ ආභරණ අපනයනය <ExternalLink size={15} /></a>
            <a href="https://ngja.gov.lk/gem-tower-ratnapura/" target="_blank" rel="noreferrer"><span>02</span> NGJA · රත්නපුර මැණික් කුළුණ <ExternalLink size={15} /></a>
            <a href="https://ngja.gov.lk/business_services/contact-gem-laboratory-centers-of-ngja/" target="_blank" rel="noreferrer"><span>03</span> NGJA · මැණික් පරීක්ෂණාගාර <ExternalLink size={15} /></a>
          </div>
          <p className="gx-regional-resource-footnote">සබැඳි අවසන් වරට පරීක්ෂා කළ දිනය: 2026-11-05. මෙය නීතිමය, රේගු හෝ වෘත්තීය උපදෙස් නොවේ.</p>
        </section>
        <footer className="gx-regional-language-switch"><Link href="/learn">English global learning library <ArrowUpRight size={15} /></Link></footer>
      </div>
    </main>
  );
}
