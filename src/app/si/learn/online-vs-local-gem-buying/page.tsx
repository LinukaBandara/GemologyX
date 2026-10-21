import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Online සහ දේශීය වෙළෙඳපොළෙන් මැණික් මිලදී ගැනීම | GemologyX",
  description:
    "අන්තර්ජාලයෙන් සහ දේශීය වෙළෙඳපොළෙන් මැණික් මිලදී ගැනීමේ වාසි, අවදානම් සහ ආරක්ෂිත පියවර.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="Online සහ දේශීය වෙළෙඳපොළෙන් මැණික් මිලදී ගැනීම"
      crumbHref="/si/learn/gemstone-buying-checklist"
      crumbLabel="මිලදී ගැනීමේ checklist"
      lastReviewed="2026-10-21"
      related={[
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
        { label: "වෙළෙන්දාගෙන් අසන්න ඕනේ ප්‍රශ්න", href: "/si/learn/questions-to-ask-gem-dealer" },
        { label: "මැණික් ගනුදෙනුවල red flags", href: "/si/learn/avoid-gemstone-scams" },
        { label: "මැණික් පරීක්ෂණ වාර්තාව කියවීම", href: "/si/learn/how-to-read-gem-report" },
      ]}
    >
      <QuickAnswer>
        <p>
          Online: ඡායාරූප/වීඩියෝවල සීමා, ලේඛන සත්‍යාපනය, ආපසු භාරදීමේ ප්‍රතිපත්ති
          වැදගත්. දේශීය: ගල සෘජුව බැලීමට හැකියාව තියෙනවා — නමුත් පීඩනය සහ
          ලේඛන නොමැතිකම අවදානම්. කුමන මාර්ගය වුවත් අනන්‍යතාව, ප්‍රතිකාර, වාර්තා
          සහ කොන්දේසි ලිඛිතව පැහැදිලි කරගන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Online මිලදී ගැනීම">
        <p>
          <strong>වාසි:</strong> තේරීම් වැඩි, මිල සසඳන්න පහසු, සමහර විට වාර්තා
          සහ ඡායාරූප තියෙනවා.
        </p>
        <p>
          <strong>අවදානම්:</strong> ඡායාරූප/වීඩියෝ වර්ණය වෙනස් පෙන්වයි; ගල අතින්
          බැලිය නොහැකි; ව්‍යාජ වාර්තා / නොගැළපෙන වාර්තා; ආපසු භාරදීම අපහසු විය
          හැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="දේශීය වෙළෙඳපොළ">
        <p>
          <strong>වාසි:</strong> ගල සෘජුව බැලීම, විවිධ ආලෝකයේ පරීක්ෂාව, මුහුණට
          මුහුණ සාකච්ඡා.
        </p>
        <p>
          <strong>අවදානම්:</strong> පීඩනයෙන් විකිණීම; ලේඛන නොමැතිකම; “අදම”
          තීරණ; ස්වාධීන පරීක්ෂාවට ඉඩ නොදීම.
        </p>
      </ArticleSection>

      <ArticleSection heading="දෙකටම පොදු ආරක්ෂිත පියවර">
        <ul>
          <li>අනන්‍යතාව සහ ප්‍රතිකාර ලිඛිතව</li>
          <li>වාර්තාව තිබේ නම් නිල මාර්ගයෙන් සත්‍යාපනය</li>
          <li>බර, මානයන්, මිල, ආපසු භාරදීමේ කොන්දේසි ලිඛිතව</li>
          <li>මිල ඉහළ නම් ස්වාධීන පරීක්ෂාවක්</li>
          <li>පීඩනයෙන් තීරණ නොගන්න</li>
        </ul>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Online නම් — return policy සහ වාර්තා සත්‍යාපනය බලන්න",
          "දේශීය නම් — ගල විවිධ ආලෝකයේ බලන්න, ලිඛිත කොන්දේසි ඉල්ලන්න",
          "වාර්තාව ගල සමඟ ගැළපේද?",
          "ස්වාධීන පරීක්ෂාවට ඉඩ තියෙනවාද?",
          "ගනුදෙනුව අසාර්ථක වුවහොත් දරාගත හැකි අවදානම කුමක්ද?",
        ]}
      />

      <Misconceptions
        items={[
          "Online ඡායාරූප = ඇත්ත වර්ණය — නැහැ.",
          "දේශීය = සෑම විටම ආරක්ෂිත — නැහැ; පරීක්ෂා කරන්න.",
          "ලාභ මිල = හොඳ deal — සමහර විට ගැටලුවකි.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. එය කිසිදු වෙළෙඳපොළක් හෝ
          විකුණුම්කරුවෙකු නිර්දේශ හෝ විවේචනය නොකරයි. ගනුදෙනුවකදී සැකයක් ඇත්නම්
          නවත්වා ස්වාධීන උපදෙස් ලබාගන්න.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}
