export type Publication = {
  year: number;
  title: string;
  /** Full author list in publication order. Omitted when not verifiable. */
  authors?: string[];
  venue: string;
  /** Honest status label: what this actually is. */
  kind: "workshop" | "conference" | "preprint";
  links: { label: string; href: string }[];
  highlight?: boolean;
};

/**
 * Verified against Semantic Scholar / arXiv / IEEE DOIs.
 * Never add an entry here without a resolvable link.
 */
export const publications: Publication[] = [
  {
    year: 2026,
    title:
      "NeuroLoom: A Framework for Reproducible Cortical Microcircuit Modeling with Spiking Neural Networks",
    venue: "ICLR 2026 Workshop on Foundation Models for Science (FM4Science)",
    kind: "workshop",
    links: [{ label: "Code", href: "https://github.com/Reteena/NeuroLoom" }],
    highlight: true,
  },
  {
    year: 2025,
    title: "Lark: Biologically Inspired Neuroevolution for Multi-Stakeholder LLM Agents",
    authors: ["Rikhil Tanugula", "Dheeraj Chintapalli", "Sunkalp Chandra"],
    venue: "NeurIPS 2025 Workshop on Efficient Reasoning",
    kind: "workshop",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2510.16978" }],
    highlight: true,
  },
  {
    year: 2025,
    title:
      "GeneAttentionNet: An Attention-Based Architecture for Interpretable Gene Expression Classification on Alzheimer's Disease",
    authors: ["Sunkalp Chandra", "Gautham Korrapati", "Subhadra Vadlamannati"],
    venue: "2025 IEEE MIT Undergraduate Research Technology Conference (URTC)",
    kind: "conference",
    links: [{ label: "DOI", href: "https://doi.org/10.1109/URTC68753.2025.11533066" }],
  },
  {
    year: 2025,
    title:
      "A Computer Vision and Depth Sensor-Powered Smart Cane for Real-Time Obstacle Detection and Navigation Assistance for the Visually Impaired",
    authors: ["Sunkalp Chandra", "Umang Sharma", "Devesh Khilnani"],
    venue: "2025 IEEE MIT Undergraduate Research Technology Conference (URTC)",
    kind: "conference",
    links: [
      { label: "DOI", href: "https://doi.org/10.1109/URTC68753.2025.11533072" },
      { label: "arXiv", href: "https://arxiv.org/abs/2508.16698" },
    ],
  },
  {
    year: 2025,
    title:
      "Enhanced Predictive Modeling for Hazardous Near-Earth Object Detection: A Comparative Analysis of Advanced Resampling Strategies and Machine Learning Algorithms in Planetary Risk Assessment",
    authors: ["Sunkalp Chandra"],
    venue: "arXiv preprint",
    kind: "preprint",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2508.15106" }],
  },
];

export const kindLabel: Record<Publication["kind"], string> = {
  workshop: "Workshop paper",
  conference: "Conference paper",
  preprint: "Preprint",
};
