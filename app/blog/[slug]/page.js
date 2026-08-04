import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Container from '../../../components/ui/Container';
import Button from '../../../components/ui/Button';
import { blogPosts } from '../../../data/blogPosts';
import { sanitizeRichText } from '../../../lib/sanitizeRichText';
import { IconArrowLeft, IconArrowRight } from '../../../components/ui/Icons';
import { getRequestLocale } from '../../../lib/i18n/requestLocale';
import { localizeBlogPosts } from '../../../lib/i18n/contentLocalization';
import { f } from '../../../lib/i18n/sectionTranslations';
import { resolveSlug, getLocalizedSlug } from '../../../lib/i18n/slugMapping';
import { toLocalePath } from '../../../lib/i18n/dictionaries';
import JsonLd from '../../../components/seo/JsonLd';
import { getOrganizationSchema, SITE_URL, LOGO_URL } from '../../../components/seo/OrganizationSchema';
/* eslint-disable react/prop-types */

const normalizeBlogContent = (html) => {
  if (typeof html !== 'string') return '';

  const withoutInlineImages = html
    .replace(/<p[^>]*>\s*<img[^>]*>\s*<\/p>/gi, '')
    .replace(/(<figure[^>]*>[\s\S]*?<\/figure>)|(<img[^>]*>)/gi, (match, figureBlock) => {
      // Preserve <figure> blocks (intentional images), remove standalone <img>
      return figureBlock ? figureBlock : '';
    });

  return withoutInlineImages.replace(
    /<p[^>]*>\s*<strong>([^<]{2,140})<\/strong>\s*:?\s*([^<]*)<\/p>/gi,
    (_, headingRaw, trailingRaw) => {
      const headingText = String(headingRaw || '').replace(/:\s*$/, '').trim();
      const trailingText = String(trailingRaw || '').trim();
      const h3 = `<h3>${headingText}</h3>`;
      if (!trailingText) return h3;
      return `${h3}<p>${trailingText}</p>`;
    }
  );
};

