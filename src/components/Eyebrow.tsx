/** Mono section label with index number, e.g. "01 — Research". */
export function Eyebrow({ index, children }: { index?: string; children: React.ReactNode }) {
  return (
    <p className="meta-label flex items-baseline gap-3">
      {index && <span className="text-ink-faint">{index}</span>}
      <span>{children}</span>
    </p>
  );
}
