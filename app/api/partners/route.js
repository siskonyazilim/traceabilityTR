import { NextResponse } from 'next/server';
import { DEFAULT_LOCALE, isSupportedLocale } from '../../../lib/i18n/dictionaries';
import { getPartnersByLocale } from '../../../lib/strapi/partners';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const rawLocale = searchParams.get('locale');
    const locale = isSupportedLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;

    const featuredOnly = searchParams.get('featured') === 'true';
    const limitValue = Number(searchParams.get('limit'));
    const limit = Number.isFinite(limitValue) && limitValue > 0 ? limitValue : undefined;

    const data = await getPartnersByLocale(locale, { featuredOnly, limit });

    return NextResponse.json({ data, locale });
  } catch (error) {
    console.error('Partners API failed. Returning degraded empty response.', error);
    return NextResponse.json({
      data: [],
      degraded: true,
    });
  }
}
