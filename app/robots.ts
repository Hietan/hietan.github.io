import type {MetadataRoute} from "next";
import {SITE_URL} from "@/app/lib/researchProfile";

const publicPaths = [
  "/",
  "/en",
  "/ja",
  "/llms.txt",
  "/research.md",
  "/publications.bib",
  "/publications.json",
  "/sitemap.xml",
];

const aiCrawlers = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
];

const trainingCrawlers = [
  "GPTBot",
  "Google-Extended",
  "ClaudeBot",
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
      {
        userAgent: trainingCrawlers,
        disallow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: new URL(SITE_URL).host,
  };
}
