import {Link} from "@carbon/react";

import type {DataTable} from "@/type/table";
import publications from "./publications.json";

const dataPublications: DataTable = {
  header: ["Year / Month", "Tag", "Title", "Info", "Link"],
  body: publications.map((publication, index) => [
    publication.date,
    publication.tag ?? "",
    publication.title,
    publication.info ?? "",
    publication.link ? (
      <Link key={`publication-link-${index}`} href={publication.link} target="_blank" rel="noopener noreferrer">
        {publication.link_tag ?? "View"}
      </Link>
    ) : (
      ""
    ),
  ]),
};

export default dataPublications;
