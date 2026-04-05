import ExternalLink from "@/app/components/ExternalLink";
import ResearchList from "@/app/components/ResearchList";
import type {JsonWorks} from "@/type/data";

import styles from "./WorkList.module.css";

type TranslateFn = (key: string) => string;

type Props = {
  works: JsonWorks[];
  tTags: TranslateFn;
};

const WorkList = ({works, tTags}: Props) => {
  const items = works.map(work => ({
    content: (
      <>
        <div className={styles.title}>{work.title}</div>
        {work.venue && <div className={styles.venue}>{work.venue}</div>}
      </>
    ),
    date: work.date,
    linkArea: work.link && work.link_tag ? (
      <ExternalLink href={work.link}>[{work.link_tag}]</ExternalLink>
    ) : undefined,
    tags: work.tags,
  }));

  return <ResearchList items={items} tTags={tTags} />;
};

export default WorkList;
