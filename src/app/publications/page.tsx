import type { Metadata } from "next";
import { publications, kindLabel } from "@/data/publications";
import { site } from "@/data/site";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Publications by Sunkalp Chandra — NeurIPS and ICLR workshop papers, IEEE conference papers, and preprints.",
};

export default function PublicationsPage() {
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <header>
        <Reveal>
          <Eyebrow>Publications</Eyebrow>
        </Reveal>
        <Reveal delay={70}>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Papers
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-secondary">
            Workshop papers, conference papers, and preprints — each labeled as exactly what it
            is. Also on{" "}
            <a
              href={site.links.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              Google Scholar
            </a>
            .
          </p>
        </Reveal>
      </header>

      <div className="mt-16 space-y-16">
        {years.map((year) => (
          <section key={year}>
            <Reveal>
              <h2 className="font-mono text-sm font-medium text-accent">{year}</h2>
              <span className="draw-line mt-3 block h-px w-full bg-line" />
            </Reveal>
            <ul className="mt-2">
              {publications
                .filter((p) => p.year === year)
                .map((pub, i) => (
                  <Reveal as="li" key={pub.title} delay={i * 60} className="border-b border-line py-7 last:border-b-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-muted">
                        {kindLabel[pub.kind]}
                      </span>
                      {pub.highlight && (
                        <span className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-accent">
                          selected
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3.5 font-editorial text-[21px] leading-snug text-ink">
                      {pub.title}
                    </h3>
                    {pub.authors && (
                      <p className="mt-2.5 text-[13.5px] text-ink-muted">
                        {pub.authors.map((a, ai) => (
                          <span key={a}>
                            <span className={a === "Sunkalp Chandra" ? "font-medium text-ink" : undefined}>
                              {a}
                            </span>
                            {ai < pub.authors!.length - 1 && ", "}
                          </span>
                        ))}
                      </p>
                    )}
                    <p className="mt-1.5 text-[13.5px] italic text-ink-secondary">{pub.venue}</p>
                    <div className="mt-3.5 flex gap-4">
                      {pub.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[12px] text-accent transition-opacity hover:opacity-70"
                        >
                          [{link.label}]
                        </a>
                      ))}
                    </div>
                  </Reveal>
                ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
