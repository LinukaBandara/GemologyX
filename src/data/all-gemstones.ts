import { gemstones as coreGemstones } from "@/data/gemstones";
import { expandedGemstones } from "@/data/gemstone-expansion";
import { expandedGemstonesTwo } from "@/data/gemstone-expansion-2";
import { expandedGemstonesThree } from "@/data/gemstone-expansion-3";

/** Single directory source used by profiles, the directory page and sitemap. */
export const allGemstones = [...coreGemstones, ...expandedGemstones, ...expandedGemstonesTwo, ...expandedGemstonesThree];
