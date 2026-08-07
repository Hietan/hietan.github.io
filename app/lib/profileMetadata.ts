import type {Metadata} from "next";

import type {SiteLocale} from "@/app/lib/i18n";
import {researchKeywords, researcherProfile, SITE_URL} from "@/app/lib/researchProfile";

type ProfileMetadataOptions = {
  canonicalPath: string;
  description: string;
  includeLanguageAlternates?: boolean;
  locale: SiteLocale;
  title: string;
};

export const buildProfileMetadata = ({
  canonicalPath,
  description,
  includeLanguageAlternates = false,
  locale,
  title,
}: ProfileMetadataOptions): Metadata => ({
  metadataBase: new URL(SITE_URL),
  title,
  description,
  authors: [{name: researcherProfile.name, url: SITE_URL}],
  creator: researcherProfile.name,
  publisher: researcherProfile.name,
  keywords: researchKeywords,
  alternates: {
    canonical: canonicalPath,
    languages: includeLanguageAlternates ? {
      en: "/en",
      ja: "/ja",
      "x-default": "/",
    } : undefined,
    types: {
      "text/markdown": "/research.md",
      "application/x-bibtex": "/publications.bib",
      "application/json": "/publications.json",
      "text/plain": "/llms.txt",
    },
  },
  openGraph: {
    title,
    description,
    url: canonicalPath,
    siteName: `${researcherProfile.name} Research Profile`,
    type: "profile",
    locale: locale === "ja" ? "ja_JP" : "en_US",
    alternateLocale: locale === "ja" ? ["en_US"] : ["ja_JP"],
    images: [
      {
        url: researcherProfile.image,
        width: 500,
        height: 500,
        alt: `${researcherProfile.nameJa} (${researcherProfile.name})`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [researcherProfile.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
});
