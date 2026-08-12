"use client";

import Link from "next/link";
import { useState } from "react";
import { experience } from "@/data/experience";
import { getProject } from "@/data/projects";

const kindLabels: Record<string, string> = {
  engineering: "Engineering",
  research: "Research",
  founding: "Founding",
};

/**
 * Editorial experience timeline: each entry expands in place to show what
 * the work actually was, its technical themes, and related projects.
 */
export function ExperienceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {experience.map((e, i) => {
        const open = openIndex === i;
        const related = (e.relatedProjects ?? [])
          .map((s) => getProject(s))
          .filter((p): p is NonNullable<typeof p> => Boolean(p));

        return (
          <div key={e.org} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              aria-controls={`exp-${i}`}
              className="group grid w-full grid-cols-[auto_1fr_auto] items-baseline gap-x-5 py-6 text-left sm:gap-x-8"
            >
              <span className="w-20 font-mono text-[11.5px] text-ink-faint sm:w-24">
                {e.period}
              </span>
              <span>
                <span
                  className={`block text-lg font-semibold tracking-tight transition-colors sm:text-xl ${
                    open ? "text-accent" : "text-ink group-hover:text-accent"
                  }`}
                >
                  {e.org}
                </span>
                <span className="mt-0.5 block text-[13px] text-ink-muted">{e.role}</span>
              </span>
              <span className="flex items-center gap-3">
                <span className="hidden rounded-full border border-line px-2.5 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-muted sm:block">
                  {kindLabels[e.kind]}
                </span>
                <span
                  aria-hidden
                  className={`font-mono text-sm text-ink-faint transition-transform duration-300 ${
                    open ? "rotate-45 text-accent" : ""
                  }`}
                >
                  +
                </span>
              </span>
            </button>

            <div
              id={`exp-${i}`}
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className="grid gap-8 pb-8 pl-0 sm:pl-[7rem] lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
                  <div className="space-y-3.5">
                    {e.detail.map((para, pi) => (
                      <p key={pi} className="text-[14.5px] leading-[1.75] text-ink-secondary">
                        {para}
                      </p>
                    ))}
                    {e.links && e.links.length > 0 && (
                      <p className="flex gap-4 pt-1">
                        {e.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[12px] text-accent transition-opacity hover:opacity-70"
                          >
                            [{l.label} ↗]
                          </a>
                        ))}
                      </p>
                    )}
                  </div>
                  <div>
                    <p className="meta-label">Themes</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {e.themes.map((t) => (
                        <li
                          key={t}
                          className="rounded-full bg-paper-sunken px-3 py-1 text-[12px] text-ink-secondary"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    {related.length > 0 && (
                      <>
                        <p className="meta-label mt-6">Related work</p>
                        <ul className="mt-3 space-y-1.5">
                          {related.map((r) => (
                            <li key={r.slug}>
                              <Link
                                href={`/work/${r.slug}/`}
                                className="arrow-link inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink transition-colors hover:text-accent"
                              >
                                {r.title} <span className="arrow">→</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
