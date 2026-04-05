import {getRequestConfig} from "next-intl/server";
import {cookies, headers} from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("locale")?.value;

  let locale: string;
  if (cookieLang === "ja" || cookieLang === "en") {
    locale = cookieLang;
  } else {
    const headersList = await headers();
    const acceptLanguage = headersList.get("accept-language") ?? "";
    locale = /\bja\b/i.test(acceptLanguage) ? "ja" : "en";
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
