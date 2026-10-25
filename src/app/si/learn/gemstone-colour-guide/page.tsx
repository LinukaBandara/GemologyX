import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් වර්ණය තේරුම් ගැනීම | GemologyX",
  description:
    "Hue, tone, saturation — මැණික් වර්ණය විස්තර කරන ආකාරය සහ මිලදී ගැනීමේදී බලන්න ඕනේ දේ.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="මැණික් වර්ණය තේරුම් ගැනීම"
      crumbHref="/si/learn/blue-sapphire-colour-quality"
      crumbLabel="නිල්මැණික් වර්ණය"
      lastReviewed="2026-10-25"
      related={[
        { label: "නිල්මැණික් වර්ණය", href: "/si/learn/blue-sapphire-colour-quality" },
        { label: "නිල්මැණිකක වටිනාකම", href: "/si/learn/blue-sapphire-value-factors" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          වර්ණය = hue (වර්ණ වර්ගය) + tone (අඳුරු/ආලෝක) + saturation (තීව්‍රතාව).
          එකම “නිල්” ගල් දෙකක් මේවායින් වෙනස් විය හැකියි. විවිධ ආලෝකයේ
          (දිවා / indoor) බලන්න. වර්ණය පමණක් මිල හෝ species තීරණය නොකරයි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Hue, tone, saturation">
        <p>
          Hue = නිල්, කොළ, රතු ආදිය. Tone = light to dark. Saturation =
          grayish/weak සිට vivid දක්වා. Trade descriptions (“royal blue”,
          “pigeon blood”) subjective විය හැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="ආලෝකය">
        <p>දිවා ආලෝකයේ සහ indoor light එකේ වෙනස් පෙනෙන්න පුළුවන්. එක ආලෝකයකින් පමණක් තීරණය නොකරන්න.</p>
      </ArticleSection>

      <ArticleSection heading="Zoning සහ evenness">
        <p>වර්ණ කලාප (colour zoning) තිබිය හැකියි. Evenness preference පුද්ගලික සහ trade අනුව වෙනස්.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "විවිධ ආලෝකයේ බැලුවාද?",
          "Hue / tone / saturation වෙනස්කම් සටහන් කළාද?",
          "වර්ණය පමණක් මත species හෝ මිල තීරණය නොකළාද?",
        ]}
      />

      <Misconceptions
        items={[
          "අඳුරු = සෑම විටම වඩා හොඳ — tone ඉතා අඳුරු නම් life අඩු විය හැකියි.",
          "Trade colour name = lab-standard grade — බොහෝ විට subjective.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. වර්ණ grade එකක් හෝ මිල සහතිකයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
