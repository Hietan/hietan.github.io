import type {DataTable} from "@/type/table";

type TranslateFn = (key: string) => string;

export const buildResearchInterest = (t: TranslateFn): DataTable => ({
  header: [t("area"), t("keywords")],
  body: [
    [t("areaValue")],
    [t("keywordsValue")],
  ],
});
