import {Link, Theme} from "@carbon/react";
import type {ReactNode} from "react";

import CiteButton from "@/app/components/CiteButton";
import ListComma from "@/app/components/ListComma";
import PaperTag from "@/app/components/PaperTag";
import type {JsonPapers} from "@/type/data";

import styles from "./PaperList.module.css";

type TranslateFn = (key: string) => string;

type Props = {
  papers: JsonPapers[];
  t: TranslateFn;
  tTags: TranslateFn;
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

const PaperList = ({papers, tTags}: Props) => (
  <Theme theme="g10">
  <ol className={styles.list}>
    {papers.map((paper, i) => {
      const authorNodes = buildAuthors(paper.authors, paper.index_me);
      return (
        <li key={i} className={`${styles.item}${paper.link_href ? ` ${styles.linked}` : ""}`}>
          <div className={styles.content}>
            <div className={styles.title}>{paper.title}</div>
            <div className={styles.authors}>
              <ListComma items={authorNodes} />
            </div>
            {paper.venue && (
              <div className={styles.venue}>
                {paper.venue}
                {(paper.venue_short || paper.core_rank) && (
                  <span className={styles.venueMeta}>
                    {paper.venue_short && <span className={styles.venueShort}>{paper.venue_short}</span>}
                    {paper.core_rank && <span className={styles.coreRank}>CORE {paper.core_rank}</span>}
                  </span>
                )}
              </div>
            )}
          </div>
          <div className={styles.actions}>
            <span className={styles.date}>{formatYearMonth(paper.year, paper.month)}</span>
            {paper.link_href && paper.link_label && (
              <Link href={paper.link_href} target="_blank" rel="noopener noreferrer">
                [{paper.link_label}]
              </Link>
            )}
            <CiteButton paper={paper} />
            {paper.tags && paper.tags.map(tag => (
              <PaperTag key={tag} tag={tag} t={tTags} />
            ))}
          </div>
        </li>
      );
    })}
  </ol>
  </Theme>
);

export default PaperList;
