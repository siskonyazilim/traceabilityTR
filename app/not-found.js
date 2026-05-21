import Link from 'next/link';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 flex items-center">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-accent-blue font-semibold tracking-wide mb-3">404</p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-black mb-4">
            Pagina nu a fost găsită
          </h1>
          <p className="text-gray-text text-lg mb-8">
            Conținutul pentru această adresă nu este disponibil momentan.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button as={Link} href="/" variant="solid" size="lg">Înapoi la Acasă</Button>
            <Button as={Link} href="/contact" variant="outline" size="lg">Contact</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
