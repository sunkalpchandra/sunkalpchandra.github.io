export type Project = {
  slug: string;
  title: string;
  /** Acronym expansion or formal subtitle, set in serif on the page. */
  subtitle?: string;
  tagline: string;
  period: string;
  status: string;
  /** Node ids in the research graph this project connects. */
  themes: string[];
  summary: string;
  /** Featured ordering on the homepage; lower = more prominent. Absent = not featured. */
  featured?: number;
  facts: { label: string; value: string }[];
  links: { label: string; href: string }[];
  sections: { heading: string; body: string[] }[];
  image?: { src: string; alt: string; caption?: string };
  related?: string[];
};

export const projects: Project[] = [
  {
    slug: "trident",
    title: "TRIDENT",
    subtitle: "Temporal Reasoning & Inference for Dynamic Embedded Neural Translation",
    tagline: "Neural decoding that knows whose brain it's reading.",
    period: "2026 —",
    status: "Active research",
    themes: ["bci", "ai", "neuro"],
    summary:
      "A personalized neural decoding platform. Large reasoning systems interpret EEG and fMRI with temporal context, then get distilled into lightweight decoders that adapt to the individual brain in real time.",
    featured: 1,
    facts: [
      { label: "Role", value: "Lead researcher" },
      { label: "Lab", value: "Reteena" },
      { label: "Signals", value: "EEG · fMRI" },
      { label: "Status", value: "In development" },
    ],
    links: [{ label: "Reteena", href: "https://reteena.org" }],
    sections: [
      {
        heading: "Problem",
        body: [
          "Most neural decoders treat brains as interchangeable. Train on a cohort, average away the differences, classify. But neural signals are non-stationary and deeply individual — the representation of the same intent drifts across sessions and differs across people. A decoder that ignores this is permanently fighting its own training data.",
          "The systems that could reason about this context — large models with temporal reasoning and uncertainty estimates — are far too slow to sit in a real-time decoding loop.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "TRIDENT splits the problem in two. A multi-agent teacher system interprets neural signals offline: agents reason over temporal structure, contextual cues, and probabilistic uncertainty, and negotiate an interpretation of what the signal means. It is slow, deliberate, and accurate.",
          "That reasoning gets distilled into a student decoder that is small enough to run in real time. The student doesn't just inherit predictions — it inherits a personalized latent representation of the individual subject, built through Bayesian personalization and refined by online adaptation as new sessions arrive.",
          "The result is a form of neural identity: a compact representation of how this particular brain encodes intent, which the decoder conditions on instead of assuming an average subject.",
        ],
      },
      {
        heading: "Architecture",
        body: [
          "Signal flows through an encoder into a latent neural representation. A reasoning and routing stage — the distilled core of the teacher system — resolves ambiguity using temporal context. Personalization conditions the latent state on the subject's identity representation before a lightweight decoder produces intent.",
          "Every stage is built for the real-time constraint: the deliberation happens at training time, so inference doesn't have to pay for it.",
        ],
      },
      {
        heading: "Status",
        body: [
          "TRIDENT is in active development within Reteena. The current phase focuses on the teacher-student distillation pipeline and validating personalized decoding against public EEG benchmarks. The repository is private while the work is ongoing.",
        ],
      },
    ],
    related: ["tribe", "neuroloom"],
  },
  {
    slug: "tribe",
    title: "Neural Foundation Models",
    subtitle: "Latent structure of brain encoders, and TRIBE Explorer",
    tagline: "What does a foundation model of the brain actually learn?",
    period: "2025 —",
    status: "Active research",
    themes: ["neuro", "ai"],
    summary:
      "Research into the latent representations of fMRI foundation models — how they organize neural activity across subjects, contexts, and time — plus TRIBE Explorer, a visual analytics tool for seeing that structure directly.",
    featured: 2,
    facts: [
      { label: "Role", value: "Researcher & builder" },
      { label: "Focus", value: "fMRI representation learning" },
      { label: "Tooling", value: "TRIBE Explorer" },
    ],
    links: [
      { label: "TRIBE Explorer", href: "https://github.com/sunkalpchandra/tribe-explorer" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "Neural foundation models — large encoders trained to predict brain activity — are starting to work. What nobody fully understands is what they learn: how their latent spaces organize neural responses, whether representations align across subjects, and what temporal structure a recording traces through the model's state space.",
          "These are geometric questions, and geometry is hard to study through scalar metrics alone. You have to look at it.",
        ],
      },
      {
        heading: "TRIBE Explorer",
        body: [
          "TRIBE Explorer is a visual analytics platform for the latent spaces of neural foundation models, built around TRIBE-class fMRI encoders. It renders a recording as a trajectory through decoder state space, projects latent geometry for direct inspection, aligns representations across subjects, and compares model variants side by side.",
          "The point is to make representation-level claims checkable by eye: if two subjects' latents are supposed to align, you should be able to see them align.",
        ],
      },
      {
        heading: "Research direction",
        body: [
          "The larger question is cross-context representation: whether a foundation model's latent space captures something stable about an individual brain that transfers across stimuli and sessions. That question connects directly to TRIDENT — personalized decoding needs exactly this kind of stable, subject-specific structure to condition on.",
        ],
      },
    ],
    image: {
      src: "/images/projects/tribe-latent-space.png",
      alt: "TRIBE Explorer rendering the latent space of an fMRI foundation model",
      caption: "TRIBE Explorer: the latent space of an fMRI encoder, one point per timestep.",
    },
    related: ["trident", "neuroloom"],
  },
  {
    slug: "neuroloom",
    title: "NeuroLoom",
    subtitle: "Reproducible cortical microcircuit modeling with spiking neural networks",
    tagline: "Building cortex in silico, then checking it against the real thing.",
    period: "2025 — 2026",
    status: "ICLR 2026 FM4Science Workshop",
    themes: ["neuro", "systems"],
    summary:
      "A framework for constructing, simulating, and validating spiking cortical microcircuit models against in-vivo electrophysiology from the Allen Brain Observatory. Workshop paper at ICLR 2026 FM4Science.",
    featured: 5,
    facts: [
      { label: "Venue", value: "ICLR 2026 FM4Science Workshop" },
      { label: "Stack", value: "Brian2 · AllenSDK · Python" },
      { label: "Data", value: "Allen Brain Observatory" },
    ],
    links: [{ label: "Code", href: "https://github.com/Reteena/NeuroLoom" }],
    sections: [
      {
        heading: "Problem",
        body: [
          "Cortical microcircuit models are notoriously hard to reproduce. Parameters live in supplementary tables, validation is ad hoc, and comparing a simulated circuit against real recordings usually means rebuilding someone's entire pipeline from a methods section.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "NeuroLoom is a framework on top of Brian2 for constructing, simulating, and validating cortical microcircuit models in a reproducible way. Simulated circuit statistics are compared directly against in-vivo electrophysiology from the Allen Brain Observatory, and the framework includes multi-layer STDP experiments for studying biologically inspired learning in the same circuits.",
          "Where TRIDENT asks how to read the brain with modern AI, NeuroLoom asks the mechanistic question underneath: what dynamics does actual cortical tissue produce, and can we capture them faithfully enough to experiment on?",
        ],
      },
    ],
    related: ["trident", "lark"],
  },
  {
    slug: "lark",
    title: "Lark",
    subtitle: "Biologically inspired neuroevolution for multi-stakeholder LLM agents",
    tagline: "Evolution, applied to committees of language models.",
    period: "2025",
    status: "NeurIPS 2025 Workshop on Efficient Reasoning",
    themes: ["ai", "startups"],
    summary:
      "A decision-making framework that couples LLM reasoning with an evolutionary, stakeholder-aware multi-agent system — plasticity, duplication and maturation, ranked-choice stakeholder aggregation, and token-cost awareness. NeurIPS 2025 workshop paper.",
    featured: 4,
    facts: [
      { label: "Venue", value: "NeurIPS 2025 Workshop on Efficient Reasoning" },
      { label: "Authors", value: "Tanugula, Chintapalli, Chandra" },
      { label: "arXiv", value: "2510.16978" },
    ],
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2510.16978" }],
    sections: [
      {
        heading: "Idea",
        body: [
          "Real decisions have stakeholders, and stakeholders disagree. Lark treats candidate solutions as a population under selection: LLM-driven reasoning proposes and mutates candidates, while an evolutionary loop borrows mechanisms from biology — plasticity for concise refinement, duplication and maturation to specialize high performers into new modules.",
          "Stakeholder preferences enter through ranked-choice aggregation with influence-weighted Borda scoring, so the system optimizes for a negotiated outcome rather than a single objective. Token-based penalties make the whole loop compute-aware: brevity is a fitness trait.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Lark was accepted to the NeurIPS 2025 Workshop on Efficient Reasoning. The interesting result isn't any single benchmark number — it's that evolutionary structure over LLM agents gives you a dial between deliberation quality and compute cost that single-agent prompting doesn't have.",
        ],
      },
    ],
    related: ["trident", "neuroloom"],
  },
  {
    slug: "remembrance",
    title: "Reteena / Remembrance",
    subtitle: "Applied AI for neurodegenerative disease",
    tagline: "AI research pointed at a disease that takes memories.",
    period: "2024 —",
    status: "Initial patient trials",
    themes: ["medical", "ai", "startups"],
    summary:
      "Reteena is an applied AI lab for neurodegenerative diagnostics that I co-founded. Its flagship, Remembrance, is an AI reminiscence-therapy companion for Alzheimer's patients built on knowledge graphs and LLMs — with initial patient trials supported by Johns Hopkins' Pava Center.",
    featured: 3,
    facts: [
      { label: "Role", value: "Co-founder" },
      { label: "Focus", value: "Alzheimer's & cognitive health" },
      { label: "Trials", value: "Initial patient trials · Pava Center support" },
    ],
    links: [
      { label: "reteena.org", href: "https://reteena.org" },
      { label: "Remembrance code", href: "https://github.com/Reteena/Remembrance" },
    ],
    sections: [
      {
        heading: "Problem",
        body: [
          "Reminiscence therapy — guided conversation through a patient's own memories — is one of the few interventions that reliably improves quality of life for people with Alzheimer's. It's also labor-intensive, inconsistent, and impossible to scale with human staff alone.",
        ],
      },
      {
        heading: "Remembrance",
        body: [
          "Remembrance structures a patient's life history into a knowledge graph — people, places, events, relationships — and uses an LLM conversation layer grounded in that graph to conduct reminiscence sessions. Grounding matters clinically: the system has to stay inside the patient's real history, never inventing memories for someone whose grip on memory is already failing.",
          "Remembrance went through initial patient trials with support from Johns Hopkins' Pava Center. Early-stage work, honestly labeled: these were first trials with real patients, not a clinical validation study.",
        ],
      },
      {
        heading: "The lab around it",
        body: [
          "Reteena grew into the umbrella for a family of related work: GeneAttentionNet, an attention-based architecture for interpretable gene-expression classification on Alzheimer's disease (IEEE MIT URTC 2025); NeuroLoom's cortical modeling; and TRIDENT's neural decoding. One lab, one theme — computational tools for brains that are failing.",
        ],
      },
    ],
    related: ["trident", "neuroloom"],
  },
  {
    slug: "xyla",
    title: "Xyla Engineering",
    subtitle: "Deployable biofactories for maritime environments",
    tagline: "Hardware that has to survive salt water.",
    period: "2025 —",
    status: "Founding",
    themes: ["hardware", "startups", "systems"],
    summary:
      "An engineering company I'm founding around deployable biofactories for maritime environments — physical systems that have to work in the least forgiving deployment target there is.",
    featured: 6,
    facts: [
      { label: "Role", value: "Founder" },
      { label: "Domain", value: "Maritime hardware · bioengineering" },
      { label: "Site", value: "xyla.space" },
    ],
    links: [{ label: "xyla.space", href: "https://xyla.space" }],
    sections: [
      {
        heading: "Why hardware",
        body: [
          "Most of my work lives in models and latent spaces. Xyla is the counterweight: engineering physical systems that have to survive contact with the ocean — corrosion, biofouling, power budgets, and no one around to press reset.",
          "The thesis is that biological production — biofactories — becomes far more useful when it can be deployed where it's needed rather than piped from where it's convenient. Making that work is mostly not a biology problem. It's an engineering problem.",
        ],
      },
      {
        heading: "Status",
        body: [
          "Early. Xyla is in its founding phase, and I'd rather show working hardware than render concept art. Details as they ship.",
        ],
      },
    ],
    related: ["jdable"],
  },
  {
    slug: "jdable",
    title: "Jdable",
    subtitle: "Assistive technology",
    tagline: "Accessibility problems don't care how elegant your model is.",
    period: "2023 — 2026",
    status: "Grant-funded",
    themes: ["hardware", "medical", "startups"],
    summary:
      "An assistive-technology company I co-founded and ran as CTO — building grant-funded accessibility tools, and my first lesson in taking technology from prototype to something a real person depends on.",
    facts: [
      { label: "Role", value: "CTO & Co-founder" },
      { label: "Funding", value: "Grant-funded" },
      { label: "Years", value: "2023 — 2026" },
    ],
    links: [],
    sections: [
      {
        heading: "What it was",
        body: [
          "Jdable built assistive technology for accessibility — engineering for users whose needs are usually an afterthought. As CTO I owned the technical side: hardware-software integration, iterating with the people the tools were actually for.",
          "The company received significant grant funding, which taught me the unglamorous half of engineering for accessibility: reliability, cost, and maintenance matter more than novelty, because your user cannot fall back to the able-bodied workflow when your device fails.",
        ],
      },
      {
        heading: "What it changed",
        body: [
          "Jdable is where I stopped thinking of research and deployment as separate activities. Everything since — Remembrance's patient trials, Xyla's deployable hardware, TRIDENT's real-time constraint — inherits the same bias: build it so it survives the real world, or don't claim it works.",
        ],
      },
    ],
    related: ["xyla", "remembrance"],
  },
  {
    slug: "neuroforge",
    title: "NeuroForge",
    subtitle: "Browser-native CAD for neural circuits",
    tagline: "Draw a circuit. Watch it spike.",
    period: "2026",
    status: "Live",
    themes: ["neuro", "systems"],
    summary:
      "A browser-native CAD tool for neural circuits with real-time simulation — five membrane models, real synaptic kinetics, GPU-accelerated rendering, procedural neuron glyphs. Runs entirely in the browser.",
    featured: 7,
    facts: [
      { label: "Membrane models", value: "Five, from LIF to Hodgkin-Huxley-class" },
      { label: "Rendering", value: "GPU-accelerated" },
      { label: "Runs", value: "Entirely in the browser" },
    ],
    links: [
      { label: "Live demo", href: "https://sunkalpchandra.github.io/neuroforge/" },
      { label: "Code", href: "https://github.com/sunkalpchandra/neuroforge" },
    ],
    sections: [
      {
        heading: "What it is",
        body: [
          "NeuroForge treats neural circuit design like CAD: place neurons, wire synapses, and watch the circuit spike in real time. It implements five membrane models with real synaptic kinetics, renders with GPU acceleration, and generates procedural glyphs so different neuron types are visually distinct at a glance.",
          "It exists because the gap between a circuit diagram in a paper and an intuition for its dynamics is enormous — and because simulation tools shouldn't require an installation guide. It runs in a browser tab.",
        ],
      },
    ],
    related: ["neuroloom"],
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured !== undefined)
  .sort((a, b) => (a.featured ?? 99) - (b.featured ?? 99));

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
