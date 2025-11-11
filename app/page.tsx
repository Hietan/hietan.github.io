import Image from "next/image";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Tile} from "@carbon/react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Tile>
          <h2 className="cds--type-productive-heading-02" style={{marginBottom: "1rem"}}>Profile Information</h2>
          <Table>
            <TableBody>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableCell>Kazuma Yamasaki (山﨑 和真)</TableCell>
              </TableRow>
              <TableRow>
                <TableHeader>Affiliation</TableHeader>
                <TableCell>Nara Institute of Science and Technology (NAIST), Japan</TableCell>
              </TableRow>
              <TableRow>
                <TableHeader>Laboratory</TableHeader>
                <TableCell>Software Engineering Laboratory</TableCell>
              </TableRow>
              <TableRow>
                <TableHeader>Degree</TableHeader>
                <TableCell>Ph.D. (Year1)</TableCell>
              </TableRow>
              <TableRow>
                <TableHeader>Email</TableHeader>
                <TableCell>yamasaki.kazuma.yj9@naist.ac.jp</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Tile>
        <Tile>
          <h2 className="cds--type-productive-heading-02" style={{marginBottom: "1rem"}}>Research Interest</h2>
          <Table>
            <TableBody>
              <TableRow>
                <TableHeader>Research Area</TableHeader>
                <TableCell>Software Engineering, Programming Language, Computer Science</TableCell>
              </TableRow>
              <TableRow>
                <TableHeader>Keywords</TableHeader>
                <TableCell>AI (Artificial Intelligence), LLM (Large Language Model), Software Library, Breaking Change</TableCell>
              </TableRow>
              <TableRow>
                <TableHeader>Research Topics</TableHeader>
                <TableCell>
                  <ul>
                    <li>AI oriented Programming Language (AIoPL)</li>
                    <li>Breaking Change Detection using Dynamic Analysis</li>
                    <li>Vulnerability Detection using LLMs</li>
                    <li>Analyzing Migration Guides in Software Libraries</li>
                  </ul>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Tile>
        <Tile>
          <h2 className="cds--type-productive-heading-02" style={{marginBottom: "1rem"}}>Education</h2>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Period</TableHeader>
                <TableHeader>Degree</TableHeader>
                <TableHeader>Institution</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>2020-04 ~ 2024-03</TableCell>
                <TableCell>Bachelor</TableCell>
                <TableCell>Doshisha University</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2024-04 ~ 2025-09</TableCell>
                <TableCell>Master</TableCell>
                <TableCell>Nara Institute of Science and Technology (NAIST)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2025-09 ~ Present</TableCell>
                <TableCell>Doctor</TableCell>
                <TableCell>Nara Institute of Science and Technology (NAIST)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Tile>
      </main>
    </div>
  );
}
