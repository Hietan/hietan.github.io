import { Link, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Theme } from "@carbon/react";
import Section from "@/app/components/Section";

type PubItem = {
  date: string; // YYYY-MM
  tag?: string; // e.g., Journal, Conference, Preprint
  title: string;
  info?: string; // e.g., venue, volume/issue, notes
  link?: string;
  link_tag?: string; // e.g., DOI, PDF, arXiv
};

type Props = {
  items?: PubItem[];
};

export default function PublicationsExtraSection({
  items = [
    {
      date: "2024-10",
      tag: "Book",
      title: "高校生のデータサイエンス・Python でも 77 本ノック: NAIST STELLA プログラム\"「共創」 が育む主体性の未来\" 学習教材",
      info: "著者：金谷 重彦，平尾 俊貴，小笠原 司，松本 健一，嶋利 一真，工藤 拓斗，田中 英武，山﨑 和真，張 凡",
      link:"https://naist.repo.nii.ac.jp/records/2000576"
    },
    {
      date: "2024-10",
      tag: "Book",
      title: "データサイエンスで考える理数探究基礎「未来に向かって」Python版",
      info: "著者：張 凡、今西 温輝、金谷 重彦、松本 健一、平尾 俊貴、嶋利 一真、工藤 拓斗、田中 英武、山﨑 和真、德永 眞一郎、三宅 雅人、小笠原 司、奈良先端科学技術大学院大学NAIST STELLAプログラム運営委員会",
      link: "https://naist.repo.nii.ac.jp/records/2000577",
    },
  ],
}: Props) {
  return (
    <Section title="Publications" style={{ marginBottom: "1rem" }}>
      <Theme theme="g10">
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Year / Month</TableHeader>
              <TableHeader>Tag</TableHeader>
              <TableHeader>Title</TableHeader>
              <TableHeader>Info</TableHeader>
              <TableHeader>Link</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((p, idx) => (
              <TableRow key={`${p.title}-${p.date}-${idx}`}>
                <TableCell>{p.date}</TableCell>
                <TableCell>{p.tag ?? ""}</TableCell>
                <TableCell>{p.title}</TableCell>
                <TableCell>{p.info ?? ""}</TableCell>
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
            ))}
          </TableBody>
        </Table>
      </Theme>
    </Section>
  );
}
