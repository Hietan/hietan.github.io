import {getTranslations} from "next-intl/server";
import ProfileSidebar from "@/app/components/ProfileSidebar";
import {HEADER_HEIGHT, LAYOUT_PADDING, SIDEBAR_WIDTH} from "@/app/lib/layout/constants";

export default async function ResearcherLayout({children}: {children: React.ReactNode}) {
  const t = await getTranslations();

  return (
    <>
      <ProfileSidebar
        role={t("profile.role")}
        affiliation={t("profile.affiliation")}
        ofText={t("profile.of")}
      />
      <main
        className="layout__main"
        style={{
          marginLeft: SIDEBAR_WIDTH,
          marginTop: HEADER_HEIGHT,
          display: "grid",
          gap: "1rem",
          padding: LAYOUT_PADDING,
        }}
      >
        {children}
      </main>
    </>
  );
}
