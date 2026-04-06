"use client";

import {useState} from "react";
import {Modal} from "@carbon/react";
import type {JsonPapers} from "@/type/data";

import styles from "./CiteButton.module.css";

type Props = {
  paper: JsonPapers;
};

const generateBibTeX = (paper: JsonPapers): string => {
  const lastName = (paper.authors[0] ?? "").split(" ").pop()?.toLowerCase() ?? "unknown";
  const titleWord = paper.title.split(/\s+/)[0].toLowerCase().replace(/[^a-z]/g, "");
  const key = `${lastName}${paper.year}${titleWord}`;

  const authorsBib = paper.authors
    .map(a => {
      const parts = a.trim().split(" ");
      const last = parts.pop() ?? "";
      return `${last}, ${parts.join(" ")}`;
    })
    .join(" and ");

  const lines = [
    `@inproceedings{${key},`,
    `  author    = {${authorsBib}},`,
    `  title     = {{${paper.title}}},`,
  ];
  if (paper.venue) lines.push(`  booktitle = {${paper.venue}},`);
  lines.push(`  year      = {${paper.year}},`);
  lines.push(`  month     = {${paper.month}},`);
  if (paper.pages) lines.push(`  pages     = {${paper.pages}},`);
  if (paper.doi) lines.push(`  doi       = {${paper.doi}},`);
  if (!paper.doi && paper.link_href) lines.push(`  url       = {${paper.link_href}},`);
  if (!paper.doi) lines.push(`  note      = {To appear},`);
  lines.push(`}`);

  return lines.join("\n");
};

const MONTH_ABBR: Record<number, string> = {
  1: "Jan.", 2: "Feb.", 3: "Mar.", 4: "Apr.", 5: "May",
  6: "Jun.", 7: "Jul.", 8: "Aug.", 9: "Sep.", 10: "Oct.", 11: "Nov.", 12: "Dec.",
};

const generateNatural = (paper: JsonPapers): string => {
  const abbreviated = paper.authors.map(a => {
    const parts = a.trim().split(" ");
    const last = parts.pop() ?? "";
    const initials = parts.map(p => `${p[0]}.`).join(" ");
    return initials ? `${initials} ${last}` : last;
  });
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

  if (paper.pages) parts.push(`pp. ${paper.pages.replace("--", "–")}`);
  if (paper.doi) parts.push(`doi: ${paper.doi}`);
  else parts.push("to appear");

  return parts.join(", ") + ".";
};

type Tab = "text" | "bibtex";

export default function CiteButton({paper}: Props) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("text");
  const [copied, setCopied] = useState(false);

  const content = tab === "bibtex" ? generateBibTeX(paper) : generateNatural(paper);

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <button className={styles.citeLink} onClick={() => setOpen(true)}>
        [Cite]
      </button>
      <Modal
        open={open}
        onRequestClose={() => setOpen(false)}
        modalHeading={paper.title}
        passiveModal
        size="md"
      >
        <div className={styles.tabBar}>
          <button
            className={`${styles.tabBtn} ${tab === "text" ? styles.tabActive : ""}`}
            onClick={() => setTab("text")}
          >
            Text
          </button>
          <button
            className={`${styles.tabBtn} ${tab === "bibtex" ? styles.tabActive : ""}`}
            onClick={() => setTab("bibtex")}
          >
            BibTeX
          </button>
          <button className={styles.copyBtn} onClick={handleCopy}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <pre className={styles.codeBlock} onClick={handleCopy} title="Click to copy"><code>{content}</code></pre>
      </Modal>
    </>
  );
}
