import Container from '../../components/ui/Container';
import { loadPolicyHtml } from '../../lib/policyDocuments';
import { f } from '../../lib/i18n/sectionTranslations';
import { getRequestLocale, getRequestPathname, getLanguageAlternates } from '../../lib/i18n/requestLocale';
import { toLocalePath } from '../../lib/i18n/dictionaries';
import JsonLd from '../../components/seo/JsonLd';
import { getOrganizationSchema, SITE_URL } from '../../components/seo/OrganizationSchema';
import AeoFaqSection from '../../components/seo/AeoFaqSection';
import { getAeoFaqBundle, getAeoFaqSchema } from '../../lib/seo/aeoFaqs';

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const pathname = await getRequestPathname();

  const title = f(locale, 'privacyPolicyPage', 'metaTitle');
  const description = f(locale, 'privacyPolicyPage', 'metaDescription');

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
          url: 'https://izlenebilirlik.com.tr/og-image.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://izlenebilirlik.com.tr/og-image.png'],
    },
  };
}

export default async function PrivacyPolicyPage() {
  const locale = await getRequestLocale();
  const policyHtml = await loadPolicyHtml('privacy', locale);
  const pageTitle = f(locale, 'privacyPolicyPage', 'title');
  const org = getOrganizationSchema();
  const faqBundle = getAeoFaqBundle('policy', locale);
  const pageUrl = `${SITE_URL}${toLocalePath('/privacy-policy', locale)}`;
  const homeUrl = `${SITE_URL}${toLocalePath('/', locale)}`;
  const faqSchema = getAeoFaqSchema('policy', locale, pageUrl);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        'url': pageUrl,
        'name': f(locale, 'privacyPolicyPage', 'metaTitle'),
        'description': f(locale, 'privacyPolicyPage', 'metaDescription'),
        'inLanguage': locale,
        'isPartOf': { '@id': `${SITE_URL}/#website` },
        'about': { '@id': org['@id'] },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': { tr: 'Anasayfa', en: 'Home', ro: 'Acasă' }[locale] || 'Home',
            'item': homeUrl,
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': { tr: 'Gizlilik Politikası', en: 'Privacy Policy', ro: 'Politica de Confidentialitate' }[locale] || 'Privacy Policy',
            'item': pageUrl,
          },
        ],
      },
      faqSchema,
      org,
    ],
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-24 pb-16">
      <JsonLd data={jsonLd} />
      <Container size="xl">
        <article className="w-full">
          <p className="text-xs uppercase tracking-[0.16em] text-secondary-blue font-semibold mb-3">
            {f(locale, 'privacyPolicyPage', 'eyebrow')}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-black mb-8">{pageTitle}</h1>

          <div className="legal-doc" dangerouslySetInnerHTML={{ __html: policyHtml }} />

          <AeoFaqSection bundle={faqBundle} />
        </article>
      </Container>
    </div>
  );
}
