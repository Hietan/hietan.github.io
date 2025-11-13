import Image from "next/image";
import { Table as CarbonTable, TableBody, TableCell, TableHead, TableHeader, TableRow, Theme } from "@carbon/react";
import ProfileSidebar from "@/app/components/ProfileSidebar";
import { SIDEBAR_WIDTH } from "@/app/components/layoutConstants"
import WorksSection from "@/app/components/WorksSection";
import PublicationsExtraSection from "@/app/components/PublicationsExtraSection";
import Section from "@/app/components/Section";
import Table from "@/app/components/Table";
import dataEducation from "@/app/data/research/education";
import dataPapers from "@/app/data/research/papers";
import dataPresentations from "@/app/data/research/presentations";

export default function Home() {
  return (
    <>
      <ProfileSidebar />
      <main className="p-5" style={{ marginLeft: SIDEBAR_WIDTH }}>
        <Section title="Profile Information" style={{ marginBottom: "1rem" }}>
          <Theme theme="g10">
            <CarbonTable>
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
            </CarbonTable>
          </Theme>
        </Section>
        <Section title="Research Interest" style={{ marginBottom: "1rem" }}>
          <Theme theme="g10">
            <CarbonTable>
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
            </CarbonTable>
          </Theme>
        </Section>
        <Section title="Education" style={{ marginBottom: "1rem" }}>
          <Table data={dataEducation} />
        </Section>
        <Section title="Papers" style={{ marginBottom: "1rem" }}>
          <Table data={dataPapers} />
        </Section>
        <Section title="Presentations" style={{ marginBottom: "1rem" }}>
          <Table data={dataPresentations} />
        </Section>
        <WorksSection />
        <PublicationsExtraSection />
      </main>
    </>
  );
}
