import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Heated vs Unheated Blue Sapphire: වෙනස සහ මිලදී ගැනීම",
  description:
    "Heated සහ unheated blue sapphire අතර treatment වෙනස, lab report wording, වටිනාකම සහ මිලදී ගැනීමේදී පරීක්ෂා කළ යුතු කරුණු.",

  alternates: { canonical: "/si/learn/heated-vs-unheated-blue-sapphire" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 8"
      title="Heated සහ Unheated නිල්මැණික් අතර වෙනස"
      crumbHref="/si/learn/blue-sapphire-complete-guide"
      crumbLabel="නිල්මැණික් මාර්ගෝපදේශය"
      lastReviewed="2026-11-02"
      heroImage={{ src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Inclusions_inside_heat-treated_sapphire.jpg", alt: "Microscope view of a yellow sapphire specimen showing internal features associated with heat treatment", credit: "Unbreaking · CC0 1.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Inclusions_inside_heat-treated_sapphire.jpg" }}
      related={[
        { label: "නිල්මැණික් Heat Treatment", href: "/si/learn/heated-sapphire-guide" },
        { label: "Heat treatment සම්පූර්ණ මාර්ගෝපදේශය", href: "/si/learn/heat-treatment-guide" },
        { label: "නිල්මැණික් lab report", href: "/si/learn/blue-sapphire-lab-report" },
        { label: "නිල්මැණික් වටිනාකම", href: "/si/learn/blue-sapphire-value-factors" },
      ]}
    >
      <QuickAnswer>
        <p>
          Heated blue sapphire යනු heat treatment කර ඇති බවට
          තොරතුරු ඇති නිල්මැණිකකි. Unheated යන ප්‍රකාශය සාමාන්‍යයෙන්
          පරීක්ෂණයේදී heat treatment ලක්ෂණ හඳුනා නොගත් බවට
          අදාළ වේ. Natural / synthetic යන අනන්‍යතාව සහ heated /
          unheated යන treatment තත්ත්වය වෙන වෙනම කරුණු දෙකකි.
        </p>
      </QuickAnswer>

      <ArticleSection heading="Heated සහ unheated අතර මූලික වෙනස">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-3 py-2 font-semibold">විෂය</th>
                <th className="px-3 py-2 font-semibold">Heated</th>
                <th className="px-3 py-2 font-semibold">Unheated</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/70">
                <td className="px-3 py-2">Treatment</td>
                <td className="px-3 py-2">Heat treatment කළ බවට තොරතුරු/සාක්ෂි ඇත</td>
                <td className="px-3 py-2">පරීක්ෂණයේදී heat treatment ලක්ෂණ හඳුනා නොගත් බවට වාර්තා විය හැකියි</td>
              </tr>
              <tr className="border-b border-border/70">
                <td className="px-3 py-2">Identity</td>
                <td className="px-3 py-2">Natural හෝ synthetic යන කරුණ වෙනම තහවුරු කළ යුතුයි</td>
                <td className="px-3 py-2">Natural හෝ synthetic යන කරුණ වෙනම තහවුරු කළ යුතුයි</td>
              </tr>
              <tr className="border-b border-border/70">
                <td className="px-3 py-2">Appearance</td>
                <td className="px-3 py-2">ගලෙන් ගලට වෙනස් විය හැකියි</td>
                <td className="px-3 py-2">වර්ණය හෝ පෙනුමෙන් පමණක් තහවුරු කළ නොහැකියි</td>
              </tr>
              <tr className="border-b border-border/70">
                <td className="px-3 py-2">Value</td>
                <td className="px-3 py-2">සම්පූර්ණ ගුණාත්මකභාවය සහ වෙළඳපොළ අනුව වෙනස් වේ</td>
                <td className="px-3 py-2">Unheated claim එක පමණක් මිල සහතික නොකරයි</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <ArticleSection heading="Unheated කියන වචනය නිවැරදිව තේරුම් ගන්න">
        <p>
          Laboratory report එකක “No indications of heat” වැනි
          wording එකක් තිබේ නම්, එය එම පරීක්ෂණයේදී heat treatment
          හඳුනාගැනීමට අදාළ ලක්ෂණ නොපෙනුණු බවට ප්‍රකාශයකි.
          එය සෑම ක්‍රියාවලියක්ම හෝ සෑම සීමාවක්ම බැහැර කරන
          absolute guarantee එකක් ලෙස භාවිත නොකළ යුතුයි.
        </p>
        <p>
          වාර්තාවේ comments, limitations සහ identification
          එකට කියවන්න. Report එකේ අර්ථය පැහැදිලි නැත්නම්
          නිකුත් කළ laboratory එකෙන් විමසන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="Natural, synthetic සහ treated යන පද වෙන්කර බලන්න">
        <p>
          Natural sapphire එකක් heated හෝ unheated විය හැකියි.
          Synthetic sapphire යනු laboratory එකක නිපදවූ corundum
          වන අතර එය natural heated sapphire එකකට සමාන කාණ්ඩයක්
          නොවේ. Imitation ද්‍රව්‍යද වෙනම හඳුනාගත යුතුයි.
        </p>
        <p>
          Treatment එකෙන් පමණක් natural/synthetic අනන්‍යතාව
          තීරණය නොකරන්න.{" "}
          <a href="/si/learn/natural-vs-synthetic-gemstones">Natural සහ synthetic මැණික් අතර වෙනස</a>{" "}
          කියවන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="මිලදී ගැනීමේදී මිල සසඳන්නේ කොහොමද?">
        <p>
          Unheated sapphire එකක් සමහර ගැනුම්කරුවන්ට වඩාත්
          කැමති විය හැකි නමුත්, එය ස්වයංක්‍රීයව වඩා හොඳ
          ගලක් හෝ හොඳ ගනුදෙනුවක් බවට පත් නොවේ. වර්ණය,
          transparency, clarity, cut, size, origin opinion,
          treatment disclosure සහ report එකේ විශ්වාසනීයත්වය
          එකට සසඳන්න.
        </p>
        <p>
          එකම වචනයක් හෝ certificate එකක් මත මිල තීරණය
          නොකරන්න. ඔබ සසඳන ගල්වල බර, dimensions සහ
          ගුණාත්මකභාවය හැකි තරම් සමාන විය යුතුයි.
          මිල ගැන වැඩිදුරට{" "}
          <a href="/si/learn/blue-sapphire-value-factors">නිල්මැණික් වටිනාකමට බලපාන කරුණු</a>{" "}
          බලන්න.
        </p>
      </ArticleSection>

      <ArticleSection heading="Report එක සහ ගල එකිනෙකට ගැළපේද?">
        <p>
          Report number එක නිකුත් කළ ආයතනයේ නිල ක්‍රමයෙන්
          තහවුරු කරන්න. වාර්තාවේ gemstone description,
          weight, measurements සහ photo තිබේ නම් ඒවා
          ඔබේ ගලට ගැළපේදැයි පරීක්ෂා කරන්න. වාර්තාවක්
          තිබීමෙන් resale price හෝ අනාගත ඉල්ලුම සහතික
          වන්නේ නැහැ.
        </p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Natural/synthetic identity එක treatment status එකෙන් වෙන්කර තහවුරු කළාද?",
          "Heated හෝ unheated claim එක ලිඛිතව ලබාගත්තාද?",
          "Report number එක සහ issuing laboratory එක verify කළාද?",
          "Report comments සහ limitations කියෙව්වාද?",
          "Report එකේ බර, මාන සහ විස්තර ගලට ගැළපේද?",
          "Colour, clarity, cut සහ size ඇතුළු සම්පූර්ණ ගුණාත්මකභාවය සසඳා බැලුවාද?",
        ]}
      />

      <Misconceptions
        items={[
          "Heated sapphire එකක් fake — නැහැ; treatment සහ identity වෙනස්.",
          "Unheated කියන වචනයෙන්ම ඉහළ quality එකක් තහවුරු වෙනවා — නැහැ.",
          "වර්ණය ලස්සන නම් unheated — පෙනුම ප්‍රමාණවත් සාක්ෂියක් නොවේ.",
          "No indications of heat කියන්නේ සියලු සීමා ඉක්මවා ගිය සහතිකයක් — නැහැ.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>
          Heated සහ unheated අතර තීරණය ගන්නේ වෙළඳ වචන හෝ
          පෙනුම මත නොව, විශ්වාසදායක disclosure සහ වාර්තාවේ
          සන්දර්භය මතයි. වැදගත් මිලදී ගැනීමකට පෙර ස්වාධීන
          පරීක්ෂාවක් සලකා බලන්න. මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි.
        </p>
      </ArticleSection>
    </ArticleLayout>
  );
}
