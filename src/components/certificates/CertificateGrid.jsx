"use client";

import CertificateCard from "./CertificateCard";

export default function CertificateGrid({ certificates, featuredOnly = false, showFullDescription = false }) {
  // Filter for featured certificates if specified
  const displayCertificates = featuredOnly
    ? certificates.filter(cert => cert.featured)
    : certificates;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {displayCertificates.map((cert, index) => (
        <CertificateCard
          key={cert.id}
          cert={cert}
          index={index}
          showFullDescription={showFullDescription}
        />
      ))}
    </div>
  );
}
