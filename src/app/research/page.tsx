import type { Metadata } from "next";
import Link from "next/link";
import { researchThemes } from "@/data/research";
import { ResearchGraph } from "@/components/research/ResearchGraph";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research by Sunkalp Chandra across neural computation, machine intelligence, computational neuroscience, and scientific AI.",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <header className="max-w-3xl">
        <Reveal>
          <Eyebrow>Research</Eyebrow>
        </Reveal>
        <Reveal delay={70}>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            One problem, four directions.
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 text-[16px] leading-relaxed text-ink-secondary">
            Everything I work on is a version of the same question — how intelligent systems
            represent the world — approached from four directions: reading representations out of
            brains, building them into machines, modeling the biological circuits that produce
            them, and applying them where they change what medicine can do.
          </p>
        </Reveal>
      </header>

      <Reveal delay={200}>
        <div className="mt-14">
          <ResearchGraph />
        </div>
      </Reveal>

      <div className="mt-24 space-y-20">
        {researchThemes.map((theme, i) => (
          <Reveal key={theme.id} as="section" className="scroll-mt-28" delay={0}>
            <div id={theme.id} className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
              <div>
                <p className="font-mono text-[11px] text-ink-faint">0{i + 1}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
                  {theme.title}
                </h2>
                <p className="mt-4 font-editorial text-xl italic leading-snug text-ink-secondary">
                  “{theme.question}”
                </p>
              </div>
              <div>
                <p className="text-[15px] leading-[1.8] text-ink-secondary">{theme.blurb}</p>
                <ul className="mt-7 border-t border-line">
                  {theme.projects.map((p) => {
                    const external = p.href.startsWith("http");
                    const inner = (
                      <>
                        <span className="text-[14.5px] font-medium text-ink transition-colors group-hover:text-accent">
                          {p.title}
                          {external && <span className="ml-1.5 text-[11px] text-ink-faint">↗</span>}
                        </span>
                        <span className="text-right text-[12.5px] text-ink-muted">{p.note}</span>
                      </>
                    );
                    return (
                      <li key={p.title} className="border-b border-line">
                        {external ? (
                          <a
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-baseline justify-between gap-6 py-3.5"
                          >
                            {inner}
                          </a>
                        ) : (
                          <Link
                            href={p.href}
                            className="group flex items-baseline justify-between gap-6 py-3.5"
                          >
                            {inner}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-24 flex flex-wrap items-baseline justify-between gap-4 rounded-xl border border-line bg-paper-sunken/60 p-7">
          <p className="font-editorial text-lg italic text-ink-secondary">
            The papers that came out of all this —
          </p>
          <Link
            href="/publications/"
            className="arrow-link inline-flex items-center gap-1.5 text-[13.5px] font-medium text-accent"
          >
            Publications <span className="arrow">→</span>
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
