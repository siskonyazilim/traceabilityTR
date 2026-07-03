import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import CatalogDetailPage from '../../../../components/sections/CatalogDetailPage';
import { solutions } from '../../../../data/solutions';
import { localizeSolutions } from '../../../../lib/i18n/contentLocalization';
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
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }) {
  const cookieStore = await cookies();
  const locale = normalizeLocale(cookieStore.get('locale')?.value);
  const { slug } = await params;
  const localizedSolutions = localizeSolutions(solutions, locale);
  const item = localizedSolutions.find((entry) => entry.slug === slug);

  if (!item) {
    return {
      title: 'Catalog detail | Traceability',
      description: 'Detailed information about the selected solution.',
    };
  }

  const title = `${item.title} | Traceability`;
  const description = item.summary || item.description;

  return {
    title,
    description,
    alternates: {
      canonical: `https://traceability.ro/catalog/solutions/${item.slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://traceability.ro/catalog/solutions/${item.slug}`,
      locale: toOgLocale(locale),
    },
  };
}

export default async function CatalogSolutionDetailPage({ params }) {
  const cookieStore = await cookies();
  const locale = normalizeLocale(cookieStore.get('locale')?.value);
  const { slug } = await params;
  const localizedSolutions = localizeSolutions(solutions, locale);
  const currentIndex = localizedSolutions.findIndex((entry) => entry.slug === slug);
  const item = currentIndex >= 0 ? localizedSolutions[currentIndex] : null;

  if (!item) {
    notFound();
  }

  const withNavigation = {
    ...item,
    prevSlug: currentIndex > 0 ? localizedSolutions[currentIndex - 1].slug : null,
    nextSlug: currentIndex < localizedSolutions.length - 1 ? localizedSolutions[currentIndex + 1].slug : null,
    prevTitle: currentIndex > 0 ? localizedSolutions[currentIndex - 1].title : null,
    nextTitle: currentIndex < localizedSolutions.length - 1 ? localizedSolutions[currentIndex + 1].title : null,
  };

  return <CatalogDetailPage item={withNavigation} type="solution" locale={locale} />;
}
