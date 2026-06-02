'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import { IconMail, IconPhone } from '../../components/ui/Icons';
import { useLanguage } from '../../components/i18n/LanguageProvider';

const offices = [
  {
    id: 1,
    name: 'România - Brașov',
    address: 'Punct de lucru: Str. Turnului Nr.5\nCladira M.U.M. Scara 3, Etajul 2, Biroul 5\n500152 Brașov, Romania',
    phone: null,
    email: 'info@traceability.ro',
    coords: { lat: 45.66462, lng: 25.61252 },
  },
  {
    id: 2,
    name: 'Turcia - İzmir',
    address: 'Dokuz Eylül Üniversitesi Tınaztepe Yerleşkesi\nDepark Beta Binası, Adatepe Mahallesi\nDoğuş Caddesi No:207/AG, Kat: 2 No:202\n35390 Buca/İzmir',
    phone: '+90 232 245 00 76',
    email: 'info@traceability.ro',
    coords: { lat: 38.3661068, lng: 27.2074696 },
  },
];

export default function ContactPageClient() {
  const { t } = useLanguage();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="pt-24 md:pt-28 bg-white rounded-t-3xl">

      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="pt-4 md:pt-6 pb-14 md:pb-20"
        >
          <div className="mb-10 md:mb-12 rounded-3xl border border-slate-200 bg-[radial-gradient(circle_at_85%_20%,_rgba(0,181,247,0.2)_0%,_rgba(0,181,247,0)_36%),linear-gradient(140deg,_#0a0a2b_0%,_#0019d2_58%,_#00b5f7_100%)] px-6 py-8 md:px-10 md:py-11 text-white shadow-[0_18px_44px_rgba(10,10,43,0.2)]">
            <p className="text-xs md:text-sm uppercase tracking-[0.16em] text-white/80 font-semibold mb-3">{t('contactPage.eyebrow', 'Contact')}</p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.08] mb-4">{t('contactPage.heroTitle', 'Să discutăm despre procesul tău de trasabilitate')}</h1>
            <p className="text-base md:text-lg text-white/90 max-w-3xl">{t('contactPage.heroSubtitle', 'Alege biroul potrivit sau trimite-ne un mesaj. Revenim rapid cu o propunere adaptată fluxurilor tale operaționale.')}</p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-10 md:mb-12 text-center">
            {t('contactPage.officesTitle', 'Birourile Noastre')}
          </h2>

          <div className="grid grid-cols-1 gap-8 md:gap-10 mb-12 md:mb-16">
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.25 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 border border-gray-200 shadow-sm bg-white rounded-2xl overflow-hidden"
              >
                <div className="min-h-[320px] lg:min-h-[380px] bg-white p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-primary-black mb-5 md:mb-6">
                      {office.name}
                    </h3>

                    <div className="w-full border-t border-primary-black border-opacity-20 mb-6 md:mb-8" />

                    <div className="space-y-4 md:space-y-5 text-primary-black">
                      <div className="flex gap-3">
                        <img
                          src="/icon/icon-map-pin.svg"
                          alt={t('contactPage.locationAlt', 'Locație')}
                          className="w-5 h-5 flex-shrink-0 mt-1"
                        />
                        <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
                          {office.address}
                        </p>
                      </div>

                      {office.phone && (
                        <div className="flex gap-3 items-center">
                          <IconPhone className="text-accent-blue flex-shrink-0" size={20} />
                          <a
                            href={`tel:${office.phone}`}
                            className="text-base hover:text-accent-blue transition-colors"
                          >
                            {office.phone}
                          </a>
                        </div>
                      )}

                      <div className="flex gap-3 items-center">
                        <IconMail className="text-accent-blue flex-shrink-0" size={20} />
                        <a
                          href={`mailto:${office.email}`}
                          className="text-base hover:text-accent-blue transition-colors"
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>
                </div>

                <div className="h-[320px] lg:h-[380px] bg-gray-light">
                  <iframe
                    title={`${office.name} ${t('contactPage.mapTitleSuffix', 'hartă')}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen=""
                    src={`https://www.google.com/maps?q=${office.coords.lat},${office.coords.lng}&z=15&output=embed`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>

      <Container size="xl">
        <div className="pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="bg-gray-light bg-opacity-35 border border-gray-200 rounded-2xl p-6 md:p-10 lg:p-12 shadow-[0_14px_34px_rgba(10,10,43,0.08)]"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-8 text-center">
              {t('contactPage.formTitle', 'Trimitere Mesaj')}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-primary-black mb-2">
                  {t('contactPage.firstName', 'Prenume')} *
                </label>
                <input
                  id="firstName"
                  {...register('firstName', {
                    required: t('contactPage.errors.firstNameRequired', 'Prenumele este necesar'),
                    minLength: { value: 2, message: t('contactPage.errors.firstNameMin', 'Min 2 caractere') },
                  })}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-text border-opacity-30 rounded-lg focus:outline-none focus:border-accent-blue bg-white"
                  placeholder={t('contactPage.placeholders.firstName', 'Ion')}
                />
                {errors.firstName && (
                  <span className="text-accent-red text-sm">{errors.firstName.message}</span>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-primary-black mb-2">
                  {t('contactPage.lastName', 'Nume')} *
                </label>
                <input
                  id="lastName"
                  {...register('lastName', {
                    required: t('contactPage.errors.lastNameRequired', 'Numele este necesar'),
                    minLength: { value: 2, message: t('contactPage.errors.lastNameMin', 'Min 2 caractere') },
                  })}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-text border-opacity-30 rounded-lg focus:outline-none focus:border-accent-blue bg-white"
                  placeholder={t('contactPage.placeholders.lastName', 'Popescu')}
                />
                {errors.lastName && (
                  <span className="text-accent-red text-sm">{errors.lastName.message}</span>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-primary-black mb-2">
                {t('contactPage.email', 'Email')} *
              </label>
              <input
                id="email"
                {...register('email', {
                  required: t('contactPage.errors.emailRequired', 'Email-ul este necesar'),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: t('contactPage.errors.emailInvalid', 'Email invalid'),
                  },
                })}
                type="email"
                className="w-full px-4 py-3 border border-gray-text border-opacity-30 rounded-lg focus:outline-none focus:border-accent-blue bg-white"
                placeholder={t('contactPage.placeholders.email', 'email@example.com')}
              />
              {errors.email && (
                <span className="text-accent-red text-sm">{errors.email.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-semibold text-primary-black mb-2">
                {t('contactPage.website', 'Website (opțional)')}
              </label>
              <input
                id="website"
                {...register('website', {
                  pattern: {
                    value: /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w\-./?%&=]*)?$/,
                    message: t('contactPage.errors.urlInvalid', 'URL invalid'),
                  },
                })}
                type="text"
                className="w-full px-4 py-3 border border-gray-text border-opacity-30 rounded-lg focus:outline-none focus:border-accent-blue bg-white"
                placeholder={t('contactPage.placeholders.website', 'https://www.example.com')}
              />
              {errors.website && (
                <span className="text-accent-red text-sm">{errors.website.message}</span>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-primary-black mb-2">
                {t('contactPage.message', 'Mesaj')} *
              </label>
              <textarea
                id="message"
                {...register('message', {
                  required: t('contactPage.errors.messageRequired', 'Mesajul este necesar'),
                  minLength: { value: 10, message: t('contactPage.errors.messageMin', 'Min 10 caractere') },
                })}
                rows="6"
                className="w-full px-4 py-3 border border-gray-text border-opacity-30 rounded-lg focus:outline-none focus:border-accent-blue bg-white resize-none"
                placeholder={t('contactPage.placeholders.message', 'Scrie-ți mesajul aici...')}
              />
              {errors.message && (
                <span className="text-accent-red text-sm">{errors.message.message}</span>
              )}
            </div>

            <div className="flex items-start gap-3">
              <input
                id="privacy"
                {...register('privacy', {
                  required: t('contactPage.errors.privacyRequired', 'Trebuie să accepti politica de confidențialitate'),
                })}
                type="checkbox"
                className="mt-1"
              />
              <label htmlFor="privacy" className="text-sm text-gray-text">
                {t('contactPage.privacyText', 'Sunt de acord cu')} {' '}
                <Link href="/" className="text-accent-blue font-semibold hover:underline">
                  {t('contactPage.privacyPolicy', 'politica de confidențialitate')}
                </Link>
                {' '}*
              </label>
            </div>
            {errors.privacy && (
              <span className="text-accent-red text-sm block">{errors.privacy.message}</span>
            )}

            <div className="flex justify-center">
              <Button type="submit" variant="solid" size="lg" className="bg-secondary-blue hover:bg-accent-blue text-white">
                {t('contactPage.submit', 'Trimite Mesaj')}
              </Button>
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-accent-green bg-opacity-20 border-2 border-accent-green text-accent-green px-4 py-3 rounded-lg text-center font-semibold"
              >
                {t('contactPage.success', '✓ Mesajul dvs. a fost trimis cu succes!')}
              </motion.div>
            )}
            </form>
          </motion.div>
        </div>
      </Container>
      </div>
    </div>
  );
}
