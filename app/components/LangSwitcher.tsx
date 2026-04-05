"use client";

import {useRouter} from "next/navigation";
import {setLocale} from "@/app/actions/locale";

import styles from "./LangSwitcher.module.css";

type Props = {locale: string};

const LangSwitcher = ({locale}: Props) => {
  const router = useRouter();

  const toggle = async () => {
    const next = locale === "ja" ? "en" : "ja";
    await setLocale(next);
    router.refresh();
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
