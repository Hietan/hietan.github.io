"use client";

import {usePathname, useRouter} from "next/navigation";
import {setLocale} from "@/app/actions/locale";
import {isSiteLocale} from "@/app/lib/i18n";

import styles from "./LangSwitcher.module.css";

type Props = {locale: string};

const LangSwitcher = ({locale}: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const toggle = async () => {
    const next = locale === "ja" ? "en" : "ja";
    await setLocale(next);

    const pathLocale = pathname.split("/")[1];
    if (isSiteLocale(pathLocale)) {
      router.push(`/${next}`);
    } else {
      router.refresh();
    }
  };

  return (
    <button
      onClick={toggle}
      className={styles.btn}
      title={locale === "ja" ? "Switch to English" : "日本語に切り替え"}
    >
      {locale === "ja" ? "EN" : "JA"}
    </button>
  );
};

export default LangSwitcher;
