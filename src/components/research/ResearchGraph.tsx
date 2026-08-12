"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Domain = { id: string; label: string; x: number; y: number };
type ProjectNode = { slug: string; label: string; x: number; y: number; domains: string[] };

const DOMAINS: Domain[] = [
  { id: "neuro", label: "Neuroscience", x: 300, y: 150 },
  { id: "ai", label: "AI", x: 560, y: 130 },
  { id: "bci", label: "BCI", x: 430, y: 262 },
  { id: "medical", label: "Medical AI", x: 180, y: 330 },
  { id: "systems", label: "Systems", x: 700, y: 300 },
  { id: "hardware", label: "Hardware", x: 620, y: 445 },
  { id: "startups", label: "Startups", x: 380, y: 452 },
];

const PROJECTS: ProjectNode[] = [
  { slug: "trident", label: "TRIDENT", x: 432, y: 186, domains: ["bci", "ai", "neuro"] },
  { slug: "tribe", label: "TRIBE", x: 425, y: 88, domains: ["neuro", "ai"] },
  { slug: "neuroloom", label: "NeuroLoom", x: 512, y: 218, domains: ["neuro", "systems"] },
  { slug: "neuroforge", label: "NeuroForge", x: 662, y: 196, domains: ["neuro", "systems"] },
  { slug: "lark", label: "Lark", x: 505, y: 352, domains: ["ai", "startups"] },
  { slug: "remembrance", label: "Remembrance", x: 282, y: 352, domains: ["medical", "ai", "startups"] },
  { slug: "jdable", label: "Jdable", x: 248, y: 432, domains: ["hardware", "medical", "startups"] },
  { slug: "xyla", label: "Xyla", x: 568, y: 392, domains: ["hardware", "startups", "systems"] },
];

type Active = { type: "domain" | "project"; id: string } | null;

/**
 * A 2D map of the work: domains as anchors, projects as the nodes that
 * connect them. Hover or focus highlights connections; tapping a domain
 * pins it and lists its projects below (which is also the touch/keyboard path).
 */
