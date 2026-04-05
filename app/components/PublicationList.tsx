import ExternalLink from "@/app/components/ExternalLink";
import ResearchList from "@/app/components/ResearchList";
import type {JsonPublications} from "@/type/data";

import styles from "./PublicationList.module.css";

type TranslateFn = (key: string) => string;

type Props = {
  publications: JsonPublications[];
  tTags: TranslateFn;
};

const PublicationList = ({publications, tTags}: Props) => {
  const items = publications.map(pub => ({
    content: (
      <>
        <div className={styles.title}>{pub.title}</div>
        {pub.info && <div className={styles.info}>{pub.info}</div>}
      </>
    ),
    date: pub.date,
    linkArea: pub.link && pub.link_tag ? (
      <ExternalLink href={pub.link}>[{pub.link_tag}]</ExternalLink>
    ) : undefined,
    tags: pub.tags,
  }));

  return <ResearchList items={items} tTags={tTags} />;
};

export default PublicationList;
