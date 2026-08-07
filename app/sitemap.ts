import type {MetadataRoute} from "next";
import {machineReadableResources, SITE_LAST_MODIFIED, SITE_URL} from "@/app/lib/researchProfile";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE_LAST_MODIFIED);
  const profilePaths = ["/", "/en", "/ja"];

  return [
    ...profilePaths.map(path => ({
      url: new URL(path, SITE_URL).toString(),
      lastModified,
      changeFrequency: "monthly",
      priority: path === "/" ? 0.8 : 1,
    } as const)),
    ...machineReadableResources.map(resource => ({
      url: new URL(resource.href, SITE_URL).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
