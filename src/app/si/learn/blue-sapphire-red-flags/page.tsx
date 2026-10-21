import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "නිල්මැණික් මිලදී ගැනීමේදී red flags | GemologyX",
  description:
    "නිල්මැණික් ගනුදෙනුවලදී සැලකිලිමත් විය යුතු අනතුරු ඇඟවීම් — අතිශය සහතික, පීඩනය, ලේඛන නොමැතිකම සහ සැක සහිත මිල.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="නිල්මැණික් මිලදී ගැනීමේදී red flags"
      crumbHref="/si/learn/blue-sapphire-complete-guide"
      crumbLabel="නිල්මැණික් මාර්ගෝපදේශය"
      lastReviewed="2026-10-21"
      related={[
        { label: "මැණික් ගනුදෙනුවල වංචා අවදානම්", href: "/si/learn/avoid-gemstone-scams" },
        { label: "නිල්මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/blue-sapphire-buying-checklist" },
        { label: "මැණික් පරීක්ෂණ වාර්තාව කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "නිල්මැණිකක වටිනාකම", href: "/si/learn/blue-sapphire-value-factors" },
      ]}
    >
      <QuickAnswer>
        <p>
          Red flags: අතිශය සහතික (“100% unheated, investment grade”), පීඩනයෙන්
          විකිණීම, ලේඛන/වාර්තා නොමැතිකම, ගල සමඟ නොගැළපෙන වාර්තා, අසාමාන්‍ය ලෙස
          අඩු මිල, සහ ස්වාධීන පරීක්ෂාවට ඉඩ නොදීම. මේවා තනිවම වංචාවක් නොවේ —
          නමුත් අවදානම ඉහළයි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="1. අතිශය සහතික සහ විශාල පොරොන්දු">
        <p>
          “මේක investment grade”, “මිල අනිවාර්යයෙන් ඉහළ යනවා”, “100% guarantee
          unheated without any test” වැනි ප්‍රකාශ සැලකිල්ලෙන් සලකන්න. කිසිවෙකුට
          අනාගත මිල හෝ නැවත විකිණීමේ ලාභය සහතික කළ නොහැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="2. පීඩනයෙන් විකිණීම">
        <p>
          “අදම තීරණය කරන්න, හෙට මිල වෙනස්”, “මේ ගල තවත් කෙනෙක් බලනවා” වැනි
          පීඩනයෙන් ගනුදෙනුවක් කරවීමට උත්සාහ කිරීම red flag එකකි. හොඳ ගනුදෙනුවකට
          කාලය තියෙනවා.
        </p>
      </ArticleSection>

      <ArticleSection heading="3. ලේඛන සහ වාර්තා ගැන ගැටලු">
        <ul>
          <li>වාර්තාවක් නැති අතර මිල ඉහළයි — විශේෂයෙන් unheated / origin claims සමඟ.</li>
          <li>වාර්තාව ගලේ බර/මානයන් සමඟ නොගැළපේ.</li>
          <li>වාර්තා අංකය නිල මාර්ගයෙන් සත්‍යාපනය කළ නොහැකියි.</li>
          <li>ඡායාරූප හෝ PDF පමණක් තියෙනවා, මුල් වාර්තාව නැහැ.</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="4. මිල අසාමාන්‍ය ලෙස අඩු හෝ අසමජාතීය">
        <p>
          සමාන ලක්ෂණ ඇති ගල්වලට වඩා සැලකිය යුතු ලෙස අඩු මිලක් “deal” එකක් විය
          හැකි නමුත්, අනන්‍යතාව, ප්‍රතිකාර හෝ වාර්තා ගැන ගැටලු තිබිය හැකියි. මිල
          පමණක් මත තීරණය නොකරන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="5. ස්වාධීන පරීක්ෂාවට ඉඩ නොදීම">
        <p>
          ගනුදෙනුවට පෙර සුදුසුකම් ලත් රසායනාගාරයකින් හෝ විශේෂඥයකුගෙන් පරීක්ෂා
          කිරීමට ඉඩ නොදෙනවා නම්, හෝ එයට දැඩි ලෙස විරුද්ධ වනවා නම් — එය අවදානම්
          සංඥාවකි.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "අතිශය සහතික / investment promises තියෙනවාද?",
          "පීඩනයෙන් ‘අදම’ කියනවාද?",
          "වාර්තාව ගල සමඟ ගැළපේද සහ නිල මාර්ගයෙන් සත්‍යාපනය වේද?",
          "ස්වාධීන පරීක්ෂාවට ඉඩ දෙනවාද?",
          "මිල, ආපසු භාරදීම සහ කොන්දේසි ලිඛිතව තියෙනවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Red flag එකක් = අනිවාර්යයෙන් වංචාව — නැහැ; අවදානම ඉහළයි.",
          "ලාභ මිල = හොඳ deal — සමහර විට ගැටලුවකි.",
          "විකුණුම්කරු මිත්‍රශීලී නම් ආරක්ෂිතයි — ලේඛන සහ පරීක්ෂාව වැදගත්.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය අධ්‍යාපනික අනතුරු ඇඟවීම් සඳහායි. එය කිසිදු පුද්ගලයකු හෝ
          ව්‍යාපාරයක් වංචාකාරයකු ලෙස චෝදනා නොකරයි. ගනුදෙනුවකදී සැකයක් ඇත්නම්
          නවත්වා ස්වාධීන උපදෙස් ලබාගන්න.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}
