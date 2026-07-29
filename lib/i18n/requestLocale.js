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
 * @param {string} currentLocale - O anki aktif dil (Örn: 'en', 'tr', 'ro')
 * @returns {object} Next.js alternates metadata structure
 */
export function getLanguageAlternates(pathname, currentLocale = 'tr') {
  // Gelen path'in başındaki dil takısını temizliyoruz (Burası doğru ve çok şık)
  const cleanPathname = (pathname || '/').replace(/^\/(tr|en|ro)(?=\/|$)/, '') || '/';

  return {
    // DÜZELTME: Canonical, kullanıcının o an bulunduğu dildeki URL olmalıdır
    canonical: `https://izlenebilirlik.com.tr${toLocalePath(cleanPathname, currentLocale)}`,
    languages: {
      'tr': `https://izlenebilirlik.com.tr${toLocalePath(cleanPathname, 'tr')}`,
      'en': `https://izlenebilirlik.com.tr${toLocalePath(cleanPathname, 'en')}`,
      'ro': `https://izlenebilirlik.com.tr${toLocalePath(cleanPathname, 'ro')}`,
      // x-default: Kullanıcının dili hiçbirine uymazsa yönlendirilecek varsayılan sürüm
      'x-default': `https://izlenebilirlik.com.tr${toLocalePath(cleanPathname, 'tr')}`,
    }
  };
}
