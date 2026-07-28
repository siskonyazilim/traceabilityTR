import { NextResponse } from 'next/server';
import { isSupportedLocale, SUPPORTED_LOCALES } from './lib/i18n/dictionaries';

// Bu proje izlenebilirlik.com.tr için — varsayılan (prefixsiz) dil 'tr'
const DEFAULT_LOCALE = 'tr';

function isBypassedPath(pathname) {
  return (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/icon') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/resmi') ||
    pathname.startsWith('/Logos') ||
    pathname.startsWith('/MobileVideos') ||
    pathname.startsWith('/social') ||
    pathname.startsWith('/video') ||
    pathname.includes('.')
  );
}

export function middleware(request) {
  const { pathname, search } = request.nextUrl;

  if (isBypassedPath(pathname)) {
    return NextResponse.next();
  }

  const matchedLocale = SUPPORTED_LOCALES.find((loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`));
  const localeCookie = request.cookies.get('locale')?.value;

  if (matchedLocale) {
    const rewrittenPath = pathname.replace(new RegExp(String.raw`^\/${matchedLocale}(?=\/|$)`), '') || '/';
    let response;

    if (matchedLocale === DEFAULT_LOCALE) {
      const redirectUrl = new URL(`${rewrittenPath}${search}`, request.url);
      response = NextResponse.redirect(redirectUrl);
    } else {
      const rewriteUrl = new URL(`${rewrittenPath}${search}`, request.url);
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-locale', matchedLocale);

      response = NextResponse.rewrite(rewriteUrl, {
        request: {
          headers: requestHeaders,
        },
      });
    }

    response.cookies.set('locale', matchedLocale, {
      path: '/',
      sameSite: 'lax',
    });

    return response;
  }

  const preferredLocale = isSupportedLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;

  if (preferredLocale === DEFAULT_LOCALE) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-locale', DEFAULT_LOCALE);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    response.cookies.set('locale', DEFAULT_LOCALE, {
      path: '/',
      sameSite: 'lax',
    });

    return response;
  }

  const targetPath = pathname === '/' ? `/${preferredLocale}` : `/${preferredLocale}${pathname}`;
  const redirectUrl = new URL(`${targetPath}${search}`, request.url);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};