import Image from "next/image";
import { Link, Tile } from "@carbon/react";
import { LogoGithub, Email, Link as LinkIcon } from "@carbon/icons-react";
import * as Fa6 from "react-icons/fa6";
import { FaXTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";
import { SIDEBAR_WIDTH } from "@/app/components/layoutConstants";

type ExternalLink = {
  label: string;
  href: string;
  extra_info: string;
  icon?: React.ComponentType<any>;
};

type Props = {
  photoSrc?: string;
  name_ja?: string;
  name_en?: string;
  affiliation?: string;
  links?: ExternalLink[];
  sns?: { href: string; ariaLabel: string; icon: React.ComponentType<any> }[];
};

export default function ProfileSidebar({
  photoSrc = "/Kazuma_Yamasaki.png",
  name_ja = "山﨑 和真",
  name_en = "Kazuma Yamasaki",
  affiliation = "Nara Institute of Science and Technology (NAIST)",
  links = [
    { label: "E-mail",
      href: "mailto:yamasaki.kazuma.yj9@naist.ac.jp",
      extra_info: "yamasaki.kazuma.yj9@naist.ac.jp",
      icon: Email },
    {
      label: "GitHub",
      href: "https://github.com/hietan",
      extra_info: "@Hietan",
      icon: LogoGithub
    },
    {
      label: "ORCID",
      href: "https://orcid.org/0009-0001-2657-8682",
      extra_info: "0009-0001-2657-8682",
    },
    {
      label: "Google Scholar",
      href: "https://scholar.google.co.jp/citations?user=BpMVjB8AAAAJ&hl=ja",
      extra_info: "",
      icon: ((Fa6 as any).FaGoogleScholar ?? SiGooglescholar) as React.ComponentType<any>,
    },
  ],
  sns = [
    { href: "#", ariaLabel: "X (Twitter)", icon: FaXTwitter },
    { href: "#", ariaLabel: "Instagram", icon: FaInstagram },
    { href: "#", ariaLabel: "Facebook", icon: FaFacebook },
    { href: "#", ariaLabel: "LinkedIn", icon: FaLinkedin },
  ],
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
            {links.map((l) => {
              const Icon = l.icon ?? LinkIcon;
              return (
                <Link key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <Icon size={20} />
                    {l.label}<br/>
                    {l.extra_info}
                  </span>
                </Link>
              );
            })}
          </nav>
          <div
            role="navigation"
            aria-label="Social media"
            style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginTop: "auto" }}
          >
            {sns.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.ariaLabel}
                  href={s.href}
                  aria-label={s.ariaLabel}
                  title={s.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    style={{
                      width: 32,
                      height: 32,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={20} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </Tile>
    </aside>
  );
}
