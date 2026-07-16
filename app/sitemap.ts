import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/lib/case-studies";

const BASE_URL = "https://apexflow.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = Object.keys(CASE_STUDIES).map((slug) => ({
    url: `${BASE_URL}/projects/${slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      priority: 1,
    },
    ...projectUrls,
  ];
}
