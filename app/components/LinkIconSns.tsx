import {Link} from "@carbon/react";
import type {LinkSns} from "@/type/data";

type LinkIconSnsProps = LinkSns;

const LinkIconSns = ({href, ariaLabel, icon: Icon}: LinkIconSnsProps) => (
  <Link
    href={href}
    aria-label={ariaLabel}
    title={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span
      style={{
        width: 20,
        height: 20,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon size={20} />
    </span>
  </Link>
);

export default LinkIconSns;
