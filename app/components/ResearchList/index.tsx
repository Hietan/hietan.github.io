import {Theme} from "@carbon/react";
import type {ReactNode} from "react";

import PaperTag from "@/app/components/PaperTag";

import styles from "./ResearchList.module.css";

type TranslateFn = (key: string) => string;

export type ResearchListItem = {
  content: ReactNode;
  date: string;
  id?: string;
  linkArea?: ReactNode;
  tags?: string[];
};

type Props = {
  items: ResearchListItem[];
  tTags: TranslateFn;
};

const ResearchList = ({items, tTags}: Props) => (
  <Theme theme="g10">
    <ol className={styles.list}>
      {items.map((item, i) => (
        <li key={item.id ?? i} id={item.id} className={styles.item}>
          <div className={styles.content}>{item.content}</div>
          <div className={styles.actions}>
            <span className={styles.date}>{item.date}</span>
            <span className={styles.linkArea}>{item.linkArea}</span>
            <span className={styles.tagArea}>
              {item.tags?.map(tag => (
                <PaperTag key={tag} tag={tag} t={tTags} />
              ))}
            </span>
          </div>
        </li>
      ))}
    </ol>
  </Theme>
);

export default ResearchList;
