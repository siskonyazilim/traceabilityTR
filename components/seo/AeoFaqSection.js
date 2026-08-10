export default function AeoFaqSection({ bundle }) {
  if (!bundle || !Array.isArray(bundle.items) || bundle.items.length === 0) {
    return null;
  }

  // FAQ content stays available for schema generation in page files; UI is intentionally hidden.
  return null;
}
