import {Link, Theme} from "@carbon/react";

import PaperTag from "@/app/components/PaperTag";
import type {JsonAwards} from "@/type/data";

import styles from "./AwardList.module.css";

type TranslateFn = (key: string) => string;

type Props = {
  awards: JsonAwards[];
  locale: string;
  tTags: TranslateFn;
};

const AwardList = ({awards, locale, tTags}: Props) => (
  <Theme theme="g10">
  <ol className={styles.list}>
    {awards.map((award, i) => {
      const isJa = locale === "ja";
      const title = isJa && award.title ? award.title : (award.title_en ?? award.title);
      const organization = isJa
        ? award.organization
        : (award.organization_en ?? award.organization);

      return (
        <li key={i} className={styles.item}>
          <div className={styles.content}>
            <div className={styles.title}>{title}</div>
            {organization && (
              <div className={styles.organization}>{organization}</div>
            )}
            {award.work_title && (
              <div className={styles.sub}>{award.work_title}</div>
            )}
            {award.event && (
              <div className={styles.sub}>{award.event}</div>
            )}
          </div>
          <div className={styles.actions}>
            <span className={styles.date}>{award.date}</span>
            {award.amount && (
              <span className={styles.amount}>{award.amount}</span>
            )}
            {award.link && award.link_tag && (
              <Link href={award.link} target="_blank" rel="noopener noreferrer">
                [{award.link_tag}]
              </Link>
            )}
            {award.tags && award.tags.map(tag => (
              <PaperTag key={tag} tag={tag} t={tTags} />
            ))}
          </div>
        </li>
      );
    })}
  </ol>
  </Theme>
);

export default AwardList;
