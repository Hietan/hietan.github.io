import type {MetadataRoute} from "next";
import {SITE_URL} from "@/app/lib/researchProfile";

const publicPaths = [
  "/",
  "/llms.txt",
  "/research.md",
  "/publications.bib",
  "/publications.json",
  "/sitemap.xml",
];

const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-User",
  "PerplexityBot",
  "Google-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: publicPaths,
      },
      {
        userAgent: aiCrawlers,
        allow: publicPaths,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: new URL(SITE_URL).host,
  };
}
