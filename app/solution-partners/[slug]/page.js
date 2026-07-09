import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '../../../components/ui/Container';
import Button from '../../../components/ui/Button';
import { strategicPartners } from '../../../data/partners';
import { IconArrowLeft, IconChevronLeft, IconChevronRight } from '../../../components/ui/Icons';
import PartnerStorySlider from '../../../components/ui/PartnerStorySlider';
import { cookies } from 'next/headers';
import { localizePartners } from '../../../lib/i18n/contentLocalization';
import { f } from '../../../lib/i18n/sectionTranslations';
import { DEFAULT_LOCALE, isSupportedLocale, toLocalePath } from '../../../lib/i18n/dictionaries';
/* eslint-disable react/prop-types, react/no-array-index-key */

export async function generateMetadata({ params }) {
  const cookieStore = await cookies();
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeRaw) ? localeRaw : DEFAULT_LOCALE;
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

  let ogLocale = 'ro_RO';
  if (locale === 'tr') {
    ogLocale = 'tr_TR';
  } else if (isEn) {
    ogLocale = 'en_US';
  }

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
      locale: ogLocale,
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
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeRaw) ? localeRaw : DEFAULT_LOCALE;
  const localizedPartners = localizePartners(strategicPartners, locale);
  const { slug: rawSlug } = await params;
  const legacySlugMap = {
    'proiectul-a-s': 'markem-imaje',
  };

  const slug = legacySlugMap[rawSlug] || rawSlug;
  const partner = localizedPartners.find((p) => p.slug === slug);

  if (!partner) notFound();

  const detailBasePath = locale === 'en' ? '/solution-partners' : '/parteneri-de-solutii';
  const currentIndex = localizedPartners.findIndex((p) => p.slug === slug);
  const totalPartners = localizedPartners.length;
  const prevPartner = localizedPartners[(currentIndex - 1 + totalPartners) % totalPartners];
  const nextPartner = localizedPartners[(currentIndex + 1) % totalPartners];
  const showStorySlider = Array.isArray(partner.storySlides) && partner.storySlides.length > 0;

  const toCardSummary = (value) => {
    const text = String(value || '').replace(/\s+/g, ' ').trim();
    if (!text) {
      return '';
    }

    const firstSentence = text.split(/[.!?]/)[0]?.trim() || text;
    return firstSentence.length > 120 ? `${firstSentence.slice(0, 117)}...` : `${firstSentence}.`;
  };

  const prevSummary = toCardSummary(prevPartner.fullDescription || prevPartner.description);
  const nextSummary = toCardSummary(nextPartner.fullDescription || nextPartner.description);

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <Container size="xl">
        <Link href={toLocalePath('/', locale)} className="inline-flex items-center gap-2 text-secondary-blue hover:text-accent-blue transition-colors mb-6 font-semibold">
          <IconArrowLeft /> {f(locale, 'partnerDetailPage', 'backHome')}
        </Link>

        <article className="w-full">
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.618fr_1fr] gap-8 lg:gap-12 xl:gap-16 items-start mb-12">
            <div className="text-left lg:pr-2 xl:pr-6">
              <h1 className="text-3xl md:text-4xl xl:text-[2.8rem] font-semibold text-primary-black leading-tight">
                {`${partner.name} | ${f(locale, 'partnerDetailPage', 'partnerSuffix')}`}
              </h1>

              <div className="mt-6 space-y-6">
                {partner.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-text leading-relaxed text-lg xl:text-[1.23rem]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="lg:self-stretch flex items-center justify-center">
              <div className="w-full h-full min-h-72 md:min-h-80 xl:min-h-96 flex items-center justify-center overflow-hidden relative px-4 md:px-6 rounded-2xl border border-slate-200 bg-white">
                <img
                  src={partner.detailLogo || partner.logo}
                  alt={partner.name}
                  className="max-h-56 md:max-h-64 xl:max-h-72 w-full object-contain"
                />
              </div>
            </div>
          </div>

          {showStorySlider ? (
            <PartnerStorySlider
              slides={partner.storySlides}
              partnerName={partner.name}
              locale={locale}
            />
          ) : null}

          {/* Previous / Next Navigation */}
          <nav className="pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-6 sm:gap-0">
              <Link
                href={toLocalePath(`${detailBasePath}/${prevPartner.slug}`, locale)}
                className="group flex items-center gap-3 text-secondary-blue hover:text-accent-blue transition-colors"
              >
                <IconChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <span className="block text-sm text-gray-text font-medium">
                    {f(locale, 'partnerDetailPage', 'previousPartner')}
                  </span>
                  <span className="mt-2 inline-flex h-14 w-36 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 shadow-sm">
                    <img
                      src={prevPartner.detailLogo || prevPartner.logo}
                      alt={prevPartner.name}
                      className="max-h-8 w-full object-contain"
                    />
                  </span>
                  <p className="mt-2 max-w-xs text-sm text-gray-text leading-relaxed">
                    {prevSummary}
                  </p>
                </div>
              </Link>

              <Link
                href={toLocalePath(`${detailBasePath}/${nextPartner.slug}`, locale)}
                className="group flex items-center gap-3 text-secondary-blue hover:text-accent-blue transition-colors self-end sm:self-auto"
              >
                <div className="text-right">
                  <span className="block text-sm text-gray-text font-medium">
                    {f(locale, 'partnerDetailPage', 'nextPartner')}
                  </span>
                  <span className="mt-2 ml-auto inline-flex h-14 w-36 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 shadow-sm">
                    <img
                      src={nextPartner.detailLogo || nextPartner.logo}
                      alt={nextPartner.name}
                      className="max-h-8 w-full object-contain"
                    />
                  </span>
                  <p className="mt-2 ml-auto max-w-xs text-sm text-gray-text leading-relaxed">
                    {nextSummary}
                  </p>
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
            <Button as={Link} href={toLocalePath('/contact', locale)} variant="solid" size="lg" className="bg-secondary-blue hover:bg-accent-blue text-white">
              {f(locale, 'partnerDetailPage', 'ctaPrimary')}
            </Button>
          </div>
        </article>
      </Container>
    </div>
  );
}
