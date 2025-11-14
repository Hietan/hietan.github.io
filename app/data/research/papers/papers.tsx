import {Link} from "@carbon/react";

import ListComma from "@/app/components/ListComma";
import type {DataTable} from "@/type/table";
import papers from "./papers.json";

export const formatYearMonth = (year: number, month: number) => {
  const paddedMonth = month.toString().padStart(2, "0");
  return `${year}-${paddedMonth}`;
};

const dataPapers: DataTable = {
  header: [
    "Year / Month",
    "Title",
    "Authors",
    "Venue",
    "Link"
  ],
  body: papers.map((paper, paperIndex) => {
    const authorsNodes = paper.authors.map((author, authorIndex) => {
      const isMe = authorIndex + 1 === paper.index_me;
      const key = `${paperIndex}-${author}`;

      return isMe ? <strong key={key}>{author}</strong> : <span key={key}>{author}</span>;
    });

    return [
      formatYearMonth(paper.year, paper.month),
      paper.title,
      <ListComma key={`authors-${paperIndex}`} items={authorsNodes} />,
      paper.venue ?? "",
      paper.link_href ? (
        <Link key={`link-${paperIndex}`} href={paper.link_href} target="_blank" rel="noopener noreferrer">
          {paper.link_label ?? "View"}
        </Link>
      ) : (
        ""
      ),
    ];
  })
};

export default dataPapers;
