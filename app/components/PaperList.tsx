import buildAuthors from "@/app/lib/buildAuthors";
import formatYearMonth from "@/app/lib/formatYearMonth";
import CiteButton from "@/app/components/CiteButton";
import ExternalLink from "@/app/components/ExternalLink";
import ListComma from "@/app/components/ListComma";
import ResearchList from "@/app/components/ResearchList";
import {getPaperAnchorId, getPaperCanonicalUrl, getPaperDatePublished} from "@/app/lib/citations";
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
    id: getPaperAnchorId(paper),
    content: (
      <article itemScope itemType="https://schema.org/ScholarlyArticle">
        <meta itemProp="datePublished" content={getPaperDatePublished(paper)} />
        {getPaperCanonicalUrl(paper) ? <meta itemProp="url" content={getPaperCanonicalUrl(paper)} /> : null}
        {paper.doi ? <meta itemProp="identifier" content={`doi:${paper.doi}`} /> : null}
        <div className={styles.title} itemProp="name">{paper.title}</div>
        <div className={styles.authors}>
          {paper.authors.map(author => (
            <meta key={author} itemProp="author" content={author} />
          ))}
          <ListComma items={buildAuthors(paper.authors, paper.index_me)} />
        </div>
        {paper.venue && <div className={styles.venue} itemProp="isPartOf">{paper.venue}</div>}
      </article>
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
