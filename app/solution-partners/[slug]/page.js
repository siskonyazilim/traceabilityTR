import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '../../../components/ui/Container';
import Button from '../../../components/ui/Button';
import { strategicPartners } from '../../../data/partners';
import { IconArrowLeft } from '../../../components/ui/Icons';
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

  const otherPartners = localizedPartners
    .filter((p) => p.id !== partner.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-[#f5f7fa] pt-24 pb-16">
      <Container size="xl">
        <Link href="/" className="inline-flex items-center gap-2 text-accent-blue hover:underline mb-6 font-medium">
          <IconArrowLeft /> {f(locale, 'partnerDetailPage', 'backHome')}
        </Link>

        <article className="max-w-6xl mx-auto">
          <div className="mb-6 text-sm text-gray-text font-medium">
            <span>{f(locale, 'partnerDetailPage', 'breadcrumbHome')} / {partner.breadcrumbLabel || partner.name.toUpperCase()}</span>
          </div>

          <div className="bg-white border border-gray-light rounded-3xl shadow-sm overflow-hidden mb-8">
            <div className="h-2 bg-gradient-to-r from-accent-blue via-accent-green to-accent-yellow"></div>

            <div className="p-6 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3">
                  <h1 className="text-4xl md:text-5xl font-bold text-primary-black mb-4 leading-tight">
                    {f(locale, 'partnerDetailPage', 'heroTitle')}
                  </h1>
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-text">
                    {partner.name}
                  </h2>
                </div>

                <div className="lg:col-span-2">
                  <div className="w-full h-36 bg-[#f7f8fa] rounded-2xl border border-gray-light flex items-center justify-center overflow-hidden relative px-8">
                    <img
                      src={partner.detailLogo || partner.logo}
                      alt={partner.name}
                      className="max-h-20 w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-white border border-gray-light rounded-2xl p-6 md:p-8">
              {partner.fullDescription.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-gray-text leading-relaxed text-lg ${index > 0 ? 'mt-6' : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <aside className="bg-white border border-gray-light rounded-2xl p-6 md:p-8 h-fit">
              <h3 className="text-lg font-bold text-primary-black mb-4">{f(locale, 'partnerDetailPage', 'coreValuesTitle')}</h3>
              <ul className="space-y-3 text-gray-text">
                <li className="flex items-start gap-2">
                  <span className="text-accent-blue font-bold">•</span>
                  <span>{f(locale, 'partnerDetailPage', 'coreValues.0')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-blue font-bold">•</span>
                  <span>{f(locale, 'partnerDetailPage', 'coreValues.1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-blue font-bold">•</span>
                  <span>{f(locale, 'partnerDetailPage', 'coreValues.2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-blue font-bold">•</span>
                  <span>{f(locale, 'partnerDetailPage', 'coreValues.3')}</span>
                </li>
              </ul>
            </aside>
          </div>

          {/* Other Partners */}
          {otherPartners.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-light">
              <h2 className="text-3xl font-bold text-primary-black mb-8">
                {f(locale, 'partnerDetailPage', 'otherPartnersTitle')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherPartners.map((otherPartner) => (
                  <Link key={otherPartner.id} href={`/solution-partners/${otherPartner.slug}`}>
                    <div
                      className="bg-white rounded-2xl p-6 border border-gray-light shadow-sm hover:shadow-xl transition-all cursor-pointer h-full flex flex-col"
                    >
                      <div className="h-14 bg-[#f7f8fa] rounded-xl border border-gray-light flex items-center justify-center px-4 mb-4">
                        <img
                          src={otherPartner.logo}
                          alt={otherPartner.name}
                          className="h-8 object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-primary-black mb-2">
                        {otherPartner.name}
                      </h3>
                      <p className="text-gray-text text-sm line-clamp-2 mb-4">
                        {otherPartner.description}
                      </p>
                      <span className="card-cta-mini mt-auto">
                        {f(locale, 'partnerDetailPage', 'details')}
                        <svg className="card-cta-mini-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-20 text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-primary-black mb-6">
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
