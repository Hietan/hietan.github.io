import Image from "next/image";

import LinkList from "@/app/components/LinkList";
import SnsList from "@/app/components/SnsList";
import linksResearch from "@/app/data/research/link_research";
import linksSns from "@/app/data/general/link_sns";
import type {LinkLabel, LinkSns} from "@/type/data";

import styles from "./ProfileCard.module.css";

const cx = (...classes: Array<string | false | undefined>) => classes.filter(Boolean).join(" ");

type Variant = "sidebar" | "hero";

export type ProfileCardProps = {
  photoSrc?: string;
  nameJa?: string;
  nameEn?: string;
  role?: string;
  affiliation?: string;
  ofText?: string;
  links?: LinkLabel[];
  sns?: LinkSns[];
  variant?: Variant;
};

const ProfileCard = ({
  photoSrc = "/img/Kazuma_Yamasaki.png",
  nameJa = "山﨑 和真",
  nameEn = "Kazuma Yamasaki",
  role = "Ph.D. Student",
  affiliation = "Nara Institute of Science and Technology (NAIST)",
  ofText = "of",
  links = linksResearch,
  sns = linksSns,
  variant = "sidebar",
}: ProfileCardProps) => {
  const isHero = variant === "hero";

  return (
    <div className={cx(styles.profileCard, isHero ? styles.hero : styles.sidebar)}>
      <div className={cx(styles.media, isHero ? styles.heroMedia : undefined)}>
        <Image
          src={photoSrc}
          alt={nameEn}
          width={500}
          height={500}
          style={{objectFit: "cover", width: "100%", height: "100%"}}
        />
      </div>
      <div className={cx(styles.content, isHero ? styles.heroContent : undefined)}>
        <div className={styles.info}>
          <div className={styles.nameJa}>{nameJa}</div>
          <div className={styles.nameEn}>{nameEn}</div>
          <div className={styles.meta}>
            <p>
              <strong>{role}</strong>{ofText ? <> <small>{ofText}</small></> : null}
            </p>
            <p>
              <strong>{affiliation}</strong>
            </p>
          </div>
        </div>
      </div>
      {(links?.length ?? 0) > 0 && (
        <LinkList items={links} orientation="vertical" className={cx(styles.links, isHero ? styles.heroLinks : undefined)} />
      )}
      {(sns?.length ?? 0) > 0 && (
        <SnsList
          items={sns ?? []}
          orientation={isHero ? "vertical" : "horizontal"}
          className={isHero ? styles.heroSns : styles.sidebarSns}
        />
      )}
    </div>
  );
};

export default ProfileCard;
