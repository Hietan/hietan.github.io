import type {DataTable} from "@/type/table";

type TranslateFn = (key: string) => string;

export const buildEducation = (t: TranslateFn): DataTable => ({
  header: [t("period"), t("degree"), t("institution")],
  body: [
    [
      <strong key="period">2025-09 ~ {t("present")}</strong>,
      <strong key="degree">{t("doctor")}</strong>,
      <strong key="institution">{t("naist")}</strong>,
    ],
    ["2024-04 ~ 2025-09", t("master"), t("naist")],
    ["2020-04 ~ 2024-03", t("bachelor"), t("doshisha")],
  ],
});
