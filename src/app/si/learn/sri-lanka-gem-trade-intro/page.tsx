import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
} from "@/components/article-layout";
import { SriLankaTradeJourney } from "@/components/sri-lanka-trade-journey";

export const metadata: Metadata = {
  title: "ශ්‍රී ලංකාවේ මැණික් වෙළෙඳ ගමන | GemologyX",
  description:
    "පතල් සහ රළු ගල් සිට කැපීම, වෙළෙඳාම, ආභරණ සහ අපනයනය දක්වා ශ්‍රී ලංකාවේ මැණික් කර්මාන්තයේ භූමිකා සහ සීමා දැනගන්න.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="ශ්‍රී ලංකාවේ මැණික් කර්මාන්තය"
      readTime="මිනිත්තු 8"
      title="ශ්‍රී ලංකාවේ මැණික් වෙළෙඳ ගමන"
      crumbHref="/si/learn"
      crumbLabel="ශ්‍රී ලංකා මැණික් දැනුම"
      lastReviewed="2026-11-05"
      related={[
        { label: "වෙළෙන්දාගේ භූමිකා", href: "/si/learn/sri-lanka-dealer-types" },
        { label: "කැපීම සහ පුහුණුව", href: "/si/learn/sri-lanka-gem-cutting-training" },
        { label: "අපනයන ලේඛන", href: "/si/learn/export-documents-intro" },
        { label: "වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
      ]}
    >
      <QuickAnswer locale="si">
        <p>
          ශ්‍රී ලංකාවේ මැණික් හා ස්වර්ණාභරණ කර්මාන්තයට පතල්කරුවන්, වෙළෙන්දන්,
          ගල් කැපීමේ සහ ඔප දැමීමේ ශිල්පීන්, පරීක්ෂණාගාර, අපනයනකරුවන්,
          ස්වර්ණාභරණ නිෂ්පාදකයන් සහ සිල්ලර වෙළෙන්දන් සම්බන්ධ වේ. ගලක් මේ
          අදියර හරහා යන ආකාරය ගනුදෙනුවෙන් ගනුදෙනුවට වෙනස් විය හැකියි; පහත
          රූප සටහන පොදු කර්මාන්ත සම්බන්ධතා පෙන්වන සරල ආකෘතියකි.
        </p>
      </QuickAnswer>

      <SriLankaTradeJourney />

      <ArticleSection heading="එකම ගලක් හැම විටම එකම මාර්ගයක යන්නේ නැහැ">
        <p>
          රළු ගලක් දේශීයව කැපිය හැකියි, වෙළෙන්දෙකු හරහා වෙනත් ගැනුම්කරුවෙකුට
          යා හැකියි, නැතහොත් ගනුදෙනුවේ ස්වභාවය අනුව පරීක්ෂාවකට හෝ අපනයන
          ක්‍රියාවලියකට ඇතුළත් විය හැකියි. සමහර ව්‍යාපාර එක් අදියරකට වඩා
          සම්බන්ධයි. ඒ නිසා සෑම ගලකටම එකම අනුපිළිවෙළක් හෝ සෑම පියවරකම
          එකම පාර්ශ්වයක් සිටින බවට මෙම සටහනෙන් අදහස් නොවේ.
        </p>
        <p>
          Sri Lanka Export Development Board (EDB) කර්මාන්ත විස්තරයේ දක්වන
          ප්‍රධාන පාර්ශ්ව අතර පතල්කරුවන්, මැණික් වෙළෙන්දන්, කැපීම හා ඔප දැමීමේ
          වැඩපළ, අපනයනකරුවන්, ස්වර්ණාභරණ නිෂ්පාදකයන් සහ සිල්ලර වෙළෙන්දන්
          ඇතුළත් වේ.
        </p>
      </ArticleSection>

      <ArticleSection heading="ගැනුම්කරුවෙකුට මෙයින් ලැබෙන ප්‍රයෝජනය">
        <ul>
          <li>ඔබ කතා කරන්නේ කුමන භූමිකාවක සිටින පාර්ශ්වයක් සමඟදැයි පැහැදිලි කරගන්න.</li>
          <li>ගලේ දැනට ඇති තත්ත්වය, ප්‍රතිකාර, බර සහ විකුණුම් කොන්දේසි ලිඛිතව සටහන් කරන්න.</li>
          <li>කැපීම හෝ උණුසුම් කිරීම අනාගත බර/පෙනුම සහතික නොකරන බව මතක තබාගන්න.</li>
          <li>අපනයන හෝ බලපත්‍ර කටයුත්තක් නම් වත්මන් අවශ්‍යතා NGJA සහ රේගුවෙන් තහවුරු කරන්න.</li>
        </ul>
      </ArticleSection>

      <PracticalChecklist
        locale="si"
        items={[
          "විකුණුම්කරුගේ භූමිකාව සහ ගලේ වර්තමාන තත්ත්වය පැහැදිලිද?",
          "අනන්‍යතාව, ප්‍රතිකාර, බර, මිල සහ ආපසු භාරදීමේ කොන්දේසි ලිඛිතද?",
          "වැඩක් භාරදෙන්නේ නම් කවුරුන් එය කරන්නේද, ගාස්තුව සහ අවදානම කාටද යන්න පැහැදිලිද?",
          "ඉහළ වටිනාකමක ගනුදෙනුවකට ස්වාධීන පරීක්ෂාවක් සලකා බැලුවාද?",
        ]}
      />

      <ArticleSection heading="නිල මූලාශ්‍ර">
        <ul>
          <li><a href="https://www.srilankabusiness.com/gem-diamond-and-jewellery/about-sri-lanka-gems/industry-capability.html" target="_blank" rel="noreferrer">EDB: ශ්‍රී ලංකාවේ මැණික්, දියමන්ති සහ ස්වර්ණාභරණ කර්මාන්තයේ වටිනාකම් දාමය</a></li>
          <li><a href="https://ngja.gov.lk/gem-tower-ratnapura/" target="_blank" rel="noreferrer">NGJA: Ratnapura Gem Tower සහ වෙළෙඳ සහාය සේවා</a></li>
          <li><a href="https://ngja.gov.lk/business_services/export-services-procedure/" target="_blank" rel="noreferrer">NGJA: මැණික් සහ ස්වර්ණාභරණ අපනයන සේවා</a></li>
        </ul>
        <p className="text-sm text-muted">
          මෙම පිටුව කර්මාන්තය ගැන අධ්‍යාපනික හැඳින්වීමක් පමණි. වෙළෙඳපොළ,
          නියාමන සහ අපනයන තොරතුරු වෙනස් විය හැකි නිසා ගනුදෙනුවකට පෙර අදාළ
          ආයතනයෙන් නවතම තොරතුරු තහවුරු කරන්න.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}
