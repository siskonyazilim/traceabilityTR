'use client';

import PmiBarcodeGateDetailPage from './PmiBarcodeGateDetailPage';

/* eslint-disable react/prop-types */

export default function MeyBandrolControlDetailPage(props) {
  return (
    <PmiBarcodeGateDetailPage
      {...props}
      fixedYear="2017"
      currentSlug="mey-icki-bandrol-control-system"
      logoSrc="/Logos/mey-diageo.svg"
      logoAlt="Mey Alkollu Ickiler Logo"
    />
  );
}
