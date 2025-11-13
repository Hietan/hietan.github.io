import {Link} from "@carbon/react";

import ListComma from "@/app/components/ListComma";
import {formatYearMonth} from "@/app/data/research/papers";
import type {DataTable} from "@/type/table";

const presentations = [
  {
    year: 2025,
    month: 7,
    title: "マークル木を用いたライブラリ後方非互換性特定手法の大規模有用性評価に向けた自動化",
    authors: ["山﨑 和真", "嶋利 一真", "松本 健一"],
    index_presenter: 1,
    index_me: 1,
    event: "第220回 情報処理学会 ソフトウェア研究発表会 (IPSJ/SIGSE)",
    link_href: "https://ipsj.ixsq.nii.ac.jp/records/2003067",
    link_label: "View"
  },
  {
    year: 2025,
    month: 9,
    title: "破壊的変更を伴うライブラリ更新における移行ガイドの構成要素の分析",
    authors: ["門埜 孝拓", "嶋利 一真", "神田 哲也", "山﨑 和真", "松本 健一"],
    index_presenter: 1,
    index_me: 4,
    event: "ソフトウェアエンジニアリングシンポジウム2025 (SES 2025)",
    link_href: "https://ipsj.ixsq.nii.ac.jp/records/2004382",
    link_label: "View"
  }
];

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
