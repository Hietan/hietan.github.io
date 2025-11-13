import type {ReactNode} from "react";

type ListCommaProps = {
  items: ReactNode[];
  separator?: ReactNode;
};

const DEFAULT_SEPARATOR = ", ";

const ListComma = ({items, separator = DEFAULT_SEPARATOR}: ListCommaProps) => (
  <>
    {items.map((item, index) => (
      <span key={index}>
        {item}
        {index < items.length - 1 ? separator : null}
      </span>
    ))}
  </>
);

export default ListComma;
