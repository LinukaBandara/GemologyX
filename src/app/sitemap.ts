import { readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";
import type { MetadataRoute } from "next";
import { allGemstones as gemstones } from "@/data/all-gemstones";
import { origins } from "@/data/origins";
import { glossaryTerms } from "@/data/glossary";

const BASE_URL = "https://gemologyx.com";
const APP_ROOT = join(process.cwd(), "src", "app");

// Discover concrete App Router pages so new static articles are not
// accidentally omitted from the sitemap. Dynamic routes are added from data below.
function collectStaticRoutes(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (
      entry.name.startsWith("[") ||
      entry.name.startsWith("(") ||
      entry.name.startsWith("@")
    ) {
      return [];
    }

    const fullPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      return collectStaticRoutes(fullPath);
    }

    if (entry.isFile() && entry.name === "page.tsx") {
      const route = relative(APP_ROOT, directory).split(sep).join("/");
      return [route ? `/${route}` : "/"];
    }

    return [];
  });
}

// These are genuine English/Sinhala counterparts. Only pair pages whose
// primary subject is translated; related but non-equivalent pages are omitted.
const translatedPairs = [
  {
    en: "/learn/natural-vs-synthetic-gemstones",
    si: "/si/learn/natural-vs-synthetic-gemstones",
  },
  {
    en: "/learn/questions-to-ask-gem-dealer",
    si: "/si/learn/questions-to-ask-gem-dealer",
  },
] as const;

const languageAlternates = new Map<
  string,
  { en: string; si: string }
>();

for (const pair of translatedPairs) {
  const languages = {
    en: `${BASE_URL}${pair.en}`,
    si: `${BASE_URL}${pair.si}`,
  };
  languageAlternates.set(pair.en, languages);
  languageAlternates.set(pair.si, languages);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = collectStaticRoutes(APP_ROOT).filter(
    (path) => path !== "/search",
  );

  const dynamicRoutes = [
    ...gemstones.map((gemstone) => `/gemstones/${gemstone.slug}`),
    ...origins.map((origin) => `/origins/${origin.slug}`),
    ...glossaryTerms.map((term) => `/glossary/${term.slug}`),
  ];

  const routes = [...new Set([...staticRoutes, ...dynamicRoutes])];

  return routes.map((path) => {
    const languages = languageAlternates.get(path);

    return {
      url: `${BASE_URL}${path === "/" ? "" : path}`,
      ...(languages ? { alternates: { languages } } : {}),
    };
  });
}
