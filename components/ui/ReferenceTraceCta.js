/* eslint-disable react/prop-types */

/**
 * RO sayfalarında referans proje detaylarında gösterilen koyu OnSuite Trace CTA kutusu.
 * Sadece locale === 'ro' olduğunda render edilir.
 */
export default function ReferenceTraceCta({ locale }) {
  if (locale !== 'ro') return null;

  return (
    <div className="mx-auto mt-12 w-full max-w-none rounded-xl bg-gradient-to-br from-primary-black to-dark-bg p-6 text-white shadow-xl border border-slate-blue/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,181,247,0.15),transparent_48%)] pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-accent-blue/10 rounded-md blur-3xl pointer-events-none" />
      <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-accent-blue px-2.5 py-1 bg-accent-blue/10 rounded-md border border-accent-blue/20">
              OnSuite Trace
            </span>
          </div>
          <h2 className="text-[20px] font-medium tracking-tight">
            Descoperiți Soluția Noastră de Trasabilitate End-to-End
          </h2>
          <p className="text-gray-light/85 text-sm md:text-base leading-relaxed">
            OnSuite Trace vă permite să gestionați toate procesele de producție dintr-o singură platformă.
            Oferim trasabilitate digitală completă pentru afacerea dumneavoastră sub deviza &quot;Control Continuu, Zero Erori&quot;.
          </p>
        </div>
        <div className="flex-shrink-0">
          <a
            href="https://onsuite.ro/modules/trace"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary-blue text-white hover:bg-accent-blue font-medium text-sm rounded-md px-6 py-3 whitespace-nowrap shadow-md hover:shadow-lg transition-all duration-300 w-full min-h-[44px] md:w-auto justify-center"
          >
            <span>Descoperă OnSuite Trace</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
