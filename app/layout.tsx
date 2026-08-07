import type {Metadata} from "next";
import Script from "next/script";
import {NextIntlClientProvider} from "next-intl";
import {getLocale, getMessages, getTranslations} from "next-intl/server";
import "@carbon/styles/css/styles.css";
import "./globals.css";
import SiteHeader from "@/app/components/SiteHeader";
import {DEFAULT_SITE_LOCALE, isSiteLocale} from "@/app/lib/i18n";
import {buildProfileMetadata} from "@/app/lib/profileMetadata";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");
  const requestLocale = await getLocale();
  const locale = isSiteLocale(requestLocale) ? requestLocale : DEFAULT_SITE_LOCALE;

  return buildProfileMetadata({
    canonicalPath: "/",
    description: t("description"),
    locale,
    title: t("title"),
  });
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
