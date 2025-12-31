import {Link} from "@carbon/react";
import type {ReactNode} from "react";

import ListComma from "@/app/components/ListComma";
import type {JsonAwards, JsonPapers, JsonPresentations, JsonPublications, JsonWorks} from "@/type/data";
import type {DataTable} from "@/type/table";

const buildLinkCell = (href?: string, label?: string, key?: string) =>
  href ? (
    <Link key={key} href={href} target="_blank" rel="noopener noreferrer">
      {label ?? "View"}
    </Link>
  ) : (
    ""
  );

const formatYearMonth = (year: number, month: number) => {
  const paddedMonth = month.toString().padStart(2, "0");
  return `${year}-${paddedMonth}`;
};

export const buildWorksTable = (works: JsonWorks[]): DataTable => ({
  header: ["Year / Month", "Title", "Venue", "Link"],
  body: works.map((work, index) => [
    work.date,
    work.title,
    work.venue ?? "",
    buildLinkCell(work.link, work.link_tag, `work-link-${index}`),
  ]),
});

export const buildPublicationsTable = (publications: JsonPublications[]): DataTable => ({
  header: ["Year / Month", "Tag", "Title", "Info", "Link"],
  body: publications.map((publication, index) => [
    publication.date,
    publication.tag ?? "",
    publication.title,
    publication.info ?? "",
    buildLinkCell(publication.link, publication.link_tag, `publication-link-${index}`),
  ]),
});

export const buildAwardsTable = (awards: JsonAwards[]): DataTable => ({
  header: ["Year / Month", "Award", "Work Title", "Event", "Link"],
  body: awards.map((award, index) => [
    award.date,
    award.title,
    award.work_title,
    award.event ?? "",
    buildLinkCell(award.link, award.link_tag, `award-link-${index}`),
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

export const buildPapersTable = (papers: JsonPapers[]): DataTable => ({
  header: ["Year / Month", "Title", "Authors", "Venue", "Link"],
  body: papers.map((paper, paperIndex) => {
    const authorsNodes = buildAuthors(paper.authors, paper.index_me, undefined, `paper-${paperIndex}`);
    return [
      formatYearMonth(paper.year, paper.month),
      paper.title,
      <ListComma key={`paper-authors-${paperIndex}`} items={authorsNodes} />,
      paper.venue ?? "",
      buildLinkCell(paper.link_href, paper.link_label, `paper-link-${paperIndex}`),
    ];
  }),
});

export const buildPresentationsTable = (presentations: JsonPresentations[]): DataTable => ({
  header: ["Year / Month", "Title", "Authors", "Event", "Link"],
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
      buildLinkCell(presentation.link_href, presentation.link_label, `presentation-link-${presentationIndex}`),
    ];
  }),
});
