import { NextResponse } from 'next/server';
import { DEFAULT_LOCALE, isSupportedLocale } from './lib/i18n/dictionaries';

const LOCALE_PREFIXES = new Set(['tr', 'en', 'ro']);

function hasPublicFile(pathname) {
	const lastSegment = pathname.split('/').pop();
	return lastSegment?.includes('.') ?? false;
}

function getLocaleFromPath(pathname) {
	const segment = pathname.split('/')[1];
	if (LOCALE_PREFIXES.has(segment)) {
		return segment;
	}
	return null;
}

function withLocalePrefix(pathname, locale) {
	if (pathname === '/') {
		return `/${locale}`;
	}
	return `/${locale}${pathname}`;
}

function stripLocalePrefix(pathname, locale) {
	const stripped = pathname.slice(locale.length + 1);
	return stripped || '/';
}

export function middleware(request) {
	const { nextUrl, cookies } = request;
	const { pathname } = nextUrl;

	if (
		pathname.startsWith('/_next')
		|| pathname.startsWith('/api')
		|| pathname.startsWith('/images')
		|| pathname.startsWith('/Logos')
		|| pathname.startsWith('/logos')
		|| pathname.startsWith('/icon')
		|| pathname.startsWith('/social')
		|| pathname.startsWith('/video')
		|| pathname.startsWith('/resmi')
		|| hasPublicFile(pathname)
	) {
		return NextResponse.next();
	}

	const localeFromPath = getLocaleFromPath(pathname);
	const localeCookie = cookies.get('locale')?.value;
	const currentLocale = isSupportedLocale(localeCookie) ? localeCookie : DEFAULT_LOCALE;

	if (localeFromPath) {
		if (localeCookie !== localeFromPath) {
			const redirectUrl = new URL(nextUrl.toString());
			const response = NextResponse.redirect(redirectUrl);
			response.cookies.set('locale', localeFromPath, {
				path: '/',
				maxAge: 60 * 60 * 24 * 365,
				sameSite: 'lax',
			});
			return response;
		}

		const rewriteUrl = nextUrl.clone();
		rewriteUrl.pathname = stripLocalePrefix(pathname, localeFromPath);
		return NextResponse.rewrite(rewriteUrl);
	}

	if (currentLocale !== DEFAULT_LOCALE && LOCALE_PREFIXES.has(currentLocale)) {
		const redirectUrl = nextUrl.clone();
		redirectUrl.pathname = withLocalePrefix(pathname, currentLocale);
		return NextResponse.redirect(redirectUrl);
	}

	if (!isSupportedLocale(localeCookie)) {
		const response = NextResponse.next();
		response.cookies.set('locale', DEFAULT_LOCALE, {
			path: '/',
			maxAge: 60 * 60 * 24 * 365,
			sameSite: 'lax',
		});
		return response;
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)'],
};
