'use client';

import Link from 'next/link';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { IconArrowLeft } from '../ui/Icons';
import ReferenceProjectsSlider from './ReferenceProjectsSlider';
import PagePrimaryCta from '../ui/PagePrimaryCta';
import { toLocalePath } from '../../lib/i18n/dictionaries';

/* eslint-disable react/prop-types */

export default function BshCarriersDetailPage({ locale = 'tr', backHref, localizedProjects, dict }) {
  const currentDict = dict || {};

  let onsuiteUrl = 'https://onsuite.ro/modules/trace';
  if (locale === 'tr') {
    onsuiteUrl = 'https://onsuite.com.tr/tr/moduller/trace';
  } else if (locale === 'en') {
    onsuiteUrl = 'https://onsuite.com.tr/en/modules/trace';
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <Container size="xl">
        {/* Back Button */}
        <Link href={backHref} className="inline-flex items-center gap-2 text-secondary-blue hover:text-accent-blue transition-colors mb-8 font-semibold text-sm">
          <IconArrowLeft /> {currentDict.backToProjects}
        </Link>

        <article className="mx-auto max-w-none">
          {/* ============ HEADER ============ */}
          <header className="mb-10 border-b border-slate-200 pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              
              <div>
                <div className="mb-4">
                  <span className="text-xs font-semibold text-white uppercase bg-accent-blue px-3 py-1 rounded-md">
                    {currentDict.tagValue}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-primary-black leading-tight tracking-tight mb-6">
                  <span>{currentDict.heroTitleLine1}</span>
                  <br className="hidden md:inline" />{" "}
                  <span>{currentDict.heroTitleLine2}</span>
                </h1>

                <p className="text-gray-text text-base md:text-lg max-w-[48ch] leading-relaxed mb-6 text-justify">
                  {currentDict.heroSub}
                </p>

                {/* Meta Rail */}
                <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-slate-200 pt-6 gap-4">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {currentDict.sector}
                    </div>
                    <div className="font-semibold text-primary-black text-sm sm:text-base mt-1">
                      {currentDict.tagValue}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {currentDict.location}
                    </div>
                    <div className="font-semibold text-primary-black text-sm sm:text-base mt-1">
                      {currentDict.locationValue}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {currentDict.year}
                    </div>
                    <div className="font-semibold text-primary-black text-sm sm:text-base mt-1">
                      2023
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {currentDict.scope}
                    </div>
                    <div className="font-semibold text-primary-black text-sm sm:text-base mt-1">
                      {currentDict.scopeVal}
                    </div>
                  </div>
                </div>
              </div>

              {/* BSH Logo */}
              <div className="flex items-center justify-center lg:justify-end w-full py-4">
                <img
                  src="/Logos/BSH_Bosch_und_Siemens_Hausger%C3%A4te_logo.svg"
                  alt="BSH Logo"
                  className="w-full max-w-[240px] sm:max-w-[300px] md:max-w-[360px] h-auto object-contain"
                />
              </div>

            </div>
          </header>

          {/* ============ CONTEXT SECTION ============ */}
          <div className="border-b border-slate-200 pb-12 mb-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div className="sticky top-24">
              <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.16em] text-[#2a15cd] mb-4 font-bold">
                <span className="w-6 h-[1px] bg-[#2a15cd] inline-block" />
                {currentDict.contextEyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-black tracking-tight leading-tight">
                {currentDict.contextTitle}
              </h2>
            </div>
            <div className="space-y-4 text-gray-text text-sm md:text-base leading-relaxed text-justify">
              <p>{currentDict.contextP1}</p>
              <p>{currentDict.contextP2}</p>
            </div>
          </div>

          {/* ============ PROBLEM SECTION ============ */}
          <div className="border-b border-slate-200 pb-12 mb-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div className="sticky top-24">
              <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.16em] text-[#2a15cd] mb-4 font-bold">
                <span className="w-6 h-[1px] bg-[#2a15cd] inline-block" />
                {currentDict.problemEyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-black tracking-tight leading-tight mb-4">
                {currentDict.problemTitle}
              </h2>
              <p className="text-gray-text text-sm md:text-base leading-relaxed font-medium text-justify">
                {currentDict.problemLede}
              </p>
            </div>
            <div>
              <ul className="divide-y divide-slate-100 border-t border-slate-100">
                {currentDict.problemList?.map((item, idx) => (
                  <li key={idx} className="flex gap-4 py-4 first:pt-3 last:pb-0 align-top">
                    <span className="font-mono text-sm text-secondary-blue font-bold">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-gray-text text-sm md:text-base leading-relaxed text-justify">
                      <b className="text-primary-black font-semibold block mb-0.5">{item.bold}</b>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ============ SOLUTION / FLOW SECTION ============ */}
          <div className="border-b border-slate-200 pb-12 mb-12">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.16em] text-[#2a15cd] mb-4 font-bold">
                <span className="w-6 h-[1px] bg-[#2a15cd] inline-block" />
                {currentDict.solutionEyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-black tracking-tight leading-tight mb-3">
                {currentDict.solutionTitle}
              </h2>
              <p className="text-gray-text text-sm md:text-base max-w-3xl leading-relaxed text-justify">
                {currentDict.solutionLede}
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {currentDict.steps?.map((step, idx) => (
                <div key={idx} className="relative rounded-md border-2 border-slate-200 bg-white p-6 shadow-soft hover:shadow-soft-lg hover:border-accent-blue transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs text-accent-blue font-bold">
                      {step.no}
                    </span>
                    <h4 className="font-bold text-primary-black text-base sm:text-lg mt-3 mb-2 tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-gray-text text-sm leading-relaxed text-justify">
                      {step.text}
                    </p>
                  </div>
                  {/* Visual arrow indicator for wider screens */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute right-[-8px] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-r border-slate-200 rotate-45 z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ============ TECH GRID ============ */}
          <div className="border-b border-slate-200 pb-12 mb-12">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.16em] text-[#2a15cd] mb-4 font-bold">
                <span className="w-6 h-[1px] bg-[#2a15cd] inline-block" />
                {currentDict.techEyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-black tracking-tight leading-tight">
                {currentDict.techTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentDict.techGrid?.map((tech, idx) => (
                <div key={idx} className="rounded-md border-2 border-slate-200 bg-white p-6 shadow-soft hover:shadow-soft-lg hover:border-accent-blue transition-all duration-300">
                  <span className="text-[9.5px] font-mono tracking-widest text-accent-blue uppercase font-bold">
                    {tech.tag}
                  </span>
                  <h4 className="font-bold text-primary-black text-base sm:text-lg mt-2.5 mb-1.5 tracking-tight">
                    {tech.title}
                  </h4>
                  <p className="text-gray-text text-sm leading-relaxed text-justify">
                    {tech.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ============ ENTEGRASYONLAR SECTION ============ */}
          <div className="border-b border-slate-200 pb-12 mb-12 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div className="sticky top-24">
              <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.16em] text-[#2a15cd] mb-4 font-bold">
                <span className="w-6 h-[1px] bg-[#2a15cd] inline-block" />
                {currentDict.integrationEyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-black tracking-tight leading-tight mb-4">
                {currentDict.integrationTitle}
              </h2>
              <p className="text-gray-text text-sm md:text-base leading-relaxed font-medium text-justify">
                {currentDict.integrationDesc}
              </p>
            </div>
            <div className="relative pl-14 space-y-6">
              {/* Vertical dashed connecting line */}
              <div className="absolute left-[20px] top-10 bottom-10 w-[2px] border-l-2 border-dashed border-slate-200 z-0"></div>

              {currentDict.integrationList?.map((item, idx) => {
                const isFirst = idx === 0;
                return (
                  <div key={idx} className="relative z-10">
                    {/* Node Icon Badge representing Database (first) and Sync/Exchange (second) */}
                    <div className="absolute left-[-56px] top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-slate-200 shadow-sm transition-colors duration-300">
                      {isFirst ? (
                        <svg className="w-5 h-5 text-secondary-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      )}
                    </div>

                    {/* Premium Card Content Container */}
                    <div className="relative p-5 rounded-md border border-slate-100 bg-slate-50/40 shadow-soft hover:shadow-soft-lg hover:border-accent-blue/30 transition-all duration-300">
                      <span className="text-gray-text text-sm md:text-base leading-relaxed text-justify">
                        <b className="text-primary-black font-semibold block mb-1 text-base">{item.bold}</b>
                        {item.text}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ============ RESULTS SECTION ============ */}
          <div className="mb-12">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.16em] text-[#2a15cd] mb-4 font-bold">
                <span className="w-6 h-[1px] bg-[#2a15cd] inline-block" />
                {currentDict.resultsEyebrow}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-black tracking-tight leading-tight">
                {currentDict.resultsTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentDict.resultsGrid?.map((res, idx) => (
                <div key={idx} className="relative bg-white border-2 border-slate-200 rounded-md p-6 shadow-soft hover:shadow-soft-lg hover:border-accent-blue transition-all duration-300 overflow-hidden">
                  {/* Left Accent indicator stripe in brand blue */}
                  <div className="absolute left-0 top-0 h-full w-[4px] bg-secondary-blue" />
                  <div className="text-secondary-blue mb-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-primary-black text-base sm:text-lg mb-1.5 tracking-tight">
                    {res.title}
                  </h4>
                  <p className="text-gray-text text-sm leading-relaxed text-justify">
                    {res.text}
                  </p>
                </div>
              ))}
            </div>
          </div>



          {/* OnSuite Trace Redirection CTA */}
          <div className="mt-12 rounded-md bg-gradient-to-br from-primary-black to-dark-bg p-8 text-white shadow-xl md:p-10 border border-slate-blue/10 relative overflow-hidden">
            {/* Ambient decorative background patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,181,247,0.15),transparent_48%)] pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-accent-blue/10 rounded-md blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent-blue px-2.5 py-1 bg-accent-blue/10 rounded-md border border-accent-blue/20">
                    OnSuite Trace
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-extrabold tracking-tight">
                  {locale === 'tr' && 'Uçtan Uca İzlenebilirlik Çözümümüzle Tanışın'}
                  {locale === 'en' && 'Meet Our End-to-End Traceability Solution'}
                  {locale === 'ro' && 'Descoperiți Soluția Noastră de Trasabilitate End-to-End'}
                </h2>
                <p className="text-gray-light/85 text-sm md:text-base leading-relaxed text-justify">
                  {locale === 'tr' && 'OnSuite Trace, tüm üretim süreçlerinizi tek bir platformdan yönetmenize olanak tanır. "Sürekli Kontrol, Sıfır Hata" mottosuyla işletmeniz için uçtan uca dijital izlenebilirlik sağlıyoruz.'}
                  {locale === 'en' && 'OnSuite Trace allows you to manage all your production processes from a single platform. We provide end-to-end digital traceability for your business with the motto "Continuous Control, Zero Defects".'}
                  {locale === 'ro' && 'OnSuite Trace vă permite să gestionați toate procesele de producție dintr-o singură platformă. Oferim trasabilitate digitală completă pentru afacerea dumneavoastră sub deviza "Control Continuu, Zero Erori".'}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button
                  as="a"
                  href={onsuiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="solid"
                  size="lg"
                  className="bg-secondary-blue text-white hover:bg-accent-blue font-semibold text-sm rounded-md inline-flex items-center gap-2 whitespace-nowrap min-w-max shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>
                    {locale === 'tr' && "OnSuite Trace'i Keşfedin"}
                    {locale === 'en' && 'Explore OnSuite Trace'}
                    {locale === 'ro' && 'Explorează OnSuite Trace'}
                  </span>
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* ============ RELATED PROJECTS SLIDER ============ */}
          <div className="mt-16">
            <ReferenceProjectsSlider
              projects={localizedProjects}
              locale={locale}
              currentSlug="bsh-carriers-traceability"
              detailBasePath="/portfolio"
              labels={{
                title: currentDict.relatedProjects,
                prevAria: locale === 'tr' ? 'Önceki Proje' : (locale === 'en' ? 'Previous Project' : 'Proiectul Anterior'),
                nextAria: locale === 'tr' ? 'Sonraki Proje' : (locale === 'en' ? 'Next Project' : 'Proiectul Următor'),
                details: locale === 'tr' ? 'Detaylar' : (locale === 'en' ? 'Details' : 'Detalii'),
              }}
            />
          </div>

          {/* ============ PAGE CTA ============ */}
          <PagePrimaryCta
            title={currentDict.ctaTitle}
            subtitle={currentDict.ctaSubtitle}
            primaryHref={locale === 'tr' ? '/contact' : (locale === 'en' ? '/en/contact' : '/ro/contact')}
            primaryLabel={currentDict.ctaPrimary}
          />

        </article>
      </Container>
    </div>
  );
}
