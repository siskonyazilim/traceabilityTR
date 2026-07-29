import Container from '../../components/ui/Container';
import { loadPolicyHtml } from '../../lib/policyDocuments';
import { f } from '../../lib/i18n/sectionTranslations';
import { getRequestLocale, getRequestPathname, getLanguageAlternates } from '../../lib/i18n/requestLocale';

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const pathname = await getRequestPathname();

  const title = f(locale, 'cookiePolicyPage', 'metaTitle');
  const description = f(locale, 'cookiePolicyPage', 'metaDescription');

  let ogLocale = 'ro_RO';
  if (locale === 'tr') {
    ogLocale = 'tr_TR';
  } else if (locale === 'en') {
    ogLocale = 'en_US';
  }

  const alternates = getLanguageAlternates(pathname, locale);

  return {
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      type: 'website',
      url: alternates.canonical,
      locale: ogLocale,
      images: [
        {
          url: 'https://izlenebilirlik.com.tr/siskon-logo-header.svg',
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
      images: ['https://izlenebilirlik.com.tr/siskon-logo-header.svg'],
    },
  };
}

export default async function CookiePolicyPage() {
  const locale = await getRequestLocale();
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
