import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

/** Generated automatically — new projects appear here without any edit. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl.replace(/\/$/, "");

  const pages = ["", "/work", "/about", "/resume", "/contact"].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const caseStudies = projects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...caseStudies];
}
