import {Tile} from "@carbon/react";

import ProfileCard, {type ProfileCardProps} from "@/app/components/ProfileCard";
import {LAYOUT_PADDING, SIDEBAR_WIDTH} from "@/app/lib/layout/constants";

type Props = ProfileCardProps;

export default function ProfileSidebar(props: Props) {
  return (
    <aside
      className="layout__sidebar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
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
