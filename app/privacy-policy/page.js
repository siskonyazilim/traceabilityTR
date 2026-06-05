import { cookies } from 'next/headers';
import Container from '../../components/ui/Container';
import { loadPolicyHtml } from '../../lib/policyDocuments';
import { f } from '../../lib/i18n/sectionTranslations';

export async function generateMetadata() {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value === 'en' ? 'en' : 'ro';

  return {
    title: f(locale, 'privacyPolicyPage', 'metaTitle'),
    description: f(locale, 'privacyPolicyPage', 'metaDescription'),
  };
}

export default async function PrivacyPolicyPage() {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value === 'en' ? 'en' : 'ro';
  const policyHtml = await loadPolicyHtml('privacy', locale);
  const pageTitle = f(locale, 'privacyPolicyPage', 'title');

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-24 pb-16">
      <Container size="xl">
        <article className="max-w-4xl mx-auto rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-[0_14px_36px_rgba(10,10,43,0.08)]">
          <p className="text-xs uppercase tracking-[0.16em] text-accent-blue font-semibold mb-3">
            {f(locale, 'privacyPolicyPage', 'eyebrow')}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-black mb-8">{pageTitle}</h1>

          <div className="legal-doc" dangerouslySetInnerHTML={{ __html: policyHtml }} />
        </article>
      </Container>
    </div>
  );
}
