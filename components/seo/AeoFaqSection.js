import Container from '../ui/Container';

export default function AeoFaqSection({ bundle }) {
  if (!bundle || !Array.isArray(bundle.items) || bundle.items.length === 0) {
    return null;
  }

  return (
    <section className="mt-14 border-t border-slate-200 pt-10" aria-labelledby="aeo-faq-title">
      <Container size="xl">
        <div className="mx-auto max-w-4xl">
          <h2 id="aeo-faq-title" className="text-2xl md:text-3xl font-semibold text-primary-black mb-4">
            {bundle.title}
          </h2>
          <div className="space-y-6">
            {bundle.items.map((item, index) => (
              <article key={`${item.question}-${index}`} className="rounded-md border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-primary-black mb-2">{item.question}</h3>
                <p className="text-gray-text leading-7">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
