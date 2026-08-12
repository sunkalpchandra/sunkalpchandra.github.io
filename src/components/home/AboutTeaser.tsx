import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function AboutTeaser() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center font-editorial text-2xl leading-relaxed text-ink-secondary sm:text-[28px]">
            I&apos;m Sunkalp — a student, researcher, and builder. I like understanding how
            intelligent systems work,{" "}
            <em className="text-ink">and then building them myself.</em>
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10 text-center">
            <Link
              href="/about/"
              className="arrow-link inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink-muted transition-colors hover:text-accent"
            >
              More about me <span className="arrow">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
