import type {ReactNode} from "react";

const buildAuthors = (
  items: string[],
  highlightIndex?: number,
  underlineIndex?: number,
): ReactNode[] =>
  items.map((author, i) => {
    const key = `author-${i}-${author}`;
    const pos = i + 1;
    const isHighlighted = pos === highlightIndex;
    const isUnderlined = pos === underlineIndex;

    if (isHighlighted && isUnderlined) {
      return (
        <strong key={key}>
          <span style={{textDecoration: "underline"}}>{author}</span>
        </strong>
      );
    }
    if (isUnderlined) {
      return (
        <span key={key} style={{textDecoration: "underline"}}>
          {author}
        </span>
      );
    }
    if (isHighlighted) {
      return <strong key={key}>{author}</strong>;
    }
    return <span key={key}>{author}</span>;
  });

export default buildAuthors;
