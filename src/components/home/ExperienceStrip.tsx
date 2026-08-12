import Link from "next/link";
import { experience } from "@/data/experience";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

const kindLabels: Record<string, string> = {
  engineering: "Engineering",
  research: "Research",
  founding: "Founding",
};

export function ExperienceStrip() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr]">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <Eyebrow index="03">Experience</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Where the work happened.
            </h2>
            <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-ink-secondary">
              Engineering internships, research labs, and companies I started — each one a
              different angle on the same set of problems.
            </p>
            <Link
              href="/experience/"
              className="arrow-link mt-7 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink-muted transition-colors hover:text-accent"
            >
              The full story <span className="arrow">→</span>
            </Link>
          </div>
        </Reveal>

        <div className="border-t border-line">
          {experience.map((e, i) => (
            <Reveal key={e.org} delay={i * 40}>
              <Link
                href="/experience/"
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 border-b border-line py-4.5 sm:py-5"
              >
                <span className="w-20 font-mono text-[11px] text-ink-faint">{e.period}</span>
                <span className="min-w-0">
                  <span className="block truncate text-[15px] font-medium text-ink transition-colors group-hover:text-accent">
                    {e.org}
                  </span>
                  <span className="block text-[12.5px] text-ink-muted">{e.role}</span>
                </span>
                <span className="hidden rounded-full border border-line px-2.5 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-muted sm:block">
                  {kindLabels[e.kind]}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
