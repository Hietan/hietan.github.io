import {Link} from "@carbon/react";
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
  <ol className={styles.list}>
    {papers.map((paper, i) => {
      const authorNodes = buildAuthors(paper.authors, paper.index_me);
      return (
        <li key={i} className={styles.item}>
          <div className={styles.title}>
            {paper.link_href ? (
              <Link href={paper.link_href} target="_blank" rel="noopener noreferrer">
                {paper.title}
              </Link>
            ) : (
              paper.title
            )}
          </div>
          <div className={styles.authors}>
            <ListComma items={authorNodes} />
          </div>
          <div className={styles.meta}>
            {paper.venue && <span className={styles.venue}>{paper.venue}</span>}
            <span className={styles.date}>{formatYearMonth(paper.year, paper.month)}</span>
            {paper.link_href && paper.link_label && (
              <Link href={paper.link_href} target="_blank" rel="noopener noreferrer">
                [{paper.link_label}]
              </Link>
            )}
          </div>
        </li>
      );
    })}
  </ol>
);

export default PaperList;
