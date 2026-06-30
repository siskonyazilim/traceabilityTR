import trNarratives from '../../data/i18n/references/tr.json';
import enNarratives from '../../data/i18n/references/en.json';
import roNarratives from '../../data/i18n/references/ro.json';

export const referenceNarratives = {
  tr: trNarratives,
  en: enNarratives,
  ro: roNarratives,
};

/**
 * Returns the narrative paragraphs array for a given locale and project slug.
 * Falls back to Turkish, then to an empty array.
 */
export function getReferenceNarrative(locale, slug) {
  return (
    referenceNarratives[locale]?.[slug] ||
    referenceNarratives.tr?.[slug] ||
    []
  );
}
