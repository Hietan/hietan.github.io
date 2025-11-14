import {Link} from "@carbon/react";

import type {DataTable} from "@/type/table";
import works from "./works.json";

const dataWorks: DataTable = {
  header: ["Year / Month", "Title", "Venue", "Link"],
  body: works.map((work, index) => [
    work.date,
    work.title,
    work.venue ?? "",
    work.link ? (
      <Link key={`work-link-${index}`} href={work.link} target="_blank" rel="noopener noreferrer">
        {work.link_tag ?? "View"}
      </Link>
    ) : (
      ""
    ),
  ]),
};

export default dataWorks;
