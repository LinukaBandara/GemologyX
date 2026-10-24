import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් පරීක්ෂණ වාර්තාවක් කියවන්නේ කෙසේද? | GemologyX",
  description:
    "මැණික් lab වාර්තාවක ගල් වර්ගය, ස්වභාවික බව, ප්‍රතිකාර, බර සහ සත්‍යාපනය කියවන සරල සිංහල මාර්ගෝපදේශය.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="මැණික් පරීක්ෂණ වාර්තාවක් කියවන්නේ කෙසේද?"
      crumbHref="/si/learn/gem-labs-overview"
      crumbLabel="Labs මූලික"
      lastReviewed="2026-10-24"
      related={[
        { label: "Labs — මූලික දැනුම", href: "/si/learn/gem-labs-overview" },
        { label: "Origin opinion vs guarantee", href: "/si/learn/origin-opinion-vs-guarantee" },
        { label: "නිල්මැණික් lab report", href: "/si/learn/blue-sapphire-lab-report" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          වාර්තාවේ බලන්න: වාර්තා අංකය, ගල් වර්ගය (species), ස්වභාවික / synthetic,
          බර, මානයන්, ප්‍රතිකාර සටහන්. අංකය නිල මාර්ගයෙන් සත්‍යාපනය කරන්න. ගලේ
          බර/පෙනුම වාර්තාවට ගැළපේද බලන්න. වාර්තාව = මිල හෝ ලාභ සහතිකයක් නොවේ.
        </p>
      </QuickAnswer>

      <ArticleSection heading="වාර්තාවක් කියන්නේ මොකක්ද?">
        <p>
          පරීක්ෂණාගාරයක් ගල ගැන සටහන් කරන තොරතුරු ලේඛනයකි. එය opinions සහ
          පරීක්ෂණ ප්‍රතිඵල ඇතුළත් විය හැකියි. නිරපේක්ෂ “සහතික පත්‍රයක්” නොවේ.
        </p>
      </ArticleSection>

      <ArticleSection heading="1. අංකය සහ ගලේ විස්තර">
        <p>
          වාර්තා අංකය, දිනය, බර, හැඩය, මිනුම්, ඡායාරූප (තිබේ නම්) බලන්න. ඔබේ
          ගලේ බර හෝ පෙනුම නොගැළපේ නම් පැහැදිලි කිරීමක් ඉල්ලන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="2. ගලේ නම සහ ස්වභාවික බව">
        <p>
          Species / variety කියවන්න. Natural, laboratory-grown / synthetic,
          imitation වචනවල අර්ථය තේරුම් ගන්න. අවිනිශ්චිත නම් විශේෂඥයකුගෙන්
          විමසන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="3. ප්‍රතිකාර සටහන්">
        <p>
          Heat, diffusion, filling වැනි notes තිබේද බලන්න. “No indications of
          heat” වැනි වචනවල සීමා තිබිය හැකියි. සෑම lab එකක්ම එකම පරීක්ෂණ නොකරයි.
        </p>
      </ArticleSection>

      <ArticleSection heading="4. සත්‍යාපනය">
        <ul>
          <li>නිල website / portal එකෙන් අංකය check කරන්න</li>
          <li>බර / මානයන් ගලට ගැළපේද</li>
          <li>පැරණි වාර්තාවක් නම් නව පරීක්ෂාවක් සලකා බලන්න</li>
          <li>මිල අධික නම් ස්වාධීන උපදෙස්</li>
        </ul>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "වාර්තා අංකය නිල මාර්ගයෙන් සත්‍යාපනය කළාද?",
          "බර / මානයන් ගලට ගැළපේද?",
          "Species සහ natural / synthetic කියවුවාද?",
          "Treatment notes බැලුවාද?",
          "Origin තිබේ නම් — opinion ද guarantee ද?",
        ]}
      />

      <Misconceptions
        items={[
          "වාර්තාව = 100% guarantee — නැහැ; opinions සහ සීමා තියෙනවා.",
          "ලේබලයේ lab නම ප්‍රමාණවත් — අංකය සත්‍යාපනය කරන්න.",
          "වාර්තාව = මිල හෝ ලාභ සහතිකය — නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. වාර්තාවක් මිල හෝ නැවත විකිණීමේ
          හැකියාව සහතික නොකරයි.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}
