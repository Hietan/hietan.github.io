import {Theme} from "@carbon/react";
import type {ReactNode} from "react";

import ListComma from "@/app/components/ListComma";
import type {JsonPapers} from "@/type/data";

import styles from "./PaperList.module.css";

type TranslateFn = (key: string) => string;

type Props = {
  papers: JsonPapers[];
  t: TranslateFn;
};

const buildAuthors = (items: string[], highlightIndex?: number): ReactNode[] =>
  items.map((author, i) => {
    const key = `author-${i}-${author}`;
    if (i + 1 === highlightIndex) {
      return <strong key={key}>{author}</strong>;
    }
    return <span key={key}>{author}</span>;
  });

const formatYearMonth = (year: number, month: number) =>
  `${year}-${month.toString().padStart(2, "0")}`;

const PaperList = ({papers, t}: Props) => (
  <Theme theme="g10">
  <ol className={styles.list}>
    {papers.map((paper, i) => {
      const authorNodes = buildAuthors(paper.authors, paper.index_me);
      const inner = (
        <>
          <div className={styles.title}>{paper.title}</div>
          <div className={styles.authors}>
            <ListComma items={authorNodes} />
          </div>
          <div className={styles.meta}>
            {paper.venue && <span className={styles.venue}>{paper.venue}</span>}
            <span className={styles.date}>{formatYearMonth(paper.year, paper.month)}</span>
            {paper.link_label && (
              <span className={styles.badge}>[{paper.link_label}]</span>
            )}
          </div>
        </>
      );

      return (
        <li key={i} className={`${styles.item}${paper.link_href ? ` ${styles.linked}` : ""}`}>
          {paper.link_href ? (
            <a
              href={paper.link_href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.blockLink}
            >
              {inner}
            </a>
          ) : inner}
        </li>
      );
    })}
  </ol>
  </Theme>
);

export default PaperList;
