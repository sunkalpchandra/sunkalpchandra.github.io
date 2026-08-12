import Link from "next/link";
import { currently } from "@/data/currently";
import { Reveal } from "@/components/Reveal";

export function CurrentlyStrip() {
  return (
    <section aria-label="Currently" className="border-y border-line bg-paper-sunken/50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-line px-5 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-8 lg:grid-cols-4">
        {currently.map((item, i) => {
          const inner = (
            <>
              <p className="meta-label">{item.label}</p>
              <p className="mt-3 text-[15px] font-medium leading-snug text-ink">{item.value}</p>
              <p className="mt-1 text-[13px] text-ink-muted">{item.detail}</p>
            </>
          );
          return (
            <Reveal key={item.label} delay={i * 70} className="h-full">
              {"href" in item && item.href ? (
                <Link
                  href={item.href}
                  className="block h-full px-1 py-6 transition-colors hover:bg-accent-soft/60 sm:px-6 sm:py-7"
                >
                  {inner}
                </Link>
              ) : (
                <div className="h-full px-1 py-6 sm:px-6 sm:py-7">{inner}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
