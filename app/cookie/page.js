import { cookies } from 'next/headers';
import Container from '../../components/ui/Container';
import { loadPolicyHtml } from '../../lib/policyDocuments';
import { f } from '../../lib/i18n/sectionTranslations';

export async function generateMetadata() {
  const cookieStore = await cookies();
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = localeRaw === 'tr' ? 'tr' : localeRaw === 'en' ? 'en' : 'ro';

  return {
    title: f(locale, 'cookiePolicyPage', 'metaTitle'),
    description: f(locale, 'cookiePolicyPage', 'metaDescription'),
  };
}

export default async function CookiePolicyPage() {
  const cookieStore = await cookies();
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = localeRaw === 'tr' ? 'tr' : localeRaw === 'en' ? 'en' : 'ro';
  const policyHtml = await loadPolicyHtml('cookie', locale);

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-24 pb-16">
      <Container size="xl">
        <article className="w-full">
          <p className="text-xs uppercase tracking-[0.16em] text-accent-blue font-semibold mb-3">
            {f(locale, 'cookiePolicyPage', 'eyebrow')}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-black mb-8">
            {f(locale, 'cookiePolicyPage', 'title')}
          </h1>

          <div className="legal-doc" dangerouslySetInnerHTML={{ __html: policyHtml }} />
        </article>
      </Container>
    </div>
  );
}
