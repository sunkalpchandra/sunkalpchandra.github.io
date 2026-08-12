import Link from "next/link";
import { publications } from "@/data/publications";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export function PublicationsStrip() {
  const highlighted = publications.filter((p) => p.highlight);

  return (
    <section className="border-y border-line bg-paper-sunken/50">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal className="flex items-end justify-between">
          <Eyebrow index="04">Recent papers</Eyebrow>
          <Link
            href="/publications/"
            className="arrow-link inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink-muted transition-colors hover:text-accent"
          >
            All publications <span className="arrow">→</span>
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {highlighted.map((pub, i) => (
            <Reveal key={pub.title} delay={i * 80} className="h-full">
              <a
                href={pub.links[0]?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-line bg-paper p-6 transition-colors hover:border-accent/50 sm:p-7"
              >
                <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-accent">
                  {pub.venue}
                </p>
                <h3 className="mt-4 font-editorial text-[21px] leading-snug text-ink">
                  {pub.title}
                </h3>
                {pub.authors && (
                  <p className="mt-3 text-[12.5px] text-ink-muted">{pub.authors.join(", ")}</p>
                )}
                <p className="mt-auto pt-5 font-mono text-[11px] text-ink-faint">
                  {pub.year} ·{" "}
                  <span className="text-ink-muted transition-colors group-hover:text-accent">
                    {pub.links[0]?.label} ↗
                  </span>
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
