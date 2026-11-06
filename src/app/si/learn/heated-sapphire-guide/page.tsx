import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "නිල්මැණික් Heat Treatment: විශේෂයෙන් දැනගත යුතු දේ",
  description:
    "Blue sapphire heat treatment ගැන, එහි ප්‍රතිඵල වෙනස් විය හැකි ආකාරය, treatment disclosure සහ sapphire report සටහන් කියවීම.",

  alternates: { canonical: "/si/learn/heated-sapphire-guide" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 7"
      title="නිල්මැණික් Heat Treatment: විශේෂයෙන් දැනගත යුතු දේ"
      crumbHref="/si/learn/blue-sapphire-complete-guide"
      crumbLabel="නිල්මැණික් මාර්ගෝපදේශය"
      lastReviewed="2026-11-02"
      related={[
        { label: "Heat treatment පිළිබඳ සම්පූර්ණ මාර්ගෝපදේශය", href: "/si/learn/heat-treatment-guide" },
        { label: "Heated සහ unheated නිල්මැණික්", href: "/si/learn/heated-vs-unheated-blue-sapphire" },
        { label: "නිල්මැණික් lab report", href: "/si/learn/blue-sapphire-lab-report" },
        { label: "නිල්මැණික් වටිනාකමට බලපාන කරුණු", href: "/si/learn/blue-sapphire-value-factors" },
      ]}
    >
      <QuickAnswer>
        <p>
          නිල්මැණික්වල heat treatment ගැන කතා කරන විට ප්‍රධාන කරුණ
          වන්නේ ගලේ treatment තත්ත්වය නිවැරදිව හඳුනාගෙන හෙළිදරව්
          කිරීමයි. Sapphire එකක් natural විය හැකි අතරම heated ද විය
          හැකියි. වර්ණය හෝ ඡායාරූපය පමණක් මත treatment තීරණය
          නොකරන්න; report wording සහ එහි සීමාවන් කියවන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="නිල්මැණික්වල heat treatment ගැන දැනගත යුතු දේ">
        <p>
          Blue sapphire යනු corundum වර්ගයකි. වෙළඳපොළේ සමහර
          නිල්මැණික්වල පෙනුම වෙනස් කිරීමට heat treatment භාවිත
          කර තිබිය හැකියි. එහෙත් සෑම sapphire එකක්ම එකම ආකාරයෙන්
          ප්‍රතිචාර දක්වන්නේ නැහැ. ගලේ මුල් තත්ත්වය සහ treatment
          ක්‍රියාවලිය අනුව ප්‍රතිඵල වෙනස් විය හැකියි.
        </p>
        <p>
          ඒ නිසා “heated sapphire” යන නාමයෙන් පමණක් ගලේ
          වර්ණය, ගුණාත්මකභාවය හෝ මිල ගැන නිගමනයකට එන්න එපා.
          ගලේ වර්ණය, clarity, cut, treatment disclosure,
          report සහ වෙළඳපොළ තත්ත්වය වෙන වෙනම සලකා බලන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="Sapphire එක natural ද, heated ද යන්න වෙනම කරුණු">
        <p>
          Natural කියන්නේ ගල ස්වභාවික මූලාරම්භයක් ඇති බවට
          අදාළ පදයකි. Heated කියන්නේ එයට උණුසුම් ප්‍රතිකාරයක්
          කර තිබීම පිළිබඳ පදයකි. ඒ නිසා natural heated sapphire
          එකක් තිබිය හැකි අතර lab-grown sapphire එකක්ද වෙනම
          කාණ්ඩයකි.
        </p>
        <p>
          Synthetic, imitation සහ treated natural යන වචන
          එකිනෙකට සමාන ලෙස භාවිත නොකරන්න. මේවායේ වෙනස ගැන
          <a href="/si/learn/natural-vs-synthetic-gemstones"> natural සහ synthetic මැණික් මාර්ගෝපදේශය</a>{" "}
          කියවන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="Sapphire report එකේ අවධානය යොමු කළ යුතු දේ">
        <p>
          Report එකේ identification, treatment comments,
          report number සහ limitations කියවන්න. “No indications
          of heat” වැනි wording එකක් තිබේ නම් එය laboratory
          පරීක්ෂණයේ සන්දර්භය තුළ තේරුම් ගන්න. එය පරීක්ෂණයේදී
          හඳුනාගත් ලක්ෂණ පිළිබඳ ප්‍රකාශයක් මිස සියලු තත්ත්වයන්
          ගැන අසීමිත සහතිකයක් නොවේ.
        </p>
        <p>
          Report number එක නිකුත් කළ ආයතනයේ නිල ක්‍රමයෙන්
          සත්‍යාපනය කරන්න. වාර්තාවේ sapphire විස්තර, ඡායාරූප,
          බර සහ dimensions ඔබ මිලදී ගන්නා ගලට ගැළපේදැයි
          පරීක්ෂා කරන්න. වඩාත් සවිස්තරාත්මක field-by-field
          පැහැදිලි කිරීම සඳහා{" "}
          <a href="/si/learn/blue-sapphire-lab-report">නිල්මැණික් lab report මාර්ගෝපදේශය</a>{" "}
          බලන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="Treatment තත්ත්වය මිලට බලපාන්නේ කොහොමද?">
        <p>
          සමහර ගැනුම්කරුවන්ට unheated sapphire සඳහා විශේෂ
          ඉල්ලුමක් තිබිය හැකි නමුත්, “unheated” යන වචනය පමණක්
          ඉහළ මිලක් සහතික කරන්නේ නැහැ. වර්ණය, clarity,
          transparency, cut, size, report, origin opinion
          සහ වෙළඳපොළ ඉල්ලුම වැනි කරුණුත් සලකා බලන්න.
        </p>
        <p>
          ගලක මිල තක්සේරු කිරීමේදී treatment තත්ත්වය පමණක්
          නොව සම්පූර්ණ ගුණාත්මකභාවය සහ ගනුදෙනු කොන්දේසි
          සසඳන්න. Treatment claim එකක් මිලට වැදගත් නම්
          ස්වාධීන පරීක්ෂණ වාර්තාවක් ඉල්ලන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "විකුණුම්කරුගෙන් treatment status එක ලිඛිතව ඉල්ලන්න",
          "Natural, synthetic සහ treatment යන කරුණු වෙන්කර තේරුම් ගන්න",
          "Report number එක සහ නිකුත් කළ laboratory එක සත්‍යාපනය කරන්න",
          "Report එකේ ගලේ විස්තර සහ ඔබේ ගල ගැළපේදැයි බලන්න",
          "No indications වැනි wording සහ report limitations කියවන්න",
          "Treatment status එක මිලට වැදගත් නම් independent testing සලකා බලන්න",
        ]}
      />

      <Misconceptions
        items={[
          "සෑම නිල්මැණික් එකක්ම heat කළ විට එකම ප්‍රතිඵලය ලැබේ — නැහැ.",
          "Natural sapphire එකක් unheated විය යුතුයි — නැහැ.",
          "වර්ණය පමණක් බලා treatment හඳුනාගත හැකියි — නැහැ.",
          "Unheated යන වචනය පමණක් resale value සහතික කරයි — නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          නිල්මැණික් heat treatment ගැන තීරණයක් ගන්නා විට
          විකුණුම්කරුගේ ප්‍රකාශය, ලිඛිත disclosure සහ වාර්තාව
          එකට සලකා බලන්න. අවශ්‍ය නම් සුදුසුකම් ලත් laboratory
          පරීක්ෂාවක් ලබාගන්න. මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}
