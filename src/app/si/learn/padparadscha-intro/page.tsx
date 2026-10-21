import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Padparadscha sapphire යනු කුමක්ද? | GemologyX",
  description:
    "Padparadscha sapphire හි වර්ණ පරාසය, හඳුනාගැනීමේ සීමා සහ මිලදී ගැනීමේදී සැලකිලිමත් විය යුතු කරුණු.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="Padparadscha sapphire යනු කුමක්ද?"
      crumbHref="/si/learn/blue-sapphire-complete-guide"
      crumbLabel="නිල්මැණික් මාර්ගෝපදේශය"
      lastReviewed="2026-10-21"
      related={[
        { label: "නිල්මැණික් සම්පූර්ණ මාර්ගෝපදේශය", href: "/si/learn/blue-sapphire-complete-guide" },
        { label: "වර්ණය සහ ගුණාත්මකභාවය", href: "/si/learn/blue-sapphire-colour-quality" },
        { label: "මැණික් පරීක්ෂණ වාර්තාව", href: "/si/learn/how-to-read-gem-report" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Padparadscha යනු රෝස-තැඹිලි / salmon වැනි වර්ණ පරාසයක corundum
          (sapphire) ප්‍රභේදයකි. නිවැරදි වර්ණ සීමාව වෙළෙඳපොළේ සහ labs අතර
          වෙනස් විය හැකියි. “Padparadscha” ලේබලයක් පමණක් ගුණාත්මකභාවය හෝ මිල
          සහතික නොකරයි. වාර්තාවේ වර්ණ විස්තරය කියවන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="වර්ණ පරාසය">
        <p>
          සාම්ප්‍රදායිකව padparadscha යනු රෝස සහ තැඹිලි මිශ්‍ර වූ, මල් / lotus
          වැනි වර්ණයක් ලෙස විස්තර වේ. නමුත් නිවැරදි සීමාව labs සහ වෙළෙඳපොළ අතර
          එකඟතාවක් සම්පූර්ණයෙන් නොමැති විය හැකියි. එක් රසායනාගාරයක්
          padparadscha කියන ගලක් තවත් එකක් pink / orange sapphire කියා සඳහන් කළ
          හැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="හඳුනාගැනීම">
        <p>
          එය corundum (sapphire) වේ. වර්ණය පමණක් මත “padparadscha” තීරණය කිරීම
          අවිනිශ්චිතය. වාර්තාවේ variety / colour description කියවන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර">
        <p>
          Heat සහ අනෙකුත් ප්‍රතිකාර තිබිය හැකියි. ප්‍රතිකාර තත්ත්වය ලිඛිතව විමසන්න
          සහ වාර්තාවේ සටහන් කියවන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="මිලදී ගැනීමේදී">
        <p>
          වර්ණය විවිධ ආලෝකයේ බලන්න. වාර්තාවේ වචන (padparadscha vs pink sapphire
          vs orange sapphire) සලකා බලන්න. මිල ඉහළ නම් ස්වාධීන පරීක්ෂාවක් සලකා
          බලන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "වාර්තාවේ variety / colour description කියවුවාද?",
          "වර්ණය විවිධ ආලෝකයේ බැලුවාද?",
          "ප්‍රතිකාර තත්ත්වය ලිඛිතව තියෙනවාද?",
          "‘Padparadscha’ ලේබලය පමණක් මත මිල තීරණය නොකළාද?",
        ]}
      />

      <Misconceptions
        items={[
          "ලේබලයේ padparadscha ලියා තිබීම = සෑම lab එකක්ම එකඟ — නැහැ.",
          "වර්ණය පමණක් ප්‍රමාණවත් — වාර්තාව සහ ප්‍රතිකාරද වැදගත්.",
          "Padparadscha = සෑම විටම අධික වටිනාකම — ගුණාත්මකභාවය තීරණය කරයි.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. එය නිශ්චිත ගලක් padparadscha බව
          සහතික නොකරයි හෝ මිලක් පොරොන්දු නොවේ.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}
