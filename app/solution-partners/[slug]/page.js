import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '../../../components/ui/Container';
import Button from '../../../components/ui/Button';
import { strategicPartners } from '../../../data/partners';
import { IconArrowLeft, IconChevronLeft, IconChevronRight } from '../../../components/ui/Icons';
import { cookies } from 'next/headers';
import { localizePartners } from '../../../lib/i18n/contentLocalization';
import { f } from '../../../lib/i18n/sectionTranslations';
/* eslint-disable react/prop-types, react/no-array-index-key */

export async function generateMetadata({ params }) {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value === 'en' ? 'en' : 'ro';
  const isEn = locale === 'en';
  const localizedPartners = localizePartners(strategicPartners, locale);
  const { slug: rawSlug } = await params;
  const legacySlugMap = {
    'proiectul-a-s': 'markem-imaje',
  };
  const slug = legacySlugMap[rawSlug] || rawSlug;
  const partner = localizedPartners.find((entry) => entry.slug === slug);

  if (!partner) {
    return {
      title: f(locale, 'partnerDetailPage', 'notFoundTitle'),
      description: f(locale, 'partnerDetailPage', 'notFoundDescription'),
    };
  }

  const title = `${partner.name} | ${f(locale, 'partnerDetailPage', 'partnerSuffix')} | Traceability`;
  const description = partner.description;
  const pageUrl = `https://traceability.ro/solution-partners/${partner.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: pageUrl,
      locale: isEn ? 'en_US' : 'ro_RO',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function PartnerDetailPage({ params }) {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value === 'en' ? 'en' : 'ro';
  const localizedPartners = localizePartners(strategicPartners, locale);
  const { slug: rawSlug } = await params;
  const legacySlugMap = {
    'proiectul-a-s': 'markem-imaje',
  };

  const slug = legacySlugMap[rawSlug] || rawSlug;
  const partner = localizedPartners.find((p) => p.slug === slug);

  if (!partner) notFound();

  const currentIndex = localizedPartners.findIndex((p) => p.slug === slug);
  const totalPartners = localizedPartners.length;
  const prevPartner = localizedPartners[(currentIndex - 1 + totalPartners) % totalPartners];
  const nextPartner = localizedPartners[(currentIndex + 1) % totalPartners];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <Container size="xl">
        <Link href="/" className="inline-flex items-center gap-2 text-secondary-blue hover:text-accent-blue transition-colors mb-6 font-semibold">
          <IconArrowLeft /> {f(locale, 'partnerDetailPage', 'backHome')}
        </Link>

        <article className="max-w-5xl mx-auto">
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center mb-12">
            <div className="lg:col-span-3">
              <h1 className="text-2xl md:text-3xl font-semibold text-primary-black mb-3 leading-tight">
                {f(locale, 'partnerDetailPage', 'heroTitle')}
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-text">
                {partner.name}
              </h2>
            </div>

            <div className="lg:col-span-2">
              <div className="w-full h-48 flex items-center justify-center overflow-hidden relative px-2">
                <img
                  src={partner.detailLogo || partner.logo}
                  alt={partner.name}
                  className="max-h-32 w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl space-y-6 mb-16">
            {partner.fullDescription.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-text leading-relaxed text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Previous / Next Navigation */}
          <nav className="pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-6 sm:gap-0">
              <Link
                href={`/solution-partners/${prevPartner.slug}`}
                className="group flex items-center gap-3 text-secondary-blue hover:text-accent-blue transition-colors"
              >
                <IconChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <span className="block text-sm text-gray-text font-medium">
                    {f(locale, 'partnerDetailPage', 'previousPartner')}
                  </span>
                  <span className="block text-lg font-semibold">
                    {prevPartner.name}
                  </span>
                </div>
              </Link>

              <Link
                href={`/solution-partners/${nextPartner.slug}`}
                className="group flex items-center gap-3 text-secondary-blue hover:text-accent-blue transition-colors self-end sm:self-auto"
              >
                <div className="text-right">
                  <span className="block text-sm text-gray-text font-medium">
                    {f(locale, 'partnerDetailPage', 'nextPartner')}
                  </span>
                  <span className="block text-lg font-semibold">
                    {nextPartner.name}
                  </span>
                </div>
                <IconChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </nav>

          {/* CTA */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-primary-black mb-6">
              {f(locale, 'partnerDetailPage', 'ctaTitle')}
            </h3>
            <p className="text-gray-text text-xl mb-10 max-w-3xl mx-auto">
              {f(locale, 'partnerDetailPage', 'ctaSubtitle')}
            </p>
            <Button as={Link} href="/contact" variant="solid" size="lg" className="bg-secondary-blue hover:bg-accent-blue text-white">
              {f(locale, 'partnerDetailPage', 'ctaPrimary')}
            </Button>
          </div>
        </article>
      </Container>
    </div>
  );
}
