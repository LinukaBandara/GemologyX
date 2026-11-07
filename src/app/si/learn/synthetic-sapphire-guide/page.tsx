import type { Metadata } from "next";
import { ArticleLayout, ArticleSection, QuickAnswer, PracticalChecklist, Misconceptions } from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Synthetic Sapphire / Lab-grown නිල්මැණික් මාර්ගෝපදේශය",
  description: "Laboratory-grown sapphire යනු කුමක්ද, natural sapphire සමඟ වෙනස, disclosure සහ report wording.",
  alternates: { canonical: "/si/learn/synthetic-sapphire-guide" },
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 7"
      title="Synthetic Sapphire / Lab-grown Sapphire"
      crumbHref="/si/learn/natural-vs-synthetic-gemstones"
      crumbLabel="Natural vs lab-grown"
      lastReviewed="2026-11-02"
      heroImage={{ src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Curved_Striations_in_Synthetic_Color-Change_Sapphire.jpg/960px-Curved_Striations_in_Synthetic_Color-Change_Sapphire.jpg", alt: "Curved internal growth striations in a Verneuil synthetic colour-change sapphire, photographed under magnification", credit: "LucasFassari · CC BY-SA 4.0", sourceUrl: "https://commons.wikimedia.org/wiki/File:Curved_Striations_in_Synthetic_Color-Change_Sapphire.jpg" }}
      related={[
        { label: "Natural සහ synthetic අතර වෙනස", href: "/si/learn/natural-vs-synthetic-gemstones" },
        { label: "මැණික් පද reference", href: "/si/learn/natural-synthetic-imitation-gems" },
        { label: "නිල්මැණික් report guide", href: "/si/learn/blue-sapphire-lab-report" },
      ]}
    >
      <QuickAnswer>
        <p>Synthetic sapphire යනු laboratory-grown corundum වේ. එය natural sapphire නොවන නමුත් glass imitation එකකට සමානද නොවේ. Material එකේ ගුණාංග බොහෝ දුරට සමාන විය හැකි අතර origin, rarity, market demand සහ price context වෙනස් විය හැකියි. Natural හෝ lab-grown යන්න මිලදී ගැනීමට පෙර පැහැදිලිව තහවුරු කරගන්න.</p>
      </QuickAnswer>

      <ArticleSection heading="එය sapphire ද?">
        <p>Sapphire යනු corundum mineral එකේ gem variety එකකි. Laboratory-grown sapphire එකක් ද corundum විය හැකි නමුත් එය පෘථිවියේ ස්වභාවිකව වර්ධනය වූ ගලක් නොවේ. “Synthetic” යන gemological පදය “fake” යන්නට සමාන නොවේ; එය material එකේ laboratory-grown origin එක විස්තර කරයි.</p>
      </ArticleSection>

      <ArticleSection heading="වර්ධන ක්‍රම සහ හඳුනාගැනීම">
        <p>Flame-fusion සහ වෙනත් laboratory growth methods භාවිත විය හැකියි. විවිධ ක්‍රමවලින් ඇතිවන growth features පරීක්ෂණයේදී ප්‍රයෝජනවත් විය හැකි නමුත්, ඒවා නිවැරදිව අර්ථකථනය කිරීමට gemological expertise සහ සුදුසු උපකරණ අවශ්‍ය විය හැකියි. සාමාන්‍ය phone photo එකකින් natural/synthetic status එක විශ්වාසයෙන් තීරණය කළ නොහැකියි.</p>
      </ArticleSection>

      <ArticleSection heading="Durability සහ value">
        <p>Synthetic sapphire එකකට corundum හි ඉහළ hardness වැනි ගුණාංග තිබිය හැකි නමුත් hardness එක පමණක් ගලේ identity හෝ quality තහවුරු නොකරයි. මිල තීරණය material origin, quality, size, treatment, demand සහ වෙළෙඳපොළ අනුව වෙනස් වේ. Natural sapphire එකකට සමාන පෙනුමක් තිබීමෙන් සමාන rarity හෝ resale value එකක් අදහස් නොවේ.</p>
      </ArticleSection>

      <ArticleSection heading="විස්තර සහ වාර්තාව">
        <p>Invoice, product listing හෝ seller description එකේ “laboratory-grown” හෝ “synthetic sapphire” ලෙස පැහැදිලිව සඳහන් කර තිබේද බලන්න. Report එකක් තිබේ නම් material identification සහ laboratory-grown wording කියවන්න; report number එක issuing laboratory එකෙන් verify කරන්න. නිශ්චිත disclosure නීති වෙළෙඳපොළ අනුව වෙනස් විය හැකි බැවින් මෙය නීති උපදෙස් නොවේ.</p>
      </ArticleSection>

      <PracticalChecklist items={[
        "Natural ද laboratory-grown ද යන්න ලිඛිතව සඳහන් කර තිබේද?",
        "Price comparison එක natural සහ lab-grown stones අතර පැහැදිලිද?",
        "Report එකක් තිබේ නම් verify කර details ගලට ගැළපේද බලන්න.",
        "Return policy සහ invoice එකේ material description එක තබාගන්න.",
      ]} />

      <Misconceptions items={[
        "Synthetic sapphire කියන්නේ glass — නැහැ; synthetic sapphire යනු lab-grown corundum විය හැකියි.",
        "Synthetic කියන්නේ අනිවාර්යයෙන්ම දුර්වල — material properties සහ product quality වෙනම සලකා බලන්න.",
        "Natural වගේ පෙනෙන නිසා natural — පෙනුම පමණක් ප්‍රමාණවත් නැහැ.",
      ]} />
    </ArticleLayout>
  );
}