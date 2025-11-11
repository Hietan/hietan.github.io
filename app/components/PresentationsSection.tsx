import { Link, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Tile } from "@carbon/react";

type Presentation = {
  date: string; // YYYY-MM
  title: string;
  authors?: string | string[];
  event?: string; // Conference / Seminar / Meetup name
  link?: string; // slides or recording
  link_tag?: string; // e.g., Slides, Video
};

type Props = {
  items?: Presentation[];
  selfNames?: string[]; // names to underline in Authors
};

export default function PresentationsSection({
  items = [
    {
      date: "2025-07",
      title: "マークル木を用いたライブラリ後方非互換性特定手法の大規模有用性評価に向けた自動化",
      authors: ["山﨑 和真", "嶋利 一真", "松本 健一"],
      event: "第220回 情報処理学会 ソフトウェア研究発表会 (IPSJ/SIGSE)",
      link: "https://ipsj.ixsq.nii.ac.jp/records/2003067",
    },
    {
      date: "2025-09",
      title: "破壊的変更を伴うライブラリ更新における移行ガイドの構成要素の分析",
      authors: ["門埜 孝拓", "嶋利 一真", "神田 哲也", "山﨑 和真", "松本 健一"],
      event: "ソフトウェアエンジニアリングシンポジウム2025 (SES 2025)",
      link: "https://ipsj.ixsq.nii.ac.jp/records/2004382"
    },
  ],
  selfNames = ["Kazuma Yamasaki", "山﨑 和真", "Yamasaki Kazuma"],
}: Props) {
  const selfNamesLower = selfNames.map((s) => s.toLowerCase());

  const underlineInString = (text?: string) => {
    if (!text) return "";
    let earliestIndex = -1;
    let match = "";
    for (const target of selfNames) {
      const idx = text.toLowerCase().indexOf(target.toLowerCase());
      if (idx !== -1 && (earliestIndex === -1 || idx < earliestIndex)) {
        earliestIndex = idx;
        match = text.substr(idx, target.length);
      }
    }
    if (earliestIndex === -1) return text;
    const before = text.slice(0, earliestIndex);
    const after = text.slice(earliestIndex + match.length);
    return (
      <>
        {before}
        <span style={{ textDecoration: "underline" }}>{match}</span>
        {after}
      </>
    );
  };
  return (
    <Tile style={{ marginBottom: "1rem" }}>
      <h2 className="cds--type-productive-heading-02" style={{ marginBottom: "1rem" }}>
        Presentations
      </h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Year / Month</TableHeader>
            <TableHeader>Title</TableHeader>
            <TableHeader>Authors</TableHeader>
            <TableHeader>Event</TableHeader>
            <TableHeader>Link</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((p, idx) => {
            const authorsArr = Array.isArray(p.authors) ? p.authors : null;
            return (
              <TableRow key={`${p.title}-${p.date}-${idx}`}>
                <TableCell>{p.date}</TableCell>
                <TableCell>{p.title}</TableCell>
                <TableCell>
                  {authorsArr
                    ? authorsArr.map((name, i) => {
                        const isSelf = selfNamesLower.includes(name.toLowerCase());
                        return (
                          <span key={`${name}-${i}`}>
                            {isSelf ? (
                              <span style={{ textDecoration: "underline" }}>{name}</span>
                            ) : (
                              name
                            )}
                            {i < authorsArr.length - 1 ? ", " : ""}
                          </span>
                        );
                      })
                    : underlineInString(p.authors as string | undefined)}
                </TableCell>
                <TableCell>{p.event ?? ""}</TableCell>
                <TableCell>
                  {p.link ? (
                    <Link href={p.link} target="_blank" rel="noopener noreferrer">
                      {p.link_tag ?? "View"}
                    </Link>
                  ) : (
                    ""
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Tile>
  );
}
