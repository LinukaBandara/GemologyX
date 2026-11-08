import type { Metadata } from "next";
import { ArticleLayout, ArticleSection, QuickAnswer, PracticalChecklist, Misconceptions } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Glass imitation සහ මැණික් අතර වෙනස",
  description: "Glass imitation පිළිබඳ මූලික දැනුම, නිරීක්ෂණවල සීමා සහ ගලට හානි නොකර මිලදී ගැනීමේ ආරක්ෂිත පියවර.",
  alternates: { canonical: "/si/learn/glass-vs-gemstone" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 7"
      title="Glass imitation සහ මැණික් අතර වෙනස"
      crumbHref="/si/learn/natural-synthetic-imitation-gems"
      crumbLabel="මැණික් වෙළෙඳ පද"
      lastReviewed="2026-11-02"
      heroImage={{
        src: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Gemmological_microscopic_examination.jpg",
        alt: "A pink sapphire being examined under a gemmological microscope",
        credit: "Sara Abey · CC BY-SA 4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:Gemmological_microscopic_examination.jpg",
      }}
      related={[
        { label: "Natural, synthetic සහ imitation පද", href: "/si/learn/natural-synthetic-imitation-gems" },
        { label: "වංචා අවදානම් හඳුනාගැනීම", href: "/si/learn/avoid-gemstone-scams" },
        { label: "නිල්මැණික් හඳුනාගැනීම", href: "/si/learn/identify-sapphire" },
      ]}
    >
      <QuickAnswer>
        <p>Glass සමහර මැණික් වර්ගවල පෙනුම අනුකරණය කිරීමට භාවිත විය හැකියි. Bubbles හෝ rounded-looking features වැනි දේ නිරීක්ෂණයට ලක්විය හැකි නමුත් ඒවා තනිවම glass බව තහවුරු නොකරයි. Scratch, heat හෝ chemical tests ගලට හානි කළ හැකි බැවින් material එක ගැන සැකයක් ඇත්නම් seller disclosure සහ independent gem testing භාවිත කරන්න.</p>
      </QuickAnswer>

      <ArticleSection heading="Glass imitation එකක් යනු කුමක්ද?">
        <p>Glass එකක් වර්ණවත් කර හෝ හැඩගස්වා මැණික් වර්ගයක පෙනුමට සමාන කළ හැකියි. එය අවංකව glass ලෙස විස්තර කරන්නේ නම් එහි භාවිතය ගැන පැහැදිලි බවක් තිබේ. ගැටලුව වන්නේ වෙනත් material එකක් natural gemstone ලෙස වැරදි ලෙස විස්තර කිරීමයි.</p>
      </ArticleSection>

      <ArticleSection heading="නිරීක්ෂණය කළ හැකි ඉඟි — සාක්ෂි නොවේ">
        <p>Magnification යටතේ gas bubbles, mould-related features, wear patterns හෝ facet junctions වැනි ලක්ෂණ දැකිය හැකි අවස්ථා ඇත. නමුත් bubbles නොපෙනීමෙන් glass නොවන බව තහවුරු නොවේ; bubbles පෙනීමෙන් ද තනිවම අවසන් නිගමනයකට එළඹිය නොහැකියි. Setting එක, lighting සහ stone condition නිසා නිරීක්ෂණ දුෂ්කර විය හැකියි.</p>
      </ArticleSection>

      <ArticleSection heading="වළක්වාගත යුතු home tests">
        <p>Scratch test එකෙන් ගල හෝ jewellery setting එකට හානි විය හැකියි. Flame, heating සහ chemical tests ද අවදානම් වන අතර විශ්වාසදායක identification ක්‍රම නොවේ. “Cold to touch” වැනි ජනප්‍රිය පරීක්ෂණද material identity තහවුරු නොකරයි.</p>
      </ArticleSection>

      <ArticleSection heading="මිලදී ගැනීමේදී">
        <p>Material name එක invoice එකේ හෝ listing එකේ ලිඛිතව ලබාගන්න. “Real”, “natural look” හෝ “gem quality” වැනි අර්ථය අපැහැදිලි පද වෙනුවට නිශ්චිත material description එකක් ඉල්ලන්න. මිල ඉහළ නම් seller ට අයත් නොවන සුදුසුකම් ලත් laboratory එකක පරීක්ෂාවක් සලකා බලන්න. Return terms සහ payment record තබාගන්න.</p>
      </ArticleSection>

      <PracticalChecklist items={[
        "Material එක glass ද, gemstone ද, වෙනත් imitation material එකක් ද යන්න පැහැදිලිද?",
        "Natural / laboratory-grown status එක අදාළ නම් ලිඛිතව සඳහන් කර තිබේද?",
        "Scratch, flame හෝ chemical test නොකර සිටියාද?",
        "මිල ඉහළ නම් independent testing option එකක් තිබේද?",
        "Invoice සහ return terms සුරක්ෂිතව තබාගත්තාද?",
      ]} />

      <Misconceptions items={[
        "Bubbles නැති නම් glass නොවේ — එසේ තීරණය කළ නොහැකියි.",
        "සීතලට දැනෙන ගලක් natural — එය තහවුරු කරන පරීක්ෂණයක් නොවේ.",
        "Scratch test එකෙන් identity තහවුරු කළ හැකියි — එය හානිදායක සහ අවිනිශ්චිත විය හැකියි.",
      ]} />
    </ArticleLayout>
  );
}