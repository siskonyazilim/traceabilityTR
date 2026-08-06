import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '../../../components/ui/Container';
import Button from '../../../components/ui/Button';
import { IconArrowLeft, IconArrowRight } from '../../../components/ui/Icons';
import PartnerStorySlider from '../../../components/ui/PartnerStorySlider';
import { getRequestLocale } from '../../../lib/i18n/requestLocale';
import { f } from '../../../lib/i18n/sectionTranslations';
import { toLocalePath } from '../../../lib/i18n/dictionaries';
import sanitizeRichText from '../../../lib/sanitizeRichText';
import { getStrapiMediaUrl } from '../../../lib/strapi/media';
import {
  getPartnerByDocumentIdAndLocale,
  getPartnerBySlug,
  getPartnerBySlugAnyLocale,
  getPartnersByLocale,
} from '../../../lib/strapi/partners';
/* eslint-disable react/prop-types, react/no-array-index-key */

const LEGACY_SLUG_MAP = {
  'proiectul-a-s': 'markem-imaje',
};

function normalizeSlug(rawSlug) {
  return LEGACY_SLUG_MAP[rawSlug] || rawSlug;
}

function getDetailBasePath(locale) {
  if (locale === 'ro') {
    return '/parteneri-de-solutii';
  }

  return '/solution-partners';
}

function stripHtmlToText(value) {
  const source = String(value || '');
  let result = '';
  let inTag = false;

  for (const char of source) {
    if (char === '<') {
      inTag = true;
      result += ' ';
      continue;
    }

    if (char === '>') {
      inTag = false;
      continue;
    }

    if (!inTag) {
      result += char;
    }
  }

  return result.replace(/\s+/g, ' ').trim();
}

function htmlToParagraphText(value) {
  const source = String(value || '');
  if (!source) {
    return '';
  }

  let result = '';
  let tagBuffer = '';
  let inTag = false;

  for (const char of source) {
    if (char === '<') {
      inTag = true;
      tagBuffer = '';
      continue;
    }

    if (char === '>') {
      const normalizedTag = tagBuffer.toLowerCase().trim();
      if (normalizedTag === 'br' || normalizedTag === 'br/' || normalizedTag === 'br /') {
        result += '\n';
      }

      if (normalizedTag === '/p') {
        result += '\n\n';
      }

      inTag = false;
      tagBuffer = '';
      continue;
    }

    if (inTag) {
      tagBuffer += char;
      continue;
    }

    result += char;
  }

  return result
    .replaceAll('\r\n', '\n')
    .replaceAll('\r', '\n')
    .replaceAll('\n\t', '\n')
    .trim();
}

function splitParagraphs(value) {
  return String(value || '')
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .filter(Boolean);
}

async function getLocalizedPartnersWithFallback(locale) {
  try {
    return await getPartnersByLocale(locale);
  } catch (error) {
    console.warn('Failed to load localized partners list. Falling back to empty list.', error);
    return [];
  }
}

async function resolvePartnerWithFallback(locale, slug) {
  const normalizedSlug = normalizeSlug(slug);

  let byLocale = null;
  try {
    byLocale = await getPartnerBySlug(locale, normalizedSlug);
  } catch (error) {
    console.warn('Failed to resolve partner by locale. Trying fallback lookups.', error);
  }

  if (byLocale) {
    return byLocale;
  }

  let fromAnyLocale = null;
  try {
    fromAnyLocale = await getPartnerBySlugAnyLocale(normalizedSlug);
  } catch (error) {
    console.warn('Failed to resolve partner by any locale.', error);
    return null;
  }

  if (fromAnyLocale?.documentId) {
    let localized = null;
    try {
      localized = await getPartnerByDocumentIdAndLocale(fromAnyLocale.documentId, locale);
    } catch (error) {
      console.warn('Failed to resolve partner localization by documentId.', error);
    }

    if (localized) {
      return localized;
    }
  }

  return fromAnyLocale || null;
}

function getLocaleSpecificPath(locale, slug) {
  if (locale === 'ro') {
    return `/ro/parteneri-de-solutii/${slug}`;
  }

  if (locale === 'en') {
    return `/en/solution-partners/${slug}`;
  }

  return `/solution-partners/${slug}`;
}

