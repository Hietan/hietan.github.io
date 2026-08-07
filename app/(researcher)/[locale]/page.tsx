import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getTranslations, setRequestLocale} from "next-intl/server";

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
import {isSiteLocale, type SiteLocale} from "@/app/lib/i18n";
import {generatePersonJsonLd} from "@/app/lib/machineReadableResearch";
import {buildProfileMetadata} from "@/app/lib/profileMetadata";
import {researcherProfile} from "@/app/lib/researchProfile";

import styles from "./page.module.css";

type Props = {
  params: Promise<{locale: string}>;
};

const resolveLocale = async (params: Props["params"]): Promise<SiteLocale> => {
  const {locale} = await params;
  if (!isSiteLocale(locale)) {
    notFound();
  }
  return locale;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const t = await getTranslations({locale, namespace: "metadata"});

  return buildProfileMetadata({
    canonicalPath: `/${locale}`,
    description: t("description"),
    includeLanguageAlternates: true,
    locale,
    title: t("title"),
  });
}

export default async function Home({params}: Props) {
  const locale = await resolveLocale(params);
  setRequestLocale(locale);

  const t = await getTranslations();
  const tTable = await getTranslations("table");
  const tTags = await getTranslations("tags");
  const tInfo = await getTranslations("information");
  const tResearch = await getTranslations("researchInterest");
  const tEducation = await getTranslations("education");
  const primaryName = locale === "ja" ? researcherProfile.nameJa : researcherProfile.name;
  const alternateName = locale === "ja" ? researcherProfile.name : researcherProfile.nameJa;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonJsonLd(locale, {
            description: t("metadata.description"),
            title: t("metadata.title"),
          })),
        }}
      />
      <header className={styles.pageHeading}>
        <h1 className={styles.title}>
          <span lang={locale}>{primaryName}</span>{" "}
          <span className={styles.alternateName} lang={locale === "ja" ? "en" : "ja"}>
            ({alternateName})
          </span>
        </h1>
      </header>
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
