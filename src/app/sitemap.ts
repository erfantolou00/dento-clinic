import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { journalPosts } from "@/content/blog";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "",
    "/about",
    "/services",
    "/team",
    "/visit",
    "/journal",
    "/faq",
    "/process",
    "/appointment",
    "/emergency",
    "/privacy",
    ...services.map((service) => `/services/${service.id}`),
    ...journalPosts.map((post) => `/journal/${post.slug}`),
  ];

  return paths.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
  }));
}
