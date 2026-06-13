import type {MetadataRoute} from "next";
import {machineReadableResources, SITE_URL} from "@/app/lib/researchProfile";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...machineReadableResources.map(resource => ({
      url: new URL(resource.href, SITE_URL).toString(),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
