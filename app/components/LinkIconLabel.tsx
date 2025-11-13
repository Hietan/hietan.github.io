import { Link } from "@carbon/react";

import { LinkLabel } from "@/type/data";

type LinkIconLabelProps = LinkLabel;

const LinkIconLabel = ({ href, label, icon: Icon }: LinkIconLabelProps) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
      <Icon size={20} />
      {label}
    </span>
  </Link>
);

export default LinkIconLabel;
