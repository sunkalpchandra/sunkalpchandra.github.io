import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { TridentPipeline } from "@/components/work/TridentPipeline";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: `${project.tagline} ${project.summary}`,
  };
}

/** Slug-specific figures injected after a named section. */
function SectionFigure({ slug, heading }: { slug: string; heading: string }) {
  if (slug === "trident" && heading === "Architecture") return <TridentPipeline />;
  if (slug === "tribe" && heading === "TRIBE Explorer") {
    return (
      <figure className="my-4">
        <div className="overflow-hidden rounded-xl border border-line">
          <Image
            src="/images/projects/tribe-timeline.jpg"
            alt="TRIBE Explorer neural timeline: a recording rendered as a latent trajectory through decoder state space"
            width={1600}
            height={952}
            className="w-full"
          />
        </div>
        <figcaption className="mt-3 font-mono text-[11px] leading-relaxed text-ink-muted">
          A recording as a trajectory through decoder state space.
        </figcaption>
      </figure>
    );
  }
  return null;
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const related = (project.related ?? [])
    .map((s) => getProject(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <article className="mx-auto max-w-6xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      {/* Header */}
      <header className="max-w-3xl">
        <Reveal>
          <p className="meta-label">
            <Link href="/work/" className="transition-colors hover:text-accent">
              Work
            </Link>{" "}
            <span className="text-ink-faint">/</span> {project.period} ·{" "}
            <span className="text-accent">{project.status}</span>
          </p>
        </Reveal>
        <Reveal delay={70}>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            {project.title}
          </h1>
        </Reveal>
        {project.subtitle && (
          <Reveal delay={130}>
            <p className="mt-4 font-editorial text-xl italic text-ink-muted sm:text-2xl">
              {project.subtitle}
            </p>
          </Reveal>
        )}
        <Reveal delay={190}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-secondary">
            {project.tagline}
          </p>
        </Reveal>
      </header>

      <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,1.9fr)_minmax(0,1fr)]">
        {/* Body */}
        <div>
          {project.sections.map((section, si) => (
            <Reveal key={section.heading} as="section" className="mb-12">
              <h2 className="flex items-baseline gap-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink">
                <span className="font-mono text-[11px] font-normal text-ink-faint">
                  0{si + 1}
                </span>
                {section.heading}
              </h2>
              <span className="draw-line mt-3 block h-px w-full bg-line" />
              <div className="mt-5 space-y-4">
                {section.body.map((para, pi) => (
                  <p key={pi} className="text-[15.5px] leading-[1.8] text-ink-secondary">
                    {para}
                  </p>
                ))}
              </div>
              <SectionFigure slug={project.slug} heading={section.heading} />
            </Reveal>
          ))}

          {project.image && project.slug !== "tribe" && (
            <Reveal>
              <figure className="mb-12">
                <div className="overflow-hidden rounded-xl border border-line">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    width={1600}
                    height={952}
                    className="w-full"
                  />
                </div>
                {project.image.caption && (
                  <figcaption className="mt-3 font-mono text-[11px] text-ink-muted">
                    {project.image.caption}
                  </figcaption>
                )}
              </figure>
            </Reveal>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Reveal delay={150}>
            <div className="rounded-xl border border-line bg-paper-sunken/60 p-6">
              <dl className="space-y-5">
                {project.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="meta-label">{fact.label}</dt>
                    <dd className="mt-1.5 text-[14px] font-medium text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              {project.links.length > 0 && (
                <div className="mt-7 space-y-2.5 border-t border-line pt-6">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-lg border border-line bg-paper px-4 py-2.5 text-[13.5px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                    >
                      {link.label}
                      <span className="text-ink-faint transition-colors group-hover:text-accent">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {related.length > 0 && (
              <div className="mt-6 rounded-xl border border-line p-6">
                <p className="meta-label">Related</p>
                <ul className="mt-4 space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/work/${r.slug}/`} className="group block">
                        <span className="text-[14px] font-medium text-ink transition-colors group-hover:text-accent">
                          {r.title}
                        </span>
                        <span className="block text-[12px] text-ink-muted">{r.tagline}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
        </aside>
      </div>

      {/* Next project */}
      <Reveal>
        <Link
          href={`/work/${next.slug}/`}
          className="group mt-8 flex items-baseline justify-between border-t border-line pt-8"
        >
          <span className="meta-label">Next project</span>
          <span className="arrow-link flex items-baseline gap-3 text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent sm:text-2xl">
            {next.title} <span className="arrow">→</span>
          </span>
        </Link>
      </Reveal>
    </article>
  );
}
