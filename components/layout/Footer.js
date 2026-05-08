import Link from 'next/link';
import { FiLinkedin, FiTwitter, FiInstagram, FiFacebook } from 'react-icons/fi';

export const Footer = () => {
  return (
    <footer className="bg-dark-bg text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-accent-blue mb-3">TRACEABILITY</h3>
            <p className="text-gray-text text-sm mb-4 leading-relaxed">
              Soluții innovative de trasabilitate pentru fabrici inteligente și producție sustenabilă.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-text hover:text-accent-blue transition-colors">
                <FiLinkedin size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-text hover:text-accent-blue transition-colors">
                <FiFacebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-text hover:text-accent-blue transition-colors">
                <FiTwitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-text hover:text-accent-blue transition-colors">
                <FiInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Navigare</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-text hover:text-accent-blue transition-colors text-sm">
                  Pagina Principală
                </Link>
              </li>
              <li>
                <Link href="#traceability-solutions" className="text-gray-text hover:text-accent-blue transition-colors text-sm">
                  Soluții
                </Link>
              </li>
              <li>
                <Link href="/proiecte-de-referinta" className="text-gray-text hover:text-accent-blue transition-colors text-sm">
                  Proiecte
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-text hover:text-accent-blue transition-colors text-sm">
                  Știri
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-text hover:text-accent-blue transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+902322450076" className="text-gray-text hover:text-accent-blue transition-colors">
                  <span className="font-semibold">Telefon:</span> +90 232 245 00 76
                </a>
              </li>
              <li>
                <a href="mailto:info@traceability.ro" className="text-gray-text hover:text-accent-blue transition-colors">
                  <span className="font-semibold">Email:</span> info@traceability.ro
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-text opacity-20 my-6"></div>

        {/* Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-gray-text">
          <div>
            <p>© 2025 Traceability. Toate drepturile rezervate.</p>
          </div>
          <div className="flex gap-4 justify-center md:justify-end">
            <Link href="#" className="hover:text-accent-blue transition-colors">
              Confidențialitate
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-accent-blue transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
