import { NextResponse } from 'next/server';
import { DEFAULT_LOCALE, isSupportedLocale } from '../../../lib/i18n/dictionaries';

export async function POST(request) {
  try {
    const payload = await request.json();
    const locale = payload?.locale;
    const nextLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;

    const response = NextResponse.json({ ok: true, locale: nextLocale });
    response.cookies.set('locale', nextLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });

    return response;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
