import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් රැකවරණය — සාමාන්‍ය මාර්ගෝපදේශය | GemologyX",
  description:
    "මැණික් ගල් පිරිසිදු කිරීම, ගබඩා කිරීම, උෂ්ණත්වය සහ එදිනෙදා භාවිතයේදී රැකගන්නා මූලික ක්‍රම.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="මැණික් රැකවරණය — සාමාන්‍ය මාර්ගෝපදේශය"
      crumbHref="/si/learn/blue-sapphire-care"
      crumbLabel="නිල්මැණික් රැකවරණය"
      lastReviewed="2026-10-21"
      related={[
        { label: "නිල්මැණික් රැකවරණය", href: "/si/learn/blue-sapphire-care" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
        { label: "ප්‍රතිකාර හෙළි කිරීම", href: "/si/learn/gemstone-treatment-disclosure" },
      ]}
    >
      <QuickAnswer>
        <p>
          බොහෝ මැණික් සඳහා මෘදු සබන් + උණුසුම් ජලය සහ මෘදු බුරුසුවක් ආරක්ෂිතය.
          Ultrasonic / steam සමහර ගල්වලට (විශේෂයෙන් ඉරිතැලීම් හෝ ප්‍රතිකාර ඇති
          ඒවාට) අවදානම්. අනෙකුත් ගල් සමඟ ගැටී නොයන ලෙස ගබඩා කරන්න. ගල් වර්ගය
          අනුව රැකවරණය වෙනස් වේ.
        </p>
      </QuickAnswer>

      <ArticleSection heading="පිරිසිදු කිරීම">
        <p>
          සාමාන්‍යයෙන්: මෘදු සබන්, උණුසුම් (උණුසුම් නොවන) ජලය, මෘදු බුරුසුව.
          දැඩි රසායනික ද්‍රව්‍ය, බ්ලීච්, ආම්ලික ද්‍රාවක වළක්වන්න. Ultrasonic හෝ
          steam භාවිතයට පෙර ගලේ වර්ගය සහ තත්ත්වය විමසන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="ගබඩා කිරීම">
        <p>
          ගල් එකිනෙකාට ගැටී ඉරිතැලීම් ඇති නොවන ලෙස වෙනම බෑග් / කොටු වල තබන්න.
          දෘඪතාව අඩු ගල් දෘඪතාව ඉහළ ගල් සමඟ ගැටීමෙන් හානි විය හැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="එදිනෙදා භාවිතය">
        <p>
          දැඩි ක්‍රීඩා, උද්‍යාන කටයුතු, රසායනික ද්‍රව්‍ය සම්බන්ධ කටයුතුවලදී ආභරණ
          ඉවත් කරන්න. හදිසි උෂ්ණත්ව වෙනස්කම් වළක්වන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර සහ රැකවරණය">
        <p>
          ප්‍රතිකාර කළ ගල්වල (heat, diffusion, filling ආදිය) රැකවරණ අවශ්‍යතා
          වෙනස් විය හැකියි. වාර්තාවේ හෝ විකුණුම්කරුගේ උපදෙස් අනුව ක්‍රියා කරන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "මෘදු සබන් + උණුසුම් ජලයෙන් පිරිසිදු කරන්න",
          "Ultrasonic/steam ට පෙර ගලේ වර්ගය විමසන්න",
          "ගල් වෙනම ගබඩා කරන්න",
          "දැඩි ක්‍රියාකාරකම්වලදී ආභරණ ඉවත් කරන්න",
          "ප්‍රතිකාර තත්ත්වය දන්නේ නම් ඊට ගැළපෙන රැකවරණය භාවිත කරන්න",
        ]}
      />

      <Misconceptions
        items={[
          "සියලුම මැණික් එකම ආකාරයට පිරිසිදු කළ හැකියි — නැහැ.",
          "දෘඪතාව ඉහළ නම් කිසිම හානියක් නොවේ — ඉරිතැලීම් තියෙනවා නම් බිඳිය හැකියි.",
          "Ultrasonic සෑම ගලකටම ආරක්ෂිතයි — නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          ගල් වර්ගය, ප්‍රතිකාර සහ සැකසුම අනුව රැකවරණය වෙනස් වේ. අවිනිශ්චිත නම්
          වෘත්තීය ආභරණ ශිල්පියකුගෙන් උපදෙස් ලබාගන්න.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}
