import type {IconType} from "react-icons";

export type Icon = IconType | CarbonIconComponent;

export type LinkLabel = {
  href: string;
  label: string;
  icon?: Icon;
};

export type LinkSns = {
  href: string;
  ariaLabel: string;
  icon: Icon;
};

export type JsonWorks = {
  date: string;
  title: string;
  venue?: string;
  link?: string;
  link_tag?: string;
};

export type JsonPublications = {
  date: string;
  tag?: string;
  title: string;
  info?: string;
  link?: string;
  link_tag?: string;
};

export type JsonPapers = {
  year: number;
  month: number;
  title: string;
  authors: string[];
  index_me?: number;
  venue?: string;
  link_href?: string;
  link_label?: string;
  tags?: string[];
};

export type JsonPresentations = {
  year: number;
  month: number;
  title: string;
  authors: string[];
  index_presenter: number;
  index_me: number;
  event?: string;
  link_href?: string;
  link_label?: string;
};

export type JsonAwards = {
  date: string;
  category?: "award" | "grant" | "scholarship";
  title: string;
  title_en?: string;
  work_title?: string;
  event?: string;
  organization?: string;
  organization_en?: string;
  amount?: string;
  link?: string;
  link_tag?: string;
  tags?: string[];
};
