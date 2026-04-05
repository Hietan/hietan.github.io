import {getRequestConfig} from "next-intl/server";
import {headers} from "next/headers";

export default getRequestConfig(async () => {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") ?? "";
  const locale = /\bja\b/i.test(acceptLanguage) ? "ja" : "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
