import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/actions/projects";
import { getPublishedPosts } from "@/lib/actions/posts";

const BASE_URL = "https://apexflow.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, posts] = await Promise.all([
    getProjects(),
    getPublishedPosts(),
  ]);

  const projectUrls = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: p.updatedAt,
  }));

  const postUrls = posts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: p.updatedAt,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), priority: 1 },
    { url: `${BASE_URL}/blog`, lastModified: new Date() },
    ...projectUrls,
    ...postUrls,
  ];
}