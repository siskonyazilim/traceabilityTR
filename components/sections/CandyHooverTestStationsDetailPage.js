'use client';

import PmiBarcodeGateDetailPage from './PmiBarcodeGateDetailPage';

/* eslint-disable react/prop-types */

export default function CandyHooverTestStationsDetailPage(props) {
  return (
    <PmiBarcodeGateDetailPage
      {...props}
      fixedYear="2017"
      currentSlug="candy-hoover-test-data-cooker-lines-traceability"
      logoSrc="/Logos/Candy.svg"
      logoAlt="Candy Hoover Logo"
    />
  );
}
