import { cookies } from 'next/headers';
import ContactPageClient from './ContactPageClient';

export async function generateMetadata() {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value === 'en' ? 'en' : 'ro';
  const isEn = locale === 'en';

  const title = isEn
    ? 'Contact Traceability | Industrial Traceability Consulting and Implementation'
    : 'Contact Traceability | Consultanță și Implementare Trasabilitate Industrială';
  const description = isEn
    ? 'Contact Traceability for industrial traceability consulting, MES/ERP integration, RFID and WMS implementations tailored to your production processes.'
    : 'Contactează Traceability pentru consultanță în trasabilitate industrială, integrare MES/ERP, implementare RFID și WMS adaptate proceselor tale de producție.';

  return {
    title,
    description,
    alternates: {
      canonical: 'https://traceability.ro/contact',
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'https://traceability.ro/contact',
      locale: isEn ? 'en_US' : 'ro_RO',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };


}
export default function ContactPage() {
  return <ContactPageClient />;
}
