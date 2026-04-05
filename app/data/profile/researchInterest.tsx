import type {DataTable} from "@/type/table";

type TranslateFn = (key: string) => string;

export const buildResearchInterest = (t: TranslateFn): DataTable => ({
  header: [t("area"), t("keywords"), t("topics")],
  body: [
    [t("areaValue")],
    [t("keywordsValue")],
    [
      <ul key="research-topics-list">
        <li>{t("topic1")}</li>
        <li>{t("topic2")}</li>
        <li>{t("topic3")}</li>
        <li>{t("topic4")}</li>
      </ul>,
    ],
  ],
});
