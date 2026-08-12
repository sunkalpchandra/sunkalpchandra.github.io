import type { Metadata } from "next";
import { experience, earlierResearch, programs } from "@/data/experience";
import { publications, kindLabel } from "@/data/publications";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum vitae of Sunkalp Chandra.",
};

function CVSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="cv-section mt-12 first:mt-0">
      <h2 className="meta-label text-accent">{title}</h2>
      <span className="mt-3 block h-px w-full bg-line" />
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function CVPage() {
  return (
    <div className="cv-page mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <Reveal>
        <header className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Sunkalp Chandra
            </h1>
            <p className="mt-2 text-[14px] text-ink-muted">
              {site.email} · github.com/sunkalpchandra · Austin, TX
            </p>
          </div>
          <div className="cv-actions flex gap-3">
            <a
              href="/cv.pdf"
              className="rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-medium text-paper transition-colors hover:bg-accent"
            >
              Download CV ↓
            </a>
          </div>
        </header>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-12">
          <CVSection title="Education">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <p className="text-[15px] font-medium text-ink">
                  The University of Texas at Austin
                </p>
                <p className="text-[13.5px] text-ink-secondary">
                  B.S. Computer Science (Honors) + Neuroscience
                </p>
              </div>
              <p className="font-mono text-[11.5px] text-ink-muted">incoming · 2026</p>
            </div>
          </CVSection>

          <CVSection title="Experience">
            <ul className="space-y-6">
              {experience.map((e) => (
                <li key={e.org} className="grid grid-cols-[1fr_auto] gap-x-4">
                  <div>
                    <p className="text-[15px] font-medium text-ink">{e.org}</p>
                    <p className="text-[13.5px] text-ink-secondary">{e.role}</p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">
                      {e.detail[0]}
                    </p>
                  </div>
                  <p className="font-mono text-[11.5px] text-ink-muted">{e.period}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-line pt-4">
              <p className="text-[13px] leading-relaxed text-ink-muted">
                Earlier:{" "}
                {earlierResearch.map((e, i) => (
                  <span key={e.org}>
                    <span className="text-ink-secondary">{e.org}</span> ({e.focus.toLowerCase()})
                    {i < earlierResearch.length - 1 ? " · " : ""}
                  </span>
                ))}
              </p>
            </div>
          </CVSection>

          <CVSection title="Publications">
            <ul className="space-y-5">
              {publications.map((p) => (
                <li key={p.title}>
                  <p className="text-[14px] font-medium leading-snug text-ink">{p.title}</p>
                  <p className="mt-1 text-[12.5px] text-ink-muted">
                    {p.authors ? `${p.authors.join(", ")} · ` : ""}
                    <em>{p.venue}</em> · {p.year} · {kindLabel[p.kind]}
                  </p>
                </li>
              ))}
            </ul>
          </CVSection>

          <CVSection title="Selected projects">
            <ul className="space-y-4">
              {projects
                .filter((p) => ["trident", "tribe", "neuroloom", "remembrance", "neuroforge"].includes(p.slug))
                .map((p) => (
                  <li key={p.slug} className="grid grid-cols-[1fr_auto] gap-x-4">
                    <div>
                      <p className="text-[14px] font-medium text-ink">
                        {p.title}
                        <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.1em] text-accent">
                          {p.status}
                        </span>
                      </p>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-ink-muted">{p.summary}</p>
                    </div>
                    <p className="font-mono text-[11.5px] text-ink-muted">{p.period}</p>
                  </li>
                ))}
            </ul>
          </CVSection>

          <CVSection title="Awards">
            <ul className="space-y-2 text-[13.5px] text-ink-secondary">
              <li>3× AIME qualifier (American Invitational Mathematics Examination)</li>
              <li>USACO Gold Division</li>
              <li>3× Technology Student Association nationals qualifier</li>
            </ul>
          </CVSection>

          <CVSection title="Programs">
            <p className="text-[13.5px] text-ink-secondary">{programs.join(" · ")}</p>
          </CVSection>

          <CVSection title="Technical">
            <p className="text-[13.5px] leading-relaxed text-ink-secondary">
              Python · PyTorch · TypeScript · React / Next.js · C++ · Java · Brian2 · AllenSDK ·
              signal processing (EEG/fMRI) · graph representation learning · computer vision
            </p>
          </CVSection>
        </div>
      </Reveal>
    </div>
  );
}
