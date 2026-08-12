"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/data/site";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation and lock body scroll while open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          href="/"
          className="group flex items-baseline gap-2.5 text-[15px] font-semibold tracking-tight text-ink"
        >
          Sunkalp Chandra
          <span className="hidden items-center gap-1.5 font-mono text-[10px] font-normal uppercase tracking-[0.14em] text-ink-muted sm:flex">
            <span
              className="h-[5px] w-[5px] rounded-full bg-ok motion-safe:animate-pulse"
              aria-hidden
            />
            currently building
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-full px-3.5 py-1.5 text-[13.5px] transition-colors ${
                isActive(item.href)
                  ? "text-ink font-medium"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/cv/"
            className="ml-2 rounded-full border border-line-strong px-3.5 py-1.5 text-[13.5px] text-ink-secondary transition-colors hover:border-accent hover:text-accent"
          >
            CV
          </Link>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full text-ink"
          >
            <span
              className={`h-px w-[18px] bg-current transition-transform duration-200 ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-[18px] bg-current transition-transform duration-200 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-line bg-paper`}
      >
        <div className="flex h-[calc(100dvh-4rem)] flex-col px-5 pb-10 pt-6">
          <div className="flex flex-col gap-1">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-baseline justify-between border-b border-line py-4 text-2xl font-medium tracking-tight text-ink"
              >
                {item.label}
                <span className="font-mono text-[11px] text-ink-faint">0{i + 1}</span>
              </Link>
            ))}
            <Link
              href="/cv/"
              className="flex items-baseline justify-between border-b border-line py-4 text-2xl font-medium tracking-tight text-ink"
            >
              CV
              <span className="font-mono text-[11px] text-ink-faint">0{nav.length + 1}</span>
            </Link>
          </div>
          <p className="mt-auto font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
            Austin, TX · CS × Neuroscience
          </p>
        </div>
      </div>
    </header>
  );
}
