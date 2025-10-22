"use client";

import { useState } from "react";
import Image from "next/image";

export default function CompactCertificateBadge({ cert, featured = false }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Compact Badge */}
      <div
        className={`group relative px-4 py-3 rounded-xl border transition-all duration-300 cursor-pointer ${
          featured
            ? "bg-primary/10 border-primary/30 hover:bg-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
            : "bg-background/80 border-border/50 hover:bg-background hover:border-primary/30 hover:shadow-md"
        }`}
      >
        <div className="flex items-center gap-3">
          {/* Certificate Icon/Image Preview */}
          <div className={`relative rounded-lg overflow-hidden flex-shrink-0 ${
            featured ? "w-12 h-12" : "w-10 h-10"
          }`}>
            {cert.image ? (
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover"
                sizes="48px"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Certificate Info */}
          <div className="flex-1 min-w-0">
            <h4 className={`font-semibold truncate ${
              featured ? "text-base" : "text-sm"
            }`}>
              {cert.title}
            </h4>
            <p className="text-xs text-foreground/60 truncate">
              {cert.issuer}
            </p>
          </div>

          {/* Verified Badge */}
          <div className="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`text-primary ${featured ? "w-5 h-5" : "w-4 h-4"}`}
            >
              <path
                fillRule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Hover Popup - Detailed Info */}
      {isHovered && (
        <div className="absolute z-50 top-full left-0 mt-2 w-96 p-6 bg-background/95 backdrop-blur-md border border-primary/30 rounded-2xl shadow-2xl shadow-primary/20 animate-[fadeInUp_0.2s_ease-out]">
          {/* Certificate Image */}
          <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
            {cert.image ? (
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-contain"
                sizes="384px"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>
            )}

            {/* Category Badge */}
            <div className="absolute bottom-2 right-2">
              <div className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                {cert.category}
              </div>
            </div>
          </div>

          {/* Title and Info */}
          <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
          <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
            <span className="font-medium">{cert.issuer}</span>
            <span>•</span>
            <span>{cert.date}</span>
          </div>

          {/* Description */}
          <p className="text-sm text-foreground/70 mb-4">{cert.description}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {cert.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* View Credential Button */}
          {cert.credentialUrl && (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 text-primary text-sm font-medium rounded-lg hover:bg-primary/30 hover:border-primary/50 transition-all duration-200 group/btn"
              onClick={(e) => e.stopPropagation()}
            >
              <span>View Credential</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          )}

          {/* Arrow pointing to badge */}
          <div className="absolute -top-2 left-6 w-4 h-4 bg-background/95 border-l border-t border-primary/30 transform rotate-45" />
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
