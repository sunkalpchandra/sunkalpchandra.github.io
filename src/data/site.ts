export const site = {
  name: "Sunkalp Chandra",
  shortName: "Sunkalp",
  url: "https://sunkalpchandra.github.io",
  title: "Sunkalp Chandra — Computer Science, Neuroscience & AI",
  description:
    "Sunkalp Chandra is a student, researcher, and engineer working at the intersection of computer science, neuroscience, artificial intelligence, and neurotechnology.",
  email: "sunkalp.chandra@gmail.com",
  links: {
    github: "https://github.com/sunkalpchandra",
    linkedin: "https://www.linkedin.com/in/sunkalp/",
    scholar: "https://scholar.google.com/citations?user=-RhDTo8AAAAJ",
    reteena: "https://reteena.org",
    xyla: "https://xyla.space",
  },
} as const;

export const nav = [
  { label: "Research", href: "/research/" },
  { label: "Work", href: "/work/" },
  { label: "Writing", href: "/notes/" },
  { label: "About", href: "/about/" },
] as const;
