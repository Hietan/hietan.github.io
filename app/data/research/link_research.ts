import {Email, LogoGithub} from "@carbon/icons-react";
import {FaOrcid} from "react-icons/fa6"
import {SiGooglescholar} from "react-icons/si";
import {LinkLabel} from "@/type/data";

const linksResearch: LinkLabel[] = [
  {
    href: "mailto:yamasaki.kazuma.yj9@naist.ac.jp",
    label: "yamasaki.kazuma.yj9@naist.ac.jp",
    icon: Email
  },
  {
    href: "https://github.com/hietan",
    label: "@Hietan",
    icon: LogoGithub
  },
  {
    href: "https://orcid.org/0009-0001-2657-8682",
    label: "0009-0001-2657-8682",
    icon: FaOrcid
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.co.jp/citations?user=BpMVjB8AAAAJ&hl=ja",
    icon: SiGooglescholar,
  },
]

export default linksResearch;