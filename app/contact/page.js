import ContactPageClient from './ContactPageClient';
import { getRequestLocale, getRequestPathname, getLanguageAlternates } from '../../lib/i18n/requestLocale';
import { getOrganizationSchema, SITE_URL } from '../../components/seo/OrganizationSchema';
import { toLocalePath } from '../../lib/i18n/dictionaries';
import AeoFaqSection from '../../components/seo/AeoFaqSection';
import JsonLd from '../../components/seo/JsonLd';
import { getAeoFaqBundle, getAeoFaqSchema } from '../../lib/seo/aeoFaqs';
import { getContactPageFromCMS } from '../../lib/cms/contactService';

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const pathname = await getRequestPathname();
  const isTr = locale === 'tr';
  const isEn = locale === 'en';

  let title = 'Contact Traceability | Consultanță Trasabilitate';
  if (isTr) {
    title = 'İletişim | Endüstriyel İzlenebilirlik Danışmanlığı | Traceability';
  } else if (isEn) {
    title = 'Contact Traceability | Industrial Traceability Consulting';
  }

  let description = 'Contactează Traceability pentru consultanță în trasabilitate industrială, integrare MES/ERP, implementare RFID și WMS adaptate proceselor tale de producție.';
  if (isTr) {
    description = 'Endüstriyel izlenebilirlik danışmanlığı, MES/ERP entegrasyonu, RFID ve WMS uygulamaları için Traceability ile iletişime geçin.';
  } else if (isEn) {
    description = 'Contact Traceability for industrial traceability consulting, MES/ERP integration, RFID and WMS implementations tailored to your production processes.';
  }

  let ogLocale = 'ro_RO';
  if (isTr) {
    ogLocale = 'tr_TR';
  } else if (isEn) {
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

export default async function ContactPage() {
  const locale = await getRequestLocale();
  const org = getOrganizationSchema();
  const faqBundle = getAeoFaqBundle('contact', locale);

  // CMS'den iletişim sayfası verisi — ofis bilgileri
  const cmsContact = await getContactPageFromCMS(locale);

  const pageUrl = `${SITE_URL}${toLocalePath('/contact', locale)}`;
  const faqSchema = getAeoFaqSchema('contact', locale, pageUrl);

  const homeLabelByLocale = { tr: 'Anasayfa', en: 'Home', ro: 'Acasă' };
  const contactLabelByLocale = { tr: 'İletişim', en: 'Contact', ro: 'Contact' };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      // ── Organization (tam profil) ───────────────────────────────────────
      org,
      // ── ContactPage ────────────────────────────────────────────────────
      {
        '@type': 'ContactPage',
        '@id': `${pageUrl}#contactpage`,
        'url': pageUrl,
        'name': {
          tr: 'Traceability | İletişim — Endüstriyel İzlenebilirlik Danışmanlığı',
          en: 'Traceability | Contact — Industrial Traceability Consulting',
          ro: 'Traceability | Contact — Consultanță Trasabilitate Industrială',
        }[locale] || 'Traceability | Contact',
        'description': {
          tr: 'Endüstriyel izlenebilirlik, MES/ERP entegrasyonu, RFID ve WMS uygulamaları için Siskon ile iletişime geçin.',
          en: 'Contact Siskon for industrial traceability, MES/ERP integration, RFID and WMS implementations.',
          ro: 'Contactați Siskon pentru trasabilitate industrială, integrare MES/ERP, RFID și implementări WMS.',
        }[locale] || '',
        'publisher': { '@id': org['@id'] },
      },
      // ── BreadcrumbList ─────────────────────────────────────────────────
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': homeLabelByLocale[locale] || homeLabelByLocale.tr,
            'item': `${SITE_URL}/`,
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': contactLabelByLocale[locale] || contactLabelByLocale.tr,
            'item': pageUrl,
          },
        ],
      },
      faqSchema,
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <ContactPageClient cmsContact={cmsContact} />
      <AeoFaqSection bundle={faqBundle} />
    </>
  );
}

