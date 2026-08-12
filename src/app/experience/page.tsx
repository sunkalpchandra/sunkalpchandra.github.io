import type { Metadata } from "next";
import { earlierResearch, programs } from "@/data/experience";
import { ExperienceAccordion } from "@/components/experience/ExperienceAccordion";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Experience of Sunkalp Chandra — NVIDIA, Contrary, Harvard Medical School, Pure Storage, Memorial Sloan Kettering, and companies he founded.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <header className="max-w-3xl">
        <Reveal>
          <Eyebrow>Experience</Eyebrow>
        </Reveal>
        <Reveal delay={70}>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Not a résumé. A pattern.
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 text-[15.5px] leading-relaxed text-ink-secondary">
            Engineering teams taught me how real systems ship. Research labs taught me how
            knowledge gets made. Founding companies taught me what happens when the two collide.
            Click any entry for the actual work.
          </p>
        </Reveal>
      </header>

      <Reveal delay={200}>
        <div className="mt-14">
          <ExperienceAccordion />
        </div>
      </Reveal>

      <div className="mt-20 grid gap-10 sm:grid-cols-2">
        <Reveal>
          <section>
            <Eyebrow>Earlier research</Eyebrow>
            <ul className="mt-5 space-y-4">
              {earlierResearch.map((e) => (
                <li key={e.org} className="border-l-2 border-line pl-4">
                  <p className="text-[14.5px] font-medium text-ink">{e.org}</p>
                  <p className="mt-0.5 text-[13px] leading-relaxed text-ink-muted">{e.focus}</p>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
        <Reveal delay={80}>
          <section>
            <Eyebrow>Fellowships & programs</Eyebrow>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {programs.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-line px-4 py-1.5 text-[13px] text-ink-secondary"
                >
                  {p}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
