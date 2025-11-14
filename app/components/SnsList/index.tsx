import LinkIconSns from "@/app/components/LinkIconSns";
import type {LinkSns} from "@/type/data";

import styles from "./SnsList.module.css";

type Orientation = "horizontal" | "vertical";

type Props = {
  items: LinkSns[];
  orientation?: Orientation;
  className?: string;
};

const cx = (...classes: Array<string | false | undefined>) => classes.filter(Boolean).join(" ");

const SnsList = ({items, orientation = "horizontal", className}: Props) => {
  const isVertical = orientation === "vertical";

  return (
    <div
      role="navigation"
      aria-label="Social media"
      className={cx(styles.snsList, isVertical ? styles.vertical : styles.horizontal, className)}
    >
      {items.map(item => (
        <LinkIconSns key={item.ariaLabel} {...item} />
      ))}
    </div>
  );
};

export default SnsList;
