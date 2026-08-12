import Link from "next/link";
import Image from "next/image";
import { featuredProjects } from "@/data/projects";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

/** Compact inline pipeline glyph for the TRIDENT feature block. */
function PipelineGlyph() {
  const stages = ["signal", "encode", "latent", "reason", "person.", "intent"];
  return (
    <div aria-hidden className="flex items-center gap-0 overflow-x-auto pb-1">
      {stages.map((s, i) => (
        <div key={s} className="flex shrink-0 items-center">
          <div className="flex flex-col items-center gap-2">
            <span
              className={`block h-2 w-2 rounded-full ${
                i === 2 || i === 4 ? "bg-accent" : "border border-line-strong bg-paper"
              }`}
            />
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-faint">
              {s}
            </span>
          </div>
          {i < stages.length - 1 && <span className="mx-1 mb-5 block h-px w-6 bg-line-strong sm:w-10" />}
        </div>
      ))}
    </div>
  );
}

export function WorkIndex() {
  const [trident, ...rest] = featuredProjects;

  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="flex items-end justify-between">
        <div>
          <Eyebrow index="01">Selected work</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Things I&apos;ve actually built.
          </h2>
        </div>
        <Link
          href="/work/"
          className="arrow-link hidden items-center gap-1.5 text-[13.5px] font-medium text-ink-muted transition-colors hover:text-accent sm:inline-flex"
        >
          All work <span className="arrow">→</span>
        </Link>
      </Reveal>

      {/* TRIDENT — the headline project */}
      <Reveal delay={100}>
        <Link
          href={`/work/${trident.slug}/`}
          className="group mt-12 block rounded-xl border border-line bg-paper-raised p-7 transition-colors duration-300 hover:border-accent/50 sm:p-10"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="meta-label">
              {trident.period} · {trident.status}
            </p>
            <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
              featured
            </span>
          </div>
          <h3 className="mt-6 text-4xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent sm:text-5xl">
            {trident.title}
          </h3>
          <p className="mt-2 font-editorial text-lg italic text-ink-muted">{trident.subtitle}</p>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-secondary">
            {trident.summary}
          </p>
          <div className="mt-8 border-t border-line pt-6">
            <PipelineGlyph />
          </div>
        </Link>
      </Reveal>

      {/* The rest: editorial index rows */}
      <div className="mt-6 border-t border-line">
        {rest.map((p, i) => (
          <Reveal key={p.slug} delay={i * 60}>
            <Link
              href={`/work/${p.slug}/`}
              className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-b border-line py-6 transition-colors sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)_auto] sm:py-7"
            >
              <h3 className="text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent sm:text-2xl">
                {p.title}
              </h3>
              <p className="col-span-2 text-[13.5px] leading-relaxed text-ink-muted sm:col-span-1 sm:text-[14px]">
                {p.tagline}
              </p>
              <p className="row-start-1 justify-self-end font-mono text-[11px] text-ink-faint sm:col-start-3">
                {p.period}
                <span className="arrow ml-3 inline-block text-ink-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent">
                  →
                </span>
              </p>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* TRIBE visual pull */}
      <Reveal delay={80}>
        <Link
          href="/work/tribe/"
          className="group mt-14 grid items-center gap-8 rounded-xl border border-line bg-paper-sunken/60 p-7 sm:p-10 lg:grid-cols-[1.1fr_1.4fr]"
        >
          <div>
            <p className="meta-label">From the lab</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
              Watching a foundation model watch a brain
            </h3>
            <p className="mt-4 text-[14.5px] leading-relaxed text-ink-secondary">
              TRIBE Explorer renders an fMRI recording as a trajectory through the latent space of a
              neural foundation model — geometry you can inspect instead of a metric you have to
              trust.
            </p>
            <p className="arrow-link mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-accent">
              The project <span className="arrow">→</span>
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-line">
            <Image
              src="/images/projects/tribe-latent-space.jpg"
              alt="TRIBE Explorer: latent space of an fMRI foundation model, one point per timestep"
              width={1600}
              height={952}
              className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </Link>
      </Reveal>

      <Link
        href="/work/"
        className="arrow-link mt-10 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink-muted transition-colors hover:text-accent sm:hidden"
      >
        All work <span className="arrow">→</span>
      </Link>
    </section>
  );
}
