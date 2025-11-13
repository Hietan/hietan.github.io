import {Link} from "@carbon/react";
import {LinkSns} from "@/type/data";

type LinkIconSnsProps = LinkSns;

const LinkIconSns = ({ href, ariaLabel, icon: Icon }: LinkIconSnsProps) => (
  <Link
    href={href}
    aria-label={ariaLabel}
    title={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span
      style={{
        width: 32,
        height: 32,
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