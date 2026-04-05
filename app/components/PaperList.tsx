import buildAuthors from "@/app/lib/buildAuthors";
import formatYearMonth from "@/app/lib/formatYearMonth";
import CiteButton from "@/app/components/CiteButton";
import ExternalLink from "@/app/components/ExternalLink";
import ListComma from "@/app/components/ListComma";
import ResearchList from "@/app/components/ResearchList";
import type {JsonPapers} from "@/type/data";

import styles from "./PaperList.module.css";

type TranslateFn = (key: string) => string;

type Props = {
  papers: JsonPapers[];
  t: TranslateFn;
  tTags: TranslateFn;
};

const PaperList = ({papers, tTags}: Props) => {
  const items = papers.map(paper => ({
    content: (
      <>
        <div className={styles.title}>{paper.title}</div>
        <div className={styles.authors}>
          <ListComma items={buildAuthors(paper.authors, paper.index_me)} />
        </div>
        {paper.venue && <div className={styles.venue}>{paper.venue}</div>}
      </>
    ),
    date: formatYearMonth(paper.year, paper.month),
    linkArea: (
      <>
        {paper.link_href && paper.link_label && (
          <ExternalLink href={paper.link_href}>[{paper.link_label}]</ExternalLink>
        )}
        <CiteButton paper={paper} />
      </>
    ),
    tags: paper.tags,
  }));

  return <ResearchList items={items} tTags={tTags} />;
};

export default PaperList;
