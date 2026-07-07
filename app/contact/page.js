import { cookies } from 'next/headers';
import ContactPageClient from './ContactPageClient';
import { DEFAULT_LOCALE, isSupportedLocale } from '../../lib/i18n/dictionaries';

export async function generateMetadata() {
  const cookieStore = await cookies();
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeRaw) ? localeRaw : DEFAULT_LOCALE;
  const isTr = locale === 'tr';
  const isEn = locale === 'en';

  const title = isTr
    ? 'İletişim | Endüstriyel İzlenebilirlik Danışmanlığı | Traceability'
    : isEn
    ? 'Contact Traceability | Industrial Traceability Consulting and Implementation'
    : 'Contact Traceability | Consultanță și Implementare Trasabilitate Industrială';
  const description = isTr
    ? 'Endüstriyel izlenebilirlik danışmanlığı, MES/ERP entegrasyonu, RFID ve WMS uygulamaları için Traceability ile iletişime geçin.'
    : isEn
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
      locale: isTr ? 'tr_TR' : isEn ? 'en_US' : 'ro_RO',
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
