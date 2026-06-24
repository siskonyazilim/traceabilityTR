'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { IconPlus } from '../ui/Icons';
import Container from '../ui/Container';
import { useLanguage } from '../i18n/LanguageProvider';
import { getFaqBundle } from '../../lib/i18n/contentLocalization';

const faqs = [];

export const FaqAccordion = () => {
  const [openId, setOpenId] = useState(null);
  const { locale } = useLanguage();
  const faqBundle = useMemo(() => getFaqBundle(faqs, locale), [locale]);
  const triggerRefs = useRef(new Map());
  const panelRefs = useRef(new Map());

  useEffect(() => {
    if (openId === null) {
      return;
    }

    const trigger = triggerRefs.current.get(openId);
    const panel = panelRefs.current.get(openId);

    if (!trigger || !panel) {
      return;
    }

    const SCROLL_TOP_OFFSET = 96;
    const SCROLL_BOTTOM_PADDING = 24;

    requestAnimationFrame(() => {
      const triggerRect = trigger.getBoundingClientRect();
      const panelRect = panel.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const titleHiddenTop = triggerRect.top < SCROLL_TOP_OFFSET;
      const contentHiddenBottom = panelRect.bottom > viewportHeight - SCROLL_BOTTOM_PADDING;

      if (!titleHiddenTop && !contentHiddenBottom) {
        return;
      }

      const targetTop = Math.max(0, window.scrollY + triggerRect.top - SCROLL_TOP_OFFSET);

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      });
    });
  }, [openId]);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-block bg-gradient-to-br from-slate-50 via-white to-slate-50 font-sans relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent-blue opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl"></div>

      <Container size="xl" className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-secondary-blue text-xs md:text-sm uppercase tracking-[0.18em] font-semibold mb-4">
            {faqBundle.eyebrow}
          </p>
          <h2 className="text-primary-black text-[clamp(1.375rem,1.1rem+0.9vw,2rem)] font-semibold leading-[1.15] tracking-tight mb-6">
            {faqBundle.title}
          </h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto"></div>
        </div>

        {/* FAQ Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - First 4 questions */}
          <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
            {faqBundle.items.slice(0, 4).map((faq, index) => (
              <div
                key={faq.id}
                className="border-b border-slate-200 last:border-b-0 relative group"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  ref={(element) => {
                    if (element) {
                      triggerRefs.current.set(faq.id, element);
                    } else {
                      triggerRefs.current.delete(faq.id);
                    }
                  }}
                  aria-expanded={openId === faq.id}
                  aria-controls={`faq-panel-${faq.id}`}
                  id={`faq-trigger-${faq.id}`}
                  className="w-full px-6 md:px-8 py-6 md:py-7 flex items-center justify-between gap-3 sm:gap-5 text-left relative z-10 transition-all duration-300"
                >
                  <h3 className={`text-lg md:text-xl font-bold tracking-[-0.01em] leading-tight transition-colors duration-300 ${openId === faq.id ? 'text-secondary-blue' : 'text-primary-black group-hover:text-accent-blue'}`}>
                    {faq.question}
                  </h3>
                  <span
                    className={`${openId === faq.id ? 'text-secondary-blue bg-secondary-blue/10 rotate-45 shadow-md shadow-secondary-blue/20' : 'text-slate-500 bg-slate-100 group-hover:bg-accent-blue/10 group-hover:text-accent-blue'} flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300`}
                  >
                    <IconPlus size={24} />
                  </span>
                </button>

                <section
                  id={`faq-panel-${faq.id}`}
                  ref={(element) => {
                    if (element) {
                      panelRefs.current.set(faq.id, element);
                    } else {
                      panelRefs.current.delete(faq.id);
                    }
                  }}
                  aria-labelledby={`faq-trigger-${faq.id}`}
                  className={`grid overflow-hidden relative z-10 transition-all duration-500 ease-out ${openId === faq.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className={`px-6 md:px-8 pr-4 sm:pr-16 text-gray-text leading-8 text-sm md:text-base max-w-[62ch] transition-all duration-500 ${openId === faq.id ? 'pb-6 md:pb-7 translate-y-0' : 'pb-0 -translate-y-2'}`}>
                      {faq.answer}
                    </p>
                  </div>
                </section>
              </div>
            ))}
          </div>

          {/* Right Column - Last 4 questions */}
          <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
            {faqBundle.items.slice(4, 8).map((faq, index) => (
              <div
                key={faq.id}
                className="border-b border-slate-200 last:border-b-0 relative group"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  ref={(element) => {
                    if (element) {
                      triggerRefs.current.set(faq.id, element);
                    } else {
                      triggerRefs.current.delete(faq.id);
                    }
                  }}
                  aria-expanded={openId === faq.id}
                  aria-controls={`faq-panel-${faq.id}`}
                  id={`faq-trigger-${faq.id}`}
                  className="w-full px-6 md:px-8 py-6 md:py-7 flex items-center justify-between gap-3 sm:gap-5 text-left relative z-10 transition-all duration-300"
                >
                  <h3 className={`text-lg md:text-xl font-bold tracking-[-0.01em] leading-tight transition-colors duration-300 ${openId === faq.id ? 'text-secondary-blue' : 'text-primary-black group-hover:text-accent-blue'}`}>
                    {faq.question}
                  </h3>
                  <span
                    className={`${openId === faq.id ? 'text-secondary-blue bg-secondary-blue/10 rotate-45 shadow-md shadow-secondary-blue/20' : 'text-slate-500 bg-slate-100 group-hover:bg-accent-blue/10 group-hover:text-accent-blue'} flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300`}
                  >
                    <IconPlus size={24} />
                  </span>
                </button>

                <section
                  id={`faq-panel-${faq.id}`}
                  ref={(element) => {
                    if (element) {
                      panelRefs.current.set(faq.id, element);
                    } else {
                      panelRefs.current.delete(faq.id);
                    }
                  }}
                  aria-labelledby={`faq-trigger-${faq.id}`}
                  className={`grid overflow-hidden relative z-10 transition-all duration-500 ease-out ${openId === faq.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className={`px-6 md:px-8 pr-4 sm:pr-16 text-gray-text leading-8 text-sm md:text-base max-w-[62ch] transition-all duration-500 ${openId === faq.id ? 'pb-6 md:pb-7 translate-y-0' : 'pb-0 -translate-y-2'}`}>
                      {faq.answer}
                    </p>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FaqAccordion;
