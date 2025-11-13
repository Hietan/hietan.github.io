import Image from "next/image";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow, Theme} from "@carbon/react";
import ProfileSidebar from "@/app/components/ProfileSidebar";
import { SIDEBAR_WIDTH } from "@/app/components/layoutConstants";
import PapersSection from "@/app/components/PapersSection";
import PresentationsSection from "@/app/components/PresentationsSection";
import WorksSection from "@/app/components/WorksSection";
import PublicationsExtraSection from "@/app/components/PublicationsExtraSection";
import Section from "@/app/components/Section";

export default function Home() {
  return (
    <>
      <ProfileSidebar />
      <main className="p-5" style={{ marginLeft: SIDEBAR_WIDTH }}>
        <Section title="Profile Information" style={{ marginBottom: "1rem" }}>
          <Theme theme="g10">
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
          </Theme>
        </Section>
        <Section title="Research Interest" style={{ marginBottom: "1rem" }}>
          <Theme theme="g10">
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
          </Theme>
        </Section>
        <Section title="Education" style={{ marginBottom: "1rem" }}>
          <Theme theme="g10">
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
          </Theme>
        </Section>
        <PapersSection />
        <PresentationsSection />
        <WorksSection />
        <PublicationsExtraSection />
      </main>
    </>
  );
}
