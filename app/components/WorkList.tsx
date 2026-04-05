import {Link, Theme} from "@carbon/react";

import type {JsonWorks} from "@/type/data";

import styles from "./WorkList.module.css";

type Props = {
  works: JsonWorks[];
};

const WorkList = ({works}: Props) => (
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
        </div>
      </li>
    ))}
  </ol>
  </Theme>
);

export default WorkList;
