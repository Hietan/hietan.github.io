import Link from "next/link";
import {getLocale} from "next-intl/server";
import {FaFlask, FaCode, FaMusic} from "react-icons/fa6";

import LangSwitcher from "@/app/components/LangSwitcher";
import {DEFAULT_SITE_LOCALE, getProfilePath, isSiteLocale} from "@/app/lib/i18n";
import {HEADER_HEIGHT} from "@/app/lib/layout/constants";

import styles from "./SiteHeader.module.css";

const SiteHeader = async () => {
  const requestLocale = await getLocale();
  const locale = isSiteLocale(requestLocale) ? requestLocale : DEFAULT_SITE_LOCALE;
  const navItems = [
    {label: "Researcher", href: getProfilePath(locale), icon: FaFlask},
    {label: "Programmer", href: "/programming", icon: FaCode},
    {label: "Musician", href: "/music", icon: FaMusic},
  ];

  return (
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
        <LangSwitcher locale={locale} />
      </nav>
    </header>
  );
};

export default SiteHeader;
