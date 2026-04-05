import cx from "@/app/lib/cx";
import LinkIconLabel from "@/app/components/LinkIconLabel";
import type {LinkLabel} from "@/type/data";

import styles from "./LinkList.module.css";

type Orientation = "vertical" | "horizontal";

type Props = {
  items: LinkLabel[];
  orientation?: Orientation;
  className?: string;
  ariaLabel?: string;
};

const LinkList = ({items, orientation = "vertical", className, ariaLabel = "External links"}: Props) => {
  const orientationClass = orientation === "horizontal" ? styles.horizontal : styles.vertical;

  return (
    <nav aria-label={ariaLabel} className={cx(styles.list, orientationClass, className)}>
      {items.map(item => (
        <LinkIconLabel key={item.label} {...item} />
      ))}
    </nav>
  );
};

export default LinkList;
