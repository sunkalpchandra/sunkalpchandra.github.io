import Link from "next/link";
import { researchThemes } from "@/data/research";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export function ResearchStrip() {
  return (
    <section className="border-y border-line bg-paper-sunken/50">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <Eyebrow index="02">Research</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Four questions I keep coming back to.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {researchThemes.map((theme, i) => (
            <Reveal key={theme.id} delay={i * 70}>
              <Link href={`/research/#${theme.id}`} className="group block">
                <p className="font-mono text-[11px] text-ink-faint">0{i + 1}</p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
                  {theme.title}
                </h3>
                <p className="mt-3 font-editorial text-[19px] italic leading-snug text-ink-secondary">
                  “{theme.question}”
                </p>
                <span className="draw-line mt-5 block h-px w-full bg-line-strong" />
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <Link
            href="/research/"
            className="arrow-link mt-12 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink-muted transition-colors hover:text-accent"
          >
            The full research map <span className="arrow">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
