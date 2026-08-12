import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70svh] max-w-4xl flex-col items-start justify-center px-5 pt-16 sm:px-8">
      <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-accent">404</p>
      <h1 className="mt-5 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
        This region of latent space is unmapped.
      </h1>
      <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-secondary">
        Whatever was supposed to be here either moved, never existed, or hasn&apos;t been decoded
        yet.
      </p>
      <Link
        href="/"
        className="arrow-link mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-medium text-paper transition-colors hover:bg-accent"
      >
        Back to known space <span className="arrow">→</span>
      </Link>
    </div>
  );
}
