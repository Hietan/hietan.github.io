import type {MetadataRoute} from "next";
import {machineReadableResources, SITE_LAST_MODIFIED, SITE_URL} from "@/app/lib/researchProfile";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE_LAST_MODIFIED);

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...machineReadableResources.map(resource => ({
      url: new URL(resource.href, SITE_URL).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
