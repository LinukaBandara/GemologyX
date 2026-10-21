import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "මැණික්වල ඇතුළත ලක්ෂණ (Inclusions) | GemologyX",
  description:
    "Inclusions යනු කුමක්ද, ඒවා ගලේ ගුණාත්මකභාවයට සහ හඳුනාගැනීමට බලපාන ආකාරය, සහ පොදු වැරදි අවබෝධ.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="මැණික්වල ඇතුළත ලක්ෂණ (Inclusions)"
      crumbHref="/si/learn/rough-sapphire-inclusions"
      crumbLabel="රළු නිල්මැණික් inclusions"
      lastReviewed="2026-10-21"
      related={[
        { label: "රළු නිල්මැණික් inclusions", href: "/si/learn/rough-sapphire-inclusions" },
        { label: "Emerald හැඳින්වීම", href: "/si/learn/emerald-intro" },
        { label: "මැණික් හඳුනාගැනීම", href: "/si/learn/identify-sapphire" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Inclusions යනු ගලේ අභ්‍යන්තරයේ ඇති ලක්ෂණ (ඛනිජ, ද්‍රව, ඉරිතැලීම්,
          වර්ධන රටා ආදිය). ඒවා තිබීම පමණක් ගල ව්‍යාජ බවට පත් නොකරයි. සමහර
          inclusions හඳුනාගැනීමට උපකාරී වේ; සමහරක් durability හෝ පෙනුමට බලපායි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Inclusions යනු කුමක්ද?">
        <p>
          ගල වර්ධනය වන අතරතුර හෝ පසුව ඇති වන අභ්‍යන්තර ලක්ෂණයි. උදා: කුඩා
          ඛනිජ, ද්‍රව පොකුණු, ඉරිතැලීම්, silk (rutile needles) ආදිය.
        </p>
      </ArticleSection>

      <ArticleSection heading="ඇයි වැදගත්ද?">
        <ul>
          <li>පෙනුම / clarity වෙනස් කළ හැකියි</li>
          <li>සමහර විට natural vs synthetic හඳුනාගැනීමට උපකාරී</li>
          <li>ඉරිතැලීම් durability අඩු කළ හැකියි</li>
          <li>කැපීමේදී අවදානම් (රළු ගල්)</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="Inclusions ≠ ව්‍යාජ">
        <p>
          බොහෝ ස්වභාවික ගල්වල inclusions තිබේ. “අභ්‍යන්තර ලක්ෂණ නැත” යන්න
          සෑම විටම වඩා හොඳ යැයි අර්ථ නොකියයි — synthetic ගල්ද “clean” විය හැකියි.
        </p>
      </ArticleSection>

      <ArticleSection heading="මිලදී ගැනීමේදී">
        <p>
          ගල විවිධ ආලෝකයේ බලන්න. ඉරිතැලීම් මතුපිටට ළඟා වී තිබේදැයි සලකා බලන්න.
          වාර්තාවේ clarity / inclusions notes කියවන්න. රළු ගලක් නම් කැපීමේ
          අවදානම තේරුම් ගන්න.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "ගල විවිධ ආලෝකයේ බැලුවාද?",
          "ඉරිතැලීම් / කැඩුණු කොන් තියෙනවද සටහන් කළාද?",
          "Inclusions = ව්‍යාජ කියලා උපකල්පනය නොකළාද?",
          "වාර්තාවේ clarity notes කියවුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Inclusions තියෙනවා නම් ව්‍යාජයි — නැහැ.",
          "Inclusions නැති ගල් = සෑම විටම ස්වභාවික — නැහැ.",
          "සියලුම inclusions එකම බලපෑමක් ඇත — නැහැ; වර්ගය අනුව වෙනස්.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. නිශ්චිත ගලක inclusions විශ්ලේෂණයක්
          නොවේ.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}
