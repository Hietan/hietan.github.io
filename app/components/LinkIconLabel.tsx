import ExternalLink from "@/app/components/ExternalLink";
import type {LinkLabel} from "@/type/data";

import styles from "./LinkIconLabel.module.css";

type LinkIconLabelProps = LinkLabel;

const LinkIconLabel = ({href, label, icon: Icon}: LinkIconLabelProps) => (
  <ExternalLink href={href}>
    <span className={styles.link}>
      <Icon size={20} />
      <span className={styles.label}>{label}</span>
    </span>
  </ExternalLink>
);

export default LinkIconLabel;
