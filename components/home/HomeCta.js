import Link from 'next/link';
import Container from '../ui/Container';
import Button from '../ui/Button';

export const HomeCta = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-black mb-4">
            Vrei să transformi procesele tale de producție?
          </h2>
          <p className="text-gray-text text-lg mb-8 max-w-2xl mx-auto">
            Planificăm împreună o soluție de trasabilitate adaptată fluxurilor tale operaționale.
          </p>
          <div className="flex gap-5 justify-center flex-wrap">
            <Link href="/contact">
              <Button variant="solid" size="lg">
                Cere Ofertă
              </Button>
            </Link>
            <Link href="/proiecte-de-referinta">
              <Button variant="outline" size="lg">
                Vezi Referințele
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeCta;