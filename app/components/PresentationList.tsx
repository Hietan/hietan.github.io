import {Link, Theme} from "@carbon/react";
import type {ReactNode} from "react";

import ListComma from "@/app/components/ListComma";
import PaperTag from "@/app/components/PaperTag";
import type {JsonPresentations} from "@/type/data";

import styles from "./PresentationList.module.css";

type TranslateFn = (key: string) => string;

type Props = {
  presentations: JsonPresentations[];
  tTags: TranslateFn;
};

const buildAuthors = (
  items: string[],
  indexMe?: number,
  indexPresenter?: number,
): ReactNode[] =>
  items.map((author, i) => {
    const key = `author-${i}-${author}`;
    const pos = i + 1;
    const isMe = pos === indexMe;
    const isPresenter = pos === indexPresenter;

    if (isMe && isPresenter) {
      return (
        <strong key={key}>
          <span style={{textDecoration: "underline"}}>{author}</span>
        </strong>
      );
    }
    if (isPresenter) {
      return (
        <span key={key} style={{textDecoration: "underline"}}>
          {author}
        </span>
      );
    }
    if (isMe) {
      return <strong key={key}>{author}</strong>;
    }
    return <span key={key}>{author}</span>;
  });

const formatYearMonth = (year: number, month: number) =>
  `${year}-${month.toString().padStart(2, "0")}`;

const PresentationList = ({presentations, tTags}: Props) => (
  <Theme theme="g10">
  <ol className={styles.list}>
    {presentations.map((pres, i) => {
      const authorNodes = buildAuthors(pres.authors, pres.index_me, pres.index_presenter);
      return (
        <li key={i} className={styles.item}>
          <div className={styles.content}>
            <div className={styles.title}>{pres.title}</div>
            <div className={styles.authors}>
              <ListComma items={authorNodes} />
            </div>
            {pres.event && <div className={styles.event}>{pres.event}</div>}
          </div>
          <div className={styles.actions}>
            <span className={styles.date}>{formatYearMonth(pres.year, pres.month)}</span>
            {pres.link_href && pres.link_label && (
              <Link href={pres.link_href} target="_blank" rel="noopener noreferrer">
                [{pres.link_label}]
              </Link>
            )}
            {pres.tags && pres.tags.map(tag => (
              <PaperTag key={tag} tag={tag} t={tTags} />
            ))}
          </div>
        </li>
      );
    })}
  </ol>
  </Theme>
);

export default PresentationList;
