import type { MetadataRoute } from "next";
import { gemstones } from "@/data/gemstones";
import { origins } from "@/data/origins";
import { glossaryTerms } from "@/data/glossary";

const BASE_URL = "https://gemologyx.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/gemstones",
    "/learn",
    "/learn/sapphire/what-is-ceylon-sapphire",
    "/learn/sapphire/sapphire-value-factors",
    "/learn/natural-vs-synthetic-gemstones",
    "/learn/heated-vs-unheated",
    "/learn/gemstone-certification",
    "/learn/how-to-read-a-gemstone-report",
    "/learn/gemstone-care",
    "/origins",
    "/tools",
    "/tools/carat-to-gram",
    "/tools/gemstone-size",
    "/tools/ring-size",
    "/tools/mohs-hardness",
    "/tools/birthstones",
    "/glossary",
    "/about",
    "/editorial-standards",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const gemstoneRoutes = gemstones.map((g) => ({
    url: `${BASE_URL}/gemstones/${g.slug}`,
    lastModified: new Date(),
  }));

  const originRoutes = origins.map((o) => ({
    url: `${BASE_URL}/origins/${o.slug}`,
    lastModified: new Date(),
  }));

  const glossaryRoutes = glossaryTerms.map((t) => ({
    url: `${BASE_URL}/glossary/${t.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...gemstoneRoutes, ...originRoutes, ...glossaryRoutes];
}
