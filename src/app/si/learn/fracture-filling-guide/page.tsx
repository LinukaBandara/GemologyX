import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික්වල Fracture filling / glass filling | GemologyX",
  description:
    "Fracture filling සහ glass filling යනු කුමක්ද, ඇයි හෙළිදරව් කළ යුතුද, රැකවරණය සහ වාර්තා කියවන ආකාරය.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="මැණික්වල Fracture filling / glass filling"
      crumbHref="/si/learn/heat-treatment-guide"
      crumbLabel="ප්‍රතිකාර මාර්ගෝපදේශ"
      lastReviewed="2026-10-21"
      related={[
        { label: "Heat treatment", href: "/si/learn/heat-treatment-guide" },
        { label: "Diffusion treatment", href: "/si/learn/diffusion-treatment-guide" },
        { label: "ප්‍රතිකාර හෙළි කිරීම", href: "/si/learn/gemstone-treatment-disclosure" },
        { label: "මැණික් පරීක්ෂණ වාර්තාව", href: "/si/learn/how-to-read-gem-report" },
      ]}
    >
      <QuickAnswer>
        <p>
          Fracture filling යනු ගලේ ඉරිතැලීම් හෝ කුහර පුරවා පෙනුම වැඩිදියුණු කිරීමයි.
          Ruby, emerald වැනි ගල්වල glass / lead-glass filling බහුලය. එය හෙළිදරව්
          කළ යුතු අතර රැකවරණයට සහ මිලට බලපාන්න පුළුවන්. ඇසින් පමණක් හඳුනාගත නොහැකියි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Fracture filling යනු කුමක්ද?">
        <p>
          ගලේ ඇති ඉරිතැලීම්, කුහර හෝ රන්ධ්‍ර පුරවා පැහැදිලි බව / පෙනුම වැඩිදියුණු
          කිරීමට භාවිත වන ප්‍රතිකාරයකි. Filling material වර්ගය (glass, resin, oil
          ආදිය) ගල් වර්ගය අනුව වෙනස් විය හැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="ඇයි වැදගත්ද?">
        <p>
          Filled ගල්වල මිල, රැකවරණය සහ නැවත විකිණීමේ අපේක්ෂාව unfilled ගල්වලට
          වඩා වෙනස් විය හැකියි. Ultrasonic cleaning, රසායනික ද්‍රව්‍ය හෝ අලුත්වැඩියා
          වලදී filling material හානි විය හැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="හෙළිදරව් කිරීම">
        <p>
          විකුණුම්කරුගෙන් ලිඛිතව විමසන්න. වාර්තාවේ treatment / clarity enhancement
          සටහන් කියවන්න. “No clarity enhancement” වැනි වචන තිබේ නම් ඒවායේ
          සීමාවන්ද සලකා බලන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="රැකවරණය">
        <p>
          Filled ගල් සඳහා ultrasonic / steam / දැඩි රසායනික ද්‍රව්‍ය භාවිතයට පෙර
          වෘත්තීය උපදෙස් ලබාගන්න. මෘදු පිරිසිදු කිරීම වඩා ආරක්ෂිතය.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Clarity enhancement / filling ගැන ලිඛිතව විමසන්න",
          "වාර්තාවේ treatment notes කියවන්න",
          "වාර්තා අංකය සත්‍යාපනය කරන්න",
          "රැකවරණ උපදෙස් ලබාගන්න",
          "මිල ඉහළ නම් ස්වාධීන පරීක්ෂාවක් සලකා බලන්න",
        ]}
      />

      <Misconceptions
        items={[
          "Filled = ව්‍යාජ ගල — නැහැ; ප්‍රතිකාරයකි.",
          "ඇසින් filling හඳුනාගත හැකියි — බොහෝ විට නැහැ.",
          "සියලුම ruby / emerald filled — නැහැ; වාර්තාව බලන්න.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් filled ද යන්න
          තීරණය කරන පරීක්ෂණයක් නොවේ.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}
