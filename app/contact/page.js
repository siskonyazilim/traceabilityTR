import { cookies } from 'next/headers';
import ContactPageClient from './ContactPageClient';
import { DEFAULT_LOCALE, isSupportedLocale } from '../../lib/i18n/dictionaries';

export async function generateMetadata() {
  const cookieStore = await cookies();
  const localeRaw = cookieStore.get('locale')?.value;
  const locale = isSupportedLocale(localeRaw) ? localeRaw : DEFAULT_LOCALE;
  const isTr = locale === 'tr';
  const isEn = locale === 'en';

  let title = 'Contact Traceability | Consultanță și Implementare Trasabilitate Industrială';
  if (isTr) {
    title = 'İletişim | Endüstriyel İzlenebilirlik Danışmanlığı | Traceability';
  } else if (isEn) {
    title = 'Contact Traceability | Industrial Traceability Consulting and Implementation';
  }

  let description = 'Contactează Traceability pentru consultanță în trasabilitate industrială, integrare MES/ERP, implementare RFID și WMS adaptate proceselor tale de producție.';
  if (isTr) {
    description = 'Endüstriyel izlenebilirlik danışmanlığı, MES/ERP entegrasyonu, RFID ve WMS uygulamaları için Traceability ile iletişime geçin.';
  } else if (isEn) {
    description = 'Contact Traceability for industrial traceability consulting, MES/ERP integration, RFID and WMS implementations tailored to your production processes.';
  }

  let ogLocale = 'ro_RO';
  if (isTr) {
    ogLocale = 'tr_TR';
  } else if (isEn) {
    ogLocale = 'en_US';
  }

  return {
    title,
    description,
    alternates: {
      canonical: 'https://traceability.com.tr/contact',
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: 'https://traceability.com.tr/contact',
      locale: ogLocale,
      images: [
        {
          url: 'https://traceability.com.tr/siskon-logo-header.svg',
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
      images: ['https://traceability.com.tr/siskon-logo-header.svg'],
    },
  };


}
export default function ContactPage() {
  return <ContactPageClient />;
}
