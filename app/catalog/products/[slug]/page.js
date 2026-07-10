import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import CatalogDetailPage from '../../../../components/sections/CatalogDetailPage';
import { products } from '../../../../data/solutions';
import { localizeProducts } from '../../../../lib/i18n/contentLocalization';
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
  let ogImage = 'https://traceability.ro/siskon-logo-header.svg';
  if (item.image) {
    ogImage = item.image.startsWith('http') ? item.image : `https://traceability.ro${item.image}`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://traceability.ro/catalog/products/${item.slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://traceability.ro/catalog/products/${item.slug}`,
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

  return <CatalogDetailPage item={withNavigation} type="product" locale={locale} />;
}
