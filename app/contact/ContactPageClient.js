'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import { IconMail, IconPhone } from '../../components/ui/Icons';
import { useLanguage } from '../../components/i18n/LanguageProvider';

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ContactPageClient() {
  const { t, locale } = useLanguage();

  const officeList = [
    {
       id: 1,
      name: t('contactPage.offices.brasov.name', 'România - Brașov'),
      address: t(
        'contactPage.offices.brasov.address',
        'Strada Turnului Nr. 25\nCorp M.U.M., Scara 3, Birou 5, Etaj 2\n500152 Brasov\nJud. Brasov\nRomania'
      ),
      phone: '+40 368 402 002',
      email: 'info@traceability.ro',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.3812984624165!2d25.6221473!3d45.6632452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35b910e74964b%3A0xac8086acca35f96a!2sSiskon%20Software%20and%20Automation%20SRL!5e0!3m2!1sen!2str!4v1783058783861!5m2!1sen!2str',
      mapQuery: 'Strada Turnului Nr. 25, Corp M.U.M., Scara 3, Birou 5, Etaj 2, 500152 Brasov, Jud. Brasov, Romania',
    },
    {
      id: 2,
      name: t('contactPage.offices.izmir.name', 'Turcia - İzmir'),
      address: t(
        'contactPage.offices.izmir.address',
        'Dokuz Eylül Üniversitesi Merkez Kampüsü\nDEPARK Beta Binası, Adatepe Mahallesi\nDoğuş Caddesi No:207/AG, Kat: 2 No:202\n35390 Buca/İzmir'
      ),
      phone: '+90 232 245 00 76',
      email: 'info@izlenebilirlik.com.tr',
      mapQuery: 'Dokuz Eylül Üniversitesi Merkez Kampüsü DEPARK Beta Binası, Adatepe Mahallesi Doğuş Caddesi No:207/AG, Kat: 2 No:202, 35390 Buca/İzmir',
    },
  ];

  const offices = locale === 'tr' ? [officeList[1], officeList[0]] : officeList;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [csrfToken, setCsrfToken] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const formMountedAt = useRef(Date.now());
  const turnstileRef = useRef(null);
  const turnstileWidgetId = useRef(null);

  const fetchCsrfToken = useCallback(async () => {
    try {
      const res = await fetch('/api/csrf');
      const data = await res.json();
      if (data.csrfToken) setCsrfToken(data.csrfToken);
    } catch {
      // CSRF fetch failed silently; form submission will show error
    }
  }, []);

  useEffect(() => {
    fetchCsrfToken();
  }, [fetchCsrfToken]);

  useEffect(() => {
    if (!turnstileSiteKey || typeof window === 'undefined') return;

    function renderTurnstile() {
      if (turnstileRef.current && window.turnstile && turnstileWidgetId.current === null) {
        turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
          sitekey: turnstileSiteKey,
          callback: (token) => setTurnstileToken(token),
          'expired-callback': () => setTurnstileToken(''),
        });
      }
    }

    if (!document.querySelector('script[src*="challenges.cloudflare.com/turnstile"]')) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.onload = () => renderTurnstile();
      document.head.appendChild(script);
    } else if (window.turnstile) {
      renderTurnstile();
    }
  }, []);

  const onSubmit = async (data) => {
    setSubmitting(true);
    setErrorMessage('');

    try {
      const payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        website: data.website || '',
        message: data.message,
        locale,
        _hp: data._hp || '',
        csrfToken,
        submittedAt: formMountedAt.current,
      };

      if (turnstileSiteKey && turnstileToken) {
        payload.turnstileToken = turnstileToken;
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.ok) {
        setSubmitted(true);
        reset();
        formMountedAt.current = Date.now();
        fetchCsrfToken();
        if (window.turnstile && turnstileWidgetId.current !== null) {
          window.turnstile.reset(turnstileWidgetId.current);
        }
        setTurnstileToken('');
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setErrorMessage(
          result.message || t('contactPage.errors.submitFailed', 'A apărut o eroare. Vă rugăm să încercați din nou.')
        );
      }
    } catch {
      setErrorMessage(
        t('contactPage.errors.networkError', 'Eroare de rețea. Verificați conexiunea.')
      );
    } finally {
      setSubmitting(false);
    }
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
            <h1 className="text-2xl md:text-4xl font-semibold tracking-tight leading-[1.08]">{t('contactPage.heroTitle', 'Să discutăm despre procesul tău de trasabilitate')}</h1>
          </div>
        </motion.div>
      </Container>

      <Container size="xl">
        <div className="pb-10 md:pb-14">
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
                  aria-invalid={errors.firstName ? 'true' : 'false'}
                  aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                  className="w-full px-4 py-3 border border-gray-text border-opacity-30 rounded-lg focus:outline-none focus:border-accent-blue bg-white"
                  placeholder={t('contactPage.placeholders.firstName', 'Ion')}
                />
                {errors.firstName && (
                  <span id="firstName-error" role="alert" className="text-accent-red text-sm">{errors.firstName.message}</span>
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
                  aria-invalid={errors.lastName ? 'true' : 'false'}
                  aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                  className="w-full px-4 py-3 border border-gray-text border-opacity-30 rounded-lg focus:outline-none focus:border-accent-blue bg-white"
                  placeholder={t('contactPage.placeholders.lastName', 'Popescu')}
                />
                {errors.lastName && (
                  <span id="lastName-error" role="alert" className="text-accent-red text-sm">{errors.lastName.message}</span>
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
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="w-full px-4 py-3 border border-gray-text border-opacity-30 rounded-lg focus:outline-none focus:border-accent-blue bg-white"
                placeholder={t('contactPage.placeholders.email', 'email@example.com')}
              />
              {errors.email && (
                <span id="email-error" role="alert" className="text-accent-red text-sm">{errors.email.message}</span>
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
                aria-invalid={errors.website ? 'true' : 'false'}
                aria-describedby={errors.website ? 'website-error' : undefined}
                className="w-full px-4 py-3 border border-gray-text border-opacity-30 rounded-lg focus:outline-none focus:border-accent-blue bg-white"
                placeholder={t('contactPage.placeholders.website', 'https://www.example.com')}
              />
              {errors.website && (
                <span id="website-error" role="alert" className="text-accent-red text-sm">{errors.website.message}</span>
              )}
            </div>

            {/* Honeypot */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}>
              <label htmlFor="_hp">Company</label>
              <input id="_hp" {...register('_hp')} type="text" tabIndex={-1} autoComplete="off" />
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
                aria-invalid={errors.message ? 'true' : 'false'}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="w-full px-4 py-3 border border-gray-text border-opacity-30 rounded-lg focus:outline-none focus:border-accent-blue bg-white resize-none"
                placeholder={t('contactPage.placeholders.message', 'Scrie-ți mesajul aici...')}
              />
              {errors.message && (
                <span id="message-error" role="alert" className="text-accent-red text-sm">{errors.message.message}</span>
              )}
            </div>

            <div className="flex items-start gap-3">
              <input
                id="privacy"
                {...register('privacy', {
                  required: t('contactPage.errors.privacyRequired', 'Trebuie să accepti politica de confidențialitate'),
                })}
                type="checkbox"
                aria-invalid={errors.privacy ? 'true' : 'false'}
                aria-describedby={errors.privacy ? 'privacy-error' : undefined}
                className="mt-1"
              />
              <label htmlFor="privacy" className="text-sm text-gray-text">
                {t('contactPage.privacyText', 'Sunt de acord cu')} {' '}
                <Link href="/privacy-policy" className="text-accent-blue font-semibold hover:underline">
                  {t('contactPage.privacyPolicy', 'politica de confidențialitate')}
                </Link>
                {' '}*
              </label>
            </div>
            {errors.privacy && (
              <span id="privacy-error" role="alert" className="text-accent-red text-sm block">{errors.privacy.message}</span>
            )}

            {turnstileSiteKey && (
              <div ref={turnstileRef} className="flex justify-center" />
            )}

            <div className="flex justify-center">
              <Button
                type="submit"
                variant="solid"
                size="lg"
                className="bg-secondary-blue hover:bg-accent-blue text-white"
                disabled={submitting}
              >
                {submitting
                  ? t('contactPage.submitting', 'Se trimite...')
                  : t('contactPage.submit', 'Trimite Mesaj')
                }
              </Button>
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                role="status"
                aria-live="polite"
                className="bg-accent-green bg-opacity-20 border-2 border-accent-green text-accent-green px-4 py-3 rounded-lg text-center font-semibold"
              >
                {t('contactPage.success', '✓ Mesajul dvs. a fost trimis cu succes!')}
              </motion.div>
            )}

            {errorMessage && !submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                role="alert"
                aria-live="assertive"
                className="bg-accent-red bg-opacity-10 border-2 border-accent-red text-accent-red px-4 py-3 rounded-lg text-center font-semibold"
              >
                {errorMessage}
              </motion.div>
            )}
            </form>
          </motion.div>
        </div>
      </Container>

      <Container size="xl">
        <div className="pb-16 md:pb-24">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-black mb-10 md:mb-12 text-center">
            {t('contactPage.officesTitle', 'Birourile Noastre')}
          </h2>

          <div className="grid grid-cols-1 gap-8 md:gap-10">
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.25 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 border border-gray-200 shadow-sm bg-white rounded-2xl overflow-hidden"
              >
                <div className="min-h-[320px] lg:min-h-[380px] bg-white p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-semibold text-primary-black mb-5 md:mb-6">
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
                    src={office.mapEmbedUrl || `https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&z=15&output=embed`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
      </div>
    </div>
  );
}
