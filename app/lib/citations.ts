import type {JsonPapers} from "@/type/data";

const MONTH_ABBR: Record<number, string> = {
  1: "Jan.",
  2: "Feb.",
  3: "Mar.",
  4: "Apr.",
  5: "May",
  6: "Jun.",
  7: "Jul.",
  8: "Aug.",
  9: "Sep.",
  10: "Oct.",
  11: "Nov.",
  12: "Dec.",
};

const toBibTeXAuthor = (author: string): string => {
  const parts = author.trim().split(/\s+/);
  const last = parts.pop() ?? "";
  return `${last}, ${parts.join(" ")}`.trim();
};

const toInitialedAuthor = (author: string): string => {
  const parts = author.trim().split(/\s+/);
  const last = parts.pop() ?? "";
  const initials = parts.map(part => `${part[0]}.`).join(" ");
  return initials ? `${initials} ${last}` : last;
};

export const getPaperCitationKey = (paper: JsonPapers): string => {
  const lastName = (paper.authors[0] ?? "").split(/\s+/).pop()?.toLowerCase() ?? "unknown";
  const titleWord = paper.title.split(/\s+/)[0].toLowerCase().replace(/[^a-z]/g, "") || "paper";
  return `${lastName}${paper.year}${titleWord}`;
};

export const getPaperAnchorId = (paper: JsonPapers): string => (
  `paper-${getPaperCitationKey(paper).replace(/[^a-z0-9-]/gi, "-").toLowerCase()}`
);

export const getPaperDatePublished = (paper: JsonPapers): string => (
  `${paper.year}-${String(paper.month).padStart(2, "0")}`
);

export const getPaperCanonicalUrl = (paper: JsonPapers): string | undefined => {
  if (paper.doi) return `https://doi.org/${paper.doi}`;
  return paper.link_href;
};

export const generateBibTeX = (paper: JsonPapers): string => {
  const lines = [
    `@inproceedings{${getPaperCitationKey(paper)},`,
    `  author    = {${paper.authors.map(toBibTeXAuthor).join(" and ")}},`,
    `  title     = {{${paper.title}}},`,
  ];

  if (paper.venue) lines.push(`  booktitle = {${paper.venue}},`);
  lines.push(`  year      = {${paper.year}},`);
  lines.push(`  month     = {${paper.month}},`);
  if (paper.pages) lines.push(`  pages     = {${paper.pages}},`);
  if (paper.address) lines.push(`  address   = {${paper.address}},`);
  if (paper.doi) lines.push(`  doi       = {${paper.doi}},`);
  if (!paper.doi && paper.link_href) lines.push(`  url       = {${paper.link_href}},`);
  if (!paper.doi) lines.push("  note      = {To appear},");
  lines.push("}");

  return lines.join("\n");
};

export const generateNaturalCitation = (paper: JsonPapers): string => {
  const abbreviated = paper.authors.map(toInitialedAuthor);
  const authors = abbreviated.length > 1
    ? `${abbreviated.slice(0, -1).join(", ")}, and ${abbreviated[abbreviated.length - 1]}`
    : (abbreviated[0] ?? "");

  const venue = paper.venue_short ?? paper.venue;
  const month = MONTH_ABBR[paper.month] ?? "";
  const location = [paper.address, month, String(paper.year)].filter(Boolean).join(", ");

  const parts: string[] = [
    authors,
    `"${paper.title}"`,
    venue ? `in Proc. ${venue}` : "",
    location,
  ].filter(Boolean);

  if (paper.pages) parts.push(`pp. ${paper.pages.replace("--", "-")}`);
  if (paper.doi) parts.push(`doi: ${paper.doi}`);
  else parts.push("to appear");

  return `${parts.join(", ")}.`;
};

export const generateBibTeXCollection = (papers: JsonPapers[]): string => (
  `${papers.map(generateBibTeX).join("\n\n")}\n`
);
