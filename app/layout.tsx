import type {Metadata} from "next";
import "@carbon/styles/css/styles.css";
import "./globals.css";
import ProfileSidebar from "@/app/components/ProfileSidebar";
import {LAYOUT_PADDING, SIDEBAR_WIDTH} from "@/app/lib/layout/constants";

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
        <main style={{marginLeft: SIDEBAR_WIDTH, display: "grid", gap: "1rem", padding: LAYOUT_PADDING}}>
          {children}
        </main>
      </body>
    </html>
  );
}