export function ResearchGraph() {
  const [hover, setHover] = useState<Active>(null);
  const [pinned, setPinned] = useState<Active>(null);
  const active = hover ?? pinned;

  const activeProjects = useMemo(() => {
    if (!active) return new Set<string>();
    if (active.type === "project") return new Set([active.id]);
    return new Set(PROJECTS.filter((p) => p.domains.includes(active.id)).map((p) => p.slug));
  }, [active]);

  const activeDomains = useMemo(() => {
    if (!active) return new Set<string>();
    if (active.type === "domain") return new Set([active.id]);
    return new Set(PROJECTS.find((p) => p.slug === active.id)?.domains ?? []);
  }, [active]);

  const dim = (isActive: boolean) => (active ? (isActive ? 1 : 0.14) : 1);
  const pinnedDomain = pinned?.type === "domain" ? DOMAINS.find((d) => d.id === pinned.id) : null;
  const pinnedProjects = pinnedDomain
    ? PROJECTS.filter((p) => p.domains.includes(pinnedDomain.id))
    : [];

  return (
    <div>
      <div className="overflow-x-auto rounded-xl border border-line bg-paper-raised">
        <svg
          viewBox="0 0 900 520"
          className="min-w-[640px]"
          role="group"
          aria-label="Map of research domains and the projects connecting them"
        >
          {/* edges */}
          <g>
            {PROJECTS.flatMap((p) =>
              p.domains.map((d) => {
                const dom = DOMAINS.find((x) => x.id === d)!;
                const isActive = activeProjects.has(p.slug) && (active?.type === "project" ? true : activeDomains.has(d) || active?.type === "domain");
                return (
                  <line
                    key={`${p.slug}-${d}`}
                    x1={p.x}
                    y1={p.y}
                    x2={dom.x}
                    y2={dom.y}
                    stroke={isActive && active ? "var(--accent)" : "var(--line-strong)"}
                    strokeWidth={isActive && active ? 1.4 : 1}
                    opacity={active ? (isActive ? 0.9 : 0.08) : 0.4}
                    style={{ transition: "opacity 250ms ease, stroke 250ms ease" }}
                  />
                );
              })
            )}
          </g>

          {/* project nodes */}
          {PROJECTS.map((p) => {
            const isActive = activeProjects.has(p.slug);
            return (
              <Link key={p.slug} href={`/work/${p.slug}/`} aria-label={`${p.label} project page`}>
                <g
                  onMouseEnter={() => setHover({ type: "project", id: p.slug })}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover({ type: "project", id: p.slug })}
                  onBlur={() => setHover(null)}
                  style={{ opacity: dim(isActive), transition: "opacity 250ms ease", cursor: "pointer" }}
                >
                  <circle cx={p.x} cy={p.y} r={isActive ? 6.5 : 5} fill="var(--accent)" style={{ transition: "r 200ms ease" }} />
                  <circle cx={p.x} cy={p.y} r={11} fill="none" stroke="var(--accent)" strokeWidth="1" opacity={isActive ? 0.5 : 0} style={{ transition: "opacity 200ms ease" }} />
                  <text
                    x={p.x}
                    y={p.y - 14}
                    textAnchor="middle"
                    fontFamily="var(--font-plex-mono)"
                    fontSize="11"
                    fill={isActive && active ? "var(--accent)" : "var(--ink-secondary)"}
                    letterSpacing="0.5"
                  >
                    {p.label}
                  </text>
                </g>
              </Link>
            );
          })}

          {/* domain nodes */}
          {DOMAINS.map((d) => {
            const isActive = activeDomains.has(d.id);
            const isPinned = pinned?.type === "domain" && pinned.id === d.id;
            return (
              <g
                key={d.id}
                role="button"
                tabIndex={0}
                aria-pressed={isPinned}
                aria-label={`${d.label}: highlight related projects`}
                onMouseEnter={() => setHover({ type: "domain", id: d.id })}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover({ type: "domain", id: d.id })}
                onBlur={() => setHover(null)}
                onClick={() => setPinned(isPinned ? null : { type: "domain", id: d.id })}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setPinned(isPinned ? null : { type: "domain", id: d.id });
                  }
                }}
                style={{ opacity: dim(isActive), transition: "opacity 250ms ease", cursor: "pointer", outline: "none" }}
              >
                <circle
                  cx={d.x}
                  cy={d.y}
                  r="17"
                  fill="var(--paper)"
                  stroke={isActive && active ? "var(--accent)" : isPinned ? "var(--accent)" : "var(--ink)"}
                  strokeWidth={isPinned ? 1.8 : 1.2}
                />
                <circle cx={d.x} cy={d.y} r="4" fill={isActive && active ? "var(--accent)" : "var(--ink)"} />
                <text
                  x={d.x}
                  y={d.y + 36}
                  textAnchor="middle"
                  fontFamily="var(--font-plex-mono)"
                  fontSize="11.5"
                  fontWeight="500"
                  fill="var(--ink)"
                  letterSpacing="1.2"
                  style={{ textTransform: "uppercase" }}
                >
                  {d.label.toUpperCase()}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* pinned detail panel — the touch & screen-reader friendly path */}
      <div aria-live="polite">
        {pinnedDomain && (
          <div className="mt-4 rounded-xl border border-line bg-paper-sunken/60 p-5">
            <div className="flex items-baseline justify-between">
              <p className="meta-label text-accent">{pinnedDomain.label}</p>
              <button
                type="button"
                onClick={() => setPinned(null)}
                className="font-mono text-[11px] text-ink-muted transition-colors hover:text-ink"
              >
                clear ×
              </button>
            </div>
            <ul className="mt-3 flex flex-wrap gap-2.5">
              {pinnedProjects.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/work/${p.slug}/`}
                    className="inline-block rounded-full border border-line bg-paper px-3.5 py-1.5 text-[13px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    {p.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <p className="mt-3 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-faint">
        Hover to trace connections · click a domain to pin it
      </p>
    </div>
  );
}
