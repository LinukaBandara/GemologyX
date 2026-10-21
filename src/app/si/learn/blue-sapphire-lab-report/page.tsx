import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "නිල්මැණික් lab report එකක බලන්න ඕනේ දේ | GemologyX",
  description:
    "නිල්මැණික් පරීක්ෂණ වාර්තාවක ගල් වර්ගය, ප්‍රතිකාර, බර, මානයන්, origin notes සහ සීමාවන් කියවන ආකාරය ගැන සිංහල මාර්ගෝපදේශය.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 7"
      title="නිල්මැණික් lab report එකක බලන්න ඕනේ දේ"
      crumbHref="/si/learn/blue-sapphire-complete-guide"
      crumbLabel="නිල්මැණික් මාර්ගෝපදේශය"
      lastReviewed="2026-10-21"
      related={[
        { label: "මැණික් පරීක්ෂණ වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "වාර්තාවක ප්‍රධාන තොරතුරු", href: "/si/learn/gem-lab-report-details" },
        { label: "Heated vs Unheated", href: "/si/learn/heated-vs-unheated-blue-sapphire" },
        { label: "නිල්මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/blue-sapphire-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          නිල්මැණික් වාර්තාවකදී ගල් වර්ගය (corundum / sapphire), බර, මානයන්,
          ප්‍රතිකාර සටහන් (heat / no indications of heat), වාර්තා අංකය සහ ගල සමඟ
          ගැළපේද යන්න ප්‍රධානයි. Origin notes තිබේ නම් ඒවායේ සීමාවන් කියවන්න.
          වාර්තාවක් = සෑම ගුණාංගයක්ම සහතික නොවේ.
        </p>
      </QuickAnswer>

      <ArticleSection heading="වාර්තාවේ මූලික කොටස්">
        <ul>
          <li>
            <strong>ගල් වර්ගය / Species:</strong> සාමාන්‍යයෙන් corundum, variety:
            sapphire (හෝ blue sapphire).
          </li>
          <li>
            <strong>බර සහ මානයන්:</strong> කැරට් බර සහ mm මානයන් ගල සමඟ ගැළපේද
            බලන්න.
          </li>
          <li>
            <strong>ප්‍රතිකාර (Treatment):</strong> Heat, no indications of heat, හෝ
            වෙනත් සටහන්. වචනවල සීමාවන් තේරුම් ගන්න.
          </li>
          <li>
            <strong>වාර්තා අංකය:</strong> නිකුත් කළ ආයතනයේ නිල මාර්ගයෙන්
            සත්‍යාපනය කරන්න.
          </li>
          <li>
            <strong>Origin / Geographic origin:</strong> තිබේ නම් — opinion එකක් විය
            හැකි අතර සීමා තිබිය හැකියි.
          </li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර සටහන් — විශේෂ අවධානය">
        <p>
          “No indications of heat” හෝ සමාන වචන මගින් ඇතැම් විට උණුසුම් ප්‍රතිකාරයක්
          හඳුනා නොගත් බව අදහස් වේ. එය absolute certainty එකක් නොවන අවස්ථා තිබිය
          හැකියි. වාර්තාවේ ක්‍රමවේදය සහ සීමාවන් කියවන්න. Heated යනු ගල ව්‍යාජ බව
          අදහස් නොකරයි.
        </p>
      </ArticleSection>

      <ArticleSection heading="Origin notes">
        <p>
          ශ්‍රී ලංකාව / Ceylon වැනි origin opinion එකක් තිබේ නම්, එය වාර්තාවේ භාෂාව
          අනුව opinion එකක් විය හැකියි. පෙනුමෙන් හෝ විකුණුම්කරුගේ කතාවෙන්
          මූලාරම්භය තහවුරු කළ නොහැකියි. Origin මිලට වැදගත් නම් වාර්තාවේ සීමාවන්
          සහ අවශ්‍ය නම් අතිරේක පරීක්ෂාව සලකා බලන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="ගල සමඟ වාර්තාව ගැළපේද?">
        <p>
          වාර්තාවේ බර, මානයන්, හැඩය සහ (තිබේ නම්) ඡායාරූපය ඔබ ඉදිරියේ ඇති ගලට
          ගැළපේද බලන්න. ගැළපෙන්නේ නැතිනම් ගනුදෙනුව නවත්වා විමසන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගල් වර්ගය sapphire / corundum ලෙස සඳහන්ද?",
          "බර සහ මානයන් ගල සමඟ ගැළපේද?",
          "ප්‍රතිකාර සටහන් (heat / no heat) කියවුවාද?",
          "වාර්තා අංකය නිල මාර්ගයෙන් සත්‍යාපනය කළාද?",
          "Origin notes තිබේ නම් සීමාවන් කියවුවාද?",
          "වාර්තාවේ සීමාවන් සහ පරීක්ෂා නොකළ කරුණු බැලුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "වාර්තාවක් තිබීම = ගලේ සෑම ගුණාංගයක්ම සහතික — නැහැ.",
          "No indications of heat = absolute certainty — සීමා තියෙනවා.",
          "Origin opinion = මූලාරම්භය 100% තහවුරු — බොහෝ විට නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. වාර්තාවක් කියවීම ගලක වෙළෙඳපොළ
          මිලක් හෝ ආයෝජන ප්‍රතිඵලයක් සහතික නොකරයි. අවශ්‍ය නම් සුදුසුකම් ලත්
          මැණික් විශේෂඥයකුගෙන් උපදෙස් ලබාගන්න.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}
