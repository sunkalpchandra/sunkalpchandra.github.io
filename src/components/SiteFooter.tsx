import { site } from "@/data/site";
import { LocalTime } from "@/components/LocalTime";

const contactLinks = [
  { label: "Email", href: `mailto:${site.email}`, meta: site.email },
  { label: "GitHub", href: site.links.github, meta: "sunkalpchandra" },
  { label: "LinkedIn", href: site.links.linkedin, meta: "in/sunkalp" },
  { label: "Google Scholar", href: site.links.scholar, meta: "citations" },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-line bg-paper-sunken/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="meta-label">Contact</p>
        <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Interested in building something{" "}
          <em className="font-editorial font-medium not-italic italic text-accent">strange?</em>
        </h2>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-secondary">
          I read everything sent to my inbox — especially ideas at the odd intersections: neural
          decoding, foundation models for biology, hardware that shouldn&apos;t work but does.
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((link) => (
            <li key={link.label} className="bg-paper">
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-6 p-5 transition-colors hover:bg-accent-soft"
              >
                <span className="flex items-center justify-between text-[13.5px] font-medium text-ink">
                  {link.label}
                  <span className="arrow text-ink-faint transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent">
                    ↗
                  </span>
                </span>
                <span className="font-mono text-[11px] text-ink-muted">{link.meta}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Sunkalp Chandra · <LocalTime />
          </p>
          <p className="normal-case tracking-normal">
            Somewhere between a lab notebook and a startup.
          </p>
        </div>
      </div>
    </footer>
  );
}
