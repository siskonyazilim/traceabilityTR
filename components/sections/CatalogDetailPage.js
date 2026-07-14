import Link from 'next/link';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { IconArrowLeft, IconArrowRight } from '../ui/Icons';
/* eslint-disable react/prop-types */

function getLocalizedLabels(locale, type) {
  const isEn = locale === 'en';
  const isTr = locale === 'tr';

  const labelsByLocale = {
    en: {
      backToHome: 'Back to Solutions and Products',
      ctaTitle: 'Do you want to transform your production processes?',
      ctaSubtitle: 'We plan a traceability solution together, tailored to your operational flow.',
      ctaPrimary: 'Contact Us',
      chipSolution: 'Solutions / Solution Detail',
      chipProduct: 'Products / Product Detail',
      prevLabel: 'Previous solution',
      nextLabel: 'Next solution',
      prevProductLabel: 'Previous product',
      nextProductLabel: 'Next product',
    },
    tr: {
      backToHome: 'Çözümler ve Ürünlere Dön',
      ctaTitle: 'Üretim süreçlerinizi dönüştürmek ister misiniz?',
      ctaSubtitle: 'Operasyonel akışınıza uygun izlenebilirlik çözümünü birlikte planlayalım.',
      ctaPrimary: 'İletişime Geç',
      chipSolution: 'Çözümler / Çözüm Detayı',
      chipProduct: 'Ürünler / Ürün Detayı',
      prevLabel: 'Önceki çözüm',
      nextLabel: 'Sonraki çözüm',
      prevProductLabel: 'Önceki ürün',
      nextProductLabel: 'Sonraki ürün',
    },
    ro: {
      backToHome: 'Înapoi la Soluții și Produse',
      ctaTitle: 'Vrei să transformi procesele tale de producție?',
      ctaSubtitle: 'Planificăm împreună o soluție de trasabilitate adaptată fluxurilor tale operaționale.',
      ctaPrimary: 'Cere Ofertă',
      chipSolution: 'Soluții / Detaliu Soluție',
      chipProduct: 'Produse / Detaliu Produs',
      prevLabel: 'Soluția anterioară',
      nextLabel: 'Soluția următoare',
      prevProductLabel: 'Produsul anterior',
      nextProductLabel: 'Produsul următor',
    },
  };

  let fallbackLocale = 'ro';
  if (isEn) {
    fallbackLocale = 'en';
  } else if (isTr) {
    fallbackLocale = 'tr';
  }
  const labels = labelsByLocale[fallbackLocale];

  return {
    ...labels,
    chip: type === 'product' ? labels.chipProduct : labels.chipSolution,
  };
}

function getItemVisual(item, type) {
  if (item?.image) {
    return {
      src: item.image,
      alt: item.detailTitle || item.title,
    };
  }

  if (type === 'product') {
    return {
      icon: '📦',
      alt: item.detailTitle || item.title,
    };
  }

  const iconByKey = {
    'qr-code': '📱',
    boxes: '📦',
    lightbulb: '💡',
    'map-pin': '📍',
    warehouse: '🏢',
    link: '🔗',
  };

  return {
    icon: iconByKey[item?.icon] || '⚙️',
    alt: item.detailTitle || item.title,
  };
}

function getDetailBaseHref(type) {
  return type === 'product' ? '/catalog/products' : '/catalog/solutions';
}

function getFallbackHighlights(item) {
  const source = item.summary || item.detail || item.description || '';

  return String(source)
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 24)
    .slice(0, 4);
}

function getNavigationLabels(locale, type) {
  const labels = getLocalizedLabels(locale, type);
  if (type === 'product') {
    return { prev: labels.prevProductLabel, next: labels.nextProductLabel };
  }

  return { prev: labels.prevLabel, next: labels.nextLabel };
}

function DetailVisual({ visual, sizeClass = 'h-48 md:h-56' }) {
  return (
    <div className={`${sizeClass} rounded-lg border border-slate-200 bg-white flex items-center justify-center overflow-hidden`}>
      {visual.src ? (
        <img
          src={visual.src}
          alt={visual.alt}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="text-6xl" role="img" aria-label={visual.alt}>
          {visual.icon}
        </span>
      )}
    </div>
  );
}

function HighlightsSection({ items, heading }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="mb-6">
      {heading && (
        <h3 className="mb-3 text-[1.12rem] md:text-[1.22rem] font-semibold text-[#172d56] break-words">
          {heading}
        </h3>
      )}
      <ul className="list-disc pl-7 space-y-4 text-[#355a7d] text-[1.05rem] leading-[1.7] break-words">
        {items.map((bullet) => (
          <li key={bullet} className="marker:text-[#355a7d] break-words">
            {bullet}
          </li>
        ))}
      </ul>
    </section>
  );
}

