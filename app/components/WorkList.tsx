import {Link, Theme} from "@carbon/react";

import PaperTag from "@/app/components/PaperTag";
import type {JsonWorks} from "@/type/data";

import styles from "./WorkList.module.css";

type TranslateFn = (key: string) => string;

type Props = {
  works: JsonWorks[];
  tTags: TranslateFn;
};

const WorkList = ({works, tTags}: Props) => (
  <Theme theme="g10">
  <ol className={styles.list}>
    {works.map((work, i) => (
      <li key={i} className={styles.item}>
        <div className={styles.content}>
          <div className={styles.title}>{work.title}</div>
          {work.venue && <div className={styles.venue}>{work.venue}</div>}
        </div>
        <div className={styles.actions}>
          <span className={styles.date}>{work.date}</span>
          {work.link && work.link_tag && (
            <Link href={work.link} target="_blank" rel="noopener noreferrer">
              [{work.link_tag}]
            </Link>
          )}
          {work.tags && work.tags.map(tag => (
            <PaperTag key={tag} tag={tag} t={tTags} />
          ))}
        </div>
      </li>
    ))}
  </ol>
  </Theme>
);

export default WorkList;
