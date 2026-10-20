import { gemstones as coreGemstones } from "@/data/gemstones";
import { expandedGemstones } from "@/data/gemstone-expansion";

/** Single directory source used by profiles, the directory page and sitemap. */
export const allGemstones = [...coreGemstones, ...expandedGemstones];
