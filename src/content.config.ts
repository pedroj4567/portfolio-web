import { defineCollection } from "astro:content";
import { file } from "astro/loaders";
import { z } from "astro/zod";

/** Text in both languages. */
const i18n = <T extends z.ZodType>(schema: T) => z.object({ es: schema, en: schema });

export const categories = ["backend", "mobile", "web", "cloud", "algorithms"] as const;
export const covers = ["disart", "antorcha", "kyc", "backoffice", "tasks", "analytics"] as const;

const url = z.url().nullable().default(null);

/**
 * Projects: src/content/projects.json (edited by hand).
 * Validated at build time: a typo in a category or URL breaks the build
 * instead of breaking the site in production.
 */
const projects = defineCollection({
  loader: file("src/content/projects.json"),
  schema: z.object({
    order: z.number().int(),
    featured: z.boolean().default(false),
    cover: z.enum(covers),
    categories: z.array(z.enum(categories)).min(1),
    stack: z.array(z.string()).min(1),
    title: i18n(z.string()),
    summary: i18n(z.string()),
    links: z.object({ code: url, demo: url }).default({ code: null, demo: null }),
    caseStudy: i18n(
      z.object({
        problem: z.string(),
        solution: z.string(),
        decisions: z.array(z.string()).default([]),
        results: z.array(z.string()).default([]),
      }),
    ).optional(),
  }),
});

export const collections = { projects };
