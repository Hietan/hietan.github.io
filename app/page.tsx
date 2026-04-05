import {getTranslations} from "next-intl/server";
import ProfileCard from "@/app/components/ProfileCard";
import Section from "@/app/components/Section";
import Table from "@/app/components/Table";
import TableRowHeader from "@/app/components/TableRowHeader";
import PaperList from "@/app/components/PaperList";
import {buildProfileInformation} from "@/app/data/profile/information";
import {buildResearchInterest} from "@/app/data/profile/researchInterest";
import {buildEducation} from "@/app/data/research/education";
import papers from "@/app/data/research/papers";
import awards from "@/app/data/research/awards";
import presentations from "@/app/data/research/presentations";
import works from "@/app/data/research/works";
import publications from "@/app/data/research/publications";
import {
  buildAwardsTable,
  buildPresentationsTable,
  buildWorksTable,
  buildPublicationsTable,
} from "@/app/lib/tableBuilders/research";

export default async function Home() {
  const t = await getTranslations();
  const tTable = await getTranslations("table");
  const tTags = await getTranslations("tags");
  const tInfo = await getTranslations("information");
  const tResearch = await getTranslations("researchInterest");
  const tEducation = await getTranslations("education");

  return (
    <>
      <Section className="profile-hero-section">
        <ProfileCard
          variant="hero"
          role={t("profile.role")}
          affiliation={t("profile.affiliation")}
          ofText={t("profile.of")}
        />
      </Section>
      <Section title={t("sections.profileInformation")}>
        <TableRowHeader data={buildProfileInformation(tInfo)} />
      </Section>
      <Section title={t("sections.researchInterest")}>
        <TableRowHeader data={buildResearchInterest(tResearch)} />
      </Section>
      <Section title={t("sections.education")}>
        <Table data={buildEducation(tEducation)} />
      </Section>
      <Section title={t("sections.papers")}>
        <PaperList papers={papers} t={tTable} tTags={tTags} />
      </Section>
      <Section title={t("sections.awards")}>
        <Table data={buildAwardsTable(awards, tTable)} />
      </Section>
      <Section title={t("sections.presentations")}>
        <Table data={buildPresentationsTable(presentations, tTable)} />
      </Section>
      <Section title={t("sections.activities")}>
        <Table data={buildWorksTable(works, tTable)} />
      </Section>
      <Section title={t("sections.publications")}>
        <Table data={buildPublicationsTable(publications, tTable)} />
      </Section>
    </>
  );
}
