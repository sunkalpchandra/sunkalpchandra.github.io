export type TimelineYear = {
  year: string;
  events: { title: string; note: string; href?: string }[];
};

/** Compact trajectory timeline for the homepage. Newest last (rendered as a climb). */
export const timeline: TimelineYear[] = [
  {
    year: "2023",
    events: [{ title: "Jdable", note: "co-founded assistive-tech company", href: "/work/jdable/" }],
  },
  {
    year: "2024",
    events: [
      { title: "Harvard Medical School × MGH", note: "ophthalmic & surgical AI research", href: "/experience/" },
      { title: "Reteena", note: "co-founded applied AI lab", href: "/work/remembrance/" },
    ],
  },
  {
    year: "2025",
    events: [
      { title: "Memorial Sloan Kettering", note: "graph learning for cancer genomics", href: "/experience/" },
      { title: "Pure Storage", note: "ML on infrastructure telemetry", href: "/experience/" },
      { title: "Xyla Engineering", note: "founding — maritime biofactories", href: "/work/xyla/" },
      { title: "Lark", note: "NeurIPS 2025 workshop paper", href: "/work/lark/" },
    ],
  },
  {
    year: "2026",
    events: [
      { title: "NVIDIA", note: "Holoscan — real-time sensor pipelines", href: "/experience/" },
      { title: "Contrary", note: "research fellow", href: "/experience/" },
      { title: "NeuroLoom", note: "ICLR 2026 workshop paper", href: "/work/neuroloom/" },
      { title: "UT Austin", note: "CS honors + neuroscience", href: "/about/" },
      { title: "TRIDENT", note: "personalized neural decoding", href: "/work/trident/" },
    ],
  },
];
