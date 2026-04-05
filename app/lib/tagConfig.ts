export type TagStyle = {
  background: string;
  color: string;
};

export const TAG_STYLES: Record<string, TagStyle> = {
  first_author: {
    background: "#0f62fe",
    color: "#ffffff",
  },
  peer_reviewed: {
    background: "#198038",
    color: "#ffffff",
  },
  international: {
    background: "#6929c4",
    color: "#ffffff",
  },
  domestic: {
    background: "#9e5d00",
    color: "#ffffff",
  },
  oral: {
    background: "#00539a",
    color: "#ffffff",
  },
  poster: {
    background: "#005d5d",
    color: "#ffffff",
  },
};

export const DEFAULT_TAG_STYLE: TagStyle = {
  background: "#525252",
  color: "#ffffff",
};