function DetailSection({ section }) {
  const items = Array.isArray(section?.items) ? section.items.filter(Boolean) : [];
  const paragraph = typeof section?.paragraph === 'string' ? section.paragraph.trim() : '';
  const hasItems = items.length > 0;
  const hasParagraph = paragraph.length > 0;

  if (!hasItems && !hasParagraph) {
    return null;
  }

  return (
    <section className="mb-6">
      {section.heading && (
        <h3 className="mb-3 text-[1.12rem] md:text-[1.22rem] font-semibold text-[#172d56] break-words">
          {section.heading}
        </h3>
      )}
      {hasParagraph && (
        <div className="text-[#355a7d] text-[1.04rem] leading-[1.75] font-normal break-words [&_p]:max-w-none">
          <p>{paragraph}</p>
        </div>
      )}
      {hasItems && (
        <ul className={`list-disc pl-7 space-y-4 text-[#355a7d] text-[1.05rem] leading-[1.7] break-words ${hasParagraph ? 'mt-4' : ''}`}>
          {items.map((bullet) => (
            <li key={bullet} className="marker:text-[#355a7d] break-words">
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function NavSection({ item, detailBaseHref, prevLabel, nextLabel }) {
  if (item.disableNavigation) {
    return <section className="mt-8 border-t border-slate-200 pt-2" />;
  }

  return (
    <section className="clear-both mt-16 border-t border-slate-200 pt-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {item.prevSlug ? (
          <Link
            href={`${detailBaseHref}/${item.prevSlug}`}
            className="group flex flex-col items-start gap-2 rounded-lg border border-slate-200 p-6 bg-gradient-to-br from-white to-slate-50/50 shadow-soft hover:shadow-soft-lg hover:border-accent-blue/40 transition-all duration-300 text-left"
          >
            <span className="flex items-center gap-1 text-xs font-semibold text-gray-text group-hover:text-accent-blue transition-colors">
              <IconArrowLeft size={16} />
              <span>{prevLabel}</span>
            </span>
            <span className="text-base font-bold text-primary-black group-hover:text-secondary-blue transition-colors line-clamp-2">
              {item.prevTitle || prevLabel}
            </span>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}

        {item.nextSlug ? (
          <Link
            href={`${detailBaseHref}/${item.nextSlug}`}
            className="group flex flex-col items-end gap-2 rounded-lg border border-slate-200 p-6 bg-gradient-to-br from-white to-slate-50/50 shadow-soft hover:shadow-soft-lg hover:border-accent-blue/40 transition-all duration-300 text-right sm:col-start-2"
          >
            <span className="flex items-center gap-1 text-xs font-semibold text-gray-text group-hover:text-accent-blue transition-colors">
              <span>{nextLabel}</span>
              <IconArrowRight size={16} />
            </span>
            <span className="text-base font-bold text-primary-black group-hover:text-secondary-blue transition-colors line-clamp-2">
              {item.nextTitle || nextLabel}
            </span>
          </Link>
        ) : (
          <div className="hidden sm:block" />
        )}
      </div>
    </section>
  );
}

function toParagraphs(detailText) {
  if (!detailText) {
    return [];
  }

  return String(detailText)
    .replaceAll('\r\n', '\n')
    .split(/\n{2,}/)
    .map((entry) => entry.replaceAll('\n', ' ').split(' ').filter(Boolean).join(' ').trim())
    .filter(Boolean);
}

function getDetailBodyState(item, paragraphs, detailSections) {
  const preHighlights = Array.isArray(item.detailPreBullets) ? item.detailPreBullets.filter(Boolean) : [];
  const preHighlightsHeading = item.detailPreBulletsHeading || '';
  const highlights = Array.isArray(item.detailBullets) ? item.detailBullets.filter(Boolean) : [];
  const fallbackHighlights = getFallbackHighlights(item);
  const shouldUseDefaultHighlights = !item.disableBullets && detailSections.length === 0;

  let renderHighlights = [];
  if (shouldUseDefaultHighlights) {
    renderHighlights = highlights.length > 0 ? highlights : fallbackHighlights;
  }

  const lastParagraph = paragraphs.at(-1) || '';
  const hasListHeading = renderHighlights.length > 0 && !item.detailBulletsHeading && lastParagraph.trim().endsWith(':');
  const listHeading = item.detailBulletsHeading || (hasListHeading ? lastParagraph : '');
  const contentParagraphs = hasListHeading ? paragraphs.slice(0, -1) : paragraphs;

  return {
    preHighlights,
    preHighlightsHeading,
    renderHighlights,
    listHeading,
    contentParagraphs,
  };
}

export default function CatalogDetailPage({ item, type, locale }) {
  const labels = getLocalizedLabels(locale, type);
  const paragraphs = toParagraphs(item.detail || item.description);
  const detailSections = Array.isArray(item.detailSections)
    ? item.detailSections.filter((section) => {
      if (!section) {
        return false;
      }
      const items = Array.isArray(section.items) ? section.items.filter(Boolean) : [];
      const paragraph = typeof section.paragraph === 'string' ? section.paragraph.trim() : '';

      return items.length > 0 || paragraph.length > 0;
    })
    : [];
  const {
    preHighlights,
    preHighlightsHeading,
    renderHighlights,
    listHeading,
    contentParagraphs,
  } = getDetailBodyState(item, paragraphs, detailSections);
  const homeHref = type === 'product' ? '/?tab=products#traceability-solutions' : '/?tab=solutions#traceability-solutions';
  const visual = getItemVisual(item, type);
  const heroGridClass = item.largeVisual ? 'md:grid-cols-[minmax(0,1fr)_620px]' : 'md:grid-cols-[minmax(0,1fr)_500px]';
  const heroImageSizeClass = item.largeVisual ? 'h-64 md:h-80' : 'h-56 md:h-64';
  const headingOffsetClass = item.shiftHeadingRight ? 'md:pl-8' : '';
  const alignHeroCenter = item.alignHeroCenter !== false;
  const detailBaseHref = getDetailBaseHref(type);
  const navLabels = getNavigationLabels(locale, type);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef4f9] via-[#f4f7fb] to-[#f7f9fc] pt-24 pb-16">
      <Container size="xl">
        <Link href={homeHref} className="inline-flex items-center gap-2 text-secondary-blue hover:text-accent-blue transition-colors mb-8 text-sm font-semibold">
          <IconArrowLeft /> {labels.backToHome}
        </Link>

        <article className="mx-auto w-full rounded-lg border border-slate-200 bg-[#f9fbfd] p-6 md:p-10 shadow-soft">
          <header className={`mb-6 ${item.hideHeaderDivider ? '' : 'border-b border-slate-200 pb-4'}`}>
            <div className={`grid grid-cols-1 gap-8 ${heroGridClass} md:gap-10 ${alignHeroCenter ? 'items-center' : 'items-start'}`}>
              <div className={`${headingOffsetClass} text-center`}>
                {item.showChip && (
                  <span className="inline-flex items-center rounded-md border border-slate-300 bg-[#eef2f6] px-3 py-1 text-xs font-semibold text-[#5c6b83]">
                    {labels.chip}
                  </span>
                )}
                <h1 className={`${item.showChip ? 'mt-8 md:mt-10' : 'mt-0'} text-4xl md:text-5xl font-semibold text-[#0d2a60] tracking-[-0.02em] break-words`}>{item.detailTitle || item.title}</h1>
              </div>

              <DetailVisual visual={visual} sizeClass={heroImageSizeClass} />
            </div>
          </header>

          <section className="mb-6">
            <div className="text-[#355a7d] text-[1.04rem] leading-[1.75] font-normal break-words [&_p]:max-w-none space-y-4">
              {contentParagraphs.length > 0 ? (
                contentParagraphs.map((para) => (
                  <p key={para.slice(0, 32)}>{para}</p>
                ))
              ) : (
                <p>{item.summary || item.description}</p>
              )}
            </div>
          </section>

          <HighlightsSection items={preHighlights} heading={preHighlightsHeading} />
          <HighlightsSection items={renderHighlights} heading={listHeading} />
          {detailSections.map((section) => (
            <DetailSection
              key={section.heading || section.paragraph || (Array.isArray(section.items) ? section.items.join('|') : 'detail-section')}
              section={section}
            />
          ))}
          <NavSection item={item} detailBaseHref={detailBaseHref} prevLabel={navLabels.prev} nextLabel={navLabels.next} />
        </article>

        <section className="mx-auto mt-14 w-full text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0d2a60] tracking-[-0.02em]">{labels.ctaTitle}</h2>
            <p className="mt-5 text-[#4d6687] text-base md:text-lg max-w-3xl mx-auto">{labels.ctaSubtitle}</p>
            <div className="mt-8 flex justify-center">
              <Button as={Link} href="/contact" variant="solid" className="bg-secondary-blue hover:bg-accent-blue text-white px-10 py-3 rounded-md">
                {labels.ctaPrimary}
              </Button>
            </div>
        </section>
      </Container>
    </div>
  );
}
