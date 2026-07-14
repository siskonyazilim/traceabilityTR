import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Container from '../../../components/ui/Container';
import Button from '../../../components/ui/Button';
import { blogPosts } from '../../../data/blogPosts';
import { sanitizeRichText } from '../../../lib/sanitizeRichText';
import { IconArrowLeft, IconArrowRight } from '../../../components/ui/Icons';
import { cookies } from 'next/headers';
import { localizeBlogPosts } from '../../../lib/i18n/contentLocalization';
import { f } from '../../../lib/i18n/sectionTranslations';
import { DEFAULT_LOCALE, isSupportedLocale } from '../../../lib/i18n/dictionaries';
/* eslint-disable react/prop-types */

export async function generateMetadata({ params }) {
  const cookieStore = await cookies();
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeRaw) ? localeRaw : DEFAULT_LOCALE;
  const isEn = locale === 'en';
  const localizedPosts = localizeBlogPosts(blogPosts, locale);
  const { slug } = await params;
  const post = localizedPosts.find((entry) => entry.slug === slug);

  if (!post) {
    return {
      title: f(locale, 'blogDetailPage', 'notFoundTitle'),
      description: f(locale, 'blogDetailPage', 'notFoundDescription'),
    };
  }

  const title = `${post.title} | ${f(locale, 'blogDetailPage', 'blogSuffix')}`;
  const description = post.excerpt;
  const pageUrl = `https://traceability.com.tr/blog/${post.slug}`;

  let openGraphLocale = 'ro_RO';
  if (locale === 'tr') {
    openGraphLocale = 'tr_TR';
  } else if (isEn) {
    openGraphLocale = 'en_US';
  }

  let ogImage = 'https://traceability.com.tr/siskon-logo-header.svg';
  if (post.image) {
    ogImage = post.image.startsWith('http') ? post.image : `https://traceability.com.tr${post.image}`;
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
  const cookieStore = await cookies();
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeRaw) ? localeRaw : DEFAULT_LOCALE;
  const localizedPosts = localizeBlogPosts(blogPosts, locale);
  const { slug } = await params;
  const post = localizedPosts.find((p) => p.slug === slug);

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

  const safeContent = sanitizeRichText(post.content);

  let onsuiteUrl = 'https://onsuite.com.tr/ro/modules/trace';
  if (locale === 'tr') {
    onsuiteUrl = 'https://onsuite.com.tr/tr/moduller/trace';
  } else if (locale === 'en') {
    onsuiteUrl = 'https://onsuite.com.tr/en/modules/trace';
  }

  return (
    <div className="min-h-screen bg-white pb-16">
      <Container size="xl">
        <article className="mx-auto max-w-none py-10 md:py-14">
          <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary-blue transition-colors hover:text-accent-blue">
            <IconArrowLeft size={16} />
            <span>{f(locale, 'blogDetailPage', 'backToBlog')}</span>
          </Link>

          <header className="mb-8 border-b border-slate-200 pb-6">
            <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
              <span className="font-semibold uppercase tracking-wide text-secondary-blue">{post.category}</span>
              <span className="text-gray-text">{date}</span>
            </div>

            <h1 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">{post.title}</h1>
            <div className="mt-4 flex items-center gap-3">
              <p className="text-sm font-semibold text-gray-text">{f(locale, 'blogDetailPage', 'writtenBy')}</p>
              <Image
                src="/siskon-logo-header.svg"
                alt="Siskon"
                width={96}
                height={28}
              />
            </div>
          </header>

          <figure className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg md:float-right md:mb-6 md:ml-8 md:w-[46%] lg:w-[42%] xl:w-[40%]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 46vw, 40vw"
              className="object-cover"
              quality={95}
              priority
            />
          </figure>

          <div
            dangerouslySetInnerHTML={{ __html: safeContent }}
            className="blog-rich text-gray-text"
          />

          {/* OnSuite Trace Redirection CTA */}
          <div className="mt-12 rounded-lg bg-gradient-to-br from-primary-black to-dark-bg p-8 text-white shadow-xl md:p-10 border border-slate-blue/10 relative overflow-hidden">
            {/* Ambient decorative background patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,181,247,0.15),transparent_48%)] pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-accent-blue/10 rounded-md blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent-blue px-2.5 py-1 bg-accent-blue/10 rounded-md border border-accent-blue/20">
                    OnSuite Trace
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
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
                  className="bg-secondary-blue text-white hover:bg-accent-blue font-semibold text-sm rounded-md inline-flex items-center gap-2 whitespace-nowrap min-w-max shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>
                    {locale === 'tr' && "OnSuite Trace'i Keşfedin"}
                    {locale === 'en' && 'Explore OnSuite Trace'}
                    {locale === 'ro' && 'Explorează OnSuite Trace'}
                  </span>
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <section className="clear-both mt-16 border-t border-slate-200 pt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex flex-col items-start gap-2 rounded-lg border border-slate-200 p-6 bg-gradient-to-br from-white to-slate-50/50 shadow-soft hover:shadow-soft-lg hover:border-accent-blue/40 transition-all duration-300 text-left"
                >
                  <span className="flex items-center gap-1 text-xs font-semibold text-gray-text group-hover:text-accent-blue transition-colors">
                    <IconArrowLeft size={16} />
                    <span>
                      {locale === 'tr' && 'Önceki Makale'}
                      {locale === 'en' && 'Previous Article'}
                      {locale === 'ro' && 'Articol anterior'}
                    </span>
                  </span>
                  <span className="text-base font-bold text-primary-black group-hover:text-secondary-blue transition-colors line-clamp-2">
                    {prevPost.title}
                  </span>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}

              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex flex-col items-end gap-2 rounded-lg border border-slate-200 p-6 bg-gradient-to-br from-white to-slate-50/50 shadow-soft hover:shadow-soft-lg hover:border-accent-blue/40 transition-all duration-300 text-right sm:col-start-2"
                >
                  <span className="flex items-center gap-1 text-xs font-semibold text-gray-text group-hover:text-accent-blue transition-colors">
                    <span>
                      {locale === 'tr' && 'Sonraki Makale'}
                      {locale === 'en' && 'Next Article'}
                      {locale === 'ro' && 'Articol următor'}
                    </span>
                    <IconArrowRight size={16} />
                  </span>
                  <span className="text-base font-bold text-primary-black group-hover:text-secondary-blue transition-colors line-clamp-2">
                    {nextPost.title}
                  </span>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}
            </div>
          </section>

          <section className="clear-both mt-16 border-t border-slate-200 pt-10">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="mx-auto mb-4 max-w-2xl text-2xl font-semibold leading-tight text-primary-black md:text-3xl">
                {f(locale, 'blogDetailPage', 'ctaTitle')}
              </h3>
              <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-text md:text-lg">
                {f(locale, 'blogDetailPage', 'ctaSubtitle')}
              </p>
              <Button
                as={Link}
                href="/contact"
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
