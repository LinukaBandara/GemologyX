import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් පරීක්ෂණ වාර්තාවක ප්‍රධාන තොරතුරු | GemologyX",
  description:
    "වාර්තාවක ගල් වර්ගය, බර, මානයන්, ප්‍රතිකාර සටහන්, වාර්තා අංකය සහ සීමාවන් පරීක්ෂා කරන ආකාරය.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="මැණික් පරීක්ෂණ වාර්තාවක තිබිය යුතු ප්‍රධාන තොරතුරු"
      crumbHref="/si/learn/how-to-read-gem-report"
      crumbLabel="වාර්තාවක් කියවීම"
      lastReviewed="2026-10-24"
      related={[
        { label: "වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
        { label: "Labs මූලික", href: "/si/learn/gem-labs-overview" },
        { label: "Origin opinion vs guarantee", href: "/si/learn/origin-opinion-vs-guarantee" },
      ]}
    >
      <QuickAnswer>
        <p>
          ප්‍රධාන කරුණු: වාර්තා අංකය, species / variety, natural vs synthetic,
          බර, මානයන්, හැඩය, ප්‍රතිකාර notes, (තිබේ නම්) origin opinion. අංකය
          සත්‍යාපනය කර ගල සමඟ ගැළපේද බලන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="වාර්තා අංකය සහ දිනය">
        <p>නිල මාර්ගයෙන් සත්‍යාපනය කරන්න. පැරණි වාර්තාවක් නම් නව පරීක්ෂාවක් සලකා බලන්න.</p>
      </ArticleSection>

      <ArticleSection heading="ගල් වර්ගය සහ ස්වභාවික බව">
        <p>Species, variety, natural / laboratory-grown / synthetic වචන කියවන්න.</p>
      </ArticleSection>

      <ArticleSection heading="බර, මානයන්, හැඩය">
        <p>ඔබේ ගලේ බර සහ මානයන් වාර්තාවට ගැළපේද බලන්න. නොගැළපේ නම් පැහැදිලි කිරීමක් ඉල්ලන්න.</p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර සහ origin">
        <p>Treatment notes සහ origin opinion (තිබේ නම්) — opinion ද guarantee ද තේරුම් ගන්න.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "වාර්තා අංකය සත්‍යාපනය කළාද?",
          "Species / natural-synthetic කියවුවාද?",
          "බර / මානයන් ගලට ගැළපේද?",
          "Treatment සහ origin notes බැලුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "වාර්තාවේ සියල්ල absolute fact — සමහර notes opinions.",
          "ඡායාරූපයක් තියෙනවා නම් ගල එකමයි — බර/මානයන්ද බලන්න.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. වාර්තාවක් මිල සහතික නොකරයි.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