export async function generateStaticParams() {
  const slugSet = new Set();

  try {
    for (const locale of ['tr', 'en', 'ro']) {
      const partners = await getPartnersByLocale(locale);
      for (const partner of partners) {
        if (partner.slug) {
          slugSet.add(partner.slug);
        }
      }
    }
  } catch (error) {
    console.error('Failed to generate static params for partners from Strapi', error);
  }

  return Array.from(slugSet).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const locale = await getRequestLocale();
  const { slug: rawSlug } = await params;
  const partner = await resolvePartnerWithFallback(locale, rawSlug);

  if (!partner) {
    return {
      title: f(locale, 'partnerDetailPage', 'notFoundTitle'),
      description: f(locale, 'partnerDetailPage', 'notFoundDescription'),
    };
  }

  const title = partner.seo?.title || `${partner.name} | ${f(locale, 'partnerDetailPage', 'partnerSuffix')} | Traceability`;
  const fallbackDescription = partner.summary || partner.description || stripHtmlToText(partner.fullDescription);
  const description = partner.seo?.description || fallbackDescription;
  const slugByLocale = partner.slugByLocale || {};
  const trSlug = slugByLocale.tr || partner.slug;
  const enSlug = slugByLocale.en || partner.slug;
  const roSlug = slugByLocale.ro || partner.slug;
  let canonicalSlug = trSlug;
  if (locale === 'en') {
    canonicalSlug = enSlug;
  }
  if (locale === 'ro') {
    canonicalSlug = roSlug;
  }
  const canonicalPath = getLocaleSpecificPath(locale, canonicalSlug);

  const alternates = {
    canonical: `https://izlenebilirlik.com.tr${canonicalPath}`,
    languages: {
      'tr': `https://izlenebilirlik.com.tr/solution-partners/${trSlug}`,
      'en': `https://izlenebilirlik.com.tr/en/solution-partners/${enSlug}`,
      'ro': `https://izlenebilirlik.com.tr/ro/parteneri-de-solutii/${roSlug}`,
      'x-default': `https://izlenebilirlik.com.tr/solution-partners/${trSlug}`,
    }
  };

  let ogLocale = 'ro_RO';
  if (locale === 'tr') {
    ogLocale = 'tr_TR';
  } else if (locale === 'en') {
    ogLocale = 'en_US';
  }

  const ogImageSource = getStrapiMediaUrl(partner.seo?.image || partner.detailLogo || partner.logo);
  let ogImage = 'https://izlenebilirlik.com.tr/siskon-logo-header.svg';
  if (ogImageSource) {
    ogImage = ogImageSource.startsWith('http')
      ? ogImageSource
      : `https://izlenebilirlik.com.tr${ogImageSource}`;
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
  const localizedPartners = await getLocalizedPartnersWithFallback(locale);
  const { slug: rawSlug } = await params;
  const slug = normalizeSlug(rawSlug);
  const partner = await resolvePartnerWithFallback(locale, slug);

  if (!partner) notFound();

  const partnersForNavigation = localizedPartners.length > 0 ? localizedPartners : [partner];
  const detailBasePath = getDetailBasePath(locale);
  const currentIndex = partnersForNavigation.findIndex((p) => p.slug === partner.slug);
  const totalPartners = partnersForNavigation.length;
  const safeIndex = Math.max(currentIndex, 0);
  const prevPartner = partnersForNavigation[(safeIndex - 1 + totalPartners) % totalPartners];
  const nextPartner = partnersForNavigation[(safeIndex + 1) % totalPartners];
  const showStorySlider = Array.isArray(partner.storySlides) && partner.storySlides.length > 0;
  const paragraphSource = htmlToParagraphText(partner.fullDescription || partner.description || partner.summary);
  const descriptionParagraphs = splitParagraphs(paragraphSource);
  const richTextBlocks = Array.isArray(partner.contentBlocks)
    ? partner.contentBlocks.filter((block) => block.type === 'richText' && block.content)
    : [];
  const galleryBlocks = Array.isArray(partner.contentBlocks)
    ? partner.contentBlocks.filter((block) => block.type === 'gallery' && Array.isArray(block.imageUrls) && block.imageUrls.length > 0)
    : [];
  const quoteBlocks = Array.isArray(partner.contentBlocks)
    ? partner.contentBlocks.filter((block) => block.type === 'quote' && block.quote)
    : [];
  const ctaBlocks = Array.isArray(partner.contentBlocks)
    ? partner.contentBlocks.filter((block) => block.type === 'cta' && block.title)
    : [];

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
                {descriptionParagraphs.map((paragraph, index) => (
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
                  src={getStrapiMediaUrl(partner.detailLogo || partner.logo)}
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

          {richTextBlocks.map((block, index) => (
            <section key={`rich-${index}`} className="mb-10 rounded-md border border-slate-200 bg-white p-6 md:p-8">
              {block.title ? (
                <h2 className="text-2xl md:text-[1.9rem] font-semibold text-primary-black mb-4">
                  {block.title}
                </h2>
              ) : null}
              <div
                className="prose prose-slate max-w-none text-gray-text"
                dangerouslySetInnerHTML={{ __html: sanitizeRichText(block.content) }}
              />
            </section>
          ))}

          {galleryBlocks.map((block, index) => (
            <section key={`gallery-${index}`} className="mb-10 rounded-md border border-slate-200 bg-white p-6 md:p-8">
              {block.title ? (
                <h3 className="text-xl md:text-2xl font-semibold text-primary-black mb-4">{block.title}</h3>
              ) : null}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {block.imageUrls.map((imageUrl, imageIndex) => (
                  <div key={`${imageUrl}-${imageIndex}`} className="overflow-hidden rounded-md border border-slate-200 bg-slate-50">
                    <img src={getStrapiMediaUrl(imageUrl)} alt={`${partner.name} gallery ${imageIndex + 1}`} className="h-56 w-full object-cover" />
                  </div>
                ))}
              </div>
            </section>
          ))}

          {quoteBlocks.map((block, index) => (
            <blockquote key={`quote-${index}`} className="mb-10 rounded-md border-l-4 border-secondary-blue bg-slate-50 px-6 py-5">
              <p className="text-lg md:text-xl text-primary-black leading-relaxed">"{block.quote}"</p>
              {(block.author || block.role) ? (
                <footer className="mt-3 text-sm text-gray-text">
                  {[block.author, block.role].filter(Boolean).join(' - ')}
                </footer>
              ) : null}
            </blockquote>
          ))}

          {ctaBlocks.map((block, index) => (
            <section key={`dz-cta-${index}`} className="mb-12 rounded-md border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 md:p-8 text-center">
              <h3 className="text-2xl font-semibold text-primary-black mb-3">{block.title}</h3>
              {block.description ? (
                <p className="text-gray-text mb-6">{block.description}</p>
              ) : null}
              {block.buttonUrl ? (
                <Button as={Link} href={block.buttonUrl} variant="solid" size="md" className="bg-secondary-blue hover:bg-accent-blue text-white">
                  {block.buttonLabel || f(locale, 'partnerDetailPage', 'ctaPrimary')}
                </Button>
              ) : null}
            </section>
          ))}

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
