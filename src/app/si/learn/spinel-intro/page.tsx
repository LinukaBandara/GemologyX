import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Spinel (ස්පිනල්) — මූලික මාර්ගෝපදේශය | GemologyX",
  description:
    "Spinel යනු කුමක්ද, ruby සමඟ පටලවා ගැනීම, වර්ණ, හඳුනාගැනීමේ සීමා සහ මිලදී ගැනීමේ උපදෙස්.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="Spinel (ස්පිනල්) — මූලික මාර්ගෝපදේශය"
      crumbHref="/si/learn/ruby-vs-spinel"
      crumbLabel="Ruby vs Spinel"
      lastReviewed="2026-10-21"
      related={[
        { label: "Ruby vs Spinel", href: "/si/learn/ruby-vs-spinel" },
        { label: "Ruby vs Garnet", href: "/si/learn/ruby-vs-garnet" },
        { label: "ස්වභාවික vs කෘත්‍රිම", href: "/si/learn/natural-vs-synthetic-gemstones" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Spinel යනු corundum (ruby/sapphire) නොවන වෙනම ඛනිජයකි. රතු spinel
          බොහෝ විට ruby සමඟ පටලවා ගනී. වර්ණ රතු, නිල්, රෝස, දම් ආදිය විය හැකියි.
          පෙනුමෙන් පමණක් හඳුනාගත නොහැකියි — වාර්තාව හෝ වෘත්තීය පරීක්ෂණයක්
          අවශ්‍ය විය හැකියි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Spinel යනු කුමක්ද?">
        <p>
          Spinel යනු magnesium aluminium oxide ඛනිජයකි. එය ruby හෝ sapphire
          (corundum) නොවේ. ඉතිහාසයේ සමහර ප්‍රසිද්ධ “ruby” ගල් පසුව spinel ලෙස
          හඳුනාගත් අවස්ථා තිබේ.
        </p>
      </ArticleSection>

      <ArticleSection heading="වර්ණ">
        <p>
          රතු, රෝස, නිල්, දම්, කොළ, අළු ආදිය. රතු සහ නිල් spinel වෙළෙඳපොළේ
          වැඩි අවධානයක් ලබයි. වර්ණය පමණක් species තීරණය නොකරයි.
        </p>
      </ArticleSection>

      <ArticleSection heading="Ruby සමඟ පටලවීම">
        <p>
          රතු spinel ruby ලෙස වැරදියට හඳුනාගත හැකියි හෝ අලෙවි කළ හැකියි.
          නිවැරදි නම ලිඛිතව විමසන්න. වාර්තාවේ species කියවන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="ප්‍රතිකාර">
        <p>
          සමහර spinel heat treated විය හැකියි. Treatment තත්ත්වය ලිඛිතව විමසන්න
          සහ වාර්තාවේ සටහන් කියවන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගලේ නිවැරදි නම (spinel) ලිඛිතව තියෙනවාද?",
          "වාර්තාවේ species කියවුවාද?",
          "ප්‍රතිකාර තත්ත්වය විමසුවාද?",
          "රතු ගලක් නම් — ruby ද spinel ද පැහැදිලිද?",
        ]}
      />

      <Misconceptions
        items={[
          "රතු පැහැය = ruby — නැහැ; spinel ද තියෙනවා.",
          "Spinel = අඩු ගුණාත්මක ruby — නැහැ; වෙනම ඛනිජයකි.",
          "ඇසින් ruby / spinel වෙනස් කළ හැකියි — බොහෝ විට නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක් හඳුනාගැනීමේ සහතිකයක්
          නොවේ.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}
