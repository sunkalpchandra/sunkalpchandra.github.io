"use client";

import { useEffect, useRef } from "react";

type Cluster = {
  label: string;
  base: [number, number];
  drift: [number, number];
  phase: number;
  radius: number;
};

/** Normalized cluster layout (unit square), tuned for a right-side hero panel. */
const CLUSTERS: Cluster[] = [
  { label: "TRIDENT", base: [0.68, 0.26], drift: [0.05, 0.04], phase: 0.0, radius: 0.16 },
  { label: "TRIBE", base: [0.3, 0.38], drift: [0.04, 0.05], phase: 1.7, radius: 0.14 },
  { label: "NeuroLoom", base: [0.74, 0.66], drift: [0.045, 0.05], phase: 3.1, radius: 0.15 },
  { label: "BCI", base: [0.24, 0.76], drift: [0.05, 0.04], phase: 4.4, radius: 0.13 },
  { label: "representation learning", base: [0.5, 0.55], drift: [0.03, 0.03], phase: 5.6, radius: 0.12 },
];

const POINTS_PER_CLUSTER = 22;
const EDGE_DIST = 0.11;

type Pt = {
  cluster: number;
  // polar offset around the cluster center, evolving slowly
  r: number;
  a: number;
  spin: number;
  wobble: number;
  accent: boolean;
};

/**
 * A slowly evolving low-dimensional manifold: gaussian-ish clusters whose
 * centers drift, points orbiting them, hairline edges between neighbors.
 * Decorative — hidden from the accessibility tree. Static under
 * prefers-reduced-motion; paused when off-screen or the tab is hidden.
 */
export function NeuralManifold({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const labelEl = labelRef.current;
    if (!canvas || !labelEl) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Deterministic PRNG so the layout is stable across mounts
    let seed = 1234567;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    const pts: Pt[] = [];
    CLUSTERS.forEach((c, ci) => {
      for (let i = 0; i < POINTS_PER_CLUSTER; i++) {
        pts.push({
          cluster: ci,
          r: c.radius * (0.25 + 0.75 * Math.sqrt(rand())),
          a: rand() * Math.PI * 2,
          spin: (rand() - 0.5) * 0.12,
          wobble: rand() * Math.PI * 2,
          accent: rand() < 0.09,
        });
      }
    });

    let w = 0;
    let h = 0;
    let dpr = 1;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Theme-aware colors, re-read when the html class changes
    let colors = readColors();
    function readColors() {
      const s = getComputedStyle(document.documentElement);
      return {
        ink: s.getPropertyValue("--ink").trim() || "#1c1c21",
        accent: s.getPropertyValue("--accent").trim() || "#2d46c4",
        line: s.getPropertyValue("--line-strong").trim() || "#d4cfc2",
      };
    }
    const mo = new MutationObserver(() => {
      colors = readColors();
      if (reduced) draw(6);
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const mouse = { x: -1, y: -1, inside: false };
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.inside = true;
      if (reduced) draw(6);
    };
    const onLeave = () => {
      mouse.inside = false;
      if (reduced) draw(6);
    };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    const centerAt = (c: Cluster, t: number): [number, number] => [
      (c.base[0] + c.drift[0] * Math.sin(t * 0.13 + c.phase)) * w,
      (c.base[1] + c.drift[1] * Math.cos(t * 0.1 + c.phase * 1.3)) * h,
    ];

    const px: number[] = new Array(pts.length);
    const py: number[] = new Array(pts.length);

    function draw(t: number) {
      if (!ctx || !labelEl) return;
      ctx.clearRect(0, 0, w, h);
      const centers = CLUSTERS.map((c) => centerAt(c, t));

      // point positions
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const [cx, cy] = centers[p.cluster];
        const breathe = 1 + 0.16 * Math.sin(t * 0.22 + p.wobble);
        const a = p.a + t * p.spin;
        px[i] = cx + Math.cos(a) * p.r * breathe * Math.min(w, h);
        py[i] = cy + Math.sin(a) * p.r * breathe * Math.min(w, h) * 0.82;
      }

      // edges between near neighbors
      const maxD = EDGE_DIST * Math.min(w, h);
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = px[i] - px[j];
          const dy = py[i] - py[j];
          const d2 = dx * dx + dy * dy;
          if (d2 < maxD * maxD) {
            const alpha = 0.16 * (1 - Math.sqrt(d2) / maxD);
            ctx.strokeStyle = colors.line;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(px[i], py[i]);
            ctx.lineTo(px[j], py[j]);
            ctx.stroke();
          }
        }
      }

      // hover detection: nearest cluster center within radius
      let hovered = -1;
      if (mouse.inside) {
        let best = 9999;
        centers.forEach(([cx, cy], ci) => {
          const d = Math.hypot(mouse.x - cx, mouse.y - cy);
          const r = CLUSTERS[ci].radius * Math.min(w, h) * 1.5;
          if (d < r && d < best) {
            best = d;
            hovered = ci;
          }
        });
      }

      // points
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const isHovered = hovered === p.cluster;
        ctx.globalAlpha = isHovered ? 0.9 : p.accent ? 0.75 : 0.38;
        ctx.fillStyle = p.accent || isHovered ? colors.accent : colors.ink;
        const size = p.accent ? 2.1 : 1.6;
        ctx.beginPath();
        ctx.arc(px[i], py[i], isHovered ? size + 0.6 : size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // label overlay (imperative — no react re-render per frame)
      if (hovered >= 0) {
        const [cx, cy] = centers[hovered];
        labelEl.textContent = CLUSTERS[hovered].label;
        labelEl.style.opacity = "1";
        labelEl.style.transform = `translate(${Math.round(cx)}px, ${Math.round(cy - CLUSTERS[hovered].radius * Math.min(w, h) - 18)}px) translateX(-50%)`;
      } else {
        labelEl.style.opacity = "0";
      }
    }

    if (reduced) {
      draw(6);
      // keep static, but still redraw on resize
      const staticRO = new ResizeObserver(() => draw(6));
      staticRO.observe(canvas);
      return () => {
        staticRO.disconnect();
        ro.disconnect();
        mo.disconnect();
        canvas.removeEventListener("pointermove", onMove);
        canvas.removeEventListener("pointerleave", onLeave);
      };
    }

    let raf = 0;
    let running = false;
    let last = performance.now();
    let t = 0;
    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      t += dt;
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (!running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()), {
      threshold: 0.05,
    });
    io.observe(canvas);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      mo.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full" />
      <div
        ref={labelRef}
        className="pointer-events-none absolute left-0 top-0 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.16em] text-accent opacity-0 transition-opacity duration-200"
      />
    </div>
  );
}
