import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import CatalogDetailPage from '../../../../components/sections/CatalogDetailPage';
import { products } from '../../../../data/solutions';
import { localizeProducts } from '../../../../lib/i18n/contentLocalization';
import { toLocalePath } from '../../../../lib/i18n/dictionaries';
import JsonLd from '../../../../components/seo/JsonLd';
/* eslint-disable react/prop-types */

function normalizeLocale(value) {
  if (value === 'en') return 'en';
  if (value === 'tr') return 'tr';
  return 'ro';
}

function toOgLocale(locale) {
  if (locale === 'en') return 'en_US';
  if (locale === 'tr') return 'tr_TR';
  return 'ro_RO';
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const cookieStore = await cookies();
  const locale = normalizeLocale(cookieStore.get('locale')?.value);
  const { slug } = await params;
  const localizedProducts = localizeProducts(products, locale);
  const item = localizedProducts.find((entry) => entry.slug === slug);

  if (!item) {
    return {
      title: 'Catalog detail | Traceability',
      description: 'Detailed information about the selected product.',
    };
  }

  const title = `${item.title} | Traceability`;
  const description = item.summary || item.description;
  let ogImage = 'https://traceability.com.tr/siskon-logo-header.svg';
  if (item.image) {
    ogImage = item.image.startsWith('http') ? item.image : `https://traceability.com.tr${item.image}`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://traceability.com.tr/catalog/products/${item.slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://traceability.com.tr/catalog/products/${item.slug}`,
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
  const cookieStore = await cookies();
  const locale = normalizeLocale(cookieStore.get('locale')?.value);
  const { slug } = await params;
  const localizedProducts = localizeProducts(products, locale);
  const currentIndex = localizedProducts.findIndex((entry) => entry.slug === slug);
  const item = currentIndex >= 0 ? localizedProducts[currentIndex] : null;

  if (!item) {
    notFound();
  }

  const withNavigation = {
    ...item,
    prevSlug: currentIndex > 0 ? localizedProducts[currentIndex - 1].slug : null,
    nextSlug: currentIndex < localizedProducts.length - 1 ? localizedProducts[currentIndex + 1].slug : null,
    prevTitle: currentIndex > 0 ? localizedProducts[currentIndex - 1].title : null,
    nextTitle: currentIndex < localizedProducts.length - 1 ? localizedProducts[currentIndex + 1].title : null,
  };

  const productPath = `/catalog/products/${slug}`;
  const relativeHomePath = '/';
  const relativeProductsPath = '/?tab=products#traceability-solutions';

  const pageUrl = `https://traceability.com.tr${toLocalePath(productPath, locale)}`;
  const homeUrl = `https://traceability.com.tr${toLocalePath(relativeHomePath, locale)}`;
  const productsUrl = `https://traceability.com.tr${toLocalePath(relativeProductsPath, locale)}`;

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

  let absoluteImage = 'https://traceability.com.tr/siskon-logo-header.svg';
  if (withNavigation.image) {
    if (withNavigation.image.startsWith('http')) {
      absoluteImage = withNavigation.image;
    } else {
      absoluteImage = `https://traceability.com.tr${withNavigation.image}`;
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
      "description": offerDescriptionByLocale[locale] || offerDescriptionByLocale.ro
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
        "name": homeLabelByLocale[locale] || homeLabelByLocale.ro,
        "item": homeUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": productsLabelByLocale[locale] || productsLabelByLocale.ro,
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

  return (
    <>
      <JsonLd data={softwareSchema} />
      <JsonLd data={breadcrumbSchema} />
      <CatalogDetailPage item={withNavigation} type="product" locale={locale} />
    </>
  );
}
