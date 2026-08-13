import { NextResponse } from 'next/server';
import { SUPPORTED_LOCALES } from './lib/i18n/dictionaries';
import { slugMappings } from './lib/i18n/slugMapping';

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

/**
 * Herhangi bir dildeki slug'ı TR slug'a çevirir.
 * Eğer mapping yoksa slug'ı olduğu gibi döner.
 */
function toTrSlug(type, incomingSlug) {
  const map = slugMappings[type];
  if (!map) return incomingSlug;
  for (const translations of Object.values(map)) {
    if (
      translations.en === incomingSlug ||
      translations.ro === incomingSlug ||
      translations.tr === incomingSlug
    ) {
      return translations.tr;
    }
  }
  return incomingSlug;
}

/**
 * /tr/ prefix'li URL'ler için path segment'lerini TR slug'larına çevirir.
 * Örn: /tr/blog/barcode-systems-used-in-traceability
 *   → /blog/izlenebilirlikte-kullanilan-barkod-sistemleri
 */
function translatePathToTr(pathname) {
  // /tr/ prefix'ini çıkar
  const withoutPrefix = pathname.replace(/^\/tr(?=\/|$)/, '') || '/';
  const segments = withoutPrefix.split('/').filter(Boolean);

  if (segments.length === 0) return '/';

  // /blog/[slug]
  if (segments[0] === 'blog' && segments[1]) {
    const trSlug = toTrSlug('blog', segments[1]);
    return `/blog/${trSlug}`;
  }
  // /solutions/[slug]
  if (segments[0] === 'solutions' && segments[1]) {
    const trSlug = toTrSlug('solution', segments[1]);
    return `/solutions/${trSlug}`;
  }
  // /catalog/products/[slug]
  if (segments[0] === 'catalog' && segments[1] === 'products' && segments[2]) {
    const trSlug = toTrSlug('catalogProduct', segments[2]);
    return `/catalog/products/${trSlug}`;
  }
  // /catalog/solutions/[slug]
  if (segments[0] === 'catalog' && segments[1] === 'solutions' && segments[2]) {
    const trSlug = toTrSlug('catalogSolution', segments[2]);
    return `/catalog/solutions/${trSlug}`;
  }
  // /portfolio/[slug] veya /reference-projects/[slug]
  if ((segments[0] === 'portfolio' || segments[0] === 'reference-projects') && segments[1]) {
    const trSlug = toTrSlug('portfolio', segments[1]);
    return `/portfolio/${trSlug}`;
  }
  // /solution-partners/[slug] — slug aynı kalır
  if (segments[0] === 'solution-partners') {
    return withoutPrefix;
  }

  // Diğer sayfalar: prefix'i çıkar, slug'ı çevirme
  return withoutPrefix;
}

export function middleware(request) {
  const { pathname, search } = request.nextUrl;

  if (isBypassedPath(pathname)) {
    return NextResponse.next();
  }

  const matchedLocale = SUPPORTED_LOCALES.find(
    (loc) => pathname === `/${loc}` || pathname.startsWith(`/${loc}/`)
  );

  if (matchedLocale) {
    let response;

    if (matchedLocale === DEFAULT_LOCALE) {
      // /tr/ → TR slug'a çevir ve prefix'siz URL'e 301 yönlendir
      const trPath = translatePathToTr(pathname);
      const redirectUrl = new URL(`${trPath}${search}`, request.url);
      response = NextResponse.redirect(redirectUrl, 308);
    } else {
      const rewrittenPath =
        pathname.replace(new RegExp(String.raw`^\/${matchedLocale}(?=\/|$)`), '') || '/';
      const rewriteUrl = new URL(`${rewrittenPath}${search}`, request.url);
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-locale', matchedLocale);
      requestHeaders.set('x-pathname', rewrittenPath);

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

  // Prefixless path: always default to DEFAULT_LOCALE
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-locale', DEFAULT_LOCALE);
  requestHeaders.set('x-pathname', pathname);

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

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};