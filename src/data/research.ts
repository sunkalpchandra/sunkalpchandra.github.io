export type ResearchTheme = {
  id: string;
  title: string;
  question: string;
  blurb: string;
  projects: { title: string; href: string; note: string }[];
};

export const researchThemes: ResearchTheme[] = [
  {
    id: "neural-computation",
    title: "Neural Computation",
    question: "Can we read intent from a living brain, reliably, for one specific person?",
    blurb:
      "Neural decoding, brain-computer interfaces, and the representations that make them work. The through-line is personalization: treating the individual brain as the unit of modeling rather than the cohort average.",
    projects: [
      { title: "TRIDENT", href: "/work/trident/", note: "personalized neural decoding platform" },
      {
        title: "Neural foundation models",
        href: "/work/tribe/",
        note: "latent structure of fMRI encoders",
      },
    ],
  },
  {
    id: "machine-intelligence",
    title: "Machine Intelligence",
    question: "What structures make groups of models smarter than one?",
    blurb:
      "Representation learning, multi-agent systems, and reasoning. I'm most interested in mechanisms borrowed from biology — evolution, plasticity, specialization — applied to systems of language models.",
    projects: [
      { title: "Lark", href: "/work/lark/", note: "neuroevolution for multi-stakeholder LLM agents" },
      {
        title: "TRIDENT (teacher system)",
        href: "/work/trident/",
        note: "multi-agent neural interpretation",
      },
    ],
  },
  {
    id: "computational-neuroscience",
    title: "Computational Neuroscience",
    question: "What dynamics does real cortical tissue produce — and can we reproduce them?",
    blurb:
      "Mechanistic modeling: spiking networks, cortical microcircuits, neural dynamics, and the geometry of biological representations. This is the ground truth my decoding work has to answer to.",
    projects: [
      { title: "NeuroLoom", href: "/work/neuroloom/", note: "spiking cortical microcircuits, validated in-vivo" },
      { title: "NeuroForge", href: "/work/neuroforge/", note: "browser-native neural circuit CAD" },
      {
        title: "Gauge Neural Dynamics",
        href: "https://github.com/sunkalpchandra/gauge-neural-dynamics",
        note: "context-dependent coordinate systems in neural representations",
      },
    ],
  },
  {
    id: "scientific-ai",
    title: "Scientific AI",
    question: "Where does machine learning actually change what medicine and science can do?",
    blurb:
      "ML applied to medicine and biology: surgical video understanding, gene-expression classification, molecular network rewiring, reaction-diffusion dynamics. Applied work with a research spine.",
    projects: [
      { title: "Reteena / Remembrance", href: "/work/remembrance/", note: "AI for Alzheimer's care" },
      {
        title: "GeneAttentionNet",
        href: "https://doi.org/10.1109/URTC68753.2025.11533066",
        note: "interpretable gene-expression classification (IEEE URTC 2025)",
      },
      {
        title: "Neural Morphogen Operators",
        href: "https://github.com/sunkalpchandra/neural-morphogen-operators",
        note: "learning reaction-diffusion dynamics from spatial transcriptomics",
      },
    ],
  },
];
