import {Link, Theme} from "@carbon/react";

import PaperTag from "@/app/components/PaperTag";
import type {JsonPublications} from "@/type/data";

import styles from "./PublicationList.module.css";

type TranslateFn = (key: string) => string;

type Props = {
  publications: JsonPublications[];
  tTags: TranslateFn;
};

const PublicationList = ({publications, tTags}: Props) => (
  <Theme theme="g10">
  <ol className={styles.list}>
    {publications.map((pub, i) => (
      <li key={i} className={styles.item}>
        <div className={styles.content}>
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
          {pub.tags && pub.tags.map(tag => (
            <PaperTag key={tag} tag={tag} t={tTags} />
          ))}
        </div>
      </li>
    ))}
  </ol>
  </Theme>
);

export default PublicationList;
