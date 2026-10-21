import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් පරීක්ෂණාගාර (Labs) — මූලික දැනුම | GemologyX",
  description:
    "මැණික් lab වාර්තා භාවිතයේදී දැනගත යුතු මූලික කරුණු — වාර්තාවක අර්ථය, සීමාවන් සහ සත්‍යාපනය.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 7"
      title="මැණික් පරීක්ෂණාගාර (Labs) — මූලික දැනුම"
      crumbHref="/si/learn/how-to-read-gem-report"
      crumbLabel="වාර්තා කියවීම"
      lastReviewed="2026-10-21"
      related={[
        { label: "වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "Origin opinion vs guarantee", href: "/si/learn/origin-opinion-vs-guarantee" },
        { label: "නිල්මැණික් lab report", href: "/si/learn/blue-sapphire-lab-report" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Lab වාර්තාවක් යනු එම ආයතනයේ පරීක්ෂණ ප්‍රතිඵල සහ opinions වේ. එය
          “සහතික පත්‍රයක්” වගේ නිරපේක්ෂ guarantee එකක් නොවේ. වාර්තා අංකය නිල
          මාර්ගයෙන් සත්‍යාපනය කරන්න. Labs අතර ක්‍රමවේදය සහ භාෂාව වෙනස් විය හැකියි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Lab වාර්තාවක් කරන්නේ කුමක්ද?">
        <p>
          සාමාන්‍යයෙන්: ගල් වර්ගය (species), ස්වභාවික / synthetic, බර, මානයන්,
          ප්‍රතිකාර පිළිබඳ notes, සහ සමහර විට origin opinion. වාර්තාවේ හරියටම
          මොනවද ඇතුළත්ද යන්න lab සහ වාර්තා වර්ගය අනුව වෙනස් වේ.
        </p>
      </ArticleSection>

      <ArticleSection heading="සීමාවන්">
        <ul>
          <li>Origin බොහෝ විට opinion එකකි — guarantee නොවේ.</li>
          <li>“No indications of heat” වැනි වචනවල සීමා තිබිය හැකියි.</li>
          <li>වාර්තාව ගල සමඟ ගැළපේද (බර, මානයන්) පරීක්ෂා කළ යුතුය.</li>
          <li>ව්‍යාජ හෝ නොගැළපෙන වාර්තා තිබිය හැකියි — සත්‍යාපනය කරන්න.</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="වාර්තාවක් භාවිත කරන විට">
        <p>
          (1) වාර්තා අංකය නිල website / portal එකෙන් check කරන්න. (2) ගලේ බර
          සහ මානයන් ගැළපේද බලන්න. (3) Treatment සහ origin notes කියවන්න. (4)
          භාෂාවේ සීමාවන් තේරුම් ගන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="“හොඳම lab” ගැන">
        <p>
          වෙළෙඳපොළේ විවිධ labs පිළිගැනීම වෙනස් විය හැකියි. එක් lab එකක් “හොඳම”
          යැයි ප්‍රකාශ කිරීම මෙම අධ්‍යාපනික අඩවියේ අරමුණ නොවේ. වැදගත් වන්නේ
          වාර්තාව සත්‍යාපනය කිරීම, ගල සමඟ ගැළපීම සහ සීමාවන් තේරුම් ගැනීමයි.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "වාර්තා අංකය නිල මාර්ගයෙන් සත්‍යාපනය කළාද?",
          "බර / මානයන් ගලට ගැළපේද?",
          "Treatment සහ origin notes කියවුවාද?",
          "Opinion vs fact භාෂාව තේරුම් ගත්තාද?",
          "මිල ඉහළ නම් දෙවන මතයක් සලකා බැලුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Lab වාර්තාව = 100% guarantee — නැහැ; opinions සහ සීමා තියෙනවා.",
          "ලේබලයේ lab නම තිබීම ප්‍රමාණවත් — අංකය සත්‍යාපනය කරන්න.",
          "සියලුම labs එකම නිගමනයක් දෙයි — නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. එය කිසිදු lab එකක් නිර්දේශ හෝ
          අපකීර්තියට ලක් නොකරයි. වාර්තාවක් ගලක මිල හෝ ආයෝජන වටිනාකම සහතික
          නොකරයි.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}
