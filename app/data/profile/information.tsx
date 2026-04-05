import type {DataTable} from "@/type/table";

type TranslateFn = (key: string) => string;

export const buildProfileInformation = (t: TranslateFn): DataTable => ({
  header: [t("name"), t("affiliation"), t("laboratory"), t("degree"), t("email")],
  body: [
    [t("nameValue")],
    [t("affiliationValue")],
    [t("laboratoryValue")],
    [t("degreeValue")],
    [t("emailValue")],
  ],
});
