import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Sunkalp Chandra — student, researcher, and builder at the intersection of computer science and neuroscience.",
};

const ranges = [
  "neural decoding",
  "machine learning",
  "medical AI",
  "computational neuroscience",
  "infrastructure",
  "assistive technology",
  "physical engineering",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
        <div>
          <Reveal>
            <Eyebrow>About</Eyebrow>
          </Reveal>
          <Reveal delay={70}>
            <h1 className="mt-6 text-3xl font-semibold leading-snug tracking-tight text-ink sm:text-4xl">
              I&apos;m Sunkalp — a student, researcher, and builder working at the intersection of
              computer science and neuroscience.
            </h1>
          </Reveal>

          <div className="mt-10 space-y-6 text-[15.5px] leading-[1.8] text-ink-secondary">
            <Reveal delay={140}>
              <p>
                I like understanding how intelligent systems work, and then building them myself.
                Both halves matter. Understanding without building drifts into abstraction;
                building without understanding produces things that work by accident.
              </p>
            </Reveal>
            <Reveal>
              <p>My work so far has ranged across {ranges.slice(0, -1).join(", ")}, and{" "}
                {ranges[ranges.length - 1]}. That list looks scattered until you notice the
                pattern: every one of them is a different way of asking how information becomes
                action — in a cortex, in a model, in a machine.
              </p>
            </Reveal>
            <Reveal>
              <p>
                I care about problems where the obvious solution isn&apos;t good enough. Decoding a
                brain by averaging over everyone&apos;s brain. Helping Alzheimer&apos;s patients with an app
                that forgets who they are. Simulating cortex with models nobody can reproduce.
                The interesting work starts where the default approach quietly fails.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <section className="mt-14">
              <Eyebrow>Education</Eyebrow>
              <div className="mt-5 rounded-xl border border-line p-6">
                <p className="text-[15px] font-medium text-ink">
                  The University of Texas at Austin
                </p>
                <p className="mt-1 text-[13.5px] text-ink-muted">
                  Computer Science (Honors) + Neuroscience · incoming
                </p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-secondary">
                  Studying both because neither is sufficient alone: the brain is the only proof
                  we have that intelligence is physically possible, and computer science is the
                  only language precise enough to say how.
                </p>
              </div>
            </section>
          </Reveal>

          <Reveal>
            <section className="mt-12">
              <Eyebrow>Current interests</Eyebrow>
              <ul className="mt-5 space-y-2.5 text-[14.5px] leading-relaxed text-ink-secondary">
                <li className="border-l-2 border-accent/40 pl-4">
                  Personalized neural decoding — treating the individual brain, not the cohort, as
                  the unit of modeling.
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  What neural foundation models actually learn, geometrically.
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  Biologically inspired mechanisms — evolution, plasticity, spiking dynamics — as
                  engineering tools rather than metaphors.
                </li>
                <li className="border-l-2 border-accent/40 pl-4">
                  Hardware that survives the real world, from operating rooms to oceans.
                </li>
              </ul>
            </section>
          </Reveal>

          <Reveal>
            <section className="mt-12">
              <Eyebrow>Off the clock</Eyebrow>
              <p className="mt-5 text-[14.5px] leading-[1.8] text-ink-secondary">
                I grew up on competition math and USACO, which explains both the systems obsession
                and the stubbornness. I read a lot —{" "}
                <em className="font-editorial italic">Algorithms to Live By</em>,{" "}
                <em className="font-editorial italic">Range</em>, and{" "}
                <em className="font-editorial italic">Thinking, Fast and Slow</em> are the ones I
                keep handing to people. And I keep a running list of ideas that should probably
                not work, in case one of them does.
              </p>
            </section>
          </Reveal>
        </div>

        {/* Sidebar */}
        <aside>
          <Reveal delay={200}>
            <div className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-xl border border-line">
                <Image
                  src="/images/sunkalp-web.jpg"
                  alt="Sunkalp Chandra"
                  width={640}
                  height={504}
                  priority
                  className="w-full"
                />
              </div>
              <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-faint">
                fig. 1 — the author, resisting the urge to whiteboard
              </p>

              <div className="mt-8 rounded-xl border border-line bg-paper-sunken/60 p-6">
                <p className="meta-label">Quick facts</p>
                <dl className="mt-4 space-y-3 text-[13.5px]">
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-muted">Base</dt>
                    <dd className="text-right font-medium text-ink">Austin, TX</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-muted">Studying</dt>
                    <dd className="text-right font-medium text-ink">CS Honors + Neuro</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-muted">Awards</dt>
                    <dd className="text-right font-medium text-ink">
                      3× AIME · USACO Gold
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-ink-muted">Contact</dt>
                    <dd className="text-right">
                      <a href={`mailto:${site.email}`} className="link-accent font-medium">
                        email
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <Link
                href="/cv/"
                className="mt-6 flex items-center justify-between rounded-xl border border-line px-6 py-4 text-[14px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Full CV
                <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </aside>
      </div>
    </div>
  );
}
