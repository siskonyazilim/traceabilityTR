import { notFound } from 'next/navigation';
import CatalogDetailPage from '../../../../components/sections/CatalogDetailPage';
import { products } from '../../../../data/solutions';
import { localizeProducts } from '../../../../lib/i18n/contentLocalization';
import { toLocalePath } from '../../../../lib/i18n/dictionaries';
import { getRequestLocale } from '../../../../lib/i18n/requestLocale';
import { resolveSlug, getLocalizedSlug } from '../../../../lib/i18n/slugMapping';
import JsonLd from '../../../../components/seo/JsonLd';
import { getCatalogProductDetailAeoFaqBundle, getCatalogProductDetailAeoFaqSchema } from '../../../../lib/seo/aeoFaqs';
import AeoFaqSection from '../../../../components/seo/AeoFaqSection';
import { getSectorsFromCMS } from '../../../../lib/cms/sectorsService';
/* eslint-disable react/prop-types */

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

function toOgLocale(locale) {
  if (locale === 'en') return 'en_US';
  if (locale === 'tr') return 'tr_TR';
  return 'ro_RO';
}

export async function generateStaticParams() {
  return products.flatMap((product) => [
    { slug: getLocalizedSlug('catalogProduct', product.slug, 'tr') },
    { slug: getLocalizedSlug('catalogProduct', product.slug, 'en') },
    { slug: getLocalizedSlug('catalogProduct', product.slug, 'ro') },
  ]);
}

export async function generateMetadata({ params }) {
  const locale = await getRequestLocale();
  const { slug: rawSlug } = await params;
  const baseSlug = resolveSlug('catalogProduct', rawSlug);
  const cmsSectors = await getSectorsFromCMS(locale);
  const localizedProducts = cmsSectors || localizeProducts(products, locale);
  const item = localizedProducts.find((entry) => entry.slug === baseSlug);

  if (!item) {
    return {
      title: 'Catalog detail | Traceability',
      description: 'Detailed information about the selected product.',
    };
  }

  const title = `${item.title} | Traceability`;
  const description = item.summary || item.description;
  let ogImage = 'https://izlenebilirlik.com.tr/og-image.png';
  if (item.image) {
    ogImage = item.image.startsWith('http') ? item.image : `https://izlenebilirlik.com.tr${item.image}`;
  }

  const localizedProductPath = '/catalog/products/' + getLocalizedSlug('catalogProduct', baseSlug, locale);
  const canonicalPath = toLocalePath(localizedProductPath, locale);

  const alternates = {
    canonical: 'https://izlenebilirlik.com.tr' + canonicalPath,
    languages: {
      'tr': `https://izlenebilirlik.com.tr/catalog/products/${getLocalizedSlug('catalogProduct', baseSlug, 'tr')}`,
      'en': `https://izlenebilirlik.com.tr/en/catalog/products/${getLocalizedSlug('catalogProduct', baseSlug, 'en')}`,
      'ro': `https://izlenebilirlik.com.tr/ro/catalog/products/${getLocalizedSlug('catalogProduct', baseSlug, 'ro')}`,
      'x-default': `https://izlenebilirlik.com.tr/catalog/products/${getLocalizedSlug('catalogProduct', baseSlug, 'tr')}`,
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

export default async function CatalogProductDetailPage({ params }) {
  const locale = await getRequestLocale();
  const { slug: rawSlug } = await params;
  const baseSlug = resolveSlug('catalogProduct', rawSlug);
  const cmsSectors = await getSectorsFromCMS(locale);
  const localizedProducts = cmsSectors || localizeProducts(products, locale);
  const currentIndex = localizedProducts.findIndex((entry) => entry.slug === baseSlug);
  const item = currentIndex >= 0 ? localizedProducts[currentIndex] : null;

  if (!item) {
    notFound();
  }

  const withNavigation = {
    ...item,
    prevSlug: currentIndex > 0 ? getLocalizedSlug('catalogProduct', localizedProducts[currentIndex - 1].slug, locale) : null,
    nextSlug: currentIndex < localizedProducts.length - 1 ? getLocalizedSlug('catalogProduct', localizedProducts[currentIndex + 1].slug, locale) : null,
    prevTitle: currentIndex > 0 ? localizedProducts[currentIndex - 1].title : null,
    nextTitle: currentIndex < localizedProducts.length - 1 ? localizedProducts[currentIndex + 1].title : null,
  };

  const productPath = `/catalog/products/${getLocalizedSlug('catalogProduct', baseSlug, locale)}`;
  const relativeHomePath = '/';
  const relativeProductsPath = '/?tab=products#traceability-solutions';

  const pageUrl = `https://izlenebilirlik.com.tr${toLocalePath(productPath, locale)}`;
  const homeUrl = `https://izlenebilirlik.com.tr${toLocalePath(relativeHomePath, locale)}`;
  const productsUrl = `https://izlenebilirlik.com.tr${toLocalePath(relativeProductsPath, locale)}`;

  const offerDescriptionByLocale = {
    tr: "Proje bazlı kurumsal fiyatlandırma için lütfen bizimle iletişime geçin.",
    en: "Please contact us for project-based corporate pricing.",
    ro: "Vă rugăm să ne contactați pentru prețuri corporative bazate pe proiect.",
  };

  const homeLabelByLocale = {
    tr: "Anasayfa",
    en: "Home",
    ro: "Acasă",
  };

  const productsLabelByLocale = {
    tr: "Ürünler",
    en: "Products",
    ro: "Produse",
  };

  const features = [
    ...(Array.isArray(withNavigation.detailBullets) ? withNavigation.detailBullets : []),
    ...(Array.isArray(withNavigation.detailPreBullets) ? withNavigation.detailPreBullets : []),
  ];
  
  const featureListStr = features.length > 0 
    ? features.slice(0, 5).join(', ') 
    : (withNavigation.summary || withNavigation.description);

  let absoluteImage = 'https://izlenebilirlik.com.tr/og-image.png';
  if (withNavigation.image) {
    if (withNavigation.image.startsWith('http')) {
      absoluteImage = withNavigation.image;
    } else {
      absoluteImage = `https://izlenebilirlik.com.tr${withNavigation.image}`;
    }
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${pageUrl}#software`,
    "name": withNavigation.title,
    "operatingSystem": "Cloud, Windows Server, Linux",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Manufacturing Execution System (MES)",
    "description": withNavigation.summary || withNavigation.description,
    "image": absoluteImage,
    "url": pageUrl,
    "publisher": {
      "@type": "Organization",
      "name": "Siskon Otomasyon ve Yazılım A.Ş.",
      "url": "https://siskon.com.tr"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": "0",
      "priceValidUntil": "2026-12-31",
      "availability": "https://schema.org/InStock",
      "description": offerDescriptionByLocale[locale] || offerDescriptionByLocale.tr
    },
    "featureList": featureListStr
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": homeLabelByLocale[locale] || homeLabelByLocale.tr,
        "item": homeUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": productsLabelByLocale[locale] || productsLabelByLocale.tr,
        "item": productsUrl
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": withNavigation.title,
        "item": pageUrl
      }
    ]
  };

  const faqBundle = getCatalogProductDetailAeoFaqBundle(locale, withNavigation);
  const faqPageSchema = getCatalogProductDetailAeoFaqSchema(locale, pageUrl, withNavigation);

  return (
    <>
      <JsonLd data={softwareSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema} />
      <CatalogDetailPage item={withNavigation} type="product" locale={locale} />
      <AeoFaqSection bundle={faqBundle} />
    </>
  );
}
