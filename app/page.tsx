import ProfileCard from "@/app/components/ProfileCard";
import Section from "@/app/components/Section";
import Table from "@/app/components/Table";
import TableRowHeader from "@/app/components/TableRowHeader";
import dataProfileInformation from "@/app/data/profile/information";
import dataResearchInterest from "@/app/data/profile/researchInterest";
import dataEducation from "@/app/data/research/education";
import dataAwards from "@/app/data/research/awards";
import dataPapers from "@/app/data/research/papers";
import dataPresentations from "@/app/data/research/presentations";
import dataWorks from "@/app/data/research/works";
import dataPublications from "@/app/data/research/publications";

export default function Home() {
  return (
    <>
      <Section className="profile-hero-section">
        <ProfileCard variant="hero" />
      </Section>
      <Section title="Profile Information">
        <TableRowHeader data={dataProfileInformation} />
      </Section>
      <Section title="Research Interest">
        <TableRowHeader data={dataResearchInterest} />
      </Section>
      <Section title="Education">
        <Table data={dataEducation} />
      </Section>
      <Section title="Papers">
        <Table data={dataPapers} />
      </Section>
      <Section title="Awards">
        <Table data={dataAwards} />
      </Section>
      <Section title="Presentations">
        <Table data={dataPresentations} />
      </Section>
      <Section title="Activities">
        <Table data={dataWorks} />
      </Section>
      <Section title="Publications">
        <Table data={dataPublications} />
      </Section>
    </>
  );
}
