export const SITE_LOCALES = ["en", "ja"] as const;

export type SiteLocale = typeof SITE_LOCALES[number];

export const DEFAULT_SITE_LOCALE: SiteLocale = "en";

export const isSiteLocale = (locale: string | undefined): locale is SiteLocale => (
  SITE_LOCALES.some(candidate => candidate === locale)
);

export const getProfilePath = (locale: SiteLocale): `/${SiteLocale}` => `/${locale}`;
