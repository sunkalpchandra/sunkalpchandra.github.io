export type Experience = {
  org: string;
  role: string;
  period: string;
  kind: "engineering" | "research" | "founding";
  /** Expanded detail shown on click. */
  detail: string[];
  themes: string[];
  links?: { label: string; href: string }[];
  relatedProjects?: string[];
};

export const experience: Experience[] = [
  {
    org: "NVIDIA",
    role: "Software Engineering Intern — Holoscan",
    period: "2026",
    kind: "engineering",
    detail: [
      "Software engineering on the Holoscan team — NVIDIA's SDK for building real-time, low-latency sensor processing pipelines at the edge, used in domains like medical devices and scientific instruments.",
      "Work sits at the systems end of my interests: the infrastructure that real-time AI applications actually run on.",
    ],
    themes: ["Real-time systems", "GPU computing", "Infrastructure"],
    links: [{ label: "Holoscan SDK", href: "https://developer.nvidia.com/holoscan-sdk" }],
  },
  {
    org: "Contrary",
    role: "Research Fellow",
    period: "2026 —",
    kind: "research",
    detail: [
      "Research fellowship with Contrary, studying emerging technology and the companies being built on it — the analytical side of the startup world I otherwise participate in as a builder.",
    ],
    themes: ["Technology research", "Startups"],
    links: [{ label: "contrary.com", href: "https://contrary.com" }],
  },
  {
    org: "Harvard Medical School × Mass General",
    role: "Researcher",
    period: "2024 — 2026",
    kind: "research",
    detail: [
      "Research on ophthalmic foundation models and AI-guided surgical systems — applying computer vision and representation learning to ophthalmology and the operating room.",
      "A central project involved surgical video understanding and retrieval: making the visual record of surgery searchable and analyzable at scale.",
    ],
    themes: ["Medical AI", "Foundation models", "Computer vision", "Surgical AI"],
  },
  {
    org: "Pure Storage",
    role: "Software Engineering Intern",
    period: "2025 — 2026",
    kind: "engineering",
    detail: [
      "Machine learning on infrastructure telemetry: modeling systems data from storage fleets and predicting EHR workload latency — ML applied to the operational reality of large storage systems.",
    ],
    themes: ["Infrastructure telemetry", "Latency prediction", "ML for systems"],
  },
  {
    org: "Memorial Sloan Kettering",
    role: "Research Intern",
    period: "2025",
    kind: "research",
    detail: [
      "Computational cancer research: stage-specific molecular network rewiring and graph representation learning — studying how molecular interaction networks reorganize as cancer progresses.",
    ],
    themes: ["Graph learning", "Computational biology", "Cancer genomics"],
  },
  {
    org: "Xyla Engineering",
    role: "Founder",
    period: "2025 —",
    kind: "founding",
    detail: [
      "Founding an engineering company around deployable biofactories for maritime environments — physical systems built to survive the ocean.",
    ],
    themes: ["Hardware", "Bioengineering", "Maritime systems"],
    links: [{ label: "xyla.space", href: "https://xyla.space" }],
    relatedProjects: ["xyla"],
  },
  {
    org: "Reteena",
    role: "Co-founder",
    period: "2024 —",
    kind: "founding",
    detail: [
      "Co-founded an applied AI lab for neurodegenerative diagnostics: Remembrance (AI reminiscence therapy for Alzheimer's patients, with initial patient trials supported by Johns Hopkins' Pava Center), TRIDENT (adaptive brain-computer interfacing), NeuroLoom, and GeneAttentionNet.",
    ],
    themes: ["Medical AI", "Neurotechnology", "Knowledge graphs"],
    links: [{ label: "reteena.org", href: "https://reteena.org" }],
    relatedProjects: ["remembrance", "trident", "neuroloom"],
  },
  {
    org: "Jdable",
    role: "CTO & Co-founder",
    period: "2023 — 2026",
    kind: "founding",
    detail: [
      "Co-founded and led engineering for a grant-funded assistive-technology company — my first experience taking technology from prototype to something real users depend on.",
    ],
    themes: ["Assistive technology", "Accessibility", "Hardware"],
    relatedProjects: ["jdable"],
  },
];

/** Earlier research affiliations, listed compactly (no verified date ranges). */
export const earlierResearch = [
  {
    org: "Princeton Neuroscience Institute",
    focus: "Drosophila connectome mapping & computational neural circuit analysis",
  },
  {
    org: "Columbia University (BME)",
    focus: "Neural encoding of visual information & working memory dynamics",
  },
];

/** Fellowships & programs. */
export const programs = ["Contrary", "FR8 Cohort 1.0", "f.inc (off-season)", "The Residency"];
