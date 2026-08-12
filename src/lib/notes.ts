import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const NOTES_DIR = path.join(process.cwd(), "content", "notes");

export type NoteMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

export type Note = NoteMeta & { html: string };

/**
 * Notes are plain Markdown files in content/notes/.
 * To publish one: add `my-note.md` with title/date/summary frontmatter. That's it.
 */
export function getAllNotes(): NoteMeta[] {
  if (!fs.existsSync(NOTES_DIR)) return [];
  return fs
    .readdirSync(NOTES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { data } = matter(fs.readFileSync(path.join(NOTES_DIR, file), "utf8"));
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        summary: data.summary ?? "",
        tags: data.tags ?? [],
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNote(slug: string): Note | null {
  const file = path.join(NOTES_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    summary: data.summary ?? "",
    tags: data.tags ?? [],
    html: marked.parse(content, { async: false }),
  };
}

export function formatDate(date: string): string {
  if (!date) return "";
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
