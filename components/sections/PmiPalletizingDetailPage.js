'use client';

import PmiBarcodeGateDetailPage from './PmiBarcodeGateDetailPage';

/* eslint-disable react/prop-types */

export default function PmiPalletizingDetailPage(props) {
  return (
    <PmiBarcodeGateDetailPage
      {...props}
      fixedYear="2019"
      currentSlug="pmi-palletizing-automation-automatic-labeling"
      logoSrc="/Logos/philip-morris-international-pmi-seeklogo.png"
      logoAlt="PMI Logo"
    />
  );
}
