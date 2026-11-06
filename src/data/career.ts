import type { Lang } from "@/i18n/utils";

type T = Record<Lang, string>;

export interface Job {
  company: string;
  /** null → shows the [ROL]/[ROLE] placeholder. */
  role: T | null;
  /** null → shows [AÑOS]/[YEARS]. `end: null` means "present". */
  period: { start: string; end: string | null } | null;
  mode?: T;
  description: T | null;
  /** "See more": key achievements (recruiter-facing). Without it, no expander is shown. */
  highlights?: T[];
  /** Technologies used in this job. */
  tech?: string[];
}

/** Order: most recent first. Pending data: see section 11 of the design doc. */
export const career: Job[] = [
  {
    company: "Yummy",
    role: { es: "Senior Software Engineer", en: "Senior Software Engineer" },
    period: { start: "2025", end: null },
    mode: { es: "remoto", en: "remote" },
    description: {
      es: "Verificación de identidad (biometría + MetaMap), herramientas internas en React y Retool, full-stack.",
      en: "Identity verification (biometrics + MetaMap), internal tools with React and Retool, full-stack.",
    },
    highlights: [
      {
        es: "Verificación biométrica en el login de conductores con MetaMap: re-verificación al cambiar de dispositivo y bloqueo tras fallos repetidos.",
        en: "Biometric login verification for drivers with MetaMap: re-verification on device change and lockout after repeated failures.",
      },
      {
        es: "Integración de pagos con Pago Móvil (ChinChin) en el flujo de viajes, con cobro idempotente.",
        en: "Pago Móvil payments (ChinChin) integrated into the trip flow, with idempotent charging.",
      },
      {
        es: "Integración con MotoGo para el alquiler de vehículos, reemplazando el mock por la API real y sus webhooks.",
        en: "MotoGo vehicle rental integration, replacing the mock with the real API and its webhooks.",
      },
      {
        es: "Herramientas internas en React y Retool para soporte y operaciones.",
        en: "Internal tools in React and Retool for support and operations.",
      },
    ],
    tech: ["NestJS", "TypeScript", "MongoDB", "Redis", "BullMQ", "AWS SQS", "React", "Retool"],
  },
  { company: "Global Resource", role: null, period: null, description: null },
  { company: "SmartCompliance Chile", role: null, period: null, description: null },
  {
    company: "Sistemas Tecnológicos Alcaravan",
    role: { es: "Full-stack / Team Leader", en: "Full-stack / Team Leader" },
    period: null,
    description: { es: "Odoo y Next.js.", en: "Odoo and Next.js." },
  },
  {
    company: "NovadevTechnologies",
    role: {
      es: "Internado de desarrollo de software",
      en: "Software development internship",
    },
    period: null,
    description: null,
  },
  {
    company: "Freelance",
    role: { es: "Desarrollador", en: "Developer" },
    period: null,
    description: {
      es: "Landing pages y proyectos a medida.",
      en: "Landing pages and custom projects.",
    },
  },
];

export const contact = {
  email: "pacostadev.tech@gmail.com" as string | null,
  github: { label: "github.com/pedroj4567", href: "https://github.com/pedroj4567" },
  linkedin: { label: "in/acostadev", href: "https://www.linkedin.com/in/acostadev" },
};
