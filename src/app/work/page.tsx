import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Projects and systems by Sunkalp Chandra — neural decoding platforms, research tools, medical AI, and physical hardware.",
};

const alsoOnGitHub = [
  {
    name: "gauge-neural-dynamics",
    note: "context-dependent coordinate systems in neural representations",
    href: "https://github.com/sunkalpchandra/gauge-neural-dynamics",
  },
  {
    name: "neural-morphogen-operators",
    note: "reaction-diffusion dynamics from spatial transcriptomics",
    href: "https://github.com/sunkalpchandra/neural-morphogen-operators",
  },
  {
    name: "vanta",
    note: "multi-agent probabilistic forecasting — market vs. model",
    href: "https://github.com/sunkalpchandra/vanta",
  },
  {
    name: "kairos-cad",
    note: "reinforcement learning for parametric CAD",
    href: "https://github.com/sunkalpchandra/kairos-cad",
  },
  {
    name: "DeepECG-FSL",
    note: "few-shot learning on ECG",
    href: "https://github.com/sunkalpchandra/DeepECG-FSL",
  },
];

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <header className="max-w-3xl">
        <Reveal>
          <Eyebrow>Work</Eyebrow>
        </Reveal>
        <Reveal delay={70}>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Build. Research. Deploy.
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 text-[16px] leading-relaxed text-ink-secondary">
            Every project here follows the same loop: build the system, do the research it makes
            possible, and push it toward the real world — a patient trial, a live demo, a paper,
            an ocean. Models that only ever run in a notebook don&apos;t count.
          </p>
        </Reveal>
      </header>

      <div className="mt-16 border-t border-line">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={Math.min(i * 40, 200)}>
            <Link
              href={`/work/${p.slug}/`}
              className="group grid grid-cols-1 items-baseline gap-x-8 gap-y-2 border-b border-line py-8 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)_auto] sm:py-9"
            >
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent sm:text-3xl">
                  {p.title}
                </h2>
                <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.14em] text-accent">
                  {p.status}
                </p>
              </div>
              <div>
                <p className="font-editorial text-[17px] italic text-ink-secondary">{p.tagline}</p>
                <p className="mt-2 hidden text-[13.5px] leading-relaxed text-ink-muted sm:block">
                  {p.summary}
                </p>
              </div>
              <p className="justify-self-start font-mono text-[11px] text-ink-faint sm:justify-self-end">
                {p.period}
                <span className="arrow ml-3 inline-block transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent">
                  →
                </span>
              </p>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <section className="mt-20">
          <Eyebrow>Also on GitHub</Eyebrow>
          <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-ink-secondary">
            Smaller research code and side experiments — less polished, still real.
          </p>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {alsoOnGitHub.map((repo) => (
              <li key={repo.name} className="bg-paper">
                <a
                  href={repo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col gap-2 p-5 transition-colors hover:bg-accent-soft/60"
                >
                  <span className="font-mono text-[13px] font-medium text-ink">{repo.name}</span>
                  <span className="text-[12.5px] leading-relaxed text-ink-muted">{repo.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </Reveal>
    </div>
  );
}
