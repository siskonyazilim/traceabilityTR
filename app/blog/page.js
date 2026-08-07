import BlogPageClient from './BlogPageClient';
import { getRequestLocale, getRequestPathname, getLanguageAlternates } from '../../lib/i18n/requestLocale';
import { blogPosts } from '../../data/blogPosts';
import { localizeBlogPosts } from '../../lib/i18n/contentLocalization';
import { getLocalizedSlug } from '../../lib/i18n/slugMapping';
import { toLocalePath } from '../../lib/i18n/dictionaries';
import JsonLd from '../../components/seo/JsonLd';
import { getOrganizationSchema, SITE_URL } from '../../components/seo/OrganizationSchema';

export async function generateMetadata() {
  const locale = await getRequestLocale();
  const pathname = await getRequestPathname();
  const isTr = locale === 'tr';
  const isEn = locale === 'en';

  let title = 'Blog: Noutăți, Ghiduri și Tendințe în Trasabilitate | Traceability';
  if (isTr) {
    title = 'Blog: İzlenebilirlik Trendleri ve Rehberler | Traceability';
  } else if (isEn) {
    title = 'Blog: Industry Updates, Guides and Traceability Trends | Traceability';
  }

  let description = 'Descoperă articole Traceability despre trasabilitate industrială, MES, RFID, controlul calității și ghiduri practice pentru echipele de producție moderne.';
  if (isTr) {
    description = 'Endüstriyel izlenebilirlik, MES, RFID, kalite kontrolü ve modern üretim ekipleri için pratik rehberler hakkında Traceability blog yazılarını keşfedin.';
  } else if (isEn) {
    description = 'Explore Traceability blog articles about industrial traceability, MES, RFID, quality control and practical guides for modern manufacturing teams.';
  }

  let ogLocale = 'ro_RO';
  if (isTr) {
    ogLocale = 'tr_TR';
  } else if (isEn) {
    ogLocale = 'en_US';
  }

  const alternates = getLanguageAlternates(pathname);

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

export default async function BlogPage() {
  const locale = await getRequestLocale();
  const org = getOrganizationSchema();
  const pageUrl = `${SITE_URL}${toLocalePath('/blog', locale)}`;
  const homeUrl = `${SITE_URL}${toLocalePath('/', locale)}`;

  const localizedPosts = localizeBlogPosts(blogPosts, locale)
    .sort((a, b) => {
      const dateDiff = new Date(b.date).getTime() - new Date(a.date).getTime();
      if (dateDiff !== 0) return dateDiff;
      return (b.id ?? 0) - (a.id ?? 0);
    })
    .slice(0, 12);

  const getPostUrl = (post) => {
    const localizedSlug = getLocalizedSlug('blog', post.originalSlug || post.slug, locale);
    const postPath = `/blog/${localizedSlug}`;
    return `${SITE_URL}${toLocalePath(postPath, locale)}`;
  };

  const itemListSchema = {
    '@type': 'ItemList',
    '@id': `${pageUrl}#itemlist`,
    'itemListOrder': 'https://schema.org/ItemListOrderDescending',
    'numberOfItems': localizedPosts.length,
    'itemListElement': localizedPosts.map((post, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'url': getPostUrl(post),
      'name': post.title,
    })),
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${pageUrl}#blog`,
        'url': pageUrl,
        'name': 'Traceability Blog',
        'description': {
          tr: 'Endüstriyel izlenebilirlik, MES, RFID ve kalite süreçleri üzerine uzman içerikler.',
          en: 'Expert content on industrial traceability, MES, RFID and quality operations.',
          ro: 'Conținut de specialitate despre trasabilitate industrială, MES, RFID și calitate.',
        }[locale] || 'Traceability Blog',
        'publisher': { '@id': org['@id'] },
        'inLanguage': locale,
        'blogPost': localizedPosts.map((post) => ({
          '@type': 'BlogPosting',
          '@id': `${getPostUrl(post)}#blogposting`,
          'headline': post.title,
          'url': getPostUrl(post),
          ...(post.date ? { 'datePublished': new Date(post.date).toISOString() } : {}),
        })),
      },
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#webpage`,
        'url': pageUrl,
        'name': 'Traceability Blog',
        'isPartOf': { '@id': `${SITE_URL}/#website` },
        'about': { '@id': `${pageUrl}#blog` },
        'mainEntity': { '@id': `${pageUrl}#itemlist` },
        'inLanguage': locale,
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
            'name': 'Blog',
            'item': pageUrl,
          },
        ],
      },
      itemListSchema,
      org,
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <BlogPageClient />
    </>
  );
}
