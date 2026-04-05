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
    background: "#1e3325",
    color: "#ffffff",
  },
  peer_reviewed: {
    background: "#3d6349",
    color: "#ffffff",
  },
  international: {
    background: "#4a5e35",
    color: "#ffffff",
  },
  domestic: {
    background: "#6b5c35",
    color: "#ffffff",
  },
  oral: {
    background: "#3b5248",
    color: "#ffffff",
  },
  poster: {
    background: "#5a6e40",
    color: "#ffffff",
  },
};

export const DEFAULT_TAG_STYLE: TagStyle = {
  background: "#3d4a3e",
  color: "#ffffff",
};
