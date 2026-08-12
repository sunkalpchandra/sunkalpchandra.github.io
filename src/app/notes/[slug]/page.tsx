import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllNotes, getNote, formatDate } from "@/lib/notes";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return getAllNotes().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return {};
  return { title: note.title, description: note.summary };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
      <Reveal>
        <p className="meta-label">
          <Link href="/notes/" className="transition-colors hover:text-accent">
            Writing
          </Link>{" "}
          <span className="text-ink-faint">/</span>{" "}
          <time dateTime={note.date}>{formatDate(note.date)}</time>
        </p>
      </Reveal>
      <Reveal delay={70}>
        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
          {note.title}
        </h1>
      </Reveal>
      {note.summary && (
        <Reveal delay={130}>
          <p className="mt-5 font-editorial text-xl italic leading-relaxed text-ink-muted">
            {note.summary}
          </p>
        </Reveal>
      )}
      <Reveal delay={190}>
        <div
          className="prose-site mt-12 border-t border-line pt-10"
          dangerouslySetInnerHTML={{ __html: note.html }}
        />
      </Reveal>
    </article>
  );
}
