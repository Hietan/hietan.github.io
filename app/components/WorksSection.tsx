import { Link, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Tile } from "@carbon/react";

type Work = {
  date: string; // YYYY-MM
  title: string;
  venue?: string;
  link?: string;
  link_tag?: string;
};

type Props = {
  items?: Work[];
};

export default function WorksSection({
  items = [
    {
      date: "2024-11",
      title: "Organizing Committee (Wakate Team)",
      venue: "The First International Workshop on Intertwining Research & Education on Software (WIREDS 2024)",
      link: "https://wireds2024.github.io/",
      link_tag: "WIREDS 2024",
    },
    {
      date: "2025-10",
      title: "Program Committee in Technical Papers (Junior-PC)",
      venue: "2026 IEEE/ACM 23nd International Conference on Mining Software Repositories (MSR 2026)",
      link: "https://2026.msrconf.org/committee/msr-2026-junior-pc-technical-papers---junior-program-committee",
      link_tag: "MSR 2026",
    },
    {
      date: "2025-11",
      title: "Organizing Committee (Student Volunteer)",
      venue: "AI-Driven Software Engineering Summit for Fostering Next-Generation Researchers",
      link: "https://posl.ait.kyushu-u.ac.jp/~aidriven2025/",
      link_tag: "AI-Driven 2025"
    },
    {
      date: "2025-12",
      title: "Organizing Committee",
      venue: "1st Workshop for Green AI Application (GAIA) & 6th Workshop for Next-Generation Software Ecosystems (ECO)",
      link: "https://naist-se.github.io/HP_Workshop_GAIA_ECO/",
      link_tag: "GAIA 2025, ECO 2025"
    }
  ],
}: Props) {
  return (
    <Tile style={{ marginBottom: "1rem" }}>
      <h2 className="cds--type-productive-heading-02" style={{ marginBottom: "1rem" }}>
        Works
      </h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Year / Month</TableHeader>
            <TableHeader>Title</TableHeader>
            <TableHeader>Venue</TableHeader>
            
            <TableHeader>Link</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((w, idx) => (
            <TableRow key={`${w.title}-${w.date}-${idx}`}>
              <TableCell>{w.date}</TableCell>
              <TableCell>{w.title}</TableCell>
              <TableCell>{w.venue ?? ""}</TableCell>
              
              <TableCell>
                {w.link ? (
                  <Link href={w.link} target="_blank" rel="noopener noreferrer">
                    {w.link_tag ?? "View"}
                  </Link>
                ) : (
                  ""
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Tile>
  );
}
