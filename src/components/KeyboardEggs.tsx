"use client";

import { useEffect, useState } from "react";

const KONAMI = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

/**
 * Two quiet easter eggs:
 *  - press "r" → research mode: mono annotations appear across the site
 *  - the Konami code → a brief spike in the accent color, and a note
 * Neither interferes with normal use; typing in inputs is ignored.
 */
export function KeyboardEggs() {
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    let konamiIndex = 0;
    let toastTimer: number | undefined;

    const showToast = (msg: string) => {
      setToast(msg);
      window.clearTimeout(toastTimer);
      toastTimer = window.setTimeout(() => setToast(null), 3200);
    };

    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey
      ) {
        return;
      }

      // Konami
      if (e.key === KONAMI[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === KONAMI.length) {
          konamiIndex = 0;
          document.documentElement.classList.add("konami");
          showToast("// spike train detected. enjoy the violet phase.");
          window.setTimeout(
            () => document.documentElement.classList.remove("konami"),
            9000
          );
        }
      } else {
        konamiIndex = e.key === KONAMI[0] ? 1 : 0;
      }

      // Research mode
      if (e.key === "r" || e.key === "R") {
        const on = document.documentElement.classList.toggle("research-mode");
        showToast(on ? "// research mode: annotations visible. [R] to exit." : "// research mode off.");
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(toastTimer);
    };
  }, []);

  return (
    <div
      aria-live="polite"
      className={`pointer-events-none fixed bottom-5 left-5 z-[90] transition-all duration-300 ${
        toast ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      {toast && (
        <p className="rounded-lg border border-line bg-paper-raised px-4 py-2.5 font-mono text-[11.5px] text-ink-secondary shadow-sm">
          {toast}
        </p>
      )}
    </div>
  );
}
