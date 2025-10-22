"use client";

import CertificateCard from "./CertificateCard";
import CompactCertificateBadge from "./CompactCertificateBadge";
import MinimalCertificateItem from "./MinimalCertificateItem";

export default function CertificateGrid({
  certificates,
  featuredOnly = false,
  showFullDescription = false,
  compact = false,
  minimal = false
}) {
  // Filter for featured certificates if specified
  const displayCertificates = featuredOnly
    ? certificates.filter(cert => cert.featured)
    : certificates;

  // Minimal list layout
  if (minimal) {
    const featuredCerts = certificates.filter(cert => cert.featured);
    const nonFeaturedCerts = certificates.filter(cert => !cert.featured);
    const allCerts = [...featuredCerts, ...nonFeaturedCerts];
    const displayCerts = featuredOnly ? featuredCerts : allCerts;

    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-background/50 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden shadow-lg">
          {displayCerts.map((cert, index) => (
            <MinimalCertificateItem
              key={cert.id}
              cert={cert}
              featured={cert.featured}
            />
          ))}
        </div>

        {/* View All Link */}
        {featuredOnly && nonFeaturedCerts.length > 0 && (
          <div className="text-center mt-6">
            <a
              href="/certificates"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-hover transition-colors duration-200 group"
            >
              <span>View all {allCerts.length} certifications</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    );
  }

  // Compact badge layout
  if (compact) {
    const featuredCerts = displayCertificates.filter(cert => cert.featured);
    const nonFeaturedCerts = certificates.filter(cert => !cert.featured);

    return (
      <div className="space-y-8">
        {/* Featured Certificates */}
        <div className="text-center">
          <h3 className="text-sm font-semibold text-foreground/60 mb-4 uppercase tracking-wider">
            Featured Certifications
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {featuredCerts.map((cert) => (
              <CompactCertificateBadge
                key={cert.id}
                cert={cert}
                featured={true}
              />
            ))}
          </div>
        </div>

        {/* All Certificates Count Badge */}
        {nonFeaturedCerts.length > 0 && (
          <div className="text-center">
            <a
              href="/certificates"
              className="inline-flex items-center gap-2 px-5 py-3 bg-background/80 hover:bg-background border border-border/50 hover:border-primary/30 rounded-xl transition-all duration-300 hover:shadow-md group"
            >
              <span className="text-sm font-medium text-foreground/70 group-hover:text-primary">
                +{nonFeaturedCerts.length} more certifications
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 text-foreground/70 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    );
  }

  // Default grid layout
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
