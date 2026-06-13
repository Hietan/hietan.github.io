"use client";

import {useState} from "react";
import {Modal} from "@carbon/react";
import {generateBibTeX, generateNaturalCitation} from "@/app/lib/citations";
import type {JsonPapers} from "@/type/data";

import styles from "./CiteButton.module.css";

type Props = {
  paper: JsonPapers;
};

type Tab = "text" | "bibtex";

export default function CiteButton({paper}: Props) {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("text");
  const [copied, setCopied] = useState(false);

  const content = tab === "bibtex" ? generateBibTeX(paper) : generateNaturalCitation(paper);

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
