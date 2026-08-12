import type { Metadata } from "next";
import Link from "next/link";
import { getAllNotes, formatDate } from "@/lib/notes";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes by Sunkalp Chandra — research notes, technical ideas, project logs, and paper breakdowns.",
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <header>
        <Reveal>
          <Eyebrow>Writing</Eyebrow>
        </Reveal>
        <Reveal delay={70}>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Notes
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-secondary">
            Research notes, technical ideas, and things I&apos;m thinking about. Infrequent by
            design — I&apos;d rather ship the thing than write about shipping the thing.
          </p>
        </Reveal>
      </header>

      <div className="mt-14 border-t border-line">
        {notes.length === 0 ? (
          <p className="py-10 font-mono text-[13px] text-ink-muted">
            Nothing here yet. The infrastructure is ready; the writing is coming.
          </p>
        ) : (
          notes.map((note, i) => (
            <Reveal key={note.slug} delay={i * 60}>
              <Link
                href={`/notes/${note.slug}/`}
                className="group grid grid-cols-1 gap-x-8 gap-y-1.5 border-b border-line py-7 sm:grid-cols-[auto_1fr]"
              >
                <time className="w-32 font-mono text-[11.5px] text-ink-faint" dateTime={note.date}>
                  {formatDate(note.date)}
                </time>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent">
                    {note.title}
                  </h2>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">
                    {note.summary}
                  </p>
                  {note.tags.length > 0 && (
                    <p className="mt-2.5 flex gap-2">
                      {note.tags.map((t) => (
                        <span key={t} className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-faint">
                          #{t}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              </Link>
            </Reveal>
          ))
        )}
      </div>
    </div>
  );
}
