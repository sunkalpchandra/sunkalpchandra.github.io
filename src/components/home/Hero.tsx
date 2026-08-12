import Link from "next/link";
import { NeuralManifold } from "@/components/home/NeuralManifold";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Manifold: right panel on desktop, faint backdrop on mobile */}
      <div className="pointer-events-none absolute inset-0 lg:pointer-events-auto">
        <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
          <NeuralManifold className="h-full w-full" />
        </div>
        <div className="absolute inset-0 opacity-40 lg:hidden">
          <NeuralManifold className="h-full w-full" />
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-center px-5 pb-24 pt-32 sm:px-8">
        <div className="max-w-[36rem] lg:max-w-[40rem]">
          <Reveal>
            <p className="meta-label">
              Sunkalp Chandra · CS × Neuroscience · UT Austin
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-7 text-[2.5rem] font-semibold leading-[1.07] tracking-[-0.025em] text-ink sm:text-6xl">
              I build systems for understanding{" "}
              <em className="font-editorial font-medium italic text-accent">intelligence</em> —
              artificial and biological.
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-7 max-w-[30rem] text-[16px] leading-relaxed text-ink-secondary">
              Researching neural computation, building AI systems, and occasionally making things
              that should probably not work.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/work/trident/"
                className="arrow-link group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-medium text-paper transition-colors hover:bg-accent"
              >
                TRIDENT — current work
                <span className="arrow">→</span>
              </Link>
              <Link
                href="/research/"
                className="arrow-link inline-flex items-center gap-2 text-[13.5px] font-medium text-ink-secondary transition-colors hover:text-accent"
              >
                Research
                <span className="arrow">→</span>
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={400} className="absolute bottom-8 left-5 sm:left-8">
          <p className="meta-label flex items-center gap-2 text-ink-faint">
            <span className="inline-block h-6 w-px bg-line-strong" aria-hidden />
            scroll
          </p>
        </Reveal>

        <p className="research-annotation absolute bottom-8 right-5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent sm:right-8">
          fig. 0 — 110 pts · 5 clusters · hover to identify
        </p>
      </div>
    </section>
  );
}
