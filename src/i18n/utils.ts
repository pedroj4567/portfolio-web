import { ui, type UIDict } from "./ui";

export const languages = ["es", "en"] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = "es";

/** localStorage key for the user's preferred language. */
export const LANG_STORAGE_KEY = "pa-lang";

/** Path segment for the project list in each language. */
const projectsSegment: Record<Lang, string> = { es: "proyectos", en: "projects" };

export function isLang(value: unknown): value is Lang {
  return languages.includes(value as Lang);
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  return isLang(first) ? first : defaultLang;
}

export function useTranslations(lang: Lang): UIDict {
  return ui[lang];
}

/** Typed paths per language; the single source of internal URLs. */
export function routes(lang: Lang) {
  const home = `/${lang}/`;
  const projects = `${home}${projectsSegment[lang]}/`;
  const ids = ui[lang].ids;
  return {
    home,
    projects,
    project: (slug: string) => `${projects}${slug}/`,
    section: (key: keyof UIDict["ids"]) => `${home}#${ids[key]}`,
  };
}

/** Equivalent URL in the other language (for the selector and hreflang). */
export function translatePath(pathname: string, to: Lang): string {
  const parts = pathname.split("/").filter(Boolean);
  const from = isLang(parts[0]) ? parts[0] : null;
  if (!from) return routes(to).home;
  parts[0] = to;
  if (parts[1] === projectsSegment[from]) parts[1] = projectsSegment[to];
  return `/${parts.join("/")}/`;
}

export const otherLang = (lang: Lang): Lang => (lang === "es" ? "en" : "es");
