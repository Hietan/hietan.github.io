import { Link } from "@carbon/react";

import { LinkLabel } from "@/type/data";

import styles from "./LinkIconLabel.module.css";

type LinkIconLabelProps = LinkLabel;

const LinkIconLabel = ({ href, label, icon: Icon }: LinkIconLabelProps) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    <span className={styles.link}>
      <Icon size={20} />
      <span className={styles.label}>{label}</span>
    </span>
  </Link>
);

export default LinkIconLabel;