export async function generateMetadata({ params }) {
  const locale = await getRequestLocale();
  const isEn = locale === 'en';
  const localizedPosts = localizeBlogPosts(blogPosts, locale);
  const { slug: rawSlug } = await params;
  const baseSlug = resolveSlug('blog', rawSlug);
  const post = localizedPosts.find((entry) => entry.originalSlug === baseSlug);

  if (!post) {
    return {
      title: f(locale, 'blogDetailPage', 'notFoundTitle'),
      description: f(locale, 'blogDetailPage', 'notFoundDescription'),
    };
  }

  const title = `${post.title} | ${f(locale, 'blogDetailPage', 'blogSuffix')}`;
  const description = post.excerpt;
  const localizedBlogSlug = getLocalizedSlug('blog', baseSlug, locale);
  const canonicalPath = toLocalePath(`/blog/${localizedBlogSlug}`, locale);

  const alternates = {
    canonical: `https://izlenebilirlik.com.tr${canonicalPath}`,
    languages: {
      'tr': `https://izlenebilirlik.com.tr/blog/${getLocalizedSlug('blog', baseSlug, 'tr')}`,
      'en': `https://izlenebilirlik.com.tr/en/blog/${getLocalizedSlug('blog', baseSlug, 'en')}`,
      'ro': `https://izlenebilirlik.com.tr/ro/blog/${getLocalizedSlug('blog', baseSlug, 'ro')}`,
      'x-default': `https://izlenebilirlik.com.tr/blog/${getLocalizedSlug('blog', baseSlug, 'tr')}`,
    }
  };

  let openGraphLocale = 'ro_RO';
  if (locale === 'tr') {
    openGraphLocale = 'tr_TR';
  } else if (isEn) {
    openGraphLocale = 'en_US';
  }

  let ogImage = 'https://izlenebilirlik.com.tr/siskon-logo-header.svg';
  if (post.image) {
    ogImage = post.image.startsWith('http') ? post.image : `https://izlenebilirlik.com.tr${post.image}`;
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
      locale: openGraphLocale,
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

export default async function BlogDetailPage({ params }) {
  const locale = await getRequestLocale();
  const localizedPosts = localizeBlogPosts(blogPosts, locale);
  const { slug: rawSlug } = await params;
  const baseSlug = resolveSlug('blog', rawSlug);
  const post = localizedPosts.find((p) => p.originalSlug === baseSlug);

  if (!post) notFound();

  const sortedAllPosts = [...localizedPosts]
    .sort((a, b) => {
      const dateDiff = new Date(b.date).getTime() - new Date(a.date).getTime();

      if (dateDiff !== 0) {
        return dateDiff;
      }

      return (b.id ?? 0) - (a.id ?? 0);
    });

  const currentAllIndex = sortedAllPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentAllIndex > 0 ? sortedAllPosts[currentAllIndex - 1] : null;
  const nextPost = currentAllIndex < sortedAllPosts.length - 1 ? sortedAllPosts[currentAllIndex + 1] : null;

  let dateLocale = 'ro-RO';
  if (locale === 'en') {
    dateLocale = 'en-US';
  } else if (locale === 'tr') {
    dateLocale = 'tr-TR';
  }

  const date = new Date(post.date).toLocaleDateString(dateLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const contentWithRealHeadings = normalizeBlogContent(post.content);
  const safeContent = sanitizeRichText(contentWithRealHeadings);
  const coverImage = post.coverImage || post.image || '';
  const hasCoverImage = Boolean(coverImage);

  let onsuiteUrl = 'https://onsuite.com.tr/ro/modules/trace';
  if (locale === 'tr') {
    onsuiteUrl = 'https://onsuite.com.tr/tr/moduller/trace';
  } else if (locale === 'en') {
    onsuiteUrl = 'https://onsuite.com.tr/en/modules/trace';
  }

  const localizedBlogSlug = getLocalizedSlug('blog', baseSlug, locale);
  const canonicalPath = toLocalePath(`/blog/${localizedBlogSlug}`, locale);
  const pageUrl = `${SITE_URL}${canonicalPath}`;
  const homeUrl = `${SITE_URL}${toLocalePath('/', locale)}`;
  const blogListUrl = `${SITE_URL}${toLocalePath('/blog', locale)}`;

  let ogImage = LOGO_URL;
  if (post.image) {
    ogImage = post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`;
  }

  const org = getOrganizationSchema();

  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${pageUrl}#blogposting`,
        'headline': post.title,
        'description': post.excerpt,
        'image': ogImage,
        'url': pageUrl,
        'datePublished': post.date ? new Date(post.date).toISOString() : undefined,
        'dateModified': post.date ? new Date(post.date).toISOString() : undefined,
        'inLanguage': locale,
        'author': {
          '@id': org['@id'],
        },
        'publisher': {
          '@id': org['@id'],
        },
        'isPartOf': {
          '@type': 'Blog',
          '@id': `${SITE_URL}/blog#blog`,
          'name': 'Traceability Blog',
          'url': `${SITE_URL}/blog`,
          'publisher': { '@id': org['@id'] },
        },
        ...(post.category ? { 'articleSection': post.category } : {}),
      },
      // ── Organization ────────────────────────────────────────────────────
      org,
      // ── BreadcrumbList ──────────────────────────────────────────────────
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
            'item': blogListUrl,
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': post.title,
            'item': pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white pb-16">
      <JsonLd data={blogPostSchema} />
      <Container size="xl">
        <article className="mx-auto max-w-none py-10 md:py-14">
          <div className="mx-auto w-full max-w-none">
            <Link href={toLocalePath('/blog', locale)} className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-secondary-blue transition-colors hover:text-accent-blue">
              <IconArrowLeft size={16} />
              <span>{f(locale, 'blogDetailPage', 'backToBlog')}</span>
            </Link>
          </div>

          <header className="mb-10 border-b border-slate-200 pb-8">
            <div className="mx-auto w-full max-w-none">
              <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:items-center lg:gap-10">
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                    <span className="font-semibold uppercase tracking-wide text-secondary-blue">{post.category}</span>
                    <span className="text-gray-text">{date}</span>
                  </div>

                  <h1 className="text-[24px] md:text-[32px] font-medium leading-tight text-slate-900">{post.title}</h1>
                  <div className="mt-4 flex items-center gap-3">
                    <p className="text-sm font-medium text-gray-text">{f(locale, 'blogDetailPage', 'writtenBy')}</p>
                    <Image
                      src="/siskon-logo-header.svg"
                      alt="Siskon"
                      width={96}
                      height={28}
                    />
                  </div>
                </div>

                <figure className="w-full overflow-hidden rounded-xl bg-slate-100">
                  {hasCoverImage ? (
                    <Image
                      src={coverImage}
                      alt={post.title}
                      width={0}
                      height={0}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="h-auto w-full"
                      quality={92}
                      priority
                      fetchPriority="high"
                    />
                  ) : (
                    <div className="flex h-[340px] md:h-[480px] items-center justify-center bg-slate-100 text-slate-500">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                          <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="1.7" />
                          <circle cx="9" cy="10" r="1.8" strokeWidth="1.7" />
                          <path d="M21 16l-5-5-7 7" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>
                          {locale === 'tr' && 'Kapak görseli bulunmuyor'}
                          {locale === 'en' && 'Cover image unavailable'}
                          {locale === 'ro' && 'Imagine coperta indisponibila'}
                        </span>
                      </div>
                    </div>
                  )}
                </figure>
              </div>
            </div>
          </header>

          <div
            dangerouslySetInnerHTML={{ __html: safeContent }}
            className="blog-rich mx-auto max-w-none px-4 md:px-5 lg:px-0 text-gray-text"
          />

          {/* OnSuite Trace Redirection CTA */}
          <div className="mx-auto mt-12 w-full max-w-none rounded-xl bg-gradient-to-br from-primary-black to-dark-bg p-6 md:p-6 text-white shadow-xl border border-slate-blue/10 relative overflow-hidden">
            {/* Ambient decorative background patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,181,247,0.15),transparent_48%)] pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-accent-blue/10 rounded-md blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent-blue px-2.5 py-1 bg-accent-blue/10 rounded-md border border-accent-blue/20">
                    OnSuite Trace
                  </span>
                </div>
                <h2 className="text-[20px] font-medium tracking-tight">
                  {locale === 'tr' && 'Uçtan Uca İzlenebilirlik Çözümümüzle Tanışın'}
                  {locale === 'en' && 'Meet Our End-to-End Traceability Solution'}
                  {locale === 'ro' && 'Descoperiți Soluția Noastră de Trasabilitate End-to-End'}
                </h2>
                <p className="text-gray-light/85 text-sm md:text-base leading-relaxed">
                  {locale === 'tr' && 'OnSuite Trace, tüm üretim süreçlerinizi tek bir platformdan yönetmenize olanak tanır. "Sürekli Kontrol, Sıfır Hata" mottosuyla işletmeniz için uçtan uca dijital izlenebilirlik sağlıyoruz.'}
                  {locale === 'en' && 'OnSuite Trace allows you to manage all your production processes from a single platform. We provide end-to-end digital traceability for your business with the motto "Continuous Control, Zero Defects".'}
                  {locale === 'ro' && 'OnSuite Trace vă permite să gestionați toate procesele de producție dintr-o singură platformă. Oferim trasabilitate digitală completă pentru afacerea dumneavoastră sub deviza "Control Continuu, Zero Erori".'}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button
                  as="a"
                  href={onsuiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="solid"
                  size="lg"
                  className="bg-secondary-blue text-white hover:bg-accent-blue font-medium text-sm rounded-md inline-flex items-center gap-2 whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-300 w-full min-h-[44px] md:w-auto"
                >
                  <span>
                    {locale === 'tr' && 'OnSuite Tracei kesfet'}
                    {locale === 'en' && 'Discover OnSuite Trace'}
                    {locale === 'ro' && 'Descopera OnSuite Trace'}
                  </span>
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <section className="mx-auto mt-16 w-full max-w-none border-t border-slate-200 pt-10">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {prevPost ? (
                <Link
                  href={toLocalePath(`/blog/${getLocalizedSlug('blog', prevPost.originalSlug || prevPost.slug, locale)}`, locale)}
                  className="group flex items-center gap-3 rounded-xl border-[0.5px] border-slate-300 p-3 bg-white hover:border-accent-blue/40 transition-all duration-300 text-left"
                >
                  <div className="min-w-0">
                    <span className="mb-1 flex items-center gap-1 text-[12px] font-medium text-gray-text group-hover:text-accent-blue transition-colors">
                      <IconArrowLeft size={14} />
                      {locale === 'tr' && 'Önceki Haber'}
                      {locale === 'en' && 'Previous Article'}
                      {locale === 'ro' && 'Articol anterior'}
                    </span>
                    <span className="block text-[14px] font-medium text-primary-black group-hover:text-secondary-blue transition-colors line-clamp-2">
                      {prevPost.title}
                    </span>
                  </div>
                </Link>
              ) : (
                <div className="hidden md:block" />
              )}

              {nextPost ? (
                <Link
                  href={toLocalePath(`/blog/${getLocalizedSlug('blog', nextPost.originalSlug || nextPost.slug, locale)}`, locale)}
                  className="group flex items-center gap-3 rounded-xl border-[0.5px] border-slate-300 p-3 bg-white hover:border-accent-blue/40 transition-all duration-300 text-left md:col-start-2"
                >
                  <div className="min-w-0">
                    <span className="mb-1 flex items-center gap-1 text-[12px] font-medium text-gray-text group-hover:text-accent-blue transition-colors">
                      {locale === 'tr' && 'Sonraki Haber'}
                      {locale === 'en' && 'Next Article'}
                      {locale === 'ro' && 'Articol următor'}
                      <IconArrowRight size={14} />
                    </span>
                    <span className="block text-[14px] font-medium text-primary-black group-hover:text-secondary-blue transition-colors line-clamp-2">
                      {nextPost.title}
                    </span>
                  </div>
                </Link>
              ) : (
                <div className="hidden md:block" />
              )}
            </div>
          </section>

          <section className="clear-both mx-auto mt-16 w-full max-w-none border-t border-slate-200 pt-10">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="mx-auto mb-4 max-w-2xl text-2xl font-semibold leading-tight text-primary-black md:text-3xl">
                {f(locale, 'blogDetailPage', 'ctaTitle')}
              </h3>
              <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-text md:text-lg">
                {f(locale, 'blogDetailPage', 'ctaSubtitle')}
              </p>
              <Button
                as={Link}
                href={toLocalePath('/contact', locale)}
                variant="solid"
                size="lg"
                className="bg-secondary-blue font-semibold text-white hover:bg-accent-blue"
              >
                {f(locale, 'blogDetailPage', 'ctaPrimary')}
              </Button>
            </div>
          </section>
        </article>
      </Container>
    </div>
  );
}
