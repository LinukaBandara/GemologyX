import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික් ප්‍රතිකාර තොරතුරු හෙළි කිරීම | GemologyX",
  description:
    "මැණික්වල ප්‍රතිකාර තත්ත්වය, විකුණුම්කරුගේ ප්‍රකාශ සහ වාර්තා — ගැනුම්කරුවන් දැනගත යුතු කරුණු.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 5"
      title="මැණික් ප්‍රතිකාර පිළිබඳ නිවැරදි තොරතුරු හෙළි කිරීම"
      crumbHref="/si/learn/heat-treatment-guide"
      crumbLabel="Heat treatment"
      lastReviewed="2026-10-24"
      related={[
        { label: "Heat treatment", href: "/si/learn/heat-treatment-guide" },
        { label: "Diffusion treatment", href: "/si/learn/diffusion-treatment-guide" },
        { label: "Fracture filling", href: "/si/learn/fracture-filling-guide" },
        { label: "වාර්තාවක් කියවීම", href: "/si/learn/how-to-read-gem-report" },
      ]}
    >
      <QuickAnswer>
        <p>
          ප්‍රතිකාර තත්ත්වය (heat, diffusion, filling ආදිය) මිලට සහ රැකවරණයට
          බලපාන්න පුළුවන්. විකුණුම්කරුගෙන් ලිඛිතව විමසන්න. වාර්තාවේ treatment
          notes කියවන්න. ඇසින් පමණක් ප්‍රතිකාර තීරණය නොකරන්න.
        </p>
      </QuickAnswer>

      <ArticleSection heading="ඇයි හෙළිදරව් කළ යුතුද?">
        <p>
          ප්‍රතිකාරයක් තිබීම = ගල ව්‍යාජ බව නොවේ. නමුත් වෙළෙඳපොළේ ගල සලකන
          ආකාරයට, මිලට සහ රැකවරණයට බලපාන්න පුළුවන්. ඒ නිසා පැහැදිලි තොරතුරු
          අවශ්‍යය.
        </p>
      </ArticleSection>

      <ArticleSection heading="අසන්න ඕනේ දේ">
        <ul>
          <li>දන්නා ප්‍රතිකාර තිබේද?</li>
          <li>ප්‍රතිකාර නැති බව කියන්නේ නම් — සාක්ෂි මොනවද?</li>
          <li>වාර්තාවේ treatment section මොනවද?</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="වාර්තාවේ සීමා">
        <p>
          “No indications of heat” වැනි වචන absolute certainty එකක් නොවන
          අවස්ථා තිබිය හැකියි. Labs අතර ක්‍රමවේදය වෙනස් විය හැකියි.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ප්‍රතිකාර තත්ත්වය ලිඛිතව විමසුවාද?",
          "වාර්තාවේ treatment notes කියවුවාද?",
          "වාර්තාව සත්‍යාපනය කළාද?",
          "පෙනුමෙන් ප්‍රතිකාර තීරණය නොකළාද?",
        ]}
      />

      <Misconceptions
        items={[
          "ප්‍රතිකාරය = ව්‍යාජ ගල — නැහැ.",
          "ඇසින් heat / unheated කියලා කිව හැකියි — බොහෝ විට නැහැ.",
          "වාචික ‘untreated’ ප්‍රමාණවත් — ලිඛිතව / වාර්තාවෙන්.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක ප්‍රතිකාර තත්ත්වය තීරණය කරන පරීක්ෂණයක් නොවේ.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
