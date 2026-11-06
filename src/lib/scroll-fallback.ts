/**
 * Scroll animations with Motion for browsers WITHOUT `animation-timeline`
 * (Safari, Firefox). It's imported with dynamic import() from BaseLayout
 * only when needed: Chrome/Edge never download this chunk.
 *
 * Rules:
 * - Content is already visible in the HTML; only what is still BELOW the
 *   viewport gets hidden, so nothing ever "blinks" or stays hidden.
 * - Same classes as animations.css: .rv .d1-.d3 .wipe .pop .draw .par .par2 .heroout
 */
import { animate } from "motion/mini";
import { inView, scroll } from "motion";

const EASE_REVEAL = [0.2, 0.7, 0.2, 1] as const;

type Reveal = { from: Partial<CSSStyleDeclaration>; to: Record<string, string[]> };

const reveals: Record<string, Reveal> = {
  rv: {
    from: { opacity: "0", transform: "translateY(56px)" },
    to: { opacity: ["0", "1"], transform: ["translateY(56px)", "none"] },
  },
  pop: {
    from: { opacity: "0", transform: "scale(0.9) rotate(-2deg)" },
    to: { opacity: ["0", "1"], transform: ["scale(0.9) rotate(-2deg)", "none"] },
  },
  wipe: {
    from: { clipPath: "inset(-0.2em 100% -0.3em -0.1em)" },
    to: { clipPath: ["inset(-0.2em 100% -0.3em -0.1em)", "inset(-0.2em -0.3em -0.3em -0.1em)"] },
  },
};

const delayOf = (el: Element) =>
  el.classList.contains("d3")
    ? 0.3
    : el.classList.contains("d2")
      ? 0.2
      : el.classList.contains("d1")
        ? 0.1
        : 0;

function setupReveals() {
  for (const [cls, { from, to }] of Object.entries(reveals)) {
    document.querySelectorAll<HTMLElement>(`.${cls}`).forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) return; // already visible
      Object.assign(el.style, from);
      inView(
        el,
        () => {
          animate(el, to, { duration: 0.8, delay: delayOf(el), ease: EASE_REVEAL });
        },
        { amount: 0.15 },
      );
    });
  }
}

function setupScrollLinked() {
  const bar = document.querySelector<HTMLElement>(".progress");
  if (bar) scroll((p: number) => (bar.style.transform = `scaleX(${p})`));

  document.querySelectorAll<HTMLElement>(".draw").forEach((el) => {
    scroll((p: number) => (el.style.transform = `scaleY(${p})`), {
      target: el,
      offset: ["start 80%", "end 60%"],
    });
  });

  const parallax: [string, number, number][] = [
    [".par", 70, -70],
    [".par2", -40, 50],
  ];
  for (const [sel, a, b] of parallax) {
    document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
      // Hero parallax only on desktop (> 1024px), like in the CSS.
      if (el.closest("[data-par-desktop]") && !matchMedia("(width > 64rem)").matches) return;
      scroll((p: number) => (el.style.transform = `translateY(${a + (b - a) * p}px)`), {
        target: el,
        offset: ["start end", "end start"],
      });
    });
  }

  document.querySelectorAll<HTMLElement>(".heroout").forEach((el) => {
    scroll(
      (p: number) => {
        el.style.opacity = String(1 - 0.8 * p);
        el.style.scale = String(1 - 0.06 * p);
      },
      { target: el, offset: ["start start", "end start"] },
    );
  });
}

export function initScrollFallback() {
  document.documentElement.classList.add("js-motion");
  setupReveals();
  setupScrollLinked();
}
