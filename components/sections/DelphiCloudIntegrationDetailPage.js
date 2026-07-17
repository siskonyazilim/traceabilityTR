'use client';

import PmiBarcodeGateDetailPage from './PmiBarcodeGateDetailPage';

/* eslint-disable react/prop-types */

export default function DelphiCloudIntegrationDetailPage(props) {
  return (
    <PmiBarcodeGateDetailPage
      {...props}
      fixedYear="2018"
      currentSlug="delphi-cloud-traceability-data-integration"
      logoSrc="/Logos/delphi.svg"
      logoAlt="Delphi Technologies Logo"
    />
  );
}
