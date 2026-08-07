import {redirect} from "next/navigation";
import {getLocale} from "next-intl/server";

import {DEFAULT_SITE_LOCALE, getProfilePath, isSiteLocale} from "@/app/lib/i18n";

export default async function ProfileRedirect() {
  const requestLocale = await getLocale();
  const locale = isSiteLocale(requestLocale) ? requestLocale : DEFAULT_SITE_LOCALE;

  redirect(getProfilePath(locale));
}
