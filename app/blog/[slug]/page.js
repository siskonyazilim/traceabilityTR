import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Container from '../../../components/ui/Container';
import Button from '../../../components/ui/Button';
import { blogPosts } from '../../../data/blogPosts';
import { sanitizeRichText } from '../../../lib/sanitizeRichText';
import { IconArrowLeft } from '../../../components/ui/Icons';
import { cookies } from 'next/headers';
import { localizeBlogPosts } from '../../../lib/i18n/contentLocalization';
import { f } from '../../../lib/i18n/sectionTranslations';
/* eslint-disable react/prop-types */

export async function generateMetadata({ params }) {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value === 'en' ? 'en' : 'ro';
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
  const pageUrl = `https://traceability.ro/blog/${post.slug}`;

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

export default async function BlogDetailPage({ params }) {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value === 'en' ? 'en' : 'ro';
  const localizedPosts = localizeBlogPosts(blogPosts, locale);
  const { slug } = await params;
  const post = localizedPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const relatedPosts = localizedPosts
    .filter(
      (p) =>
        p.category === post.category &&
        p.id !== post.id
    )
    .slice(0, 3);

  const dateLocale = locale === 'en' ? 'en-US' : 'ro-RO';
  const date = new Date(post.date).toLocaleDateString(dateLocale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const safeContent = sanitizeRichText(post.content);

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

          <figure className="relative mb-8 aspect-video w-full overflow-hidden rounded-xl md:float-right md:mb-6 md:ml-8 md:w-[46%] lg:w-[42%] xl:w-[40%]">
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

          {relatedPosts.length > 0 && (
            <section className="clear-both mt-16 border-t border-slate-200 pt-10">
              <h2 className="mb-6 text-xl font-semibold text-primary-black">{f(locale, 'blogDetailPage', 'relatedArticles')}</h2>
              <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {relatedPosts.map((relatedPost) => {
                  const relatedDate = new Date(relatedPost.date).toLocaleDateString(dateLocale, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  });

                  return (
                    <li key={relatedPost.id}>
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="group block h-full overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/70 shadow-soft transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-soft-lg"
                      >
                        <div className="relative aspect-video w-full overflow-hidden">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                            quality={82}
                          />
                        </div>
                        <div className="p-5">
                          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-secondary-blue">
                            {relatedPost.category}
                          </p>
                          <p className="mb-3 text-lg font-semibold leading-snug text-slate-800 transition-colors group-hover:text-secondary-blue">
                            {relatedPost.title}
                          </p>
                          <p className="text-sm text-slate-500">{relatedDate}</p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

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
