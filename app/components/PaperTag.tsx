import {DEFAULT_TAG_STYLE, TAG_STYLES} from "@/app/lib/tagConfig";
import styles from "./PaperTag.module.css";

type TranslateFn = (key: string) => string;

type Props = {
  tag: string;
  t: TranslateFn;
};

const PaperTag = ({tag, t}: Props) => {
  const style = TAG_STYLES[tag] ?? DEFAULT_TAG_STYLE;
  const label = t(tag) !== tag ? t(tag) : tag;

  return (
    <span
      className={styles.tag}
      style={{background: style.background, color: style.color, borderColor: "rgba(0,0,0,0.15)"}}
    >
      {label}
    </span>
  );
};

export default PaperTag;
