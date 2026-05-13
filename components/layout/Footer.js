import Link from 'next/link';
import { FiLinkedin, FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi';

export const Footer = () => {
  return (
    <footer className="bg-[radial-gradient(circle_at_top_right,_rgba(0,181,247,0.14)_0%,_rgba(10,10,43,0)_30%),linear-gradient(180deg,_#0a0a2b_0%,_#070720_100%)] text-white pt-14 pb-8 border-t border-slate-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Link href="/" className="font-poppins text-2xl font-extrabold tracking-tight text-white transition-all duration-300 hover:text-accent-blue">
                Traceability
              </Link>
            </div>
            <p className="text-gray-light text-sm mb-5 leading-relaxed max-w-sm">
              Soluții innovative de trasabilitate pentru fabrici inteligente și producție sustenabilă.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full border border-slate-blue/40 text-gray-light hover:text-accent-blue hover:border-accent-blue hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                <FiLinkedin size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full border border-slate-blue/40 text-gray-light hover:text-accent-blue hover:border-accent-blue hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                <FiFacebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full border border-slate-blue/40 text-gray-light hover:text-accent-blue hover:border-accent-blue hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                <FiTwitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full border border-slate-blue/40 text-gray-light hover:text-accent-blue hover:border-accent-blue hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                <FiInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Navigare</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-light hover:text-accent-blue transition-colors text-sm">
                  Pagina Principală
                </Link>
              </li>
              <li>
                <Link href="/#traceability-solutions" className="text-gray-light hover:text-accent-blue transition-colors text-sm">
                  Soluții
                </Link>
              </li>
              <li>
                <Link href="/proiecte-de-referinta" className="text-gray-light hover:text-accent-blue transition-colors text-sm">
                  Proiecte
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-light hover:text-accent-blue transition-colors text-sm">
                  Știri
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-light hover:text-accent-blue transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+902322450076" className="text-gray-light hover:text-accent-blue transition-colors">
                  <span className="font-semibold">Telefon:</span> +90 232 245 00 76
                </a>
              </li>
              <li>
                <a href="mailto:info@traceability.ro" className="text-gray-light hover:text-accent-blue transition-colors">
                  <span className="font-semibold">Email:</span> info@traceability.ro
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-blue/35 my-6"></div>

        {/* Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-light">
          <div>
            <p>© 2026 Traceability. Toate drepturile rezervate.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
