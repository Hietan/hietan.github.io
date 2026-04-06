import ExternalLink from "@/app/components/ExternalLink";
import ResearchList from "@/app/components/ResearchList";
import type {JsonAwards} from "@/type/data";

import styles from "./AwardList.module.css";

type TranslateFn = (key: string) => string;

type Props = {
  awards: JsonAwards[];
  locale: string;
  tTags: TranslateFn;
  note?: string;
};

const AwardList = ({awards, locale, tTags, note}: Props) => {
  const items = awards.map(award => {
    const isJa = locale === "ja";
    const title = isJa && award.title ? award.title : (award.title_en ?? award.title);
    const organization = isJa
      ? award.organization
      : (award.organization_en ?? award.organization);

    return {
      content: (
        <>
          {award.category === "award" ? (
            <>
              <div className={styles.title}>{title}</div>
              {(award.event || award.work_title) && (
                <div className={styles.sub}>
                  {award.event}
                  {award.event && award.work_title && ", Title: "}
                  {award.work_title && `"${award.work_title}"`}
                </div>
              )}
            </>
          ) : (
            <>
              <div className={styles.title}>{title}</div>
              {(organization || award.amount) && (
                <div className={styles.organization}>
                  {organization}
                  {award.amount && <span className={styles.amount}>{award.amount}</span>}
                </div>
              )}
            </>
          )}
        </>
      ),
      date: award.date,
      linkArea: award.link && award.link_tag ? (
        <ExternalLink href={award.link}>[{award.link_tag}]</ExternalLink>
      ) : undefined,
      tags: award.tags,
    };
  });

  return (
    <>
      <ResearchList items={items} tTags={tTags} />
      {note && <p className={styles.note}>{note}</p>}
    </>
  );
};

export default AwardList;
