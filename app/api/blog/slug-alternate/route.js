import { NextResponse } from 'next/server';
import { isSupportedLocale, DEFAULT_LOCALE } from '../../../../lib/i18n/dictionaries';
import { getArticleByDocumentIdAndLocale, getArticleBySlugAnyLocale } from '../../../../lib/strapi/articles';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = (searchParams.get('slug') || '').trim();
  const rawTargetLocale = (searchParams.get('targetLocale') || '').trim();
  const targetLocale = isSupportedLocale(rawTargetLocale) ? rawTargetLocale : DEFAULT_LOCALE;

  if (!slug) {
    return NextResponse.json({ ok: false, error: 'Missing slug' }, { status: 400 });
  }

  try {
    const anyLocaleArticle = await getArticleBySlugAnyLocale(slug);

    if (!anyLocaleArticle) {
      return NextResponse.json({ ok: false, slug: '' }, { status: 404 });
    }

    const localized = await getArticleByDocumentIdAndLocale(anyLocaleArticle.documentId, targetLocale);
    if (localized?.slug) {
      return NextResponse.json({ ok: true, slug: localized.slug, locale: targetLocale });
    }

    return NextResponse.json({
      ok: true,
      slug: anyLocaleArticle.slug || slug,
      locale: anyLocaleArticle.locale || targetLocale,
      fallback: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Failed to resolve alternate slug',
      },
      { status: 500 }
    );
  }
}
