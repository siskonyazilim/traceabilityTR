import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '../../../components/ui/Container';
import Button from '../../../components/ui/Button';
import { strategicPartners } from '../../../data/partners';
import { IconArrowLeft, IconArrowRight } from '../../../components/ui/Icons';
import PartnerStorySlider from '../../../components/ui/PartnerStorySlider';
import { getRequestLocale, getRequestPathname } from '../../../lib/i18n/requestLocale';
import { localizePartners } from '../../../lib/i18n/contentLocalization';
import { f } from '../../../lib/i18n/sectionTranslations';
import { DEFAULT_LOCALE, isSupportedLocale, toLocalePath } from '../../../lib/i18n/dictionaries';
/* eslint-disable react/prop-types, react/no-array-index-key */

export async function generateStaticParams() {
  const paths = [];
  for (const partner of strategicPartners) {
    paths.push({ slug: partner.slug });
  }
  paths.push({ slug: 'proiectul-a-s' });
  return paths;
}

export async function generateMetadata({ params }) {
  const locale = await getRequestLocale();
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

  const detailBasePath = locale === 'en'
    ? '/solution-partners'
    : (locale === 'ro' ? '/parteneri-de-solutii' : '/solution-partners');
  const alternates = {
    canonical: `https://izlenebilirlik.com.tr${
      locale === 'ro'
        ? `/ro/parteneri-de-solutii/${partner.slug}`
        : (locale === 'en'
            ? `/en/solution-partners/${partner.slug}`
            : `/solution-partners/${partner.slug}`)
    }`,
    languages: {
      'tr': `https://izlenebilirlik.com.tr/solution-partners/${partner.slug}`,
      'en': `https://izlenebilirlik.com.tr/en/solution-partners/${partner.slug}`,
      'ro': `https://izlenebilirlik.com.tr/ro/parteneri-de-solutii/${partner.slug}`,
      'x-default': `https://izlenebilirlik.com.tr/solution-partners/${partner.slug}`,
    }
  };

  let ogLocale = 'ro_RO';
  if (locale === 'tr') {
    ogLocale = 'tr_TR';
  } else if (isEn) {
    ogLocale = 'en_US';
  }

  let ogImage = 'https://izlenebilirlik.com.tr/siskon-logo-header.svg';
  if (partner.logo) {
    ogImage = partner.logo.startsWith('http') ? partner.logo : `https://izlenebilirlik.com.tr${partner.logo}`;
  }

  return {
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      type: 'article',
      url: alternates.canonical,
      locale: ogLocale,
      images: [
        {
          url: ogImage,
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
      images: [ogImage],
    },
  };
}

export default async function PartnerDetailPage({ params }) {
  const locale = await getRequestLocale();
  const localizedPartners = localizePartners(strategicPartners, locale);
  const { slug: rawSlug } = await params;
  const legacySlugMap = {
    'proiectul-a-s': 'markem-imaje',
  };

  const slug = legacySlugMap[rawSlug] || rawSlug;
  const partner = localizedPartners.find((p) => p.slug === slug);

  if (!partner) notFound();

  const detailBasePath = locale === 'en'
    ? '/solution-partners'
    : (locale === 'ro' ? '/parteneri-de-solutii' : '/solution-partners');
  const currentIndex = localizedPartners.findIndex((p) => p.slug === slug);
  const totalPartners = localizedPartners.length;
  const prevPartner = localizedPartners[(currentIndex - 1 + totalPartners) % totalPartners];
  const nextPartner = localizedPartners[(currentIndex + 1) % totalPartners];
  const showStorySlider = Array.isArray(partner.storySlides) && partner.storySlides.length > 0;

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
              <p className="text-secondary-blue text-xs md:text-sm uppercase tracking-[0.12em] font-semibold mb-3">
                {f(locale, 'partnerDetailPage', 'partnerSuffix')}
              </p>
              <h1 className="text-3xl md:text-4xl xl:text-[2.8rem] font-semibold text-primary-black leading-tight">
                {partner.name}
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
              <div className="w-full h-full min-h-72 md:min-h-80 xl:min-h-96 flex items-center justify-center overflow-hidden relative px-4 md:px-6 rounded-md border border-slate-200 bg-white">
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
          <nav className="clear-both mt-16 border-t border-slate-200 pt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Link
                href={toLocalePath(`${detailBasePath}/${prevPartner.slug}`, locale)}
                className="group flex flex-col items-start gap-2 rounded-md border border-slate-200 p-6 bg-gradient-to-br from-white to-slate-50/50 shadow-soft hover:shadow-soft-lg hover:border-accent-blue/40 transition-all duration-300 text-left"
              >
                <span className="flex items-center gap-1 text-xs font-semibold text-gray-text group-hover:text-accent-blue transition-colors">
                  <IconArrowLeft size={16} />
                  <span>{f(locale, 'partnerDetailPage', 'previousPartner')}</span>
                </span>
                <span className="text-base font-bold text-primary-black group-hover:text-secondary-blue transition-colors line-clamp-2">
                  {prevPartner.name}
                </span>
              </Link>

              <Link
                href={toLocalePath(`${detailBasePath}/${nextPartner.slug}`, locale)}
                className="group flex flex-col items-end gap-2 rounded-md border border-slate-200 p-6 bg-gradient-to-br from-white to-slate-50/50 shadow-soft hover:shadow-soft-lg hover:border-accent-blue/40 transition-all duration-300 text-right sm:col-start-2"
              >
                <span className="flex items-center gap-1 text-xs font-semibold text-gray-text group-hover:text-accent-blue transition-colors">
                  <span>{f(locale, 'partnerDetailPage', 'nextPartner')}</span>
                  <IconArrowRight size={16} />
                </span>
                <span className="text-base font-bold text-primary-black group-hover:text-secondary-blue transition-colors line-clamp-2">
                  {nextPartner.name}
                </span>
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
