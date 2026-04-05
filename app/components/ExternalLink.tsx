import {Link} from "@carbon/react";
import type {ReactNode} from "react";

type Props = {
  href: string;
  children: ReactNode;
};

const ExternalLink = ({href, children}: Props) => (
  <Link href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);

export default ExternalLink;
