import {Link} from "@carbon/react";

import ListComma from "@/app/components/ListComma";
import type {DataTable} from "@/type/table";

const papers = [
  {
    year: 2025,
    month: 4,
    title: "Mining for lags in updating critical security threats: a case study of Log4j library",
    authors: [
      "Hidetake Tanaka",
      "Kazuma Yamasaki",
      "Momoka Hirose",
      "Takashi Nakano",
      "Youmei Fan",
      "Kazumasa Shimari",
      "Raula Gaikovina Kula",
      "Kenichi Matsumoto"
    ],
    index_me: 2,
    venue: "2025 IEEE/ACM 22nd International Conference on Mining Software Repositories (MSR 2025)",
    link_href: "https://arxiv.org/abs/2504.09834",
    link_label: "arXiv"
  },
  {
    year: 2025,
    month: 8,
    title: "Round Outcome Prediction in VALORANT Using Tactical Features from Video Analysis",
    authors: [
      "Nirai Hayakawa",
      "Kazumasa Shimari",
      "Kazuma Yamasaki",
      "Hirotatsu Hoshikawa",
      "Rikuto Tsuchida",
      "Kenichi Matsumoto",
    ],
    index_me: 3,
    venue: "2025 IEEE Conference on Games (CoG 2025)",
    link_href: "https://arxiv.org/abs/2510.17199",
    link_label: "arXiv"
  }
];

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
