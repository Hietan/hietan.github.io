import type {Metadata} from "next";
import "@carbon/styles/css/styles.css";
import "./globals.css";
import ProfileSidebar from "@/app/components/ProfileSidebar";
import {SIDEBAR_WIDTH} from "@/app/components/layoutConstants";

export const metadata: Metadata = {
  title: "Kazuma Yamasaki | Research Profile",
  description:
    "Research Profile of Kazuma Yamasaki — Ph.D. Student at the Software Engineering Lab., Nara Institute of Science and Technology (NAIST)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        data-carbon-theme="g10"
      >
        <ProfileSidebar />
        <main
          className="p-5"
          style={{marginLeft: SIDEBAR_WIDTH, display: "grid", gap: "1rem"}}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
