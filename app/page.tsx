import Section from "@/app/components/Section";
import Table from "@/app/components/Table";
import TableRowHeader from "@/app/components/TableRowHeader";
import dataProfileInformation from "@/app/data/profile/information";
import dataResearchInterest from "@/app/data/profile/researchInterest";
import dataEducation from "@/app/data/research/education";
import dataPapers from "@/app/data/research/papers";
import dataPresentations from "@/app/data/research/presentations";
import dataWorks from "@/app/data/research/works";
import dataPublication from "@/app/data/research/publication";

export default function Home() {
  return (
    <>
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
      <Section title="Presentations">
        <Table data={dataPresentations} />
      </Section>
      <Section title="Works">
        <Table data={dataWorks} />
      </Section>
      <Section title="Publication">
        <Table data={dataPublication} />
      </Section>
    </>
  );
}
