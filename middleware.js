import { NextResponse } from 'next/server';
import { DEFAULT_LOCALE } from './lib/i18n/dictionaries';

const LOCALE_PREFIXES = new Set(['tr', 'en', 'ro']);

// Domain -> varsayılan dil eşlemesi
function getDomainDefaultLocale(host) {
	if (host.includes('traceability.ro')) return 'ro';
	if (host.includes('.com.tr') || host.includes('onsuite.com.tr')) return 'tr';
	// Diğer/bilinmeyen domain'ler için genel varsayılan
	return DEFAULT_LOCALE;
}

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
	const { nextUrl, cookies, headers } = request;
	const { pathname } = nextUrl;
	const host = headers.get('host') || '';
	const domainDefaultLocale = getDomainDefaultLocale(host);

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

	// 1. Eğer domain'in kendi varsayılan diliyle aynı prefix açıkça istenmişse,
	//    prefixsiz kanonik hale yönlendir (örn: traceability.ro/ro/x -> traceability.ro/x)
	if (localeFromPath === domainDefaultLocale) {
		const cleanPath = stripLocalePrefix(pathname, domainDefaultLocale);
		const redirectUrl = new URL(cleanPath, request.url);
		redirectUrl.search = nextUrl.search;
		const response = NextResponse.redirect(redirectUrl, 301);
		response.cookies.set('locale', domainDefaultLocale, {
			path: '/',
			sameSite: 'lax',
		});
		return response;
	}

	// 2. Diğer locale prefix'leri (domain'in varsayılanı olmayan diller)
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
			sameSite: 'lax',
		});
		return response;
	}

	// 3. Prefixsiz path'ler (domain'e göre varsayılan dil)
	const localeCookie = cookies.get('locale')?.value;

	// Root path'te, cookie farklı bir dil belirtiyorsa o dile yönlendir
	if (pathname === '/') {
		if (
			localeCookie
			&& localeCookie !== domainDefaultLocale
			&& LOCALE_PREFIXES.has(localeCookie)
		) {
			const redirectUrl = new URL(`/${localeCookie}`, request.url);
			return NextResponse.redirect(redirectUrl);
		}
	}

	const requestHeaders = new Headers(request.headers);
	requestHeaders.set('x-locale', domainDefaultLocale);
	requestHeaders.set('x-pathname', pathname);

	const response = NextResponse.next({
		request: {
			headers: requestHeaders,
		}
	});

	if (!localeCookie) {
		response.cookies.set('locale', domainDefaultLocale, {
			path: '/',
			sameSite: 'lax',
		});
	}

	return response;
}

export const config = {
	matcher: ['/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)'],
};