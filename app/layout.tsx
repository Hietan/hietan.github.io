import type {Metadata} from "next";
import {NextIntlClientProvider} from "next-intl";
import {getLocale, getMessages, getTranslations} from "next-intl/server";
import "@carbon/styles/css/styles.css";
import "./globals.css";
import ProfileSidebar from "@/app/components/ProfileSidebar";
import SiteHeader from "@/app/components/SiteHeader";
import {HEADER_HEIGHT, LAYOUT_PADDING, SIDEBAR_WIDTH} from "@/app/lib/layout/constants";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const t = await getTranslations();

  return (
    <html lang={locale}>
      <body data-carbon-theme="g10">
        <NextIntlClientProvider messages={messages}>
          <SiteHeader />
          <ProfileSidebar
            role={t("profile.role")}
            affiliation={t("profile.affiliation")}
            ofText={t("profile.of")}
          />
          <main
            className="layout__main"
            style={{marginLeft: SIDEBAR_WIDTH, marginTop: HEADER_HEIGHT, display: "grid", gap: "1rem", padding: LAYOUT_PADDING}}
          >
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
