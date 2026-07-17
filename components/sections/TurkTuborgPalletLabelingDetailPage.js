'use client';

import PmiBarcodeGateDetailPage from './PmiBarcodeGateDetailPage';

/* eslint-disable react/prop-types */

export default function TurkTuborgPalletLabelingDetailPage(props) {
  return (
    <PmiBarcodeGateDetailPage
      {...props}
      fixedYear="2017"
      currentSlug="turk-tuborg-automatic-pallet-labeling-traceability"
      logoSrc="/Logos/turk_tuborg.png"
      logoAlt="Turk Tuborg Logo"
    />
  );
}
