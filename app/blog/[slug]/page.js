import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Container from '../../../components/ui/Container';
import BlogCard from '../../../components/ui/BlogCard';
import Button from '../../../components/ui/Button';
import { blogPosts } from '../../../data/blogPosts';
import { sanitizeRichText } from '../../../lib/sanitizeRichText';
import { FiArrowLeft, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { cookies } from 'next/headers';
import { localizeBlogPosts } from '../../../lib/i18n/contentLocalization';
/* eslint-disable react/prop-types */

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

  const shareUrl = `https://traceability.ro/blog/${post.slug}`;
  const shareText = locale === 'en' ? `Quote: ${post.title}` : `Citez: ${post.title}`;
  const safeContent = sanitizeRichText(post.content);

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-16">
      <Container size="xl">
        <div className="py-12">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-secondary-blue hover:text-accent-blue transition-colors mb-8 font-semibold">
            <FiArrowLeft /> {locale === 'en' ? 'Back to Blog' : 'Inapoi la Blog'}
          </Link>

          <article className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8 rounded-3xl border border-slate-200 bg-white p-6 md:p-9 shadow-[0_14px_36px_rgba(10,10,43,0.08)]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-accent-blue uppercase bg-accent-blue bg-opacity-20 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-gray-text">{date}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-primary-black mb-4 leading-[1.08]">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 py-4 border-y border-gray-light">
              <div className="flex-1">
                <p className="text-sm text-gray-text">{locale === 'en' ? 'Written by' : 'Scris de'}</p>
                <p className="font-semibold text-primary-black">{post.author}</p>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-text">{locale === 'en' ? 'Share:' : 'Distribuie:'}</span>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-accent-blue hover:bg-accent-blue hover:text-white rounded-lg transition-all"
                  title={locale === 'en' ? 'Share on Twitter' : 'Distribuie pe Twitter'}
                >
                  <FiTwitter size={20} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-accent-blue hover:bg-accent-blue hover:text-white rounded-lg transition-all"
                  title={locale === 'en' ? 'Share on LinkedIn' : 'Distribuie pe LinkedIn'}
                >
                  <FiLinkedin size={20} />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-accent-blue hover:bg-accent-blue hover:text-white rounded-lg transition-all"
                  title={locale === 'en' ? 'Share on Facebook' : 'Distribuie pe Facebook'}
                >
                  <FiFacebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Feature Image */}
          <div className="w-full h-72 md:h-96 bg-gradient-to-br from-accent-blue to-accent-green rounded-2xl flex items-center justify-center mb-8 text-white text-6xl overflow-hidden relative border border-slate-200">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              quality={82}
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12 rounded-3xl border border-slate-200 bg-white p-6 md:p-9 shadow-[0_10px_28px_rgba(10,10,43,0.06)]">
            <div
              dangerouslySetInnerHTML={{ __html: safeContent }}
              className="text-gray-text leading-relaxed space-y-4"
            />
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-light">
              <h2 className="text-3xl font-bold text-primary-black mb-8">
                {locale === 'en' ? 'Related Articles' : 'Articole Inrudite'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-20 text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-primary-black mb-6">
              {locale === 'en' ? 'Need a traceability solution?' : 'Ai nevoie de o solutie de trasabilitate?'}
            </h3>
            <p className="text-gray-text text-xl mb-10 max-w-3xl mx-auto">
              {locale === 'en' ? 'Contact us to learn how we can support your business.' : 'Contacteaza-ne pentru a afla cum putem ajuta afacerea ta.'}
            </p>
            <Button as={Link} href="/contact" variant="solid" size="lg" className="bg-secondary-blue hover:bg-accent-blue text-white">
              {locale === 'en' ? 'Contact us' : 'Contacteaza-ne'}
            </Button>
          </div>
          </article>
        </div>
      </Container>
    </div>
  );
}
