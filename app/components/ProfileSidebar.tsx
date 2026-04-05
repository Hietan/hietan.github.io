import {Tile} from "@carbon/react";

import ProfileCard, {type ProfileCardProps} from "@/app/components/ProfileCard";
import {HEADER_HEIGHT, LAYOUT_PADDING, SIDEBAR_WIDTH} from "@/app/lib/layout/constants";

type Props = ProfileCardProps;

export default function ProfileSidebar(props: Props) {
  return (
    <aside
      className="layout__sidebar"
      style={{
        position: "fixed",
        top: HEADER_HEIGHT,
        left: 0,
        height: `calc(100vh - ${HEADER_HEIGHT})`,
        width: SIDEBAR_WIDTH,
        padding: LAYOUT_PADDING,
        background: "var(--cds-layer)",
        borderRight: "1px solid var(--cds-border-subtle)",
        boxSizing: "border-box",
        zIndex: 10,
      }}
      aria-label="Profile sidebar"
    >
      <Tile style={{height: "100%", padding: 0}}>
        <ProfileCard {...props} variant="sidebar" />
      </Tile>
    </aside>
  );
}
