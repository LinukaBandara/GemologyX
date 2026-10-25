import type { Metadata } from "next";
import {
  ArticleLayout,
  ArticleSection,
  QuickAnswer,
  PracticalChecklist,
  Misconceptions,
} from "@/components/article-layout";

export const metadata: Metadata = {
  title: "Photos වලින් මැණික් මිලදී ගැනීම | GemologyX",
  description:
    "Online / WhatsApp photos — colour distortion, scale, return policy සහ ආරක්ෂිත පියවර.",
};

export default function Page() {
  return (
    <ArticleLayout
      category="සිංහල මැණික් දැනුම"
      readTime="මිනිත්තු 6"
      title="Photos වලින් මැණික් මිලදී ගන්නා විට"
      crumbHref="/si/learn/online-vs-local-gem-buying"
      crumbLabel="Online vs දේශීය"
      lastReviewed="2026-10-25"
      related={[
        { label: "Online vs දේශීය", href: "/si/learn/online-vs-local-gem-buying" },
        { label: "වංචා අවදානම්", href: "/si/learn/avoid-gemstone-scams" },
        { label: "මැණික් මිලදී ගැනීමේ checklist", href: "/si/learn/gemstone-buying-checklist" },
      ]}
    >
      <QuickAnswer>
        <p>
          Photos distort colour and size. Ask for multiple angles, natural
          light, scale (ruler / coin), video. Written identity, treatment,
          dimensions, return policy before payment. If seller refuses basic
          documentation — stop.
        </p>
      </QuickAnswer>

      <ArticleSection heading="What to request">
        <ul>
          <li>Daylight + indoor photos</li>
          <li>Video while tilting the stone</li>
          <li>mm dimensions + weight</li>
          <li>Report number if claimed</li>
        </ul>
      </ArticleSection>

      <ArticleSection heading="Payment safety">
        <p>Traceable methods. Avoid irreversible transfers to unknowns for high value. Escrow / platform protection when available.</p>
      </ArticleSection>

      <ArticleSection heading="After arrival">
        <p>Compare to photos immediately. Independent check if expensive. Know return window in writing before you buy.</p>
      </ArticleSection>

      <PracticalChecklist
        items={[
          "Multiple photos + video ලැබුණාද?",
          "Identity / treatment / return ලිඛිතවද?",
          "Payment method recoverable / documented ද?",
        ]}
      />

      <Misconceptions
        items={[
          "Professional photo = accurate colour — often enhanced lighting.",
          "Video call = full inspection — still limited vs in-hand + lab.",
        ]}
      />

      <ArticleSection heading="මතක තබාගන්න">
        <p>මෙම ලිපිය අධ්‍යාපනික මාර්ගෝපදේශයකි. ගනුදෙනුවක සුරක්ෂිතතාව සහතික නොකරයි.</p>
      </ArticleSection>
    </ArticleLayout>
  );
}
