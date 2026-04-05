export type TagStyle = {
  background: string;
  color: string;
};

/**
 * 和風グリーン タグカラーパレット
 *
 * first_author  — 最深緑  (shinryoku / deep forest)
 * peer_reviewed — 抹茶    (matcha)
 * international — 苔色    (kokeiro / moss)
 * domestic      — 煎茶    (sencha / earthy brown-green)
 * oral          — 青竹    (aotake / green bamboo)
 * poster        — 若草    (wakakusa / young grass)
 */
export const TAG_STYLES: Record<string, TagStyle> = {
  first_author: {
    background: "#d6e8db",
    color: "#1a1a1a",
  },
  peer_reviewed: {
    background: "#dde8d8",
    color: "#1a1a1a",
  },
  international: {
    background: "#dfe8d0",
    color: "#1a1a1a",
  },
  domestic: {
    background: "#e8e0d0",
    color: "#1a1a1a",
  },
  oral: {
    background: "#d5e4de",
    color: "#1a1a1a",
  },
  poster: {
    background: "#dfe8d3",
    color: "#1a1a1a",
  },
  grant: {
    background: "#e8e4d0",
    color: "#1a1a1a",
  },
  scholarship: {
    background: "#d8e4e0",
    color: "#1a1a1a",
  },
  award: {
    background: "#e8e0d5",
    color: "#1a1a1a",
  },
  scholarship_exemption: {
    background: "#d5e0e8",
    color: "#1a1a1a",
  },
  msr: {
    background: "#dde8d8",
    color: "#1a1a1a",
  },
  ease: {
    background: "#d8e4e8",
    color: "#1a1a1a",
  },
  cog: {
    background: "#e8ddd8",
    color: "#1a1a1a",
  },
  core_a: {
    background: "#d0e0d8",
    color: "#1a1a1a",
  },
  presenter: {
    background: "#e0dcd5",
    color: "#1a1a1a",
  },
  force: {
    background: "#dde8d8",
    color: "#1a1a1a",
  },
};

export const DEFAULT_TAG_STYLE: TagStyle = {
  background: "#dde8dc",
  color: "#1a1a1a",
};
