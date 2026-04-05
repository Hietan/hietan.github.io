import buildAuthors from "@/app/lib/buildAuthors";
import formatYearMonth from "@/app/lib/formatYearMonth";
import ExternalLink from "@/app/components/ExternalLink";
import ListComma from "@/app/components/ListComma";
import ResearchList from "@/app/components/ResearchList";
import type {JsonPresentations} from "@/type/data";

import styles from "./PresentationList.module.css";

type TranslateFn = (key: string) => string;

type Props = {
  presentations: JsonPresentations[];
  tTags: TranslateFn;
};

const PresentationList = ({presentations, tTags}: Props) => {
  const items = presentations.map(pres => ({
    content: (
      <>
        <div className={styles.title}>{pres.title}</div>
        <div className={styles.authors}>
          <ListComma items={buildAuthors(pres.authors, pres.index_me, pres.index_presenter)} />
        </div>
        {pres.event && <div className={styles.event}>{pres.event}</div>}
      </>
    ),
    date: formatYearMonth(pres.year, pres.month),
    linkArea: pres.link_href && pres.link_label ? (
      <ExternalLink href={pres.link_href}>[{pres.link_label}]</ExternalLink>
    ) : undefined,
    tags: pres.tags,
  }));

  return <ResearchList items={items} tTags={tTags} />;
};

export default PresentationList;
