import type {Metadata} from "next";
import Script from "next/script";
import {NextIntlClientProvider} from "next-intl";
import {getLocale, getMessages, getTranslations} from "next-intl/server";
import "@carbon/styles/css/styles.css";
import "./globals.css";
import SiteHeader from "@/app/components/SiteHeader";
import {researchKeywords, researcherProfile, SITE_URL} from "@/app/lib/researchProfile";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");
  const title = t("title");
  const description = t("description");
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    authors: [{name: researcherProfile.name, url: SITE_URL}],
    creator: researcherProfile.name,
    publisher: researcherProfile.name,
    keywords: researchKeywords,
    alternates: {
      canonical: "/",
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
      url: "/",
      siteName: `${researcherProfile.name} Research Profile`,
      type: "profile",
      images: [
        {
          url: researcherProfile.image,
          width: 500,
          height: 500,
          alt: researcherProfile.name,
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
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-P20XDMBG1D" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-P20XDMBG1D');
        `}</Script>
      </head>
      <body data-carbon-theme="g10">
        <NextIntlClientProvider messages={messages}>
          <SiteHeader />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
