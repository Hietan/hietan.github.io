import Image from "next/image";
import { Tile } from "@carbon/react";
import { SIDEBAR_WIDTH } from "@/app/components/layoutConstants";

import linksSns from "@/app/data/general/link_sns";

import LinkIconSns from "@/app/components/LinkIconSns";
import LinkIconLabel from "@/app/components/LinkIconLabel";

import linksResearch from "@/app/data/research/link_research";
import {LinkSns, LinkLabel } from "@/type/data";

type Props = {
  photoSrc?: string;
  name_ja?: string;
  name_en?: string;
  affiliation?: string;
  links?: LinkLabel[];
  sns?: LinkSns[];
};

export default function ProfileSidebar({
  photoSrc = "/img/Kazuma_Yamasaki.png",
  name_ja = "山﨑 和真",
  name_en = "Kazuma Yamasaki",
  affiliation = "Nara Institute of Science and Technology (NAIST)",
  links = linksResearch,
  sns = linksSns,
}: Props) {
  return (
    <aside
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: SIDEBAR_WIDTH,
        padding: "1rem",
        background: "var(--cds-layer)",
        borderRight: "1px solid var(--cds-border-subtle)",
        boxSizing: "border-box",
        zIndex: 10,
      }}
      aria-label="Profile sidebar"
    >
      <Tile style={{ height: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", minHeight: "100%" }}>
          <div
            style={{
              width: "100%",
              aspectRatio: "1 / 1",
              overflow: "hidden",
              border: "1px solid var(--cds-border-subtle)",
              flex: "0 0 auto",
            }}
          >
            <Image
              src={photoSrc}
              alt={name_en}
              width={500}
              height={500}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div>
            <div
              className="cds--type-productive-heading-02"
              style={{
                fontWeight: "bold",
                fontSize: "2em",
                lineHeight: 1.5
              }}
            >
              {name_ja}
            </div>
            <div
              className="cds--type-productive-heading-02"
              style={{
                fontWeight: "bold",
                fontSize: "1.5em",
                lineHeight: 1.5
              }}
            >
              {name_en}
            </div>
            <div className="cds--label-01" style={{ color: "var(--cds-text-secondary)" }}>
              {affiliation}
            </div>
          </div>

          <nav aria-label="External links" style={{ display: "grid", gap: "0.5rem" }}>
            {links.map((l) => (
              <LinkIconLabel key={l.label} {...l} />
            ))}
          </nav>
          <div
            role="navigation"
            aria-label="Social media"
            style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginTop: "auto" }}
          >
            {sns.map((s) => (
              <LinkIconSns key={s.ariaLabel} {...s} />
            ))}
          </div>
        </div>
      </Tile>
    </aside>
  );
}
