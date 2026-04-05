import {Link} from "@carbon/react";
import type {ReactNode} from "react";

import ListComma from "@/app/components/ListComma";
import type {JsonAwards, JsonPapers, JsonPresentations, JsonPublications, JsonWorks} from "@/type/data";
import type {DataTable} from "@/type/table";

type TranslateFn = (key: string) => string;

const buildLinkCell = (href?: string, label?: string, key?: string, viewText = "View") =>
  href ? (
    <Link key={key} href={href} target="_blank" rel="noopener noreferrer">
      {label ?? viewText}
    </Link>
  ) : (
    ""
  );

const formatYearMonth = (year: number, month: number) => {
  const paddedMonth = month.toString().padStart(2, "0");
  return `${year}-${paddedMonth}`;
};

export const buildWorksTable = (works: JsonWorks[], t: TranslateFn): DataTable => ({
  header: [t("yearMonth"), t("title"), t("venue"), t("link")],
  body: works.map((work, index) => [
    work.date,
    work.title,
    work.venue ?? "",
    buildLinkCell(work.link, work.link_tag, `work-link-${index}`, t("view")),
  ]),
});

export const buildPublicationsTable = (publications: JsonPublications[], t: TranslateFn): DataTable => ({
  header: [t("yearMonth"), t("tag"), t("title"), t("info"), t("link")],
  body: publications.map((publication, index) => [
    publication.date,
    publication.tag ?? "",
    publication.title,
    publication.info ?? "",
    buildLinkCell(publication.link, publication.link_tag, `publication-link-${index}`, t("view")),
  ]),
});

export const buildAwardsTable = (awards: JsonAwards[], t: TranslateFn): DataTable => ({
  header: [t("yearMonth"), t("award"), t("workTitle"), t("event"), t("link")],
  body: awards.map((award, index) => [
    award.date,
    award.title,
    award.work_title,
    award.event ?? "",
    buildLinkCell(award.link, award.link_tag, `award-link-${index}`, t("view")),
  ]),
});

const buildAuthors = (
  items: string[],
  highlightIndex?: number,
  underlineIndex?: number,
  itemKeyPrefix?: string,
): ReactNode[] =>
  items.map((author, authorIndex) => {
    const key = `${itemKeyPrefix}-${author}`;
    const currentPosition = authorIndex + 1;
    const isHighlighted = currentPosition === highlightIndex;
    const isUnderlined = currentPosition === underlineIndex;

    if (isUnderlined && isHighlighted) {
      return (
        <strong key={key}>
          <span style={{textDecoration: "underline"}}>{author}</span>
        </strong>
      );
    }

    if (isUnderlined) {
      return (
        <span key={key} style={{textDecoration: "underline"}}>
          {author}
        </span>
      );
    }

    if (isHighlighted) {
      return (
        <strong key={key}>
          {author}
        </strong>
      );
    }

    return <span key={key}>{author}</span>;
  });

export const buildPapersTable = (papers: JsonPapers[], t: TranslateFn): DataTable => ({
  header: [t("yearMonth"), t("title"), t("authors"), t("venue"), t("link")],
  body: papers.map((paper, paperIndex) => {
    const authorsNodes = buildAuthors(paper.authors, paper.index_me, undefined, `paper-${paperIndex}`);
    return [
      formatYearMonth(paper.year, paper.month),
      paper.title,
      <ListComma key={`paper-authors-${paperIndex}`} items={authorsNodes} />,
      paper.venue ?? "",
      buildLinkCell(paper.link_href, paper.link_label, `paper-link-${paperIndex}`, t("view")),
    ];
  }),
});

export const buildPresentationsTable = (presentations: JsonPresentations[], t: TranslateFn): DataTable => ({
  header: [t("yearMonth"), t("title"), t("authors"), t("event"), t("link")],
  body: presentations.map((presentation, presentationIndex) => {
    const authorsNodes = buildAuthors(
      presentation.authors,
      presentation.index_me,
      presentation.index_presenter,
      `presentation-${presentationIndex}`,
    );

    return [
      formatYearMonth(presentation.year, presentation.month),
      presentation.title,
      <ListComma key={`presentation-authors-${presentationIndex}`} items={authorsNodes} />,
      presentation.event ?? "",
      buildLinkCell(presentation.link_href, presentation.link_label, `presentation-link-${presentationIndex}`, t("view")),
    ];
  }),
});
