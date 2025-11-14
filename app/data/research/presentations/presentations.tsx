import {Link} from "@carbon/react";

import ListComma from "@/app/components/ListComma";
import {formatYearMonth} from "@/app/data/research/papers/papers";
import type {DataTable} from "@/type/table";
import presentations from "./presentations.json";

const dataPresentations: DataTable = {
  header: ["Year / Month", "Title", "Authors", "Event", "Link"],
  body: presentations.map((presentation, presentationIndex) => {
    const authorsNodes = presentation.authors.map((author, authorIndex) => {
      const currentPosition = authorIndex + 1;
      const isPresenter = currentPosition === presentation.index_presenter;
      const isMe = currentPosition === presentation.index_me;
      const key = `${presentationIndex}-${author}`;

      if (isPresenter && isMe) {
        return (
          <strong key={key}>
            <span style={{textDecoration: "underline"}}>{author}</span>
          </strong>
        );
      }

      if (isPresenter) {
        return (
          <span key={key} style={{textDecoration: "underline"}}>
            {author}
          </span>
        );
      }

      if (isMe) {
        return (
          <strong key={key}>
            {author}
          </strong>
        );
      }

      return <span key={key}>{author}</span>;
    });

    return [
      formatYearMonth(presentation.year, presentation.month),
      presentation.title,
      <ListComma key={`authors-${presentationIndex}`} items={authorsNodes} />,
      presentation.event ?? "",
      presentation.link_href ? (
        <Link key={`link-${presentationIndex}`} href={presentation.link_href} target="_blank" rel="noopener noreferrer">
          {presentation.link_label ?? "View"}
        </Link>
      ) : (
        ""
      ),
    ];
  }),
};

export default dataPresentations;
