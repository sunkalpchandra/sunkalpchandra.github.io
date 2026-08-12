import Link from "next/link";
import { timeline } from "@/data/timeline";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

/**
 * The trajectory: a vertical climb from 2023 to now.
 * The point is the shape — each year, the problems get harder.
 */
export function Trajectory() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <Eyebrow index="05">Trajectory</Eyebrow>
        <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Moving toward harder problems.
        </h2>
      </Reveal>

      <div className="relative mt-16">
        {/* spine */}
        <span
          aria-hidden
          className="absolute bottom-2 left-[3px] top-2 w-px bg-line-strong sm:left-1/2"
        />
        <ol className="space-y-14">
          {timeline.map((yr, yi) => (
            <li key={yr.year} className="relative">
              <Reveal>
                <div
                  className={`sm:grid sm:grid-cols-2 sm:gap-16 ${
                    yi % 2 === 1 ? "sm:[direction:rtl]" : ""
                  }`}
                >
                  <div className="pl-8 sm:pl-0 sm:[direction:ltr]">
                    <div
                      className={`flex items-baseline gap-4 ${yi % 2 === 0 ? "sm:justify-end" : ""}`}
                    >
                      <span className="font-mono text-[13px] font-medium text-accent">
                        {yr.year}
                      </span>
                    </div>
                    <ul
                      className={`mt-4 space-y-3.5 ${yi % 2 === 0 ? "sm:text-right" : ""}`}
                    >
                      {yr.events.map((e) => (
                        <li key={e.title}>
                          {e.href ? (
                            <Link href={e.href} className="group inline-block">
                              <span className="block text-[15px] font-medium text-ink transition-colors group-hover:text-accent">
                                {e.title}
                              </span>
                              <span className="block text-[12.5px] text-ink-muted">{e.note}</span>
                            </Link>
                          ) : (
                            <>
                              <span className="block text-[15px] font-medium text-ink">
                                {e.title}
                              </span>
                              <span className="block text-[12.5px] text-ink-muted">{e.note}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* node */}
                <span
                  aria-hidden
                  className="absolute left-0 top-1 block h-[7px] w-[7px] rounded-full border border-accent bg-paper sm:left-1/2 sm:-translate-x-1/2"
                />
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
