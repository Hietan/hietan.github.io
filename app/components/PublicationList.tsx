import {Link, Theme} from "@carbon/react";

import type {JsonPublications} from "@/type/data";

import styles from "./PublicationList.module.css";

type Props = {
  publications: JsonPublications[];
};

const PublicationList = ({publications}: Props) => (
  <Theme theme="g10">
  <ol className={styles.list}>
    {publications.map((pub, i) => (
      <li key={i} className={styles.item}>
        <div className={styles.content}>
          {pub.tag && <div className={styles.tag}>{pub.tag}</div>}
          <div className={styles.title}>{pub.title}</div>
          {pub.info && <div className={styles.info}>{pub.info}</div>}
        </div>
        <div className={styles.actions}>
          <span className={styles.date}>{pub.date}</span>
          {pub.link && pub.link_tag && (
            <Link href={pub.link} target="_blank" rel="noopener noreferrer">
              [{pub.link_tag}]
            </Link>
          )}
        </div>
      </li>
    ))}
  </ol>
  </Theme>
);

export default PublicationList;
