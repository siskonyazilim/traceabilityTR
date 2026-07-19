import { notFound } from 'next/navigation';
import CatalogDetailPage from '../../../../components/sections/CatalogDetailPage';
import { solutions } from '../../../../data/solutions';
import { localizeSolutions, getFaqBundle } from '../../../../lib/i18n/contentLocalization';
import { toLocalePath } from '../../../../lib/i18n/dictionaries';
import { getRequestLocale, getRequestPathname } from '../../../../lib/i18n/requestLocale';
import { resolveSlug, getLocalizedSlug } from '../../../../lib/i18n/slugMapping';
import JsonLd from '../../../../components/seo/JsonLd';
/* eslint-disable react/prop-types */

function toOgLocale(locale) {
  if (locale === 'en') return 'en_US';
  if (locale === 'tr') return 'tr_TR';
  return 'ro_RO';
}

export async function generateStaticParams() {
  const paths = [];
  for (const solution of solutions) {
    paths.push({ slug: getLocalizedSlug('catalogSolution', solution.slug, 'tr') });
    paths.push({ slug: getLocalizedSlug('catalogSolution', solution.slug, 'en') });
    paths.push({ slug: getLocalizedSlug('catalogSolution', solution.slug, 'ro') });
  }
  return paths;
}

export async function generateMetadata({ params }) {
  const locale = await getRequestLocale();
  const { slug: rawSlug } = await params;
  const baseSlug = resolveSlug('catalogSolution', rawSlug);
  const localizedSolutions = localizeSolutions(solutions, locale);
  const item = localizedSolutions.find((entry) => entry.slug === baseSlug);

  if (!item) {
    return {
      title: 'Catalog detail | Traceability',
      description: 'Detailed information about the selected solution.',
    };
  }

  const title = `${item.title} | Traceability`;
  const description = item.summary || item.description;
  let ogImage = 'https://traceability.com.tr/siskon-logo-header.svg';
  if (item.image) {
    ogImage = item.image.startsWith('http') ? item.image : `https://traceability.com.tr${item.image}`;
  }

  const alternates = {
    canonical: `https://traceability.com.tr${toLocalePath(`/catalog/solutions/${getLocalizedSlug('catalogSolution', baseSlug, locale)}`, locale)}`,
    languages: {
      'tr': `https://traceability.com.tr/catalog/solutions/${getLocalizedSlug('catalogSolution', baseSlug, 'tr')}`,
      'en': `https://traceability.com.tr/en/catalog/solutions/${getLocalizedSlug('catalogSolution', baseSlug, 'en')}`,
      'ro': `https://traceability.com.tr/ro/catalog/solutions/${getLocalizedSlug('catalogSolution', baseSlug, 'ro')}`,
      'x-default': `https://traceability.com.tr/catalog/solutions/${getLocalizedSlug('catalogSolution', baseSlug, 'tr')}`,
    }
  };

  return {
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      type: 'article',
      url: alternates.canonical,
      locale: toOgLocale(locale),
      images: [
        {
          url: ogImage,
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
      images: [ogImage],
    },
  };
}

export default async function CatalogSolutionDetailPage({ params }) {
  const locale = await getRequestLocale();
  const { slug: rawSlug } = await params;
  const baseSlug = resolveSlug('catalogSolution', rawSlug);
  const localizedSolutions = localizeSolutions(solutions, locale);
  const currentIndex = localizedSolutions.findIndex((entry) => entry.slug === baseSlug);
  const item = currentIndex >= 0 ? localizedSolutions[currentIndex] : null;

  if (!item) {
    notFound();
  }

  const withNavigation = {
    ...item,
    prevSlug: currentIndex > 0 ? getLocalizedSlug('catalogSolution', localizedSolutions[currentIndex - 1].slug, locale) : null,
    nextSlug: currentIndex < localizedSolutions.length - 1 ? getLocalizedSlug('catalogSolution', localizedSolutions[currentIndex + 1].slug, locale) : null,
    prevTitle: currentIndex > 0 ? localizedSolutions[currentIndex - 1].title : null,
    nextTitle: currentIndex < localizedSolutions.length - 1 ? localizedSolutions[currentIndex + 1].title : null,
  };

  const solutionPath = `/catalog/solutions/${getLocalizedSlug('catalogSolution', baseSlug, locale)}`;
  const relativeHomePath = '/';
  const relativeSolutionsPath = '/?tab=solutions#traceability-solutions';

  const pageUrl = `https://traceability.com.tr${toLocalePath(solutionPath, locale)}`;
  const homeUrl = `https://traceability.com.tr${toLocalePath(relativeHomePath, locale)}`;
  const solutionsUrl = `https://traceability.com.tr${toLocalePath(relativeSolutionsPath, locale)}`;

  const serviceTypeByLocale = {
    tr: "Endüstriyel İzlenebilirlik ve Otomasyon Sistemleri",
    en: "Industrial Traceability and Automation Systems",
    ro: "Sisteme de Trasabilitate și Automatizare Industrială",
  };
  const homeLabelByLocale = {
    tr: "Anasayfa",
    en: "Home",
    ro: "Acasă",
  };
  const solutionsLabelByLocale = {
    tr: "Çözümler",
    en: "Solutions",
    ro: "Soluții",
  };
  const areaServedByLocale = {
    tr: "Türkiye",
    en: "Global",
    ro: "România",
  };

  const faqBundle = getFaqBundle([], locale);
  const faqItems = (faqBundle?.items || []).slice(0, 3);

  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: item.title,
        serviceType: serviceTypeByLocale[locale] || serviceTypeByLocale.ro,
        description: item.description || item.summary,
        provider: {
          '@type': 'Organization',
          name: 'Siskon Otomasyon ve Yazılım A.Ş.',
          url: 'https://siskon.com.tr',
        },
        areaServed: {
          '@type': 'Country',
          name: areaServedByLocale[locale] || areaServedByLocale.ro,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': homeLabelByLocale[locale] || homeLabelByLocale.ro,
            'item': homeUrl,
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': solutionsLabelByLocale[locale] || solutionsLabelByLocale.ro,
            'item': solutionsUrl,
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': item.title,
            'item': pageUrl,
          },
        ],
      },
    ],
  };

  if (faqItems.length > 0) {
    graphSchema['@graph'].push({
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: faqItems.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <>
      <JsonLd data={graphSchema} />
      <CatalogDetailPage item={withNavigation} type="solution" locale={locale} />
    </>
  );
}
