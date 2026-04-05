import {Link} from "@carbon/react";
import type {DataTable} from "@/type/table";

type TranslateFn = (key: string) => string;

export const buildProfileInformation = (t: TranslateFn): DataTable => ({
  header: [t("name"), t("affiliation"), t("laboratory"), t("degree"), t("email")],
  body: [
    [t("nameValue")],
    [
      <Link key="affiliation" href="https://www.naist.jp" target="_blank" rel="noopener noreferrer">
        {t("affiliationValue")}
      </Link>,
    ],
    [
      <Link key="laboratory" href="https://naist-se.github.io" target="_blank" rel="noopener noreferrer">
        {t("laboratoryValue")}
      </Link>,
    ],
    [t("degreeValue")],
    [
      <Link key="email" href={`mailto:${t("emailValue")}`}>
        {t("emailValue")}
      </Link>,
    ],
  ],
});
