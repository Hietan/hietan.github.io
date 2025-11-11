import Image from "next/image";
import { Link, Tile } from "@carbon/react";
import { LogoGithub, Email, Link as LinkIcon } from "@carbon/icons-react";
import { SIDEBAR_WIDTH } from "@/app/components/layoutConstants";

type ExternalLink = {
  label: string;
  href: string;
  icon?: React.ComponentType<any>;
};

type Props = {
  photoSrc?: string;
  name?: string;
  affiliation?: string;
  links?: ExternalLink[];
};

export default function ProfileSidebar({
  photoSrc = "/vercel.svg",
  name = "Kazuma Yamasaki (山﨑 和真)",
  affiliation = "Nara Institute of Science and Technology (NAIST)",
  links = [
    { label: "GitHub", href: "https://github.com/hietan", icon: LogoGithub },
    { label: "Website", href: "https://hietan.github.io", icon: LinkIcon },
    { label: "Email", href: "mailto:yamasaki.kazuma.yj9@naist.ac.jp", icon: Email },
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
      <Tile style={{ height: "auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                overflow: "hidden",
                border: "1px solid var(--cds-border-subtle)",
                flex: "0 0 auto",
              }}
            >
              <Image src={photoSrc} alt={name} width={56} height={56} />
            </div>
            <div>
              <div className="cds--type-productive-heading-02" style={{ lineHeight: 1.2 }}>
                {name}
              </div>
              <div className="cds--label-01" style={{ color: "var(--cds-text-secondary)" }}>
                {affiliation}
              </div>
            </div>
          </div>

          <nav aria-label="External links" style={{ display: "grid", gap: "0.5rem" }}>
            {links.map((l) => {
              const Icon = l.icon ?? LinkIcon;
              return (
                <Link key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <Icon size={20} />
                    {l.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </Tile>
    </aside>
  );
}
