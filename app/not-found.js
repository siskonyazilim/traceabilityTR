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
            Pagina nu a fost gasita
          </h1>
          <p className="text-gray-text text-lg mb-8">
            Continutul pentru aceasta adresa nu este disponibil momentan.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/">
              <Button variant="solid" size="lg">Inapoi la Acasa</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">Contact</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
