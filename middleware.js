import { NextResponse } from 'next/server';
import { DEFAULT_LOCALE } from './lib/i18n/dictionaries';

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

	// 1. If requesting Turkish prefix explicitly, redirect to prefixless
	if (localeFromPath === 'tr') {
		const cleanPath = stripLocalePrefix(pathname, 'tr');
		const redirectUrl = new URL(cleanPath, request.url);
		redirectUrl.search = nextUrl.search;
		const response = NextResponse.redirect(redirectUrl, 301);
		response.cookies.set('locale', 'tr', {
			path: '/',
			maxAge: 60 * 60 * 24 * 365,
			sameSite: 'lax',
		});
		return response;
	}

	// 2. If requesting other locale prefixes (en, ro)
	if (localeFromPath) {
		const rewriteUrl = nextUrl.clone();
		rewriteUrl.pathname = stripLocalePrefix(pathname, localeFromPath);

		const requestHeaders = new Headers(request.headers);
		requestHeaders.set('x-locale', localeFromPath);
		requestHeaders.set('x-pathname', pathname);

		const response = NextResponse.rewrite(rewriteUrl, {
			request: {
				headers: requestHeaders,
			}
		});

		response.cookies.set('locale', localeFromPath, {
			path: '/',
			maxAge: 60 * 60 * 24 * 365,
			sameSite: 'lax',
		});
		return response;
	}

	// 3. Prefixless paths (default Turkish)
	const localeCookie = cookies.get('locale')?.value;

	// Only redirect from root / to preferred language if cookie exists
	if (pathname === '/') {
		if (localeCookie && localeCookie !== 'tr' && (localeCookie === 'en' || localeCookie === 'ro')) {
			const redirectUrl = new URL(`/${localeCookie}`, request.url);
			return NextResponse.redirect(redirectUrl);
		}
	}

	const requestHeaders = new Headers(request.headers);
	requestHeaders.set('x-locale', 'tr');
	requestHeaders.set('x-pathname', pathname);

	const response = NextResponse.next({
		request: {
			headers: requestHeaders,
		}
	});

	if (!localeCookie) {
		response.cookies.set('locale', 'tr', {
			path: '/',
			maxAge: 60 * 60 * 24 * 365,
			sameSite: 'lax',
		});
	}

	return response;
}

export const config = {
	matcher: ['/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)'],
};
