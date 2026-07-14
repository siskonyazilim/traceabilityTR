import { cookies } from 'next/headers';
import Container from '../../components/ui/Container';
import { loadPolicyHtml } from '../../lib/policyDocuments';
import { f } from '../../lib/i18n/sectionTranslations';
import { DEFAULT_LOCALE, isSupportedLocale } from '../../lib/i18n/dictionaries';

export async function generateMetadata() {
  const cookieStore = await cookies();
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeRaw) ? localeRaw : DEFAULT_LOCALE;

  const title = f(locale, 'cookiePolicyPage', 'metaTitle');
  const description = f(locale, 'cookiePolicyPage', 'metaDescription');

  let ogLocale = 'ro_RO';
  if (locale === 'tr') {
    ogLocale = 'tr_TR';
  } else if (locale === 'en') {
    ogLocale = 'en_US';
  }

  return {
    title,
    description,
    alternates: {
      canonical: 'https://traceability.com.tr/cookie',
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'https://traceability.com.tr/cookie',
      locale: ogLocale,
      images: [
        {
          url: 'https://traceability.com.tr/siskon-logo-header.svg',
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://traceability.com.tr/siskon-logo-header.svg'],
    },
  };
}

export default async function CookiePolicyPage() {
  const cookieStore = await cookies();
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeRaw) ? localeRaw : DEFAULT_LOCALE;
  const policyHtml = await loadPolicyHtml('cookie', locale);

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-24 pb-16">
      <Container size="xl">
        <article className="w-full">
          <p className="text-xs uppercase tracking-[0.16em] text-secondary-blue font-semibold mb-3">
            {f(locale, 'cookiePolicyPage', 'eyebrow')}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-black mb-8">
            {f(locale, 'cookiePolicyPage', 'title')}
          </h1>

          <div className="legal-doc" dangerouslySetInnerHTML={{ __html: policyHtml }} />
        </article>
      </Container>
    </div>
  );
}
