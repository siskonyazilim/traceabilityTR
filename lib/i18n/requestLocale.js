import { headers, cookies } from 'next/headers';
import { DEFAULT_LOCALE, isSupportedLocale, toLocalePath } from './dictionaries';

export async function getRequestLocale() {
  try {
    const headersList = await headers();
    const localeHeader = headersList.get('x-locale');
    if (localeHeader && isSupportedLocale(localeHeader)) {
      return localeHeader;
    }
  } catch (e) {
    // headers() might not be available in all build/static generation phases
  }

  try {
    const cookieStore = await cookies();
    const localeCookie = cookieStore.get('locale')?.value;
    if (isSupportedLocale(localeCookie)) {
      return localeCookie;
    }
  } catch (e) {
    // cookies() might not be available
  }

  return DEFAULT_LOCALE;
}

export async function getRequestPathname() {
  try {
    const headersList = await headers();
    return headersList.get('x-pathname') || '/';
  } catch (e) {
    return '/';
  }
}

/**
 * Generates canonical and alternate language hreflang links based on the pathname.
 * @param {string} pathname 
 * @returns {object} Next.js alternates metadata structure
 */
export function getLanguageAlternates(pathname) {
  const cleanPathname = (pathname || '/').replace(/^\/(tr|en|ro)(?=\/|$)/, '') || '/';

  return {
    canonical: `https://traceability.com.tr${toLocalePath(cleanPathname, 'tr')}`,
    languages: {
      'tr': `https://traceability.com.tr${toLocalePath(cleanPathname, 'tr')}`,
      'en': `https://traceability.com.tr${toLocalePath(cleanPathname, 'en')}`,
      'ro': `https://traceability.com.tr${toLocalePath(cleanPathname, 'ro')}`,
      'x-default': `https://traceability.com.tr${toLocalePath(cleanPathname, 'tr')}`,
    }
  };
}
