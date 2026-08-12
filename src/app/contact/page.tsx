import type { Metadata } from "next";
import { site } from "@/data/site";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sunkalp Chandra.",
};

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "best for anything substantive",
  },
  {
    label: "GitHub",
    value: "sunkalpchandra",
    href: site.links.github,
    note: "where the code lives",
  },
  {
    label: "LinkedIn",
    value: "in/sunkalp",
    href: site.links.linkedin,
    note: "the professional record",
  },
  {
    label: "Google Scholar",
    value: "citations",
    href: site.links.scholar,
    note: "the papers",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <Reveal>
        <Eyebrow>Contact</Eyebrow>
      </Reveal>
      <Reveal delay={70}>
        <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Interested in building something{" "}
          <em className="font-editorial font-medium italic text-accent">strange?</em>
        </h1>
      </Reveal>
      <Reveal delay={140}>
        <p className="mt-6 max-w-xl text-[15.5px] leading-relaxed text-ink-secondary">
          Research collaborations, unusual engineering problems, early-stage ideas that need a
          technical cofounder&apos;s skepticism — I read all of it. If it involves brains, models,
          or hardware in unreasonable places, I&apos;ll probably reply too fast.
        </p>
      </Reveal>

      <div className="mt-14 border-t border-line">
        {channels.map((c, i) => (
          <Reveal key={c.label} delay={i * 60}>
            <a
              href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-6 border-b border-line py-6"
            >
              <span className="w-32 text-[15px] font-medium text-ink transition-colors group-hover:text-accent sm:w-40">
                {c.label}
              </span>
              <span className="min-w-0">
                <span className="block truncate font-mono text-[13px] text-ink-secondary">
                  {c.value}
                </span>
                <span className="mt-0.5 block text-[12.5px] text-ink-muted">{c.note}</span>
              </span>
              <span className="arrow text-ink-faint transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent">
                →
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
