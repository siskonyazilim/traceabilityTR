'use client';

import PmiBarcodeGateDetailPage from './PmiBarcodeGateDetailPage';

/* eslint-disable react/prop-types */

export default function PmiEmbosserDetailPage(props) {
  return (
    <PmiBarcodeGateDetailPage
      {...props}
      fixedYear="2018"
      currentSlug="pmi-embosser-rfid"
      logoSrc="/Logos/philip-morris-international-pmi-seeklogo.png"
      logoAlt="PMI Logo"
    />
  );
}
