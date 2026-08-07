import {NextRequest, NextResponse} from "next/server";

import {
  DEFAULT_SITE_LOCALE,
  getProfilePath,
  isSiteLocale,
  type SiteLocale,
} from "@/app/lib/i18n";

const NEXT_INTL_LOCALE_HEADER = "X-NEXT-INTL-LOCALE";

const detectPreferredLocale = (request: NextRequest): SiteLocale => {
  const cookieLocale = request.cookies.get("locale")?.value;
  if (isSiteLocale(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  return /\bja\b/i.test(acceptLanguage) ? "ja" : DEFAULT_SITE_LOCALE;
};

export function proxy(request: NextRequest) {
  const {pathname} = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(getProfilePath(detectPreferredLocale(request)), request.url),
    );
  }

  const pathLocale = pathname.split("/")[1];
  if (!isSiteLocale(pathLocale)) {
    return NextResponse.next();
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(NEXT_INTL_LOCALE_HEADER, pathLocale);

  return NextResponse.next({
    request: {headers: requestHeaders},
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
