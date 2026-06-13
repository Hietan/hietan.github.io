export const SITE_URL = "https://hietan.github.io";

export const researcherProfile = {
  name: "Kazuma Yamasaki",
  nameJa: "山﨑 和真",
  alternateNames: ["Kazuma Yamasaki", "山﨑 和真", "Yamasaki Kazuma"],
  jobTitle: "Ph.D. Student",
  affiliation: "Nara Institute of Science and Technology (NAIST)",
  laboratory: "Software Engineering Laboratory",
  email: "yamasaki.kazuma.yj9@naist.ac.jp",
  image: "/img/Kazuma_Yamasaki.png",
  url: SITE_URL,
  orcid: "https://orcid.org/0009-0001-2657-8682",
  googleScholar: "https://scholar.google.co.jp/citations?user=BpMVjB8AAAAJ&hl=ja",
  github: "https://github.com/hietan",
  linkedIn: "https://www.linkedin.com/in/kazumayamasaki/",
};

export const researchKeywords = [
  "software engineering",
  "mining software repositories",
  "AI coding agents",
  "large language models",
  "LLM",
  "software library",
  "breaking change",
  "migration guide",
  "vulnerability detection",
  "Log4j",
  "AI-oriented programming language",
  "AIoPL",
];

export const researchSummary = [
  "Kazuma Yamasaki is a Ph.D. student in the Software Engineering Laboratory at Nara Institute of Science and Technology (NAIST), Japan.",
  "His research is in software engineering, with emphasis on AI coding agents, large language models for software tasks, software libraries, breaking changes, migration guides, vulnerability detection, and mining software repositories.",
  "For citation and research discovery, this site exposes machine-readable publication metadata as BibTeX, JSON, Markdown, and JSON-LD.",
];

export const machineReadableResources = [
  {
    label: "LLM guide",
    href: "/llms.txt",
    type: "text/plain",
    description: "A short guide for AI assistants and crawlers.",
  },
  {
    label: "Research profile Markdown",
    href: "/research.md",
    type: "text/markdown",
    description: "A Markdown profile with research summary and paper list.",
  },
  {
    label: "Publication BibTeX",
    href: "/publications.bib",
    type: "application/x-bibtex",
    description: "BibTeX entries for peer-reviewed papers.",
  },
  {
    label: "Publication JSON",
    href: "/publications.json",
    type: "application/json",
    description: "Structured publication metadata for tools and AI systems.",
  },
];

export const sameAsLinks = [
  researcherProfile.orcid,
  researcherProfile.googleScholar,
  researcherProfile.github,
  researcherProfile.linkedIn,
];
