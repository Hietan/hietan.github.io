import type {IconType} from "react-icons";

export type Icon = IconType | CarbonIconComponent;

export type LinkLabel = {
  href: string;
  label: string;
  icon?: Icon;
}

export type LinkSns = {
  href: string;
  ariaLabel: string;
  icon: Icon;
};