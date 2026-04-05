import Link from "next/link";
import {FaFlask, FaCode, FaMusic} from "react-icons/fa6";

import {HEADER_HEIGHT} from "@/app/lib/layout/constants";

import styles from "./SiteHeader.module.css";

const navItems = [
  {label: "Researcher", href: "/", icon: FaFlask},
  {label: "Programmer", href: "https://github.com/Hietan", icon: FaCode},
  {label: "Musician", href: "#", icon: FaMusic},
];

const SiteHeader = () => (
  <header className={styles.header} style={{height: HEADER_HEIGHT}}>
    <nav className={styles.nav}>
      {navItems.map(({label, href, icon: Icon}) => (
        <Link
          key={label}
          href={href}
          className={styles.navItem}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          <Icon className={styles.icon} aria-hidden />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  </header>
);

export default SiteHeader;
