import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { getAllNotes } from "@/lib/notes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/research",
    "/work",
    "/publications",
    "/experience",
    "/about",
    "/cv",
    "/notes",
    "/contact",
  ].map((route) => ({
    url: `${site.url}${route}/`,
    lastModified: new Date(),
    priority: route === "" ? 1 : 0.7,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${site.url}/work/${p.slug}/`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  const noteRoutes = getAllNotes().map((n) => ({
    url: `${site.url}/notes/${n.slug}/`,
    lastModified: new Date(),
    priority: 0.5,
  }));

  return [...staticRoutes, ...projectRoutes, ...noteRoutes];
}
