import { Link, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Tile } from "@carbon/react";

type Publication = {
  date: string; // YYYY-MM
  authors?: string | string[];
  title: string;
  venue?: string;
  link?: string;
  link_tag?: string;
};

type Props = {
  items?: Publication[];
  selfNames?: string[]; // names to underline in Authors
};

export default function PapersSection({
  items = [
    {
      date: "2025-04",
      authors: ["Hidetake Tanaka", "Kazuma Yamasaki", "Momoka Hirose", "Takashi Nakano", "Youmei Fan", "Kazumasa Shimari", "Raula Gaikovina Kula", "Kenichi Matsumoto"],
      title: "Mining for lags in updating critical security threats: a case study of Log4j library",
      venue: "2025 IEEE/ACM 22nd International Conference on Mining Software Repositories (MSR 2025)",
      link: "https://arxiv.org/abs/2504.09834",
      link_tag: "arXiv"
    },
    {
      date: "2025-08",
      authors: ["Nirai Hayakawa", "Kazumasa Shimari", "Kazuma Yamasaki", "Hirotatsu Hoshikawa", "Rikuto Tsuchida", "Kenichi Matsumoto"],
      title: "Round Outcome Prediction in VALORANT Using Tactical Features from Video Analysis",
      venue: "2025 IEEE Conference on Games (CoG 2025)",
      link: "https://arxiv.org/abs/2510.17199",
      link_tag: "arXiv"
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
        Papers
      </h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Year / Month</TableHeader>
            <TableHeader>Title</TableHeader>
            <TableHeader>Authors</TableHeader>
            <TableHeader>Venue</TableHeader>
            <TableHeader>Link</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((p, idx) => {
            const authorsArr = Array.isArray(p.authors) ? p.authors : null;
            return (
              <TableRow key={`${p.title}-${idx}`}>
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
                <TableCell>{p.venue ?? ""}</TableCell>
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
