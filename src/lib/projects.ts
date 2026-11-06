import { getCollection, type CollectionEntry } from "astro:content";
import { categories } from "@/content.config";
import type { Lang } from "@/i18n/utils";

export type Category = (typeof categories)[number];
type Entry = CollectionEntry<"projects">;

/** Project already resolved for a language: what the components receive. */
export interface Project {
  slug: string;
  order: number;
  featured: boolean;
  cover: Entry["data"]["cover"];
  categories: Category[];
  stack: string[];
  title: string;
  summary: string;
  links: Entry["data"]["links"];
  caseStudy?: NonNullable<Entry["data"]["caseStudy"]>[Lang];
}

/*
 * The collection is read only once per build and reused by every page
 * (home ES/EN, list, detail pages). It all runs at build time:
 * the browser gets static HTML, never the JSON.
 */
let cache: Promise<Entry[]> | undefined;
const loadEntries = () =>
  (cache ??= getCollection("projects").then((list) =>
    list.toSorted((a, b) => a.data.order - b.data.order),
  ));

const localize = (entry: Entry, lang: Lang): Project => ({
  slug: entry.id,
  order: entry.data.order,
  featured: entry.data.featured,
  cover: entry.data.cover,
  categories: entry.data.categories,
  stack: entry.data.stack,
  title: entry.data.title[lang],
  summary: entry.data.summary[lang],
  links: entry.data.links,
  caseStudy: entry.data.caseStudy?.[lang],
});

export async function getProjects(lang: Lang): Promise<Project[]> {
  return (await loadEntries()).map((e) => localize(e, lang));
}

export async function getProject(lang: Lang, slug: string): Promise<Project | undefined> {
  const entry = (await loadEntries()).find((e) => e.id === slug);
  return entry && localize(entry, lang);
}

/** Counter per category for the filter (only categories with projects). */
export function countByCategory(projects: Project[]): { id: Category; count: number }[] {
  return categories
    .map((id) => ({ id, count: projects.filter((p) => p.categories.includes(id)).length }))
    .filter((c) => c.count > 0);
}

/** Slugs for getStaticPaths of the detail pages. */
export async function getProjectSlugs(): Promise<string[]> {
  return (await loadEntries()).map((e) => e.id);
}
