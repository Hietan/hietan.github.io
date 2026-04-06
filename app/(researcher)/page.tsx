import {getLocale, getTranslations} from "next-intl/server";
import AwardList from "@/app/components/AwardList";
import PaperList from "@/app/components/PaperList";
import PresentationList from "@/app/components/PresentationList";
import ProfileCard from "@/app/components/ProfileCard";
import PublicationList from "@/app/components/PublicationList";
import WorkList from "@/app/components/WorkList";
import Section from "@/app/components/Section";
import Table from "@/app/components/Table";
import TableRowHeader from "@/app/components/TableRowHeader";
import {buildProfileInformation} from "@/app/data/profile/information";
import {buildResearchInterest} from "@/app/data/profile/researchInterest";
import {buildEducation} from "@/app/data/research/education";
import awards from "@/app/data/research/awards";
import papers from "@/app/data/research/papers";
import presentations from "@/app/data/research/presentations";
import works from "@/app/data/research/works";
import publications from "@/app/data/research/publications";

export default async function Home() {
  const locale = await getLocale();
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
      <Section title={t("sections.awards")}>
        <AwardList awards={awards} locale={locale} tTags={tTags} note={t("sections.awardsNote")} />
      </Section>
      <Section title={t("sections.papers")}>
        <PaperList papers={papers} t={tTable} tTags={tTags} />
      </Section>
      <Section title={t("sections.presentations")}>
        <PresentationList presentations={presentations} tTags={tTags} />
      </Section>
      <Section title={t("sections.activities")}>
        <WorkList works={works} tTags={tTags} />
      </Section>
      <Section title={t("sections.publications")}>
        <PublicationList publications={publications} tTags={tTags} />
      </Section>
    </>
  );
}
