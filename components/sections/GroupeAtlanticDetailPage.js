'use client';

import PmiBarcodeGateDetailPage from './PmiBarcodeGateDetailPage';

/* eslint-disable react/prop-types */

export default function GroupeAtlanticDetailPage(props) {
  return (
    <PmiBarcodeGateDetailPage
      {...props}
      fixedYear="2018"
      currentSlug="groupe-atlantic-busbar-traceability"
      logoSrc="/Logos/groupe-atlantic-logo-vector.svg"
      logoAlt="Groupe Atlantic Logo"
    />
  );
}
